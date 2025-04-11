const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// 注册
exports.register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // 验证密码长度
    if (!password || password.length < 6) {
      return res.status(400).json({ error: '密码长度至少为6位' });
    }

    // 验证用户名
    if (!username) {
      return res.status(400).json({ error: '请填写用户名' });
    }

    // 验证邮箱格式（如果提供）
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: '邮箱格式不正确' });
    }

    // 验证手机号格式（如果提供）
    if (phone && !/^1[3-9]\d{9}$/.test(phone)) {
      return res.status(400).json({ error: '手机号格式不正确' });
    }

    // 查重
    const existingUser = await User.findOne({
      $or: [
        { username },
        ...(email ? [{ email }] : []),
        ...(phone ? [{ phone }] : [])
      ]
    });

    if (existingUser) {
      let errorMessage = '用户名已存在';
      if (email && existingUser.email === email) {
        errorMessage = '邮箱已存在';
      } else if (phone && existingUser.phone === phone) {
        errorMessage = '手机号已存在';
      }
      return res.status(409).json({ error: errorMessage });
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(password, 10);

    // 创建用户
    const user = new User({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    await user.save();

    // 返回 token 和用户信息
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    // 不返回密码
    const userResponse = {
      _id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      createdAt: user.createdAt
    };

    res.status(201).json({ 
      token,
      user: userResponse
    });
  } catch (error) {
    console.error('注册错误:', error);
    res.status(500).json({ error: '注册失败，请稍后重试' });
  }
};

// 登录
exports.login = async (req, res) => {
  try {
    const { username, email, phone, password, rememberMe } = req.body;

    // 查找用户
    const user = await User.findOne({
      $or: [
        { username: username || null },
        { email: email || null },
        { phone: phone || null }
      ]
    });

    if (!user) {
      return res.status(404).json({ error: '用户未找到' });
    }

    // 验证密码
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: '密码错误' });
    }

    // 签发 token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: rememberMe ? '7d' : '1h',
    });

    // 返回用户信息（不包含密码）
    const userResponse = {
      _id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      createdAt: user.createdAt
    };

    res.json({ 
      token,
      user: userResponse
    });
  } catch (error) {
    console.error('登录错误:', error);
    res.status(500).json({ error: '登录失败，请稍后重试' });
  }
};
