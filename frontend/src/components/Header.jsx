// src/components/Header.js：包含网站导航菜单
//Header 组件的样式
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar'; // 导入 Navbar 组件




const Header = () => {
  return (
    <header>
    <Navbar />  {/* 渲染 Navbar */}
  </header>
  );
};

export default Header;