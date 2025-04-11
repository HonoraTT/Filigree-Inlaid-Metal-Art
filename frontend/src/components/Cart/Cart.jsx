import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [note, setNote] = useState('');

  // 从 localStorage 加载购物车数据
  useEffect(() => {
    if (user) {
      // 已登录用户：从用户特定的购物车加载数据
      const cartKey = `cart_${user.id}`;
      const savedCart = localStorage.getItem(cartKey);
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      } else {
        setCartItems([]);
      }
    } else {
      // 未登录用户：每次刷新页面时清空购物车
      setCartItems([]);
      localStorage.removeItem('cart');
    }
  }, [user]);

  // 更新商品数量
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    
    // 根据登录状态保存购物车数据
    if (user) {
      const cartKey = `cart_${user.id}`;
      localStorage.setItem(cartKey, JSON.stringify(updatedItems));
    } else {
      // 未登录用户：临时保存到 sessionStorage，这样在同一个会话中刷新页面不会丢失
      sessionStorage.setItem('temp_cart', JSON.stringify(updatedItems));
    }
  };

  // 删除商品
  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
    
    // 根据登录状态保存购物车数据
    if (user) {
      const cartKey = `cart_${user.id}`;
      localStorage.setItem(cartKey, JSON.stringify(updatedItems));
    } else {
      // 未登录用户：临时保存到 sessionStorage
      sessionStorage.setItem('temp_cart', JSON.stringify(updatedItems));
    }
  };

  // 计算小计
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // 处理结账
  const handleCheckout = () => {
    if (!user) {
      // 如果用户未登录，跳转到登录页面，并传递来源参数
      navigate('/login?from=cart');
      return;
    }
    // 这里可以添加结账逻辑
    alert('即将跳转到支付页面...');
  };

  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-left">
          <h2>My cart 我的购物车</h2>
          {!user && (
            <div className="login-notice">
              <p>您当前未登录，购物车数据将在刷新页面后清除</p>
              <button onClick={() => navigate('/login?from=cart')}>去登录</button>
            </div>
          )}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>¥{item.price.toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-button" onClick={() => removeItem(item.id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            ))}
          </div>
          <div className="cart-actions">
            <div className="promo-code">
              <i className="fas fa-tag"></i>
              <input
                type="text"
                placeholder="Enter a promo code 输入促销代码"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
            </div>
            <div className="add-note">
              <i className="fas fa-pencil-alt"></i>
              <input
                type="text"
                placeholder="Add a note 添加注释"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="cart-right">
          <div className="order-summary">
            <h2>Order summary 订单汇总</h2>
            <div className="summary-item">
              <span>Subtotal 小计</span>
              <span>¥{calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Estimate Delivery 预计交付</span>
              <span>计算中...</span>
            </div>
            <div className="summary-total">
              <span>Total 总计</span>
              <span>¥{calculateSubtotal().toFixed(2)}</span>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              {user ? 'Checkout 结账' : 'Login to Checkout 登录后结账'}
              <i className="fas fa-lock"></i>
            </button>
            <p className="secure-checkout">
              <i className="fas fa-lock"></i> Secure Checkout 安全结账
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 