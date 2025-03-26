const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/User'); // 添加User模型导入
const bcrypt = require('bcryptjs'); // 密码加密

// 获取用户信息
router.get('/profile', userController.getProfile);

// 注册用户 API
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // 验证输入
        if (!username || !email || !password) {
            return res.status(400).json({ message: "请提供所有必填字�?" });
        }

        // 检查用户是否已存在
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "用户已存�?" });
        }

        // 加密密码
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 创建新用�?
        const newUser = new User({ 
            username, 
            email, 
            password: hashedPassword // 存储加密后的密码
        });

        await newUser.save();

        // 不返回密�?
        const userResponse = {
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            createdAt: newUser.createdAt
        };

        res.status(201).json({ 
            message: "注册成功", 
            user: userResponse 
        });
    } catch (error) {
        console.error("注册错误:", error);
        res.status(500).json({ 
            message: "服务器错�?",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

module.exports = router;