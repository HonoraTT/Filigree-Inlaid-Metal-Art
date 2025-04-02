import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Visit.css';

const sections = [
  {
    title: '工艺介绍',
    image: '/images/工艺百科首图/工艺首图1.png',
    link: '/visit/introduction',
  },
  {
    title: '工艺流程',
    image: '/images/工艺百科首图/工艺首图2.png',
    link: '/visit/process',
  },
  {
    title: '工艺特点',
    image: '/images/工艺百科首图/工艺首图3.png',
    link: '/visit/features',
  },
  {
    title: '术语解释',
    image: '/images/工艺百科首图/工艺首图4.png',
    link: '/visit/terms',
  },
];

const Visit = () => {
  const navigate = useNavigate();

  return (
    <div className="visit-page">
      {sections.map((section, index) => (
        <div
          key={index}
          className="visit-section"
          style={{ backgroundImage: `url(${section.image})` }}
          onClick={() => navigate(section.link)}
        >
          <div className="section-overlay">
            <h2>{section.title}</h2>
            <p>点击查看详情</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Visit;

