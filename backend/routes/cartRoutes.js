const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const auth = require('../middlewares/auth');

// 所有购物车路由都需要用户认证
router.use(auth);

// 获取购物车
router.get('/', cartController.getCart);

// 添加商品到购物车
router.post('/add', cartController.addToCart);

// 更新购物车商品数量
router.put('/update', cartController.updateCartItem);

// 从购物车中删除商品
router.delete('/remove/:itemId', cartController.removeFromCart);

// 清空购物车
router.delete('/clear', cartController.clearCart);

module.exports = router; 