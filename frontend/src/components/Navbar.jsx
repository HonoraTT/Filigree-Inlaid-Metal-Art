import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Navbar.css';

const { SubMenu } = Menu;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动事件，动态更新导航栏透明度
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Menu mode="horizontal" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Menu.Item key="home">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="learning">
        <Link to="/learning">作品展示</Link>
      </Menu.Item>
      <Menu.Item key="visit">
        <Link to="/visit">关于工艺</Link>
      </Menu.Item>
      <Menu.Item key="events">
        <Link to="/events">匠人故事</Link>
      </Menu.Item>
      <Menu.Item key="learning">
        <Link to="/learning">文创商店</Link>
      </Menu.Item>
      <Menu.Item key="research">
        <Link to="/research">联系我们</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
