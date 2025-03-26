//------------ 处理获取用户信息逻辑 ------------//

const User = require('../models/User');

// 获取用户信息（仅限登录用户）
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: '用户未找到' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: '服务器错误' });
    }
};
