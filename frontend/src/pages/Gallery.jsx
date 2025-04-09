import React, { useRef } from 'react';
import './GalleryPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  const slideRef = useRef(null);
  
  // 轮播图数据
  const slides = [
    {
      image: '/images/作品展示/轮播1.png',
      name: 'Filigree Inlay Crafts',
      des: '你好，花丝镶嵌！'
    },
    {
      image: '/images/作品展示/轮播2.png',
      name: 'Filigree Inlay Crafts',
      des: '你好，花丝镶嵌！'
    },
    {
      image: '/images/作品展示/轮播3.png',
      name: 'Filigree Inlay Crafts',
      des: '你好，花丝镶嵌！'
    },
    {
      image: '/images/作品展示/轮播4.png',
      name: 'Filigree Inlay Crafts',
      des: '你好，花丝镶嵌！'
    },
    {
      image: '/images/作品展示/轮播5.png',
      name: 'Filigree Inlay Crafts',
      des: '你好，花丝镶嵌！'
    },
    {
      image: '/images/作品展示/轮播6.png',
      name: 'Filigree Inlay Crafts',
      des: '你好，花丝镶嵌！'
    }
  ];

  // 卡片数据 - 添加默认图片和悬停图片
  const cards = [
    {
      title: '首饰',
      description: '展示花丝镶嵌的传统制作工艺',
      
      defaultImage: '/images/作品展示/轮播1.png',
      hoverImage: '/images/作品展示/轮播2.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)'
    },
    {
      title: '服饰',
      description: '融合现代设计理念的创新作品',
     
      defaultImage: '/images/作品展示/轮播3.png',
      hoverImage: '/images/作品展示/轮播4.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)'
    },
    {
      title: '器皿',
      description: '国家级工艺美术大师的代表作',
     
      defaultImage: '/images/作品展示/轮播5.png',
      hoverImage: '/images/作品展示/轮播6.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)'
    },
    {
      title: '摆件',
      description: '个性化定制花丝镶嵌艺术品',
      
      defaultImage: '/images/作品展示/轮播1.png',
      hoverImage: '/images/作品展示/轮播3.png',
      bgColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)',
      hoverColor: 'linear-gradient(135deg, rgba(248, 238, 94, 0.8) 0%, rgba(248, 238, 94, 0.8) 100%)'
    }
  ];

  // 上一张
  const handlePrev = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.item');
      if (items.length > 0) {
        slideRef.current.appendChild(items[0]);
      }
    }
  };

  // 下一张
  const handleNext = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.item');
      if (items.length > 0) {
        slideRef.current.prepend(items[items.length - 1]);
      }
    }
  };

  return (
    <div className="gallery-container">
      {/* 轮播图部分 - 保持原样 */}
      <div className="carousel-section">
        <div className="slide" ref={slideRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="content">
                <div className="name">{slide.name}</div>
                <div className="des">{slide.des}</div>
                <button>See More</button>
              </div>
            </div>
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

      {/* 卡片部分 - 四个一排不换行 */}
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
    </div>
  );
};

export default Gallery;