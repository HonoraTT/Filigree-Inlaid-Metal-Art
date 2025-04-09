import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [note, setNote] = useState('');

  // 从 localStorage 加载购物车数据
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // 更新商品数量
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  // 删除商品
  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  // 计算小计
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // 处理结账
  const handleCheckout = () => {
    // 这里可以添加结账逻辑
    alert('即将跳转到支付页面...');
  };

  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-left">
          <h2>My cart 我的购物车</h2>
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
              Checkout 结账
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