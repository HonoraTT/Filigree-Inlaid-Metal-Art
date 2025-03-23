import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import Footer from './components/Footer'; // 页脚
import About from './pages/About'; // 如果有关于页面

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
          <Route path="/about" element={<About />} /> {/* 如果有 About 页面 */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
