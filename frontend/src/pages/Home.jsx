import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import GoldenParticles from "../components/ParticlesBackground";
import DunhuangParallaxHeader from "../components/DunhuangParallaxHeader";
import { Link } from 'react-router-dom';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 动画控制
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.75, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

  // 导航栏目配置
  const navItems = [
    {
      title: "作品展示",
      desc: "欣赏精美传统工艺作品",
      icon: "🖼️",
      path: "/gallery"
    },
    {
      title: "工艺百科",
      desc: "了解花丝镶嵌技艺",
      icon: "📚",
      path: "/visit"
    },
    {
      title: "匠人档案",
      desc: "认识非遗传承大师",
      icon: "👨‍🎨",
      path: "/event"
    },
    {
      title: "文创商店",
      desc: "收藏传统艺术精品",
      icon: "🛍️",
      path: "/storeLanding"
    },
    {
      title: "联系我们",
      desc: "加入传统文化传承",
      icon: "✉️",
      path: "/research"
    }
  ];

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {/* 背景图层 */}
      <motion.div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          backgroundImage: "url('/images/HomePageImages/ancientbackground.jpg')",
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

      {/* 首屏区域 */}
      <div style={{ height: "100vh" }}>
        <DunhuangParallaxHeader scrollProgress={scrollYProgress} />
      </div>

      {/* 导航模块 */}
      <section style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 3,
          padding: "5%",
          background: `
            linear-gradient(rgba(30, 26, 26, 0.7), rgba(57, 52, 52, 0.7)),
            url('/images/HomePageImages/ExploreMore.png') no-repeat center/cover
          `,
          borderTop: "1px solid rgba(237, 222, 173, 0.2)"
        }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            color: "#D4AF37",
            fontSize: "clamp(3rem, 5vw, 2.5rem)",
            marginBottom: "3rem",
            fontFamily: "'FangSong', serif",
            textAlign: "center"
          }}
        >
          探索更多
        </motion.h2>

        {/* 第一行：作品展示和工艺百科 */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          width: "100%",
          maxWidth: "800px",
          marginBottom: "2rem",
          flexWrap: "wrap"
        }}>
          {navItems.slice(0, 2).map((item, index) => (
            <NavCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* 第二行：匠人档案和文创商店 */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          width: "100%",
          maxWidth: "800px",
          marginBottom: "2rem",
          flexWrap: "wrap"
        }}>
          {navItems.slice(2, 4).map((item, index) => (
            <NavCard key={item.title} item={item} index={index + 2} />
          ))}
        </div>

        {/* 第三行：联系我们（单独居中） */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "1rem"
        }}>
          <NavCard item={navItems[4]} index={4} />
        </div>
      </section>
    </div>
  );
};

// 提取导航卡片为单独组件
const NavCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ 
      y: -5,
      boxShadow: "0 10px 20px rgba(212, 175, 55, 0.2)"
    }}
    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    transition={{ 
      duration: 0.5,
      delay: index * 0.1
    }}
    style={{
      background: "rgba(26, 18, 11, 0.7)",
      borderRadius: "8px",
      padding: "2rem",
      textAlign: "center",
      cursor: "pointer",
      border: "1px solid rgba(212, 175, 55, 0.3)",
      position: "relative",
      overflow: "hidden",
      minHeight: "200px",
      minWidth: "300px",
      maxWidth: "100%",
      flex: "1 1 300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Link 
      to={item.path}
      style={{ 
        textDecoration: "none",
        color: "inherit",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ 
        fontSize: "3rem",
        marginBottom: "1rem",
        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
      }}>
        {item.icon}
      </div>
      <h3 style={{
        color: "#D4AF37",
        fontSize: "1.5rem",
        marginBottom: "0.5rem"
      }}>
        {item.title}
      </h3>
      <p style={{
        color: "rgba(255,255,255,0.7)",
        fontSize: "1rem"
      }}>
        {item.desc}
      </p>
    </Link>
  </motion.div>
);

export default Home;