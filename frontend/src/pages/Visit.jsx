import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Visit.css';

const sections = [
  {
    title: '工艺介绍',
    image: '/images/工艺百科首图/工艺百科1.png',
    link: '/visit/introduction',
  },
  {
    title: '工艺流程',
    image: '/images/process.jpg',
    link: '/visit/process',
  },
  {
    title: '工艺特点',
    image: '/images/features.jpg',
    link: '/visit/features',
  },
  {
    title: '术语解释',
    image: '/images/terms.jpg',
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

