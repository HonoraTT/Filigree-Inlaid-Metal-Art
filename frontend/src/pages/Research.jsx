// src/pages/News.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useFavorites } from '../contexts/UserFavoritesContext';
import './News.css';

const newsData = [
  {
    type: 'exhibition',
    title: '千年匠心——故宫花丝镶嵌特展',
    date: '2024/03/15-06/20',
    location: '故宫博物院·珍宝馆',
    highlight: '展出明清宫廷花丝文物40余件',
    image: '/images/有关动态背景图/故宫1.png',
    style: { 
      backgroundImage: 'url(/images/有关动态背景图/故宫1.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 设置背景颜色的透明度
      fontColor: '#fff'
    }
  },
  {
    type: 'workshop',
    title: '非遗技艺体验工坊开放预约',
    date: '每周六 14:00-16:00',
    location: '国家工艺美术馆',
    highlight: '国家级传承人现场指导',
    image: '/images/有关动态背景图/国家工艺美术馆1.png',
    style: {
      backgroundImage: 'url(/images/有关动态背景图/故宫1.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 设置背景颜色的透明度
      fontColor: '#fff'
    }
  },
  {
    type: 'research',
    title: '传统工艺与现代科技融合研讨会',
    date: '2024/04/20 09:00',
    location: '清华大学美术学院',
    highlight: '3D打印技术在花丝镶嵌中的应用',
    image: '/images/有关动态背景图/清华美院1.png',
    style: {
      backgroundImage: 'url(/images/tech1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 设置背景颜色的透明度
      fontColor: '#fff'
    }
  },
  // 新增展览活动 1
  {
    type: 'exhibition',
    title: '国宝遗珍——中国古代花丝镶嵌展',
    date: '2024/05/01-06/30',
    location: '上海博物馆',
    highlight: '展示上千年历史的花丝镶嵌，重现古代工艺美术',
    image: '/images/有关动态背景图/上海博物馆2.png',
    style: { 
      backgroundImage: 'url(/images/exhibition2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 设置背景颜色的透明度
      fontColor: '#fff'
    }
  },
  // 新增展览活动 2
  {
    type: 'workshop',
    title: '花丝镶嵌工艺体验工坊',
    date: '2024/06/10-06/24',
    location: '北京艺术中心',
    highlight: '体验传统花丝工艺，亲手制作独特的花丝镶嵌作品',
    image: '/images/有关动态背景图/工艺美术馆2.png',
    style: {
      backgroundImage: 'url(/images/workshop2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 设置背景颜色的透明度
      fontColor: '#fff'
    }
  },
  // 新增展览活动 3
  {
    type: 'research',
    title: '数字艺术与花丝镶嵌结合研讨会',
    date: '2024/07/15 10:00',
    location: '中央美术学院',
    highlight: '讨论数字艺术在花丝镶嵌中的创新应用',
    image: '/images/有关动态背景图/央美1.png',
    style: {
      backgroundImage: 'url(/images/tech2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 设置背景颜色的透明度
      fontColor: '#fff'
    }
  },
  // 新增展览活动 4
  {
    type: 'exhibition',
    title: '古代花丝镶嵌艺术珍品展',
    date: '2024/08/01-09/15',
    location: '陕西历史博物馆',
    highlight: '展示花丝镶嵌沿线的艺术珍品，跨文化交流的见证',
    image: '/images/有关动态背景图/陕西历史博物馆.png',
    style: { 
      backgroundImage: 'url(/images/exhibition3.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 设置背景颜色的透明度
      fontColor: '#fff'
    }
  }
];

const News = () => {
  const [activeType, setActiveType] = useState('all');
  const navigate = useNavigate();
  const { user } = useUser();
  const { addToCollections, addToAppointments, isInCollections, isInAppointments } = useFavorites();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleCollect = (item) => {
    if (!user) {
      navigate('/login');
      return;
    }
    const collectionItem = {
      id: item.title,
      name: item.title,
      type: item.type,
      date: item.date,
      location: item.location
    };
    const isAdded = addToCollections(collectionItem);
    if (isAdded) {
      alert('收藏成功！');
    } else {
      alert('已取消收藏！');
    }
  };

  const handleAppointment = (item) => {
    if (!user) {
      navigate('/login');
      return;
    }
    const appointmentItem = {
      id: item.title,
      name: item.title,
      type: item.type,
      date: item.date,
      location: item.location
    };
    const isAdded = addToAppointments(appointmentItem);
    if (isAdded) {
      alert('预约成功！');
    } else {
      alert('已取消预约！');
    }
  };

  const handleSubscribe = async () => {
    if (!email) {
      alert('请输入邮箱地址');
      return;
    }

    setIsSubscribing(true);
    try {
        const response = await fetch('https://filigree.wanheit.com/api/subscribe', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(data.message);
        setEmail(''); // 清空输入框
      } else {
        // 显示后端返回的具体错误信息
        alert(data.message || '该邮箱不存在，请检查邮箱地址');
      }
    } catch (error) {
      console.error('订阅失败:', error);
      alert('该邮箱不存在，请检查邮箱地址');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="news-container">
      {/* 动态标题 */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="main-title"
      >
        金丝银缕·匠心传承
        <span className="subtitle">花丝镶嵌有关动态</span>
      </motion.h1>
      {/* 时间线分隔符 */}
      <div className="timeline-divider">
        <div className="timeline-line" />
        <div className="deco-bead" />
        <div className="deco-bead" />
        <div className="deco-bead" />
      </div>
{/* 订阅部分 */}
<section className="subscribe-section">
        <h2>订阅工艺动态</h2>
        <p>第一时间获取展览资讯、工坊开放信息</p>
        <div className="subscribe-form">
          <input 
            type="email" 
            placeholder="输入您的电子邮箱" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            onClick={handleSubscribe}
            disabled={isSubscribing}
          >
            {isSubscribing ? '订阅中...' : '订阅更新'}
          </button>
        </div>
      </section>
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
              <div className="card-content" style={{ backgroundImage: `url(${item.image})`, color: item.style.fontColor }}>
                <div className="meta-tag">{item.type === 'exhibition' ? '🔥 热门特展' : '📅 即将开始'}</div>
                <h3>{item.title}</h3>
                <div className="info-row">
                  <span>{item.date}</span>
                </div>
                <div className="info-row">
                  <span>{item.location}</span>
                </div>
                <p className="highlight">{item.highlight}</p>
                <button 
                  className="collect-btn" 
                  onClick={() => handleCollect(item)}
                >
                  {isInCollections(item.title) ? '已收藏' : '收藏活动'}
                </button>
                <button 
                  className="book-btn" 
                  onClick={() => handleAppointment(item)}
                >
                  {isInAppointments(item.title) ? '已预约' : '预约'}
                </button>
              </div>
            </motion.article>
          ))}
      </div>
       

      
    </div>
  );
};

export default News;
