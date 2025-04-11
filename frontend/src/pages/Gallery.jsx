import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GalleryPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@google/model-viewer';  // 引入 model-viewer

const Gallery = () => {
  const slideRef = useRef(null);
  const navigate = useNavigate();
  const [active3DView, setActive3DView] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (modelPath) => {
    navigate(`/model-detail`); 
  };

  // 轮播图数据
  const slides = [
    { image: '/images/作品展示/轮播1.png' },
    { image: '/images/作品展示/轮播2.png' },
    { image: '/images/作品展示/轮播3.png' },
    { image: '/images/作品展示/轮播4.png' },
    { image: '/images/作品展示/轮播5.png' },
    { image: '/images/作品展示/轮播6.png' }
  ];

  // 卡片数据
  const cards = [
    {
      title: '首饰',
      description: '展示花丝镶嵌的传统制作工艺',
      defaultImage: '/images/作品展示/轮播1.png',
      hoverImage: '/images/作品展示/轮播2.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      images: ['/images/作品展示/轮播1.png', '/images/作品展示/轮播2.png', '/images/作品展示/轮播3.png']
    },
    {
      title: '服饰',
      description: '融合现代设计理念的创新作品',
      defaultImage: '/images/作品展示/轮播3.png',
      hoverImage: '/images/作品展示/轮播4.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      images: ['/images/作品展示/轮播3.png', '/images/作品展示/轮播4.png', '/images/作品展示/轮播5.png']
    },
    {
      title: '器皿',
      description: '国家级工艺美术大师的代表作',
      defaultImage: '/images/作品展示/轮播5.png',
      hoverImage: '/images/作品展示/轮播6.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      images: ['/images/作品展示/轮播5.png', '/images/作品展示/轮播6.png', '/images/作品展示/轮播1.png']
    },
    {
      title: '摆件',
      description: '个性化定制花丝镶嵌艺术品',
      defaultImage: '/images/作品展示/轮播1.png',
      hoverImage: '/images/作品展示/轮播3.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      images: ['/images/作品展示/轮播1.png', '/images/作品展示/轮播3.png', '/images/作品展示/轮播5.png']
    }
  ];

  const handlePrev = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.item1');
      if (items.length > 0) {
        slideRef.current.appendChild(items[0]);
      }
    }
  };

  const handleNext = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.item1');
      if (items.length > 0) {
        slideRef.current.prepend(items[items.length - 1]);
      }
    }
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActive3DView(true);
    navigate('/3d-view', { state: { card } });
  };

  

  return (
    <div className="gallery-container">
      {/* 轮播图部分 */}
      <div className="carousel-section">
        <div className="slide" ref={slideRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="item1"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </div>
        
        <div className="carousel-buttons">
          <button className="prev" onClick={handlePrev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="next" onClick={handleNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* 卡片部分 */}
      <div className="cards-section">
        <h2 className="section-title">花丝镶嵌作品分类</h2>
        <p className="section-subtitle">传承千年工艺，演绎现代美学</p>
        
        <div className="cards-row-container">
          <div className="cards-row">
            {cards.map((card, index) => (
              <div 
                key={index} 
                className="card"
                style={{ 
                  '--bg-color': card.bgColor, 
                  '--hover-color': card.hoverColor,
                  backgroundImage: `url(${card.defaultImage})`
                }}
                onClick={() => handleCardClick(card)}
              >
                <div className="card-content">
                  <div className="card-icon">{card.icon}</div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
                <div 
                  className="card-hover-image"
                  style={{ backgroundImage: `url(${card.hoverImage})` }}
                ></div>
                <div className="card-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3D模型展示部分，位于卡片下方并与卡片隔离 */}
      <div className="three-d-model-container">
  <div className="model-viewer-container">
    <model-viewer
      src="/images/3Dmodels/3D花丝凤冠.glb"  // 这里是3D模型的路径
      alt="3D展示"
      camera-controls
      camera-orbit="0deg 90deg 500px"  /* 调整视角，使模型更好地显示 */
      style={{ width: '100%', height: '400px' }}
    />
  </div>
  <div className="model-text-container" onClick={handleClick}>
    <h2 className="section-title">3D展示</h2>
    <p className="section-subtitle">请使用鼠标拖拽旋转模型</p>
  </div>
</div>


    </div>
  );
};

export default Gallery;
