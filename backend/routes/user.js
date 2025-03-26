const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/User'); // ���Userģ�͵���
const bcrypt = require('bcryptjs'); // �������

// ��ȡ�û���Ϣ
router.get('/profile', userController.getProfile);

// ע���û� API
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // ��֤����
        if (!username || !email || !password) {
            return res.status(400).json({ message: "���ṩ���б����ֶ�" });
        }

        // ����û��Ƿ��Ѵ���
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "�û��Ѵ���" });
        }

        // ��������
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // �������û�
        const newUser = new User({ 
            username, 
            email, 
            password: hashedPassword // �洢���ܺ������
        });

        await newUser.save();

        // ����������
        const userResponse = {
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            createdAt: newUser.createdAt
        };

        res.status(201).json({ 
            message: "ע��ɹ�", 
            user: userResponse 
        });
    } catch (error) {
        console.error("ע�����:", error);
        res.status(500).json({ 
            message: "����������",
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

module.exports = router;