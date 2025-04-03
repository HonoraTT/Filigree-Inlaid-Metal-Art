// src/pages/StoreLanding.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './store.css';

const StoreLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="store-landing">
      <div
        className="hero-image"
        style={{ backgroundImage: `url(/images/文创商店/banner.png)` }}
      >
        <div className="hero-text">
          <h1>Filigree Inlay</h1>
          <p>Handicrafts</p>
          <button onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </div>
    </div>
  );
}; 

export default StoreLanding;
