import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './3DView.css';

const ThreeDView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { card } = location.state || {};

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="three-d-container">
      {/* 文字部分（移动到上方） */}
      <div className="card1-info">
        <h2>{card?.title}</h2>
        <p>{card?.description}</p>
      </div>

      {/* 图片部分（3D轮播） */}
      <div className="shell1">
        <div className="content1">
          {card?.images?.map((image, index) => (
            <div 
              key={index}
              className="item2"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreeDView;