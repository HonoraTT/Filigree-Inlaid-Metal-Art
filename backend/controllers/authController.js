const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// 注册
exports.register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // 至少填一个身份识别字段
    if (!username && !email && !phone) {
      return res.status(400).json({ error: '请填写用户名、邮箱或手机号其中之一' });
    }

    // 查重
    const existingUser = await User.findOne({
      $or: [
        { username: username || null },
        { email: email || null },
        { phone: phone || null }
      ]
    });

    if (existingUser) {
      return res.status(409).json({ error: '用户名 / 邮箱 / 手机号已存在' });
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

    // 返回 token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
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

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '登录失败，请稍后重试' });
  }
};
