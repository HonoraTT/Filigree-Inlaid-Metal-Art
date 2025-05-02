import React, { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const originalTitle = document.title;
    document.title = '匠人档案';
    
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const handleHover = (artisan) => {
    setHoveredArtisan(artisan);
  };

  const handleClick = (artisanName) => {
    navigate(`/artisan-detail/${encodeURIComponent(artisanName)}`);
  };

  const handleMoreClick = (e) => {
    e.preventDefault();
    navigate('/character');
  };

  return (
    <div className={`section home6 tab-mod fp-section active ${isVisible ? 'fp-completely' : ''}`} data-anchor="page6">
      <style>
        {`.home6 .widget-area-edit {
          left: 100px;
          top: 100px !important;
        }`}
      </style>
      
      {/* 图片内容区域 - 只显示当前悬停的匠人 */}
      <div className="tab-cont">
        <div 
          className="tab-item act"
          style={{ backgroundImage: `url(${hoveredArtisan.image})` }}
        ></div>
      </div>
      
      {/* 标签导航区域 */}
      <div>
        <div className="tab-bar">
          {/* 标题 */}
          <div className="title middle">
            <div className="title-txt middle-cont">
              <div>匠人</div>
            </div>
          </div>

          {/* 匠人列表 */}
          <div className="tab-track justify">
            {artisans.map((artisan, index) => (
              <React.Fragment key={artisan.name}>
                <div 
                  className={`tab-term t${index + 1} ${hoveredArtisan.name === artisan.name ? 'cur' : ''}`}
                  onMouseEnter={() => handleHover(artisan)}
                  onClick={() => handleClick(artisan.name)}
                >
                  <div className="h16">
                    <a 
                      href={`/artisan-detail/${encodeURIComponent(artisan.name)}`}
                      title={artisan.name}
                    >
                      {artisan.name}
                    </a>
                  </div>
                </div>
                {index < artisans.length - 1 && <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
              </React.Fragment>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;