import { motion, useTransform } from 'framer-motion';

const DunhuangParallaxHeader = ({ scrollProgress = { get: () => 0 } }) => {
  // 动画范围控制
  const animationRange = [0, 0.1]; // 调整为0.1使元素提前消失
  
  // 卷轴动画：左卷轴向左滑出，右卷轴向右滑出
  const leftScrollX = useTransform(scrollProgress, animationRange, ["0%", "-100%"]);
  const rightScrollX = useTransform(scrollProgress, animationRange, ["0%", "100%"]);
  
  // 统一控制所有元素的消失
  const elementsOpacity = useTransform(scrollProgress, animationRange, [1, 0]);

  return (
    <div style={{
      position: "relative",
      height: "100vh",
      width: "100vw"
    }}>
      {/* 背景层 */}
      <motion.div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/images/HomePageImages/ancientbackground.jpg')",
          //backgroundColor: "rgba(0,0,0,0.3)", // 改用半透明黑色测试
          backgroundSize: "cover",
          zIndex: 0,
          opacity: useTransform(scrollProgress, animationRange, [0.15, 0])
        }}
      />

      {/* 左侧卷轴 - 向左滑动 */}
      <motion.div
        style={{
          position: "fixed",
          left: "10%",
          top: "50%",
          height: "60vh",
          width: "35vw",
          minWidth: "200px",
          backgroundImage: "url('/images/HomePageImages/left-scroll.png')",
          backgroundSize: "contain",
          backgroundPosition: "left center",
          backgroundRepeat: "no-repeat",
          zIndex: 8,
          x: leftScrollX,
          opacity: elementsOpacity,
          filter: "drop-shadow(2px 0 8px rgba(0,0,0,0.5))",
          transform: "translateY(-50%)"
        }}
      />
      
      {/* 右侧卷轴 - 向右滑动 */}
      <motion.div
        style={{
          position: "fixed",
          right: "10%",
          top: "50%",
          height: "60vh",
          width: "35vw",
          minWidth: "200px",
          backgroundImage: "url('/images/HomePageImages/right-scroll.png')",
          backgroundSize: "contain",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          zIndex: 8,
          x: rightScrollX,
          opacity: elementsOpacity,
          filter: "drop-shadow(-2px 0 8px rgba(0,0,0,0.5))",
          transform: "translateY(-50%)"
        }}
      />
      
      {/* 主标题 */}
      <motion.div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          textAlign: "center",
          opacity: elementsOpacity,
          pointerEvents: "none"
        }}
      >
        <h1 style={{
          fontSize: "clamp(11rem, 10vw, 6rem)",
          fontFamily: "'HuaSiFont', serif",
          color:"rgba(244, 241, 237, 0.95)",
          letterSpacing: "0.5rem",
          margin: 0,
          textShadow: "0 0 10px rgba(101, 64, 10, 0.7)"
        }}>
          花丝镶嵌
        </h1>
        <motion.p
          style={{
            fontSize: "2rem",
            fontFamily: "'HuaSiFont', serif",
            color: "rgba(244, 241, 237, 0.95)",
            letterSpacing: "0.3rem",
            marginTop: "1rem"
          }}
        >
          The Art of Filigree Inlay
        </motion.p>
      </motion.div>
    </div>
  );
};

export default DunhuangParallaxHeader;