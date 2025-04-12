import React, { useState, useEffect } from 'react';
import { Menu, Dropdown } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // 确保路径正确
import { UserOutlined, LogoutOutlined, ShoppingCartOutlined, HeartOutlined, CalendarOutlined } from '@ant-design/icons';
import { useUser } from '../contexts/UserContext';
import { useFavorites } from '../contexts/UserFavoritesContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const { favorites } = useFavorites();

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

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // 用户下拉菜单
  const userMenu = (
    <div className="user-dropdown-menu">
      <div className="user-info">
        <UserOutlined />
        <span>{user?.username || user?.phone || user?.email}</span>
      </div>

      <div className="menu-section">
        <h4>我的收藏</h4>
        {favorites?.collections?.length > 0 ? (
          favorites.collections.map((item, index) => (
            <div key={index} className="menu-item">
              <HeartOutlined />
              <span>{item.name}</span>
            </div>
          ))
        ) : (
          <div className="menu-item empty">暂无收藏</div>
        )}
      </div>

      <div className="menu-section">
        <h4>我的预约</h4>
        {favorites?.appointments?.length > 0 ? (
          favorites.appointments.map((item, index) => (
            <div key={index} className="menu-item">
              <CalendarOutlined />
              <span>{item.name}</span>
            </div>
          ))
        ) : (
          <div className="menu-item empty">暂无预约</div>
        )}
      </div>

      <div className="menu-actions">
        <div className="menu-item" onClick={() => navigate('/cart')}>
          <ShoppingCartOutlined /> 我的购物车
        </div>
      </div>

      <div className="contact-info">
        <p>联系我们：</p>
        <p>用户反馈QQ群：723298609</p>
        <p>手机号：18972796498</p>
        <p>邮箱：1291288422@qq.com</p>
      </div>

      <div className="logout-button" onClick={handleLogout}>
        <LogoutOutlined /> 退出登录
      </div>
    </div>
  );

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
        <Menu.Item key="gallery">
          <a href="/gallery" target="_blank" rel="noopener noreferrer">作品展示</a>
        </Menu.Item>
        <Menu.Item key="visit">
          <a href="/visit" target="_blank" rel="noopener noreferrer">工艺百科</a>
        </Menu.Item>
        <Menu.Item key="events">
          <Link to="/events">匠人档案</Link>
        </Menu.Item>
        <Menu.Item key="storelanding">
          <Link to="/store">文创商店</Link>
        </Menu.Item>
        <Menu.Item key="research">
          <Link to="/research">有关动态</Link>
        </Menu.Item>
        
        {user ? (
          <Menu.Item key="user" style={{ marginLeft: 'auto' }}>
            <Dropdown 
              overlay={userMenu} 
              trigger={['click']}
              overlayClassName="user-dropdown"
            >
              <span className="user-menu-trigger">
                <UserOutlined style={{ fontSize: '16px' }} />
                <span style={{ marginLeft: '8px' }}>
                  {user.username || user.phone || user.email}
                </span>
              </span>
            </Dropdown>
          </Menu.Item>
        ) : (
          <Menu.Item key="login" style={{ marginLeft: 'auto' }}>
            <Link to="/login">
              <UserOutlined style={{ fontSize: '16px' }} />
              <span style={{ marginLeft: '8px' }}>登录</span>
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
};

export default Navbar;