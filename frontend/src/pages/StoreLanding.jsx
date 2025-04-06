import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './store.css';

const StoreLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="store-landing">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(/images/文创商店/banner.png)` }}
      >
        <div className="hero-text">
          <h1>Filigree Inlay</h1>
          <p>Handicrafts</p>
          <button onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </div>

      {/* 商品展示区 */}
      <div className="product-gallery">
        <h2>Our Collection</h2>
        <div className="gallery-grid">
          {/* 商品列表 */}
          {[ 
            { id: 1, image: '/images/文创商店/cup1.png', name: '花丝杯', price: '¥25.00' },
            { id: 2, image: '/images/文创商店/cup2.png', name: '镶嵌杯', price: '¥38.00' },
            { id: 3, image: '/images/文创商店/cup3.png', name: '艺术杯', price: '¥30.00' },
            { id: 4, image: '/images/文创商店/cup4.png', name: '陶瓷碗', price: '¥28.00' },
            { id: 5, image: '/images/文创商店/cup5.png', name: '艺术壶', price: '¥50.00' },
            { id: 6, image: '/images/文创商店/cup6.png', name: '花丝盘', price: '¥35.00' },
            { id: 7, image: '/images/文创商店/cup7.png', name: '陶瓷壶', price: '¥45.00' },
            { id: 8, image: '/images/文创商店/cup8.png', name: '手工碗', price: '¥40.00' },
            { id: 9, image: '/images/文创商店/cup9.png', name: '工艺瓶', price: '¥60.00' },
          ].map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreLanding;
