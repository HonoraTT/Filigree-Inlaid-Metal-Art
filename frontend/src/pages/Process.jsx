import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // 核心样式
import 'swiper/css/navigation';  // 导入导航样式（如果需要）

import './Process.css';  // 自定义样式

const Process = () => {
  return (
    <div className="process-page">
      <h1>工艺流程</h1>
      <Swiper
        spaceBetween={50} // 每个步骤之间的间隔
        slidesPerView={1} // 每次展示一个步骤
        loop={true} // 是否循环
        autoplay={{ delay: 3000 }} // 自动播放，每个步骤展示的时间
        navigation={true} // 开启左右按钮
        speed={1000} // 动画过渡时间
      >
        <SwiperSlide>
          <div className="step">
            <h2>步骤 1</h2>
            <p>这里是步骤 1 的详细介绍。</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="step">
            <h2>步骤 2</h2>
            <p>这里是步骤 2 的详细介绍。</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="step">
            <h2>步骤 3</h2>
            <p>这里是步骤 3 的详细介绍。</p>
          </div>
        </SwiperSlide>
        {/* 添加更多步骤 */}
      </Swiper>
    </div>
  );
};

export default Process;
