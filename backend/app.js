const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// Middleware
app.use(express.json()); // �����������е� JSON ����

// ·��
app.use('/api/auth', authRoutes); // �û����·��
app.use('/api/user', userRoutes); // �û���Ϣ���·��

module.exports = app;

//-------------- ���ӵ�MongoDB -----------------//
const mongoose = require('mongoose');

// ���� MongoDB
mongoose.connect('mongodb://localhost:27017/filigree', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('���ݿ����ӳɹ�'))
.catch((err) => console.error('���ݿ�����ʧ��', err));

