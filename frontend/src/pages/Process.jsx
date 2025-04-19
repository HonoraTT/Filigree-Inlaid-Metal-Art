import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Process.css';

const Process = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const videoLinks = [
    {
      title: "视频一：工艺流程",
      url: "/tech.vedio/vedio1.mp4"
    },
    {
      title: "视频二：传统手艺掐花丝",
      url: "/tech.vedio/vedio2.mp4"
    }
  ];

  const openModal = (url) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  return (
    <div className="process-page">
      <h1 className="animated-title">花丝镶嵌传统工艺流程</h1>
      <Swiper
        className="swiper"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={true}
        speed={1000}
        modules={[Navigation]}
      >
        {/* 第一步：掐丝 */}
        <SwiperSlide>
          <div className="step-layout-horizontal">
            <div className="step-image">
              <img src="/images/工艺流程/掐丝.png" alt="掐丝" />
            </div>
            <div className="step-text">
              <h2>掐丝</h2>
              <p>掐丝前要把拉成的单根素丝按图纸工艺要求搓成所需要的花丝，搓花丝所需要的工具有搓丝板、搓丝木、镊子、制子等。搓丝是将两根或多根圆素丝放在搓丝板上、用搓丝木将其搓成一体成花丝。搓丝分为正向和反向、向正向搓为正向花丝、向反向搓为反向花丝，正向花丝和反向花丝由工艺需要而定。花丝搓好后就要进行掐丝。掐丝时镊子必须直立，摆出图形，横要平竖要直。顿错要利落，行内人称"刻儿"，线条要流畅，尤其是掐"刻儿"时，要注意角度。 镊子找准位置后，要用力适度，一步到位，避免来回找出现"肉梭"。掐花瓣时弧度要圆滑畅、线条过渡要平顺自然，不要出现凹凸不平的现象。</p>
            </div>
          </div>
        </SwiperSlide>

        {/* 第二步：填丝 */}
        <SwiperSlide>
          <div className="step-layout-horizontal">
            <div className="step-image">
              <img src="/images/工艺流程/工艺2.png" alt="填丝" />
            </div>
            <div className="step-text">
              <h2>填丝</h2>
              <p>填丝是将制好的花丝填入轮廓内。填丝前按图纸要求将一定形态的丝掐成所需的图案轮廓，外轮廓掐好后，将制好的花丝纹路用镊子往里填，这一过程就叫填丝。填丝是花丝工艺中比较单调且耗时的工序，需要工匠具备高度的耐心和细心。在填充过程中，工匠需注意花丝的走向和排列，以保证图案的完整性和美观性，同时还要避免花丝出现松动或移位。填丝种类很多，常用的有填巩丝、填卷头、填花瓣、填各种锦地等……通过填丝，可以使花丝镶嵌作品的图案更加饱满、丰富，增强作品的层次感和立体感，让原本单调的图案轮廓变得生动、富有质感，从而提升整个作品的艺术价值。</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="step-layout-horizontal">
            <div className="step-image">
              <img src="/images/工艺流程/工艺3.png" alt="攒活" />
            </div>
            <div className="step-text">
              <h2>攒活</h2>
              <p>攒活就是组装，这里的攒活主要为花丝攒活、花丝的攒活分为平攒、叠加攒和部件攒。平攒就是将平面的花丝纹样连接在一起。叠加攒就是将相同或不同的花丝纹样一层一层地攒接在一起。部件攒就是各个部件相连。攒活时，首先按图纸和设计的要求将一件作品所需的各个部件准备好，归拢在一起。攒活技艺师傅要先读懂图纸的整体结构，并深刻理解设计的要求，然后按照图纸结构和设计要求排好攒活的次序，先装什么后装什么，最后准备进行焊接。攒活是焊接的基础，攒活技艺师傅要考虑全面，要有想象空间，结构感要强，组装次序要科学合理，备件要齐全，不能出现焊接不对、丢活落件的现象。有的作品一出现反复就会前功尽弃。</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="step-layout-horizontal">
            <div className="step-image">
              <img src="/images/工艺流程/工艺4.png" alt="焊接" />
            </div>
            <div className="step-text">
              <h2>焊接</h2>
              <p>焊接是花丝镶嵌作品中技术难度较高的一门技艺、不同于一般机械工程的焊接，这种焊接为特种工艺焊接。因为特种工艺焊接对象没有批量性，材料变化性大，所以焊接时一般凭技艺师傅的经验来确定焊药的品种、比例、多少，焊点的位置、数量，火势的大小，吹烧的时间等。焊药还分黄焊药和红焊药，根据所焊主体不同选择不同的焊药，焊接胎体就要用黄焊药，焊接花丝就要用红焊药，红焊药的流动性比黄焊药好。特别是在焊接黄金作品时，为了保证含金量，技艺师傅要将焊药配比达到"97料"、即焊药中97%为金，3%为其他材料，这就要求技艺师傅具有高超的焊接技艺。焊接时火候儿适当是关键，要手稳眼快，火候儿不够会导致焊药开焊散活；火候儿过甚则会使焊药流化，从而使花丝纹产生很多药疤。
              </p>
            </div>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div className="step-layout-horizontal">
            <div className="step-image">
              <img src="/images/工艺流程/工艺5.png" alt="堆垒" />
            </div>
            <div className="step-text">
              <h2>堆垒</h2>
              <p>花丝的堆垒实质是做一种花丝形态的两个步骤，一般用于制作非平面形花丝，如葫芦形瓶、壶等有曲面的立体造型的花丝。堆垒花丝分平面垒丝和立体垒丝两种。平面垒丝是将两层以上的花丝纹样叠加在一起，以表现作品的立体效果。立体垒丝可在实胎或炭灰上叠码花丝纹样进行焊接。做立体造型的堆垒花丝，首先要按照图纸和设计要求将作品读懂，然后根据立体结构、尺寸，将木炭磨成粉末状，加入白戏和水后调成面状，用手捏成图纸所设计的造型，这也是一个塑型的过程，塑型后待干，这个过程就是堆。塑型干了后再绕码丝，也是垒丝的一个过程，在垒丝时要均匀平整，码得严丝合缝。只有这样，焊接时才能无缝隙。焊接后，用火把堆成的炭模烧掉，即成立体中空、玲珑剔透的成品。好的成品让外人找不到丝的来龙去脉。
              堆垒还有"堆松"，常用"松"做松叶、离兽、边缘纹样。</p>
            </div>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div className="step-layout-horizontal">
            <div className="step-image">
              <img src="/images/工艺流程/工艺6.png" alt="织编" />
            </div>
            <div className="step-text">
              <h2>织编</h2>
              <p>织编和人们通常所熟知的草编、竹编是一样的，只不过所用材料不同。用金、银、铜等金属材料做成各种各样的丝来进行编织，难度要大得多，必须有一定经验的技艺师傅，手劲均匀才能编织好。织编所用的丝有圆素丝、圆花丝、扁丝等，先按图纸要求选择所需要的丝，挑选好丝后通常再用手工编织做或不同的花丝纹。常用的花丝纹有小辫丝、十字纹、螺丝、席纹、套泡纹、拉泡丝等，小辫丝一般常用有三股、四股、六股花丝编织而成。织编一般使用不压扁的圆花丝。织编常用来作为边缘纹样装饰，做摆件时用的多。另外，还用来编鱼篓、灯笼空儿、套泡等不同形体的底纹，底纹上再粘以用各种技艺方法制成的不同花形的纹样，通过焊接完成。现存最好的编织作品为万历皇帝的翼善冠。</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* 视频弹窗 */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>X</button>
            <iframe
              src={videoUrl}
              frameBorder="0"
              allow="fullscreen"
              width="100%"
              height="400px"
              title="视频播放"
            ></iframe>
          </div>
        </div>
      )}

      {/* 视频按钮区域 */}
      <div className="video-buttons">
        {videoLinks.map((video, index) => (
          <button key={index} className="video-button" onClick={() => openModal(video.url)}>
            {video.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Process;
