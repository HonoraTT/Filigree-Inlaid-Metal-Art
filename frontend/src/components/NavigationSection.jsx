import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const NavigationSection = ({ navItems }) => {
  return (
    <section style={{
      padding: "5% 10%",
      position: "relative",
      zIndex: 3,
      // 新增背景图片设置
      background: `
        linear-gradient(rgba(249, 245, 233, 0.9), rgba(249, 245, 233, 0.9)),
        url('/images/nav/background.png') no-repeat center/cover
      `,
      // 保持原有背景色作为备用（当图片加载失败时显示）
      //backgroundColor: "#f9f5e9",
      // 添加一些间距
      borderTop: "1px solid rgba(139, 90, 43, 0.1)",
      borderBottom: "1px solid rgba(139, 90, 43, 0.1)"
    }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          color: "#8b5a2b",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          marginBottom: "3rem",
          fontFamily: "'FangSong', serif",
          textAlign: "center",
          position: "relative"
        }}
      >
        探索花丝镶嵌
        <span style={{
          position: "absolute",
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "3px",
          backgroundColor: "#d4af37"
        }}></span>
      </motion.h2>

      {navItems.map((item, index) => (
        <NavBlock 
          key={item.id} 
          item={item} 
          reverse={index % 2 !== 0} 
        />
      ))}
    </section>
  );
};

const NavBlock = ({ item, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.6 }}
      style={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        margin: "5rem 0",
        gap: "3rem",
        flexWrap: "wrap"
      }}
    >
      {/* 文字内容 */}
      <div style={{
        flex: 1,
        minWidth: "300px",
        position: "relative",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        borderTop: "4px solid #d4af37"
      }}>
        <span style={{
          position: "absolute",
          top: "-25px",
          left: "30px",
          fontSize: "3rem",
          fontWeight: "bold",
          color: "rgba(212, 175, 55, 0.2)",
          fontFamily: "'Arial', sans-serif"
        }}>
          {item.index}
        </span>
        
        <h3 style={{
          color: "#8b5a2b",
          fontSize: "1.8rem",
          marginBottom: "1rem",
          fontFamily: "'FangSong', serif",
          position: "relative",
          zIndex: 1
        }}>
          {item.title}
        </h3>
        
        <p style={{
          color: "#666",
          lineHeight: "1.8",
          marginBottom: "2rem",
          fontSize: "1.1rem"
        }}>
          {item.description}
        </p>
        
        <a 
          href={item.linkPath}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.8rem 1.5rem",
            backgroundColor: "transparent",
            color: "#d4af37",
            border: "1px solid #d4af37",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "500",
            transition: "all 0.3s ease",
            ":hover": {
              backgroundColor: "#d4af37",
              color: "#fff"
            }
          }}
        >
          了解更多 →
        </a>
      </div>
      
      {/* 图片 */}
      <div style={{
        flex: 1,
        minWidth: "300px",
        height: "400px",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
      }}>
        <img 
          src={item.imageUrl} 
          alt={item.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
            ":hover": {
              transform: "scale(1.05)"
            }
          }}
        />
      </div>
    </motion.div>
  );
};

export default NavigationSection;