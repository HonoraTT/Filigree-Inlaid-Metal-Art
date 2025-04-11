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
import ThreeDView from './components/3DView';
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

// 无导航栏布局组件
const NoNavbarLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

// 主应用组件
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <>
              <Header />
              <Container>
                <HeaderStyled></HeaderStyled>
                <Home />
              </Container>
              <Footer />
            </>
          } />
          <Route path="/home" element={
            <>
              <Header />
              <Container>
                <HeaderStyled></HeaderStyled>
                <Home />
              </Container>
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <Container>
                <HeaderStyled></HeaderStyled>
                <About />
              </Container>
              <Footer />
            </>
          } />
          <Route path="/events" element={
            <>
              <Header />
              <Container>
                <HeaderStyled></HeaderStyled>
                <Events />
              </Container>
              <Footer />
            </>
          } />
          <Route path="/research" element={
            <>
              <Header />
              <Container>
                <HeaderStyled></HeaderStyled>
                <Research />
              </Container>
              <Footer />
            </>
          } />
          <Route path="/store" element={
            <>
              <Header />
              <Container>
                <HeaderStyled></HeaderStyled>
                <StoreLanding />
              </Container>
              <Footer />
            </>
          } />
          <Route path="/shop" element={
            <>
              <Header />
              <Container>
                <HeaderStyled></HeaderStyled>
                <StoreShop />
              </Container>
              <Footer />
            </>
          } />
          <Route path="/shop/:id" element={
            <>
              <Header />
              <Container>
                <HeaderStyled></HeaderStyled>
                <ProductDetail />
              </Container>
              <Footer />
            </>
          } />
          <Route path="/cart" element={
            <>
              <Header />
              <Container>
                <HeaderStyled></HeaderStyled>
                <Cart />
              </Container>
              <Footer />
            </>
          } />
          <Route path="/artisan-detail/:name" element={
            <>
              <Header />
              <Container>
                <HeaderStyled></HeaderStyled>
                <ArtisanDetail />
              </Container>
              <Footer />
            </>
          } />
          
          {/* 无导航栏的路由 */}
          <Route path="/gallery" element={
            <>
              <Gallery />
              <Footer />
            </>
          } />
          <Route path="/visit" element={
            <>
              <Visit />
              <Footer />
            </>
          } />
          <Route path="/visit/introduction" element={
            <>
              <Introduction />
              <Footer />
            </>
          } />
          <Route path="/visit/process" element={
            <>
              <Process />
              <Footer />
            </>
          } />
          <Route path="/visit/features" element={
            <>
              <Features />
              <Footer />
            </>
          } />
          <Route path="/visit/terms" element={
            <>
              <Terms />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
