import React, { useRef } from 'react';
import './GalleryPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
  const slideRef = useRef(null);
  
  // 轮播图数据
  const slides = [
    {
      image: 'https://i.ibb.co/qCkd9jS/img1.jpg',
      name: 'Switzerland',
      des: '你好，自然！'
    },
    {
      image: 'https://i.ibb.co/jrRb11q/img2.jpg',
      name: 'Finland',
      des: '你好，自然！'
    },
    {
      image: 'https://i.ibb.co/NSwVv8D/img3.jpg',
      name: 'Iceland',
      des: '你好，自然！'
    },
    {
      image: 'https://i.ibb.co/Bq4Q0M8/img4.jpg',
      name: 'Australia',
      des: '你好，自然！'
    },
    {
      image: 'https://i.ibb.co/jTQfmTq/img5.jpg',
      name: 'Netherland',
      des: '你好，自然！'
    },
    {
      image: 'https://i.ibb.co/RNkk6L0/img6.jpg',
      name: 'Ireland',
      des: '你好，自然！'
    }
  ];

  // 下一张
  const handleNext = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.item');
      if (items.length > 0) {
        slideRef.current.appendChild(items[0]);
      }
    }
  };

  // 上一张
  const handlePrev = () => {
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