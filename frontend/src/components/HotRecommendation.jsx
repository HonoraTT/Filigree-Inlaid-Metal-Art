import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HotRecommendBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgba(139, 69, 69, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/nav/pattern.png') repeat;
    opacity: 0.1;
    z-index: -1;
  }
`;

const Title = styled.div`
  color: #fff;
  font-size: 22px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  font-family: "FangSong", serif;
  
  &::before {
    content: '◆';
    margin-right: 10px;
    font-size: 14px;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex: 0 auto;
`;

const NavItem = styled.div`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-family: "FangSong", serif;
  
  &::before {
    content: '◆';
    margin-right: 10px;
    font-size: 12px;
  }
  
  &:hover {
    color: #ffd700;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
  
  &:hover {
    color: #ffd700;
  }
`;

const HotRecommendation = () => {
  const navigate = useNavigate();

  const navItems = [
    { title: '作品展示', path: '/gallery' },
    { title: '工艺流程', path: '/visit/process' },
    { title: '工艺特点', path: '/visit/features' }
  ];

  return (
    <HotRecommendBar>
      <Title>热点推荐</Title>
      <NavItems>
        {navItems.map((item, index) => (
          <NavItem key={index} onClick={() => navigate(item.path)}>
            {item.title}
          </NavItem>
        ))}
      </NavItems>
    </HotRecommendBar>
  );
};

export default HotRecommendation; 