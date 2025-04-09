import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import GoldenParticles from "../components/ParticlesBackground";
import DunhuangParallaxHeader from "../components/DunhuangParallaxHeader";
import NavigationSection from "../components/NavigationSection";

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

      {/* 首屏区域 */}
      <div style={{ height: "100vh" }}>
        <DunhuangParallaxHeader scrollProgress={scrollYProgress} />
      </div>

      {/* 导航区域 */}
      <NavigationSection navItems={navItems}
       />
    </div>
  );
};

export default Home;