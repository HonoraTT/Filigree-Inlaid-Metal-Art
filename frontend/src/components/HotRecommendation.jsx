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
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s ease, transform 0.3s ease;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
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

const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: all 0.3s ease;
  width: 32px;
  height: 32px;
  border-radius: 50%;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  &::before {
    content: '×';
    line-height: 1;
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
  position: relative;
  
  &::before {
    content: '◆';
    margin-right: 10px;
    font-size: 14px;
  }

  &::after {
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-50%);
    height: 24px;
    width: 1px;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex: 0 auto;
  margin-left: 40px;
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

const HotRecommendation = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isClosed, setIsClosed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!isClosed) {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        setIsVisible(scrollY >= windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    setIsVisible(false);
  };

  const navItems = [
    { title: '作品展示', path: '/gallery' },
    { title: '工艺流程', path: '/visit/process' },
    { title: '工艺特点', path: '/visit/features' }
  ];

  if (isClosed) {
    return null;
  }

  return (
    <HotRecommendBar className={isVisible ? 'visible' : ''}>
      <Title>热点推荐</Title>
      <NavItems>
        {navItems.map((item, index) => (
          <NavItem key={index} onClick={() => navigate(item.path)}>
            {item.title}
          </NavItem>
        ))}
      </NavItems>
      <CloseButton onClick={handleClose} aria-label="关闭热点推荐" />
    </HotRecommendBar>
  );
};

export default HotRecommendation; 