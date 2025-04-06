import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './store.css';

// 假设这是静态数据
const productsData = [
  { id: 1, name: '花丝杯', price: 25.0, image: '/images/文创商店/cup1.png', description: '这是一款精美的花丝杯，手工制作，具有独特的设计感。' },
  { id: 2, name: '镶嵌杯', price: 38.0, image: '/images/文创商店/cup2.png', description: '这款镶嵌杯以精美的工艺和高质量的材料制成，适合收藏或使用。' },
  { id: 3, name: '花丝杯', price: 25.0, image: '/images/文创商店/cup1.png', description: '这是一款精美的花丝杯，手工制作，具有独特的设计感。' },
  { id: 4, name: '花丝杯', price: 25.0, image: '/images/文创商店/cup1.png', description: '这是一款精美的花丝杯，手工制作，具有独特的设计感。' },
  { id: 5, name: '花丝杯', price: 25.0, image: '/images/文创商店/cup1.png', description: '这是一款精美的花丝杯，手工制作，具有独特的设计感。' },
  { id: 6, name: '花丝杯', price: 25.0, image: '/images/文创商店/cup1.png', description: '这是一款精美的花丝杯，手工制作，具有独特的设计感。' },
  { id: 7, name: '花丝杯', price: 25.0, image: '/images/文创商店/cup1.png', description: '这是一款精美的花丝杯，手工制作，具有独特的设计感。' },
  { id: 8, name: '花丝杯', price: 25.0, image: '/images/文创商店/cup1.png', description: '这是一款精美的花丝杯，手工制作，具有独特的设计感。' },
  { id: 9, name: '花丝杯', price: 25.0, image: '/images/文创商店/cup1.png', description: '这是一款精美的花丝杯，手工制作，具有独特的设计感。' },

  // 添加更多商品
];

const ProductDetail = () => {
  const { id } = useParams(); // 获取路由中的商品ID
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>加载中...</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">¥{product.price}</p>
          <p className="description">{product.description}</p>
          <button className="add-to-cart" onClick={() => alert(`${product.name} 已加入购物车！`)}>
            加入购物车
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
