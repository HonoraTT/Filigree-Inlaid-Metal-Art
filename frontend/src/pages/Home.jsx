﻿// src/pages/Home.js展示首页内容
// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// 背景介绍
const HomeWrapper = styled.div`
  font-family: 'KaiTi', serif; /* 使用楷体，符合古风 */
  color: #ffffff;
  background-color: #f8f9fa;
  padding-top: 0px;
`;

const TitleSection = styled.div`
  padding: 50px;
  background: url('https://www.cflac.org.cn/gymssy/ctgymsml/jsgy/201305/t20130529_193662.html?utm_source=chatgpt.com') no-repeat center center;
  background-size: cover;
  text-align: center;
  color: #ffffff;
  background-blend-mode: darken; /* 背景加深效果 */
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #F4A261;  /* 古铜色，温暖的金色 */
  margin-bottom: 20px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.8rem;
  color: #FFF;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  font-style: italic;  /* 添加斜体，增加古风感 */
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  margin: 0;
  position: relative;
`;

// 图片轮播样式
const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden; /* 防止图片溢出 */
`;

const Home = () => {
  // 轮播设置
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,  // 不显示箭头
    pauseOnHover: true,
  };

  return (
    <HomeWrapper>
      {/* 图片轮播 */}
      <ImageWrapper>
        <Slider {...settings}>
          <SlideWrapper>
            <img
              src="/images/1.png"
              alt="Filigree Art 1"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </SlideWrapper>
          <SlideWrapper>
            <img
              src="/images/2.png"
              alt="Filigree Art 2"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </SlideWrapper>
          <SlideWrapper>
            <img
              src="/images/3.png"
              alt="Filigree Art 3"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </SlideWrapper>
        </Slider>
      </ImageWrapper>

      {/* 背景介绍 */}
      <TitleSection>
        <Title>非遗花丝镶嵌艺术</Title>
        <Description>
          传承千年工艺，探索精美的花丝镶嵌艺术，了解其悠久历史和制作技艺。
        </Description>
      </TitleSection>
    </HomeWrapper>
  );
};

export default Home;