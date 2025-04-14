const express = require('express');
const cors = require('cors');
const subscribeRouter = require('./routes/subscribe');

const app = express();

// 中间件
app.use(cors()); // 允许所有来源
app.use(express.json());

// 测试路由
app.get('/test', (req, res) => {
  res.json({ message: '服务器正常运行' });
});

// 路由
app.use('/api/subscribe', subscribeRouter);

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false,
    message: '服务器内部错误' 
  });
});

module.exports = app;