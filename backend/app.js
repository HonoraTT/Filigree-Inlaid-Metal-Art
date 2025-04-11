const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cartRoutes');

const app = express();

// 中间件
app.use(cors({
  origin: 'http://localhost:5173', // 前端开发服务器地址
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: false
}));

app.use(bodyParser.json()); // 解析 JSON 请求体
app.use(express.json());

// 路由
app.use('/api/auth', authRoutes); // 用户相关路由
app.use('/api/user', userRoutes); // 用户信息相关路由
app.use('/api/cart', cartRoutes); // 购物车相关路由

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: '服务器内部错误',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 处理
app.use((req, res) => {
  res.status(404).json({ message: '未找到请求的资源' });
});

// 连接 MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/filigree', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('数据库连接成功'))
.catch((err) => console.error('数据库连接失败', err));

module.exports = app;

