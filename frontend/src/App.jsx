import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import Footer from './components/Footer'; // 页脚
import About from './pages/About'; // 如果有关于页�?
import Navbar from './components/Navbar';
import Visit from './pages/Visit';
import Events from './pages/Events';
import Learning from './pages/Learning';
import Research from './pages/Research';
import Store from './pages/Store';
import ArtisanDetail from './artisan-detail/ArtisanDetail';


// 定义样式组件
const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
`;

const HeaderStyled = styled.h1`
  font-size: 2rem;
  color: #343a40;
`;

// 主应用组�?
function App() {
  return (
    <Router>
      <Header />
      <Container>
        <HeaderStyled></HeaderStyled>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="/events" element={<Events />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/research" element={<Research />} />
        <Route path="/store" element={<Store />} />
        <Route path="/artisan-detail/:name" element={<ArtisanDetail />} /> {/* 匠人详情页面，使用名字动态路由 */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
