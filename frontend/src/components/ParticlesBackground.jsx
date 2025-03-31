// src/components/ParticlesBackground.jsx
import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// 传统纹样SVG路径（缠枝纹简化版）
const TRADITIONAL_PATHS = {
  branch: "M20,20 C40,40 60,40 80,20 C100,0 120,0 140,20", // 缠枝纹
  cloud: "M10,50 Q25,10 50,50 T90,50", // 云纹
  square: "M10 10 L90 10 L90 90 L10 90 Z" // 回字纹
};

const GoldenParticles = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  // 检测设备类型
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 粒子初始化
  const particlesInit = async (engine) => {
    try {
      await loadSlim(engine);
      setLoading(false);
    } catch (error) {
      console.error("粒子初始化失败:", error);
    }
  };

  return (
    <>
      {loading && (
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#D4AF37",
          zIndex: 10
        }}>
          加载传统纹样...
        </div>
      )}

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: isMobile ? 30 : 80 },
            color: { value: "#D4AF37" },
            shape: {
              type: "path",
              options: {
                path: TRADITIONAL_PATHS.branch, // 默认使用缠枝纹
                fill: false,
                stroke: { width: 0.5, color: "#D4AF37" }
              }
            },
            size: { value: 6, random: true },
            links: {
              enable: true,
              distance: 150,
              color: "#FFD700",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: isMobile ? 0.3 : 1,
              trail: {
                enable: true,
                length: 10,
                fill: { color: "#000000" }
              }
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: { enable: true, force: 20 }
              }
            }
          }
        }}
      />
    </>
  );
};

export default GoldenParticles;