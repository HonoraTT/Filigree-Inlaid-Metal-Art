// src/pages/Events.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';

const artisans = [
  {
    name: '辜国强',
    image: '/images/images匠人/辜国强.png',
    bio: '辜国强，花丝镶嵌工艺大师，致力于传承传统的匠人技艺，历经多年研究与创新。',
  },
  {
    name: '马维盛',
    image: '/images/images匠人/马维盛.png',
    bio: '马维盛，民间艺术传承者，专注于中国传统文化的推广和创新。',
  },
  {
    name: '白静宜',
    image: '/images/images匠人/白静宜.png',
    bio: '白静宜，民间艺术传承者，专注于中国传统文化的推广和创新。',
  },
  {
    name: '董瑞京',
    image: '/images/images匠人/董瑞京.png',
    bio: '董瑞京，民间艺术传承者，专注于中国传统文化的推广和创新。',
  },
  {
    name: '李昌义',
    image: '/images/images匠人/李昌义.png',
    bio: '李昌义，民间艺术传承者，专注于中国传统文化的推广和创新。',
  },
  {
    name: '王树文',
    image: '/images/images匠人/王树文.png',
    bio: '王树文，民间艺术传承者，专注于中国传统文化的推广和创新。',
  },
];

const Events = () => {
  const [hoveredArtisan, setHoveredArtisan] = useState(artisans[0]);
  const navigate = useNavigate();

  const handleHover = (artisan) => {
    setHoveredArtisan(artisan);
  };

  const handleClick = (artisanName) => {
    navigate(`/artisan-detail/${artisanName}`);
  };

  return (
    <div className="artisan-profile-container">
      <div className="profile-wrapper">
        <div className="image-text-combined" onClick={() => handleClick(hoveredArtisan.name)}>
          <img
            src={hoveredArtisan.image}
            alt="匠人图像"
            className="artisan-img"
          />
          <div className="image-overlay">
            <h2>{hoveredArtisan.name}</h2>
            <p className="bio">{hoveredArtisan.bio}</p>
          </div>
        </div>
      </div>

      <div className="right-content">
        <h2>匠人档案</h2>
        <div className="artisan-list">
          {artisans.map((artisan) => (
            <div
              key={artisan.name}
              className="artisan-item"
              onMouseEnter={() => handleHover(artisan)}
              onClick={() => handleClick(artisan.name)}
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
