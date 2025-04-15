require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const connectDB = require('./config/db');

// 初始化 Express 应用
const app = express();
const PORT = process.env.PORT || 5000;

// ======================
// 安全中间件
// ======================
app.use(helmet()); // 安全HTTP头
app.use(mongoSanitize()); // 防止NoSQL注入
app.use(hpp()); // 防止HTTP参数污染

// 生产环境启用限流
if (process.env.NODE_ENV === 'production') {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15分钟
    max: 100, // 每个IP限制100次请求
    standardHeaders: true,
    legacyHeaders: false,
    message: 'Too many requests from this IP, please try again later'
  });
  app.use(limiter);
}

// ======================
// 基础中间件
// ======================
app.use(express.json({ limit: '10kb' })); // 请求体大小限制
app.use(express.urlencoded({ extended: true }));

// CORS配置
app.use(cors({
  origin: [
    process.env.CLIENT_URL, // 前端生产环境域名
    'http://localhost:3000' // 本地开发
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// ======================
// 数据库连接
// ======================
connectDB();

// 数据库事件监听
mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB connected to:', mongoose.connection.host);
});

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
  if (process.env.NODE_ENV === 'production') {
    setTimeout(() => connectDB(), 5000); // 5秒后重试连接
  }
});

// ======================
// 路由配置
// ======================
// 健康检查路由（必须要有）
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    dbStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// 根路由（用于基础验证）
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'running',
    service: 'Backend API',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.get('/favicon.ico', (req, res) => res.status(204).end());

// 业务路由
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// ======================
// 错误处理中间件（增强版）
// ======================
// 404处理
app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Resource not found',
    requestId: req.id
  });
});

// 全局错误捕获
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const isProduction = process.env.NODE_ENV === 'production';
  
  console.error('🔥 Server Error:', {
    message: err.message,
    stack: isProduction ? undefined : err.stack,
    path: req.path,
    method: req.method,
    timestamp: new Date().toISOString()
  });

  res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    message: isProduction && statusCode === 500 
      ? 'Internal Server Error' 
      : err.message,
    ...(!isProduction && { stack: err.stack }) // 开发环境显示错误堆栈
  });
});

// ======================
// 启动服务器
// ======================
const server = app.listen(PORT, () => {
  console.log(`
  ==================================
  🚀 Server running in ${process.env.NODE_ENV || 'development'} mode
  📡 Listening on port: ${PORT}
  🗄️  Database: ${mongoose.connection.host || 'local'}
  ==================================
  `);
});

// 优雅关闭处理
process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM. Shutting down gracefully...');
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log('🔌 MongoDB connection closed');
      process.exit(0);
    });
  });
});

// 未捕获的Promise异常处理
process.on('unhandledRejection', (err) => {
  console.error('💥 Unhandled Rejection:', err);
  server.close(() => process.exit(1));
});