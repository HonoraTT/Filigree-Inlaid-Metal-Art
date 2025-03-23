// src/pages/Home.js展示首页内容
// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <h2>Welcome to Filigree Inlaid Metal Art</h2>
      <p>Explore our stunning metal art collection.</p>
    </HomeWrapper>
  );
};

export default Home;

  