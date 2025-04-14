require('dotenv').config();
const express = require('express');
const cors = require('cors');
const subscribeRoutes = require('./routes/subscribe');

const app = express();

// 中间件
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// 路由
app.use('/api', subscribeRoutes);

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: '服务器内部错误' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
}); 