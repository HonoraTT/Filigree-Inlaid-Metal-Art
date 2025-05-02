import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './store.css';

const StoreLanding = () => {
  const navigate = useNavigate();
  
  // 处理滚动事件
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="store-landing">
      <div className="hero-image">
        {/* 模糊背景图 */}
        <div className="blur-bg" style={{ backgroundImage: `url(/images/文创商店/banner.png)` }}></div>
        {/* 原始内容 */}
        <div className="hero-text">
          <div className="title-container">
            <h1 style={{ fontFamily: 'HuaSiFont' }}>千年丝缕·镶嵌东方</h1>
            <h2 style={{ fontFamily: 'HuaSiFont' }}>——花丝镶嵌艺术典藏</h2>
          </div>
          <button onClick={() => navigate('/shop')}>进入商店</button>
        </div>
        <div className="scroll-indicator" onClick={handleScroll}>
          <p>向下滑动进入藏品展示</p>
          <i className="fas fa-chevron-down arrow-icon"></i>
        </div>
      </div>

      {/* 商品展示区 */}
      <div className="product-gallery">
        <h2>藏品细节展示</h2>
        <div className="gallery-grid">
          {/* 商品列表 */}
          {[ 
            { id: 1, image: '/images/文创商店/花丝头饰.png', name: '花丝头饰', price: '¥2500.00' },
            { id: 2, image: '/images/文创商店/花丝扣包.png', name: '花丝扣包', price: '¥3800.00' },
            { id: 3, image: '/images/文创商店/手工花丝花.png', name: '手工花丝花', price: '¥3000.00' },
            { id: 4, image: '/images/文创商店/花丝宝石戒指.png', name: '花丝宝石戒指', price: '¥2800.00' },
            { id: 5, image: '/images/文创商店/花丝发钗.png', name: '花丝发钗', price: '¥5000.00' },
            { id: 6, image: '/images/文创商店/花丝地毯.png', name: '花丝地毯', price: '¥3500.00' },
            { id: 7, image: '/images/文创商店/龙图腾摆件.png', name: '龙图腾摆件', price: '¥4500.00' },
            { id: 8, image: '/images/文创商店/花丝蝴蝶.png', name: '花丝蝴蝶', price: '¥4000.00' },
            { id: 9, image: '/images/文创商店/花丝车载挂件.png', name: '花丝车载挂件', price: '¥6000.00' },
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
