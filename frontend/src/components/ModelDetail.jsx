import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModelDetail.css';

const ModelDetail = () => {
  const navigate = useNavigate();  // 用于返回上一页

  const handleClick = (modelPath) => {
    navigate(`/model-detail/${modelPath}`);  // 点击图片时，跳转到对应的模型页面
  };

  // 模拟图片路径和模型名称
  const images = [
    { src: '/images/作品展示/dragon.png', alt: 'Model 1', path: 'model1' },
    { src: '/images/作品展示/红宝石项链.png', alt: 'Model 2', path: 'model2' },
    { src: '/images/作品展示/戒指.png', alt: 'Model 3', path: 'model3' },
    { src: '/images/作品展示/饰品.png', alt: 'Model 4', path: 'model4' },
    { src: '/images/作品展示/图.png', alt: 'Model 5', path: 'model5' },
    { src: '/images/作品展示/项链.png', alt: 'Model 6', path: 'model6' },
  ];

  return (
    <div className="model-detail1-container1">
      

      {/* 网格展示 */}
      <div className="model-grid1">
        {images.map((image) => (
          <div 
            key={image.path} 
            className="model-grid1-item1" 
            onClick={() => handleClick(image.path)} 
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="model-overlay1">
              <p>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelDetail;
