import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideContainer = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  position: relative;
  background: #000; /* 全局黑底 */

  .slick-slide {
    height: 100%;
    
    > div {
      height: 100%;
      display: flex !important;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
  }

  .slide-image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide-image {
    object-fit: contain;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  /* 黑边延伸层（关键修改） */
  .black-extend {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    z-index: -1;
    /* 两侧延伸计算 */
    margin-left: calc((100% - min(80vw, 1200px)) / -2);
    margin-right: calc((100% - min(80vw, 1200px)) / -2);
  }

  @media (max-width: 768px) {
    height: 60vh;
    
    .black-extend {
      margin-left: calc((100% - 90vw) / -2);
      margin-right: calc((100% - 90vw) / -2);
    }
  }
`;

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: false,
  };

  const slides = [
    { id: 1, src: "/images/1.png", alt: "花丝镶嵌作品1" },
    { id: 2, src: "/images/2.png", alt: "花丝镶嵌作品2" },
    { id: 3, src: "/images/3.png", alt: "花丝镶嵌作品3" }
  ];

  return (
    <SlideContainer>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="slide-image-wrapper">
              {/* 黑边延伸层 */}
              <div className="black-extend"></div>
              {/* 图片保持原始比例 */}
              <img
                className="slide-image"
                src={slide.src}
                alt={slide.alt}
                style={{
                  maxWidth: 'min(80vw, 1200px)',
                  maxHeight: '90vh'
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </SlideContainer>
  );
};

export default Home;