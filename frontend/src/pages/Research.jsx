// src/pages/News.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './News.css';

const newsData = [
  {
    type: 'exhibition',
    title: '千年匠心——故宫花丝镶嵌特展',
    date: '2024/03/15-06/20',
    location: '故宫博物院·珍宝馆',
    highlight: '展出明清宫廷花丝文物40余件',
    image: '/images/exhibition1.jpg',
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
// 新增展览活动 1
{
  type: 'exhibition',
  title: '国宝遗珍——中国古代青铜器展',
  date: '2024/05/01-06/30',
  location: '上海博物馆',
  highlight: '展示上千年历史的青铜器文物，重现古代工艺美术',
  image: '/news/exhibition2.jpg',
  style: { 
    background: 'linear-gradient(45deg, #5d4037, #b39d6a)',
    fontColor: '#f5f5f5'
  }
},
// 新增展览活动 2
{
  type: 'workshop',
  title: '陶瓷工艺体验工坊',
  date: '2024/06/10-06/24',
  location: '北京艺术中心',
  highlight: '体验传统陶瓷工艺，亲手制作独特的陶艺作品',
  image: '/news/workshop2.jpg',
  style: {
    background: 'linear-gradient(135deg, #d4af37aa,rgba(201, 185, 170, 0.87))',
    fontColor: '#2c3e50'
  }
},
// 新增展览活动 3
{
  type: 'research',
  title: '数字艺术与传统文化结合研讨会',
  date: '2024/07/15 10:00',
  location: '中央美术学院',
  highlight: '讨论数字艺术在传统文化中的创新应用',
  image: '/news/tech2.jpg',
  style: {
    background: 'linear-gradient(135deg,rgb(139, 134, 96), #cfd8dc)',
    fontColor: '#ffffff'
  }
},
// 新增展览活动 4
{
  type: 'exhibition',
  title: '古代丝绸之路艺术珍品展',
  date: '2024/08/01-09/15',
  location: '陕西历史博物馆',
  highlight: '展示丝绸之路沿线的艺术珍品，跨文化交流的见证',
  image: '/news/exhibition3.jpg',
  style: { 
    background: 'linear-gradient(135deg, #d4af37aa,rgba(201, 185, 170, 0.87))',
    fontColor: '#d4af37'
  }
}
];

const News = () => {
  const [activeType, setActiveType] = useState('all');

  const handleCollect = (type) => {
    // 这里可以将收藏的活动存入本地存储或数据库
    alert(`${type} 已添加到收藏！`);
  };

  const handleBook = (type) => {
    // 这里可以将预约请求提交或跳转到预约页面
    alert(`${type} 已预约！`);
  };

  return (
    <div className="news-container">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="main-title"
      >
        金丝银缕·匠心传承
        <span className="subtitle">花丝镶嵌最新动态</span>
      </motion.h1>

      <nav className="news-nav">
        {['all', 'exhibition', 'workshop', 'research'].map((type) => (
          <button
            key={type}
            className={`nav-item ${activeType === type ? 'active' : ''}`}
            onClick={() => setActiveType(type)}
          >
            {type === 'all' ? '全部' : type}
          </button>
        ))}
      </nav>

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
                  <span>{item.date}</span>
                </div>
                <div className="info-row">
                  <span>{item.location}</span>
                </div>
                <p className="highlight">{item.highlight}</p>
                {/* 添加收藏和预约按钮 */}
                <button className="collect-btn" onClick={() => handleCollect(item.title)}>
                  收藏活动
                </button>
                <button className="book-btn" onClick={() => handleBook(item.title)}>
                  预约
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
