// src/components/Header.js：包含网站导航菜单
//Header 组件的样式
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Filigree Inlaid Metal Art</h1>
    </HeaderWrapper>
  );
};

export default Header;