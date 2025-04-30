import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import GoldenParticles from "../components/ParticlesBackground";
import DunhuangParallaxHeader from "../components/DunhuangParallaxHeader";
import NavigationSection from "../components/NavigationSection";
import HotRecommendation from "../components/HotRecommendation";
import styled from "styled-components";
import React from "react";

// 添加向下滚动引导标识的样式
const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-shadow: 0 0 10px rgba(0,0,0,0.5);
  
  .scroll-text {
    font-size: 25px;
    margin-bottom: 10px;
    opacity: 1;
    color:rgb(247, 245, 243);
  }
  
  .arrow-icon {
    font-size: 32px;
    margin-bottom: 20px;
    animation: bounce 2s infinite;
    color: #fff;
    text-shadow: 
      0 0 20px rgba(255, 255, 255, 0.8),
      0 0 30px rgba(255, 255, 255, 0.6),
      0 0 40px rgba(255, 255, 255, 0.4);
    background: rgba(0, 0, 0, 0.3);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.4);
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

// 添加点击提示组件的样式
const ClickHint = styled(motion.div)`
  position: fixed;
  top: 100px;
  right: 40px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 18px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  z-index: 1000;
  font-family: "FangSong", serif;
  cursor: default;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  .icon {
    margin-left: 12px;
    font-size: 20px;
    animation: pulse 2s infinite;
    color: #ffd700;
  }

  .close-button {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.8);
      color: #fff;
      transform: scale(1.1);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0.8;
    }
  }
`;

