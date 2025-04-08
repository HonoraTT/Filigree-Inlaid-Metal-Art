const Cart = require('../models/Cart');
const Product = require('../models/Product');

// 获取用户的购物车
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id })
      .populate('items.productId', 'name price image');
    
    if (!cart) {
      return res.status(404).json({ message: '购物车为空' });
    }
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: '获取购物车失败', error: error.message });
  }
};

// 添加商品到购物车
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    // 检查商品是否存在
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: '商品不存在' });
    }
    
    let cart = await Cart.findOne({ userId: req.user._id });
    
    if (!cart) {
      // 创建新购物车
      cart = new Cart({
        userId: req.user._id,
        items: [{
          productId,
          quantity,
          price: product.price
        }]
      });
    } else {
      // 检查商品是否已在购物车中
      const existingItem = cart.items.find(item => 
        item.productId.toString() === productId
      );
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({
          productId,
          quantity,
          price: product.price
        });
      }
    }
    
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: '添加商品失败', error: error.message });
  }
};

// 更新购物车商品数量
exports.updateCartItem = async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: '购物车不存在' });
    }
    
    const item = cart.items.id(itemId);
    if (!item) {
      return res.status(404).json({ message: '商品不存在' });
    }
    
    item.quantity = quantity;
    await cart.save();
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: '更新购物车失败', error: error.message });
  }
};

// 删除购物车商品
exports.removeFromCart = async (req, res) => {
  try {
    const { itemId } = req.params;
    
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: '购物车不存在' });
    }
    
    cart.items = cart.items.filter(item => item._id.toString() !== itemId);
    await cart.save();
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: '删除商品失败', error: error.message });
  }
};

// 清空购物车
exports.clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      return res.status(404).json({ message: '购物车不存在' });
    }
    
    cart.items = [];
    await cart.save();
    
    res.json({ message: '购物车已清空' });
  } catch (error) {
    res.status(500).json({ message: '清空购物车失败', error: error.message });
  }
};