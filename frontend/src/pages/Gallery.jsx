import React, { useRef } from 'react';
import './GalleryPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  const slideRef = useRef(null);
  
  // 轮播图数据
  const slides = [
    {
      image:  '/images/作品展示/轮播1.png',
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
      name:'Filigree Inlay Crafts',
      des: '你好，花丝镶嵌！'
    },
    {
      image: '/images/作品展示/轮播5.png',
      name: 'Filigree Inlay Crafts',
      des: '你好，花丝镶嵌！'
    },
    {
      image:'/images/作品展示/轮播6.png',
      name: 'Filigree Inlay Crafts',
      des: '你好，花丝镶嵌！'
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
    <div className="container">
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
      
      <div className="button">
        <button className="prev" onClick={handlePrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="next" onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Gallery;