const Home = () => {
  const containerRef = useRef(null);
  const [showHint, setShowHint] = React.useState(true);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 动画控制
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.75, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const clickHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  // 处理滚动事件
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // 导航栏目配置
  const navItems = [
    {
      id: 1,
      title: "作品展示",
      description: "欣赏精美传统工艺作品，感受花丝镶嵌艺术的独特魅力。从皇家御用到现代设计，每一件作品都承载着千年工艺的智慧结晶。",
      imageUrl: "/images/nav/gallery.png",
      linkPath: "/gallery",
      index: "01"
    },
    {
      id: 2,
      title: "工艺百科",
      description: "深入了解花丝镶嵌的千年技艺。从材料选择到制作工序，全面解析这项非遗技艺的精妙之处与文化内涵。",
      imageUrl: "/images/nav/technique.png",
      linkPath: "/visit",
      index: "02"
    },
    {
      id: 3,
      title: "匠人档案",
      description: "认识非遗传承大师，聆听他们的工艺故事。这些匠人用毕生心血守护着传统工艺的薪火相传。",
      imageUrl: "/images/nav/artisans.png",
      linkPath: "/events",
      index: "03"
    },
    {
      id: 4,
      title: "文创商店",
      description: "收藏传统艺术精品，将千年工艺带回家。我们精选最具代表性的花丝镶嵌作品，让传统美学融入现代生活。",
      imageUrl: "/images/nav/store.png",
      linkPath: "/store",
      index: "04"
    },
    {
      id: 5,
      title: "有关动态",
      description: "加入传统文化传承，与我们共同守护非遗技艺。无论是合作、学习还是收藏，我们都期待您的联系。",
      imageUrl: "/images/nav/contact.png",
      linkPath: "/research",
      index: "05"
    }
  ];

  return (
    <div ref={containerRef} style={{ 
      position: "relative",
      width: "100%",
      margin: 0,
      padding: 0,
      overflow: "hidden"
    }}>
      {/* 背景图层 */}
      <motion.div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          backgroundImage: "url('/images/HomePageImages/ancientbackground.png')",
          opacity: bgOpacity,
          backgroundSize: "cover",
        }}
      />

      {/* 纯色过渡层 */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
          backgroundColor: "#0a0a0a",
          opacity: overlayOpacity,
        }}
      />

      {/* 粒子层 */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2,
        background:"transparent"
      }}>
        <GoldenParticles />
      </div>

      {/* 点击提示 */}
      {showHint && (
        <ClickHint
          style={{ opacity: clickHintOpacity }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        >
          点击任意位置生成花丝
          <i className="fas fa-hand-pointer icon"></i>
          <div className="close-button" onClick={() => setShowHint(false)}>×</div>
        </ClickHint>
      )}

      {/* 首屏区域 */}
      <div style={{ height: "100vh", position: "relative" }}>
        <DunhuangParallaxHeader scrollProgress={scrollYProgress} />
        <ScrollIndicator 
          style={{ opacity: scrollIndicatorOpacity }}
          onClick={handleScroll}
        >
          <span className="scroll-text">向下滚动探索更多</span>
          <i className="fas fa-chevron-down arrow-icon"></i>
        </ScrollIndicator>
      </div>

      {/* 视频播放区域 */}
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f9f5e9",
        padding: "60px 0",
        position: "relative",
        zIndex: 3,
        borderBottom: "1px solid rgba(139, 90, 43, 0.1)"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "#8b5a2b",
          marginBottom: "2rem",
          fontWeight: "normal",
          position: "relative",
          fontFamily: "'FangSong', serif"
        }}>
          了解花丝镶嵌
          <span style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "3px",
            backgroundColor: "#d4af37"
          }}></span>
        </h2>

        <p style={{
          textAlign: "center",
          fontSize: "1.2rem",
          color: "#666",
          maxWidth: "800px",
          margin: "0 auto 40px",
          lineHeight: "1.6",
          padding: "0 20px"
        }}>
          花丝镶嵌，作为中国传统工艺的瑰宝，融合了金工、镶嵌、錾刻等多种技艺。每一件作品都凝聚着匠人的心血与智慧，展现着中华文化的独特魅力。
        </p>

        <div style={{
          width: "100%",
          maxWidth: "800px",
          aspectRatio: "16/9",
          backgroundColor: "#000",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          margin: "0 20px",
          position: "relative"
        }}>
          <video
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundColor: "transparent"
            }}
            controls
            autoPlay={false}
            playsInline
            poster="/images/video-poster.jpg"
          >
            <source src="/tech.vedio/vedio1.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>

      {/* 导航区域 */}
      <NavigationSection navItems={navItems} />
      
      {/* 热点推荐导航栏 */}
      <HotRecommendation />

      {/* 页脚区域 */}
      <div style={{ 
        width: "100%",
        backgroundColor: "#2c1810",
        position: "relative",
        zIndex: 3,
        margin: 0,
        padding: "40px 0 20px",
        color: "#fff"
      }}>
        <div style={{ 
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "800px",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "40px"
          }}>
            {/* 关于我们 */}
            <div style={{ flex: 1, minWidth: "300px" }}>
              <h3 style={{
                fontSize: "1.5rem",
                color: "#d4af37",
                marginBottom: "20px",
                fontFamily: "'FangSong', serif"
              }}>关于我们</h3>
              <p style={{
                fontSize: "1rem",
                lineHeight: "1.6",
                color: "rgba(255, 255, 255, 0.8)"
              }}>
                我们致力于传承和宣传中国传统花丝镶嵌工艺，通过数字化展示让更多人了解这门古老的手工艺术。
              </p>
            </div>

            {/* 联系方式 */}
            <div style={{ flex: 1, minWidth: "300px" }}>
              <h3 style={{
                fontSize: "1.5rem",
                color: "#d4af37",
                marginBottom: "20px",
                fontFamily: "'FangSong', serif"
              }}>联系方式</h3>
              <ul style={{
                listStyle: "none",
                padding: 0,
                margin: 0
              }}>
                <li style={{ marginBottom: "15px" }}>
                  <a href="mailto:1291288422@qq.com" style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}>
                    <i className="fas fa-envelope"></i>
                    邮箱：1291288422@qq.com
                  </a>
                </li>
                <li style={{ marginBottom: "15px" }}>
                  <div style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px"
                  }}>
                    <i className="fas fa-phone"></i>
                    电话：18062101239
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* GitHub 部分 */}
          <div style={{
            width: "100%",
            maxWidth: "800px",
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "rgba(255, 255, 255, 0.8)",
            padding: "20px",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.05)"
          }}>
            <p style={{
              margin: 0,
              flex: 1,
              fontSize: "0.95rem"
            }}>
              若您有宝贵的修改意见，请点击此处与我们一同共创：
              <a href="https://github.com/HonoraTT/Filigree-Inlaid-Metal-Art" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  color: "#d4af37",
                  textDecoration: "none",
                  marginLeft: "10px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}>
                <i className="fab fa-github"></i>
                GitHub：Filigree-Inlaid-Metal-Art
              </a>
            </p>
          </div>

          {/* 版权信息 */}
          <div style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "20px",
            width: "100%",
            textAlign: "center"
          }}>
            <p style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "0.9rem"
            }}>
              © 2025 花丝镶嵌-丝线与光辉的艺术世界. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;