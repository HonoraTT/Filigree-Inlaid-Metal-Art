import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Navbar.css'; // 确保路径正确

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <Menu 
        mode="horizontal"
        className="custom-menu"
        theme="dark" // 使用暗色主题避免默认亮色冲突
        selectable={false}  // 如果不需要选中状态
        style={{transition: 'none'}}  // 禁用动画
      >
        <Menu.Item key="home">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="learning">
          <Link to="/learning">作品展示</Link>
        </Menu.Item>
        <Menu.Item key="visit">
          <Link to="/visit">工艺百科</Link>
        </Menu.Item>
        <Menu.Item key="events">
          <Link to="/events">匠人档案</Link>
        </Menu.Item>
        <Menu.Item key="store">
          <Link to="/store">文创商店</Link>
        </Menu.Item>
        <Menu.Item key="research">
          <Link to="/research">联系我们</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;