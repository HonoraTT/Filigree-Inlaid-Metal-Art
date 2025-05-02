import React, { useRef, useState, useEffect } from 'react';
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

  // 添加 useEffect 来设置页面标题
  useEffect(() => {
    const originalTitle = document.title;
    document.title = '作品展示';
    
    // 组件卸载时恢复原标题
    return () => {
      document.title = originalTitle;
    };
  }, []);

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

  const handleModelViewClick = () => {
    navigate('/model-view/祥龙衔珠花丝胸针'); // 默认展示第一个模型
  };

  // 轮播图数据
  const slides = [
    { image: '/images/作品展示/轮播1.png',
      des1:'每一根金丝都是匠心的诠释，花丝镶嵌，让传统工艺焕发现代光彩。'
     },
    { image: '/images/作品展示/轮播2.png',
      des1:'精致的花丝镶嵌，犹如艺术的繁花，完美呈现每一个细节，闪耀不凡。'
     },
    { image: '/images/作品展示/轮播3.png',
      des1:'花丝镶嵌工艺，巧夺天工的设计，成就你独一无二的奢华魅力。'
     },
    { image: '/images/作品展示/轮播4.png',
      des1:'跨越千年，花丝镶嵌技艺将古老的文化与现代的优雅相融合，尽显匠心之美。'
     },
    { image: '/images/作品展示/轮播5.png',
      des1:'每一件花丝镶嵌的作品，都在讲述一个独特的故事，装点你的生活，点亮你的心情。'
     },
    { image: '/images/作品展示/轮播6.png' ,
      des1:'花丝镶嵌，将传统与创新完美结合，让每一件作品都闪耀出不同凡响的光芒。'
    }
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
        transition={{ duration: 1.5 }}
      >
        <div className="slide" ref={slideRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="item1"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
               <div className="content2">
              <div className="name1">{slide.name1}</div>
              <div className="des1">{slide.des1}</div>
            </div>
            </div>
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
  camera-orbit="0deg 75deg 400px"  // 稍微倾斜的视角
  style={{ width: '100%', height: '400px' }}
  max-field-of-view="25deg"  // 限制最大放大
  min-field-of-view="15deg"  // 限制最小缩小
  max-camera-orbit="Infinity auto 800px"  // 最远距离
  min-camera-orbit="-Infinity auto 150px"  // 最近距离
  bounds="tight"
/>
        </div>
        <div className="model-text-container">
          <h2 className="section-title">3D展示</h2>
          <p className="section-subtitle">请使用鼠标拖拽旋转模型</p>
          <button 
            className="view-3d-button"
            onClick={handleClick}
          >
            查看更多3D模型
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;