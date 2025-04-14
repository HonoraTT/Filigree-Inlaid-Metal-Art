import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './GalleryPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@google/model-viewer';

const Gallery = () => {
  const slideRef = useRef(null);
  const navigate = useNavigate();
  const [active3DView, setActive3DView] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // 创建三个部分的ref
  const carouselRef = useRef(null);
  const cardsRef = useRef(null);
  const modelRef = useRef(null);

  // 设置滚动动画
  const { scrollYProgress } = useScroll();
  
  // 为每个部分创建不同的动画效果
  const carouselY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const cardsY = useTransform(scrollYProgress, [0.3, 0.6], [0, -100]);
  const modelY = useTransform(scrollYProgress, [0.6, 0.9], [0, -100]);

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
      defaultImage: '/images/作品展示/卡片底1.png',
      hoverImage: '/images/作品展示/首饰1.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      images: ['/images/作品展示/首饰1.png', '/images/作品展示/首饰2.png', '/images/作品展示/首饰3.png']
    },
    {
      title: '服饰',
      description: '融合现代设计理念的创新作品',
      defaultImage: '/images/作品展示/卡片底2.png',
      hoverImage: '/images/作品展示/服饰1.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      images: ['/images/作品展示/服饰1.png', '/images/作品展示/服饰2.png', '/images/作品展示/服饰3.png']
    },
    {
      title: '器皿',
      description: '国家级工艺美术大师的代表作',
      defaultImage: '/images/作品展示/卡片底3.png',
      hoverImage: '/images/作品展示/器皿1.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      images: ['/images/作品展示/器皿1.png', '/images/作品展示/器皿2.png', '/images/作品展示/器皿3.png']
    },
    {
      title: '摆件',
      description: '个性化定制花丝镶嵌艺术品',
      defaultImage: '/images/作品展示/卡片底4.png',
      hoverImage: '/images/作品展示/摆件1.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      images: ['/images/作品展示/摆件1.png', '/images/作品展示/摆件2.png', '/images/作品展示/摆件3.png']
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
      {/* 轮播图部分 - 添加动画效果 */}
      <motion.div 
        className="carousel-section"
        ref={carouselRef}
        style={{ y: carouselY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="slide" ref={slideRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="item1"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          ))}
        </div>
        
        <div className="carousel-button-prev" onClick={handlePrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="carousel-button-next" onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </motion.div>

      {/* 卡片部分 - 添加动画效果 */}
      <motion.div 
        className="cards-section"
        ref={cardsRef}
        style={{ y: cardsY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
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
      </motion.div>

      {/* 3D模型展示部分 - 添加动画效果 */}
      <motion.div 
        className="three-d-model-container"
        ref={modelRef}
        style={{ y: modelY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="model-viewer-container">
          <model-viewer
            src="/images/3Dmodels/蝴蝶胸针.glb"
            alt="3D展示"
            camera-controls
            camera-orbit="0deg 90deg 500px"
            style={{ width: '100%', height: '400px' }}
            max-field-of-view="30deg"
            min-field-of-view="10deg"
            max-camera-orbit="Infinity auto 1000px"
            min-camera-orbit="-Infinity auto 200px"
            bounds="tight"
          />
        </div>
        <div className="model-text-container" onClick={handleClick}>
          <h2 className="section-title">3D展示</h2>
          <p className="section-subtitle">请使用鼠标拖拽旋转模型</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;