// ------------ JWT 身份验证中间件 ------------ //

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: '未提供有效的授权 token（需要 Bearer）' });
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id; // 提取 user ID，方便后续查询
        next();
    } catch (err) {
        return res.status(401).json({ message: '无效的 token，请重新登录' });
    }
};

module.exports = authMiddleware;
