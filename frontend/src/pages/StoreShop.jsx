// src/pages/StoreShop.jsx
import React, { useState } from 'react';
import './store.css';

const products = [
  { id: 1, name: '花丝杯', price: 25.0, image:'/images/文创商店/cup1.png'},
  { id: 2, name: '镶嵌杯', price: 38.0, image:'/images/文创商店/cup2.png' },
];

const StoreShop = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} 已加入购物车！`);
  };

  return (
    <div className="store-shop">
      <aside className="sidebar">
        <h3>分类</h3>
        <ul>
          <li>首饰</li>
          <li>家居装饰</li>
          <li>手工艺品</li>
        </ul>
        <h3>筛选</h3>
        <p>价格：¥18 - ¥130</p>
      </aside>

      <main className="products">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>¥{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>加入购物车</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default StoreShop;
