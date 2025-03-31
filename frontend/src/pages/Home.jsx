// src/pages/Home.jsx
import React from "react";
import GoldenParticles from "../components/ParticlesBackground";

const Home = () => {
  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      backgroundColor: "#0a0a0a", // 深黑背景
      overflow: "hidden"
    }}>
      {/* 粒子背景 */}
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 0
      }}>
        <GoldenParticles />
      </div>

      {/* 内容层 */}
      <div style={{
        position: "relative",
        zIndex: 1,
        padding: "2rem",
        color: "rgba(255, 255, 255, 0.9)",
        textAlign: "center",
        textShadow: "0 0 10px rgba(212, 175, 55, 0.5)",
        maxWidth: "800px",
        margin: "0 auto",
        top: "50%",
        transform: "translateY(-50%)"
      }}>
        <h1 style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "#D4AF37",
          marginBottom: "1.5rem"
        }}>
          花丝镶嵌艺术传承
        </h1>
        <p style={{
          fontSize: "clamp(1rem, 3vw, 1.2rem)",
          lineHeight: 1.6
        }}>
          千年宫廷技艺 · 当代匠心设计
        </p>
      </div>
    </div>
    
  );

  
};

export default Home;