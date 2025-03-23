//------------ 处理用户信息路由 ------------//

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// 获取用户信息
router.get('/profile', userController.getProfile);

module.exports = router;
