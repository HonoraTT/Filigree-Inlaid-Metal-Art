import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';

// 定义样式组件
const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
`;

const HeaderStyled = styled.h1`
  font-size: 2rem;
  color: #343a40;
`;

// 主应用组件
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <HeaderStyled>Filigree Inlaid Metal Art</HeaderStyled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
