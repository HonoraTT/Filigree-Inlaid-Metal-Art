import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // 核心样式
import 'swiper/css/navigation';  // 导入导航样式
import './Features.css';  // 自定义样式

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const swiperRef = useRef(null);  // 创建 swiper 引用

  const featuresData = [
    {
      title: '精致工艺',
      description: (
        <>
          制作过程的精细：花丝镶嵌工艺以极其精细的金属丝为基础，这些金属丝通常是金、银或其他贵金属，通过手工拉制、捻合、弯曲等工艺变成极细的丝线，甚至可细至发丝般的粗细。细丝的制作和操作需要工匠具有非常高的技能，任何一根丝的粗细、弯曲角度和焊接都需要精准掌控。<br />
          工艺流程的复杂性：整个工艺涉及多个复杂步骤，包括细丝的拉制、丝线的捻合、花丝的焊接和成型，最后将其精确地镶嵌到金属或其他材料上。<br />
          每一个步骤都需要极大的耐心和精湛的技巧，尤其是在图案设计和丝线的交织上，稍有不慎便会影响到最终效果。<br />
          手工精制：花丝镶嵌的工艺几乎全是手工完成，特别是在图案的细节处理上，人工的参与不可替代，这样保证了每一件作品的独特性和精细度。
        </>
      ),
      image: '/images/feature1.jpg',
    },
    {
      title: '艺术性与表现力',
      description: (
        <>
          对贵金属材料的要求：花丝镶嵌工艺通常使用金、银、铜等贵金属作为主要材料。这些金属不仅具备良好的延展性、柔韧性和导热性，还能通过焊接和捻合等工艺更好地完成花丝的制作。同时，贵金属的高贵属性使得花丝镶嵌工艺的作品更具收藏价值和艺术价值。<br />
          底材选择与影响：花丝镶嵌的底材通常为硬度较高的金属（如黄金、白银等）或其他贵重材料（如玉石、珐琅、木材等）。底材的选择对作品的耐久性至关重要。优质的底材不仅能够增加作品的稳定性，还能增强花丝与底材的结合，使作品不易变形或损坏。<br />
          耐久性与牢固性：花丝图案需要通过精细的焊接工艺与底材牢固结合，确保图案不脱落、不变形。尽管工艺非常精细，但由于采用了高品质的金属和精湛的焊接技术，花丝镶嵌作品具有较高的耐久性，可以在长时间佩戴和使用过程中保持稳定的状态。
        </>
      ),
      image: '/images/feature2.jpg',
    },
    {
      title: '材质与耐久性',
      description: (
        <>
          装饰性图案的表达：花丝镶嵌工艺通过细丝的弯曲和交织，形成独特的装饰性图案，这些图案可以是自然界中的花卉、动物，或者是抽象的几何形状。花丝图案的表现方式多种多样，具有极强的艺术感，常常能够打破单一形状的局限，创造出富有层次感、立体感的效果。<br />
          精美与富有创意的设计：花丝镶嵌不仅仅是对金属丝的加工，更是艺术设计的体现。设计师可以在传统图案的基础上加入创新元素，制作出兼具传统与现代美学的作品。花丝图案与镶嵌的底材相结合，不仅表现出精美的细节，还能通过图案的细腻表现出艺术家的创意和审美。<br />
          与其他工艺的结合：花丝镶嵌工艺可以与其他工艺相结合，如雕刻、珐琅、宝石镶嵌等，增加作品的多样性和艺术感。这种工艺的结合让作品更具视觉冲击力和层次感，增加了其装饰价值。
        </>
      ),
      image: '/images/feature3.jpg',
    },
    {
      title: '历史与文化价值',
      description: (
        <>
          传统技艺的传承：花丝镶嵌工艺有着悠久的历史，特别是在中国、印度等古老文明中，它一直是贵族与宗教艺术中不可或缺的组成部分。花丝镶嵌不仅是一项精湛的工艺技巧，还承载了深厚的文化和历史内涵。中国传统花丝镶嵌工艺历史悠久，其技术与艺术价值在古代社会具有重要地位。<br />
          文化象征与精神价值：花丝图案往往富有文化象征意义，如吉祥的花卉图案、宗教符号、民间传说中的故事等。花丝镶嵌作品不仅仅是一件装饰品，它还传递着特定的文化和精神价值，常常代表着美好祝愿、吉祥安康等社会意义。<br />
          艺术与社会地位的体现：在古代，花丝镶嵌常见于皇室、贵族和宗教场所，是身份与地位的象征。如今，花丝镶嵌的艺术价值仍然被广泛认同，许多历史遗物、传统珠宝和工艺品都采用了花丝镶嵌技术，成为珍贵的文化遗产。
        </>
      ),
      image: '/images/feature4.jpg',
    },
  ];

  const handleMouseMove = (e) => {
    const swiperWidth = swiperRef.current.swiper.width; // 获取 swiper 宽度
    const mouseX = e.clientX; // 获取鼠标在视口中的水平位置

    // 如果鼠标在左侧，向右滑动
    if (mouseX < swiperWidth / 2) {
      swiperRef.current.swiper.slidePrev();
    } 
    // 如果鼠标在右侧，向左滑动
    else {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="features-container" onMouseMove={handleMouseMove}>
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
        ref={swiperRef}  // 添加对 Swiper 的引用
        spaceBetween={50} // 每个步骤之间的间隔
        slidesPerView={3} // 每次展示3个图片
        loop={true} // 是否循环
        autoplay={{ delay: 3000 }} // 自动播放
        onSlideChange={(swiper) => setActiveFeature(swiper.activeIndex)} // 滑动时更新文本
        navigation={true} // 开启左右按钮
        speed={1000} // 动画过渡时间
        className="features-swiper"
      >
        {featuresData.map((feature, index) => (
          <SwiperSlide key={index}>
            <div
              className="feature-item"
              onMouseEnter={() => setActiveFeature(index)}  // 鼠标悬停时更新文本
            >
              <img src={feature.image} alt={feature.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Features;

