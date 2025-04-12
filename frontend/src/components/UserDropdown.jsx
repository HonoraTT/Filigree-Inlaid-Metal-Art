import React, { useState } from 'react';
import { useUser } from '../hooks/useUser';
import { useFavorites } from '../hooks/useFavorites';
import '../styles/UserDropdown.css';

const UserDropdown = () => {
  const { user, logout } = useUser();
  const { collections, appointments } = useFavorites();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-dropdown">
      <div className="user-info" onClick={toggleDropdown}>
        <span>{user?.username || '未登录'}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-section">
            <h3>我的收藏 ({collections.length})</h3>
            {collections.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </div>
          <div className="dropdown-section">
            <h3>我的预约 ({appointments.length})</h3>
            {appointments.map((item, index) => (
              <div key={index}>{item.name}</div>
            ))}
          </div>
          <button onClick={logout} className="logout-btn">
            退出登录
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown; 