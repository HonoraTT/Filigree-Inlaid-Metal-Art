import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // 核心样式
import 'swiper/css/navigation';  // 导入导航样式
import './Features.css';  // 自定义样式
import Particles from 'react-tsparticles';  // 引入 react-tsparticles
/**
 * 功能组件：Features
 *
 * 用于展示花丝镶嵌工艺的特点，包括精致工艺、艺术性与表现力、材质与耐久性、历史与文化价值等。
 * 组件包含一个文本描述区域和一个图片轮播区域，用户可以通过鼠标移动切换图片，点击图片可以查看对应的详细描述。
 *
 * @returns 返回 JSX 元素，展示花丝镶嵌工艺的特点。
 */
const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [fade, setFade] = useState(false);
  const swiperRef = useRef(null);  // 创建 swiper 引用

  // 添加标题设置的 useEffect
  useEffect(() => {
    const originalTitle = document.title;
    document.title = '工艺特点';
    
    return () => {
      document.title = originalTitle;
    };
  }, []);

  const featuresData = [
    {
      title: '精致工艺',
      icon: '/images/图标.png',
      description: (
        <>
          <p>制作过程的精细：花丝镶嵌工艺以极其精细的金属丝为基础，这些金属丝通常是金、银或其他贵金属，通过手工拉制、捻合、弯曲等工艺变成极细的丝线，甚至可细至发丝般的粗细。细丝的制作和操作需要工匠具有非常高的技能，任何一根丝的粗细、弯曲角度和焊接都需要精准掌控。</p>
          <p>工艺流程的复杂性：整个工艺涉及多个复杂步骤，包括细丝的拉制、丝线的捻合、花丝的焊接和成型，最后将其精确地镶嵌到金属或其他材料上。每一个步骤都需要极大的耐心和精湛的技巧，尤其是在图案设计和丝线的交织上，稍有不慎便会影响到最终效果。</p>
          <p>手工精制：花丝镶嵌的工艺几乎全是手工完成，特别是在图案的细节处理上，人工的参与不可替代，这样保证了每一件作品的独特性和精细度。</p>
        </>
      ),
    },
    {
      title: '艺术性与表现力',
      icon: '/images/图标.png',
      description: (
        <>
          <p>对贵金属材料的要求：花丝镶嵌工艺通常使用金、银、铜等贵金属作为主要材料。这些金属不仅具备良好的延展性、柔韧性和导热性，还能通过焊接和捻合等工艺更好地完成花丝的制作。同时，贵金属的高贵属性使得花丝镶嵌工艺的作品更具收藏价值和艺术价值。</p>
          <p>底材选择与影响：花丝镶嵌的底材通常为硬度较高的金属（如黄金、白银等）或其他贵重材料（如玉石、珐琅、木材等）。底材的选择对作品的耐久性至关重要。优质的底材不仅能够增加作品的稳定性，还能增强花丝与底材的结合，使作品不易变形或损坏。</p>
          <p>耐久性与牢固性：花丝图案需要通过精细的焊接工艺与底材牢固结合，确保图案不脱落、不变形。尽管工艺非常精细，但由于采用了高品质的金属和精湛的焊接技术，花丝镶嵌作品具有较高的耐久性，可以在长时间佩戴和使用过程中保持稳定的状态。</p>
        </>
      ),
    },
    {
      title: '材质与耐久性',
      icon: '/images/图标.png',
      description: (
        <>
          <p>装饰性图案的表达：花丝镶嵌工艺通过细丝的弯曲和交织，形成独特的装饰性图案，这些图案可以是自然界中的花卉、动物，或者是抽象的几何形状。花丝图案的表现方式多种多样，具有极强的艺术感，常常能够打破单一形状的局限，创造出富有层次感、立体感的效果。</p>
          <p>精美与富有创意的设计：花丝镶嵌不仅仅是对金属丝的加工，更是艺术设计的体现。设计师可以在传统图案的基础上加入创新元素，制作出兼具传统与现代美学的作品。花丝图案与镶嵌的底材相结合，不仅表现出精美的细节，还能通过图案的细腻表现出艺术家的创意和审美。</p>
          <p>与其他工艺的结合：花丝镶嵌工艺可以与其他工艺相结合，如雕刻、珐琅、宝石镶嵌等，增加作品的多样性和艺术感。这种工艺的结合让作品更具视觉冲击力和层次感，增加了其装饰价值。</p>
        </>
      ),
    },
    {
      title: '历史与文化价值',
      icon: '/images/图标.png',
      description: (
        <>
          <p>传统技艺的传承：花丝镶嵌工艺有着悠久的历史，特别是在中国、印度等古老文明中，它一直是贵族与宗教艺术中不可或缺的组成部分。花丝镶嵌不仅是一项精湛的工艺技巧，还承载了深厚的文化和历史内涵。中国传统花丝镶嵌工艺历史悠久，其技术与艺术价值在古代社会具有重要地位。</p>
          <p>文化象征与精神价值：花丝图案往往富有文化象征意义，如吉祥的花卉图案、宗教符号、民间传说中的故事等。花丝镶嵌作品不仅仅是一件装饰品，它还传递着特定的文化和精神价值，常常代表着美好祝愿、吉祥安康等社会意义。</p>
          <p>艺术与社会地位的体现：在古代，花丝镶嵌常见于皇室、贵族和宗教场所，是身份与地位的象征。如今，花丝镶嵌的艺术价值仍然被广泛认同，许多历史遗物、传统珠宝和工艺品都采用了花丝镶嵌技术，成为珍贵的文化遗产。</p>
        </>
      ),
    },
  ];
  
  const handleMouseEnter = (index) => {
    setFade(true); // 开始淡出效果
    setTimeout(() => {
      setActiveFeature(index); // 更新文本内容
      setFade(false); // 结束淡入效果
    }, 500); // 500ms后切换文本
  };

  return (
    <div className="features-container" >
       {/* 使用 react-tsparticles 组件 */}
       <Particles
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 0.1,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.5,
              width: 1,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="features-header">
        <h1>花丝镶嵌工艺特点</h1>
      </div>

      {/* 描述区域 */}
      <div className="context-box">
        <h2>{featuresData[activeFeature].title}</h2>
        <p>{featuresData[activeFeature].description}</p>
      </div>

      {/* 图片轮播区域 */}
      <Swiper
  ref={swiperRef}
  spaceBetween={30}
  slidesPerView={4} // 增加显示数量
  // 其他参数保持原样
>
  {featuresData.map((feature, index) => (
    <SwiperSlide key={index}>
      <div
        className="feature-item"
        onMouseEnter={() => setActiveFeature(index)}
      >
        <div className="icon-wrapper">
  <div className="feature-icon-box">
    <img src={feature.icon} alt={feature.title} className="feature-icon" />
  </div>
  <span className="feature-title">{feature.title}</span>
</div>

      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
};

export default Features;

