const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// Middleware
app.use(express.json()); // 解析请求体中的 JSON 数据

// 路由
app.use('/api/auth', authRoutes); // 用户相关路由
app.use('/api/user', userRoutes); // 用户信息相关路由

module.exports = app;

//-------------- 连接到MongoDB -----------------//
const mongoose = require('mongoose');

// 连接 MongoDB
mongoose.connect('mongodb://localhost:27017/filigree', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('数据库连接成功'))
.catch((err) => console.error('数据库连接失败', err));

