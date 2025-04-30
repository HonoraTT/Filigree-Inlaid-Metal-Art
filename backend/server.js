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
const PORT = process.env.PORT || 8000;

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
  origin: 'http://localhost:5173',
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
const subscribeRoutes = require('./src/routes/subscribe');

// 添加路由调试信息
console.log('正在加载路由...');
console.log('Auth Routes:', authRoutes);
console.log('User Routes:', userRoutes);
console.log('Subscribe Routes:', subscribeRoutes);

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', subscribeRoutes);

// 添加路由调试中间件
app.use((req, res, next) => {
  console.log(`收到请求: ${req.method} ${req.path}`);
  next();
});

// ======================
// 错误处理中间件
// ======================
// 404处理
app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Resource not found'
  });
});

// 全局错误捕获
app.use((err, req, res, next) => {
  console.error('服务器错误:', err);
  res.status(500).json({
    status: 'error',
    message: '服务器内部错误'
  });
});

// ======================
// 启动服务器
// ======================
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});