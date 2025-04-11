// src/artisan-detail/ArtisanDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ArtisanDetail.css';


// 假设匠人的详细信息都存储在一个数组中
const artisans = [
  {
    name: '辜国强',
    title: '辜国强：90后“玩”转花丝镶嵌，让古老技艺在创新中“出圈”',
    bio: '辜国强，花丝镶嵌工艺大师，致力于传承传统的匠人技艺，历经多年研究与创新，作品广受欢迎。',
    date: '2025-03-31',
    source: '中国文化遗产博物馆',
    image: '/images/images匠人/辜国强1.png', // 图片路径
  },
  {
    name: '白静宜',
    title: '白静宜：半百坚守，花丝镶嵌里的文化传承',
    bio: '白静宜，民间艺术传承者，专注于中国传统文化的推广和创新。',
    date: '2025-03-30',
    source: '中国民间艺术馆',
    image: '/images/images匠人/白静宜1.png', // 图片路径
  },
  {
    name: '董瑞京',
    title: '董瑞京：錾刻新章，银丝金缕间的匠心传奇',
    bio: '董瑞京，民间艺术传承者，专注于中国传统文化的推广和创新。',
    date: '2025-03-30',
    source: '中国民间艺术馆',
    image: '/images/images匠人/董瑞京1.png', // 图片路径
  },
  {
    name: '李昌义',
    title: '李昌义：从厂间新秀到非遗巨擘',
    bio: '李昌义，民间艺术传承者，专注于中国传统文化的推广和创新。',
    date: '2025-03-30',
    source: '中国民间艺术馆',
    image: '/images/images匠人/李昌义1.png', // 图片路径
  },
  {
    name: '马维盛',
    title: '马维盛：三代匠心筑梦，续写花丝传奇',
    bio: '马维盛，民间艺术传承者，专注于中国传统文化的推广和创新。',
    date: '2025-03-30',
    source: '中国民间艺术馆',
    image: '/images/images匠人/马维盛1.png', // 图片路径
  },
  {
    name: '王树文',
    title: '王树文：熔铸多元非遗，雕琢时代精品',
    bio: '王树文，民间艺术传承者，专注于中国传统文化的推广和创新。',
    date: '2025-03-30',
    source: '中国民间艺术馆',
    image: '/images/images匠人/王树文1.png', // 图片路径
  },
];


const ArtisanDetail = () => {
  const { name } = useParams(); // 获取 URL 中的匠人名字参数
  const [storyContent, setStoryContent] = useState(''); // 存储匠人故事内容
  const [loading, setLoading] = useState(true); // 控制加载状态
  const artisan = artisans.find((a) => a.name === name);

  // 解析文本内容，将图片和注释转为 React 组件
  const parseStoryContent = (text) => {
    const parts = text.split('\n');
    const parsedContent = [];
  
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim();
  
      if (part.startsWith('![image]')) {
        const imagePath = part.match(/\((.*?)\)/)?.[1]; // 提取路径
        const captionLine = parts[i + 1]?.trim();
        const caption = captionLine?.startsWith('#') ? captionLine.replace(/^#\s*/, '') : '';
        parsedContent.push(
          <div key={i} className="image-container">
            <img src={imagePath} alt="匠人作品" className="artisan-img" />
            {caption && <p className="caption">{caption}</p>}
          </div>
        );
        i++; // 跳过注释那一行
      } else if (part) {
        parsedContent.push(<p key={i}>{part}</p>);
      }
    }
  
    return parsedContent;
  };
  useEffect(() => {
    const loadStory = async () => {
      try {
        const response = await fetch(`/texts/${name}.txt`); // 根据匠人名称加载对应的文本文件
        if (response.ok) {
          const text = await response.text();
          setStoryContent(parseStoryContent(text)); // 设置故事内容
        } else {
          setStoryContent(['该匠人的详细故事尚未加载。']);
        }
      } catch (error) {
        setStoryContent(['加载匠人故事时出错，请稍后再试。']);
      } finally {
        setLoading(false);
      }
    };

    loadStory();
  }, [name]);

  if (loading) {
    return <div>加载中...</div>;
  }

  if (!artisan) return <div>匠人未找到</div>;

  return (
    <div className="artisan-detail-container">
      <div className="header">
      <h1>{artisan.title}</h1>

        <div className="meta">
          <span>{artisan.date}</span> | <span>{artisan.source}</span>
        </div>
      </div>

      <div className="content">
        <div className="image">
          <img src={artisan.image} alt={artisan.name} />
        </div>
        <div className="text">
          <p>{artisan.bio}</p>
          <div className="story-content">
            {/* 这里展示匠人加载的文本文件内容，其中包括图片和注释 */}
            {storyContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDetail;
