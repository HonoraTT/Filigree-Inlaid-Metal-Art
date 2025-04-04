// src/pages/Events.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css'; // 样式文件

const artisans = [
  {
    name: '辜国强',
    image: '/images匠人/辜国强.png',
    bio: '辜国强，花丝镶嵌工艺大师，致力于传承传统的匠人技艺，历经多年研究与创新。',
  },
  {
    name: '马维盛',
    image: '/images匠人/马维盛.png',
    bio: '马维盛，民间艺术传承者，专注于中国传统文化的推广和创新。',
  },
  {
    name: '白静宜',
    image: '/images匠人/白静宜.png',
    bio: '白静宜，民间艺术传承者，专注于中国传统文化的推广和创新。',
  },
  {
    name: '董瑞京',
    image: '/images匠人/董瑞京.png',
    bio: '董瑞京，民间艺术传承者，专注于中国传统文化的推广和创新。',
  },{
    name: '李昌义',
    image: '/images匠人/李昌义.png',
    bio: '李昌义，民间艺术传承者，专注于中国传统文化的推广和创新。',
  },{
    name: '王树文',
    image: '/images匠人/王树文.png',
    bio: '王树文，民间艺术传承者，专注于中国传统文化的推广和创新。',
  },
];

const Events = () => {
  const [hoveredArtisan, setHoveredArtisan] = useState(artisans[0]);
  const navigate = useNavigate(); // 用于页面跳转

  const handleHover = (artisan) => {
    setHoveredArtisan(artisan);
  };

  const handleClick = (artisanName) => {
    navigate(`/artisan-detail/${artisanName}`);
  };

  return (
    <div className="artisan-profile-container">
      {/* 左侧匠人图片区域 */}
      <div className="left-image">
        <img 
          src={hoveredArtisan.image} 
          alt="匠人图像" 
          className="artisan-img" 
          onClick={() => handleClick(hoveredArtisan.name)}  // 点击跳转到匠人详情页面
        />
      </div>

      {/* 右侧内容区域 */}
      <div className="right-content">
        <h2>匠人档案</h2>
        <p className="bio">{hoveredArtisan.bio}</p>

        <div className="artisan-list">
          {artisans.map((artisan) => (
            <div
              key={artisan.name}
              className="artisan-item"
              onMouseEnter={() => handleHover(artisan)} // 悬停切换图片
              onClick={() => handleClick(artisan.name)} // 点击跳转到详情页
            >
              <h3>{artisan.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
