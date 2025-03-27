//Footer.js：页面底部的版权信息或其他内容
//Footer 组件的样式
// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #222;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2025 Filigree Inlaid Metal Art. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
