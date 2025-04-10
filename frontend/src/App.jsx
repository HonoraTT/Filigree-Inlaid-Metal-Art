import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { UserProvider } from './contexts/UserContext';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import Footer from './components/Footer'; // 页脚
import About from './pages/About'; // 如果有关于页�
import Navbar from './components/Navbar';
import Visit from './pages/Visit';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Cart from './components/Cart/Cart';

import Research from './pages/Research';
import StoreLanding from './pages/StoreLanding';
import StoreShop from './pages/StoreShop';
import ProductDetail from './pages/ProductDetail'; // 确保导入ProductDetail
import ArtisanDetail from './artisan-detail/ArtisanDetail';
import Introduction from './pages/Introduction';
import Process from './pages/Process';
import Features from './pages/Features';
import Terms from './pages/Terms';

import Login from  './pages/Login';

// 定义样式组件
const Container = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
`;

const HeaderStyled = styled.h1`
  font-size: 2rem;
  color: #343a40;
`;


// 主应用组�
function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Container>
          <HeaderStyled></HeaderStyled>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/research" element={<Research />} />
            <Route path="/store" element={<StoreLanding />} />
            <Route path="/shop" element={<StoreShop />} />
            <Route path="/shop/:id" element={<ProductDetail />} />  {/* 商品详情页面 */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/artisan-detail/:name" element={<ArtisanDetail />} /> {/* 匠人详情页面，使用名字动态路由 */}
            <Route path="/visit/introduction" element={<Introduction />} />
            <Route path="/visit/process" element={<Process />} />
            <Route path="/visit/features" element={<Features />} />
            <Route path="/visit/terms" element={<Terms />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
