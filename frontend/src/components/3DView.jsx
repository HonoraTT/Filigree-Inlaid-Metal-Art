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
      
      <div className="card1-info">
        <h2>{card?.title}</h2>
        <p>{card?.description}</p>
      </div>
    </div>
  );
};

export default ThreeDView;