import React, { useEffect, useRef } from 'react';
import './Introduction.css';

const Introduction = () => {
  const timelineContainerRef = useRef(null);

  useEffect(() => {
    // 滚动动画处理
    const handleScroll = () => {
      const elements = document.querySelectorAll('.timeline-item');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="introduction-container">
      <h1 className="main-title">花丝镶嵌技艺发展史</h1>

      {/* 时间线容器包裹所有内容 */}
      <div className="timeline-container" ref={timelineContainerRef}>
        <div className="center-line"></div>

        {/* 所有时间线项都在容器内 */}
        <div className="timeline-item left">
          <div className="content">
            <h3>商周起源（前1600-前256）</h3>
            <p style={{ textIndent: '2em' }}>商周青铜范铸法与失蜡法为花丝技艺奠定造型基础，妇好墓金箔虎形饰展现早期锤揲工艺，
        西周金腰带饰已使用穿孔镶嵌技术。此时期确立的贵金属加工体系，成为后世花丝镶嵌的源头。</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h3>春秋战国时期</h3>
            <p style={{ textIndent: '2em' }}>花丝镶嵌工艺得到了初步发展。工艺水平逐渐提高，出现了一些较为复杂的金银饰品和器物。如河南洛阳金村出土的战国金银错鼎、壶等器物，运用了镶嵌宝石、绿松石等工艺，展现出当时高超的技艺。</p>
          </div>
        </div>

        {/* 其他时期内容 */}
        <div className="timeline-item left">
          <div className="content">
            <h3>秦汉时期</h3>
            <p style={{ textIndent: '2em' }}>花丝镶嵌工艺进一步发展，与当时的厚葬习俗相结合，大量用于制作丧葬用品和陪葬品。同时，在宫廷和贵族阶层中，金银饰品和器物的使用也更加普遍。陕西西安汉长安城遗址出土的大量金银器，工艺精湛，造型多样。</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h3>唐代</h3>
            <p style={{ textIndent: '2em' }}>是花丝镶嵌工艺的繁荣时期。这一时期，社会经济繁荣，文化交流频繁，花丝镶嵌工艺吸收了外来文化的元素，风格更加华丽、大气。唐代的金银器造型丰富，纹饰精美，如西安何家村出土的唐代窖藏金银器，堪称唐代花丝镶嵌工艺的经典之作。</p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="content">
            <h3>宋代</h3>
            <p style={{ textIndent: '2em' }}>工艺风格趋于写实和细腻。宋代的花丝镶嵌作品更加注重细节和质感，造型小巧玲珑，纹饰精致入微。在一些宋代的金银首饰和器物上，可以看到花鸟、人物等题材的精美图案。</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h3>明清时期</h3>
            <p style={{ textIndent: '2em' }}>达到了鼎盛阶段。明清两代宫廷设立了专门的造办处，集中了全国的能工巧匠，花丝镶嵌工艺得到了极大的发展和提高。这一时期的作品造型端庄、纹饰繁复，大量运用了宝石、珍珠等进行镶嵌，尽显皇家的奢华与尊贵。北京故宫博物院收藏的许多明清时期的金银器，都是花丝镶嵌工艺的杰出代表。</p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="content">
            <h3>近现代</h3>
            <p style={{ textIndent: '2em' }}>随着时代的变迁和社会的发展，花丝镶嵌工艺面临着一定的挑战。但在政府和社会各界的重视下，这一传统工艺逐渐得到了保护和传承，并且不断创新发展，融入了现代设计理念和审美观念。</p>
          </div>
        </div>
      </div>

      <div className="meaning-section">
        <h2>传承意义</h2>
        <p style={{ textIndent: '2em' }}>花丝镶嵌工艺以其精湛的技艺和独特的艺术风格，展现了中国传统工艺的魅力。其制作过程复杂，需要经过多道工序，每一件作品都凝聚了工匠们的心血和智慧，具有极高的艺术欣赏价值。作为中国传统文化的重要组成部分，花丝镶嵌工艺承载着丰富的历史信息和文化内涵。通过研究和欣赏花丝镶嵌作品，可以了解不同历史时期的社会风貌、审美观念和工艺水平。在古代，花丝镶嵌作品常常与权力、财富、地位等联系在一起。例如，皇家使用的金银器上常常镶嵌宝石，象征着皇权的至高无上和财富的雄厚。同时，一些花丝镶嵌作品还具有吉祥寓意，如龙凤图案象征着吉祥如意、幸福美满。花丝镶嵌工艺体现了中华民族的勤劳、智慧和创造力。工匠们在长期的实践中不断探索和创新，形成了独特的工艺技法和艺术风格，这种精神是中华民族传统文化的重要组成部分。</p>
      </div>
    </div>
  );
};

export default Introduction;