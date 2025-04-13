import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';

const Events = () => {
  const [activeTab, setActiveTab] = useState(5); // 默认选中最后一个
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // 人物数据
  const artisans = [
    {
      id: 1,
      name: '辜国强',
      title: '花丝镶嵌工艺大师',
      image: '/images/images匠人/辜国强.png',
      detailUrl: '/character_detail/1'
    },
    {
      id: 2,
      name: '马维盛',
      title: '民间艺术传承者',
      image: '/images/images匠人/马维盛.png',
      detailUrl: '/character_detail/2'
    },
    {
      id: 3,
      name: '白静宜',
      title: '民间艺术传承者',
      image: '/images/images匠人/白静宜.png',
      detailUrl: '/character_detail/3'
    },
    {
      id: 4,
      name: '董瑞京',
      title: '民间艺术传承者',
      image: '/images/images匠人/董瑞京.png',
      detailUrl: '/character_detail/4'
    },
    {
      id: 5,
      name: '李昌义',
      title: '民间艺术传承者',
      image: '/images/images匠人/李昌义.png',
      detailUrl: '/character_detail/5'
    },
    {
      id: 6,
      name: '王树文',
      title: '民间艺术传承者',
      image: '/images/images匠人/王树文.png',
      detailUrl: '/character_detail/6'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleTabClick = (index, e) => {
    e?.preventDefault();
    setActiveTab(index);
  };

  const handleMoreClick = (e) => {
    e?.preventDefault();
    navigate('/character');
  };

  const handleCharacterClick = (url, e) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <div className={`section home6 tab-mod fp-section active ${isVisible ? 'fp-completely' : ''}`} data-anchor="page6">
      <style>
        {`.home6 .widget-area-edit {
          left: 100px;
          top: 100px !important;
        }`}
      </style>
      
      {/* 图片内容区域 */}
      <div className="tab-cont" edit_params="width%3D960%26height%3D960%26unlimit%3D1%26zoom%3D4%26tabs%3D6">
        {artisans.map((artisan, index) => (
          <div 
            key={artisan.id}
            className={`tab-item ${activeTab === index ? 'act' : ''}`}
            style={{ backgroundImage: `url(${artisan.image})` }}
          ></div>
        ))}
      </div>
      
      {/* 标签导航区域 */}
      <div edit_params="category_id%3D44%26pagesize%3D6">
        <div className="tab-bar">
          {/* 标题 */}
          <div className="title middle">
            <div className="title-txt middle-cont">
              <div>人物</div>
            </div>
          </div>

          {/* 标签项列表 - 严格保持原始结构包括&nbsp; */}
          <div className="tab-track justify">
            {artisans.map((artisan, index) => (
              <React.Fragment key={artisan.id}>
                <div 
                  className={`tab-term t${index + 1} ${activeTab === index ? 'cur' : ''}`}
                  style={{ visibility: 'inherit', opacity: 1, transform: 'matrix(1, 0, 0, 1, 0, 0)' }}
                  onClick={(e) => handleTabClick(index, e)}
                >
                  <div className="h16">
                    <a 
                      href={artisan.detailUrl} 
                      target="_blank"
                      title={`${artisan.name}：${artisan.title}`}
                      onClick={(e) => handleCharacterClick(artisan.detailUrl, e)}
                    >
                      {artisan.name}：{artisan.title}
                    </a>
                  </div>
                </div>
                {/* 保持原始HTML中的&nbsp;空格 */}
                {index < artisans.length - 1 && <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
              </React.Fragment>
            ))}
          </div>

          {/* 查看更多链接 */}
          <div className="p-more middle">
            <a 
              href="/character.html" 
              className="link middle-cont"
              onClick={handleMoreClick}
            >
              查看更多
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;