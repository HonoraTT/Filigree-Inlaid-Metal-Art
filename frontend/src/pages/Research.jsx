
// src/pages/News.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './News.css';

const newsData = [
  {
    type: 'exhibition',
    title: '千年匠心——故宫花丝镶嵌特展',
    date: '2024/03/15-06/20',
    location: '故宫博物院·珍宝馆',
    highlight: '展出明清宫廷花丝文物40余件',
    image: '/news/exhibition1.jpg',
    style: { 
      background: 'linear-gradient(135deg, #d4af37aa,rgba(201, 185, 170, 0.87))',
      fontColor: '#4b2e1c'
    }
  },
  {
    type: 'workshop',
    title: '非遗技艺体验工坊开放预约',
    date: '每周六 14:00-16:00',
    location: '国家工艺美术馆',
    highlight: '国家级传承人现场指导',
    image: '/news/workshop1.jpg',
    style: {
      background: 'linear-gradient(45deg, #f0e6d3, #c9b79c)',
      fontColor: '#4b2e1c'
    }
  },
  {
    type: 'research',
    title: '传统工艺与现代科技融合研讨会',
    date: '2024/04/20 09:00',
    location: '清华大学美术学院',
    highlight: '3D打印技术在花丝镶嵌中的应用',
    image: '/news/tech1.jpg',
    style: {
      background: 'linear-gradient(160deg, #704214, #2c1a0d)',
      fontColor: '#d4af37'
    }
  },
  {
    type: 'research',
    title: '与现代科技融合研讨会',
    date: '2024/04/20 09:00',
    location: '清华大学美术学院',
    highlight: '3D打印技术在花丝镶嵌中的应用',
    image: '/news/tech1.jpg',
    style: {
      background: 'linear-gradient(160deg, #704214, #2c1a0d)',
      fontColor: '#d4af37'
    }
  }
];

const News = () => {
  const [activeType, setActiveType] = useState('all');

  return (
    <div className="news-container">
      {/* 动态标题 */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="main-title"
      >
        金丝银缕·匠心传承
        <span className="subtitle">花丝镶嵌最新动态</span>
      </motion.h1>

      {/* 交互式导航 */}
      <nav className="news-nav">
        {['all', 'exhibition', 'workshop', 'research'].map((type) => (
          <button
            key={type}
            className={`nav-item ${activeType === type ? 'active' : ''}`}
            onClick={() => setActiveType(type)}
          >
            {{
              all: '全部',
              exhibition: '特展预告',
              workshop: '体验工坊',
              research: '学术动态'
            }[type]}
          </button>
        ))}
      </nav>

      {/* 动态卡片网格 */}
      <div className="news-grid">
        {newsData
          .filter(item => activeType === 'all' || item.type === activeType)
          .map((item, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="news-card"
              style={{ background: item.style.background }}
            >
              <div className="card-image" style={{ backgroundImage: `url(${item.image})` }} />
              
              <div className="card-content" style={{ color: item.style.fontColor }}>
                <div className="meta-tag">{item.type === 'exhibition' ? '🔥 热门特展' : '📅 即将开始'}</div>
                <h3>{item.title}</h3>
                <div className="info-row">
                  <svg className="icon"><use xlinkHref="#icon-calendar"/></svg>
                  <span>{item.date}</span>
                </div>
                <div className="info-row">
                  <svg className="icon"><use xlinkHref="#icon-location"/></svg>
                  <span>{item.location}</span>
                </div>
                <p className="highlight">{item.highlight}</p>
                <button 
                  className="detail-btn"
                  style={{ 
                    backgroundColor: item.style.fontColor,
                    color: item.style.background
                  }}
                >
                  查看详情 →
                </button>
              </div>
            </motion.article>
          ))}
      </div>

      {/* 时间线分隔符 */}
      <div className="timeline-divider">
        <div className="timeline-line" />
        <div className="deco-bead" />
        <div className="deco-bead" />
        <div className="deco-bead" />
      </div>

      {/* 附加功能模块 */}
      <section className="subscribe-section">
        <h2>订阅工艺动态</h2>
        <p>第一时间获取展览资讯、工坊开放信息</p>
        <div className="subscribe-form">
          <input type="email" placeholder="输入您的电子邮箱" />
          <button>订阅更新</button>
        </div>
      </section>
    </div>
  );
};

export default News;