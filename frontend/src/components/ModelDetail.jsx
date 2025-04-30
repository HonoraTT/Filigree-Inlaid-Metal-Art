import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ModelDetail.css';

const ModelDetail = () => {
  const navigate = useNavigate();  // 用于返回上一页

  const handleClick = (modelPath) => {
    navigate(`/model-detail/${modelPath}`);  // 点击图片时，跳转到对应的模型页面
  };

  // 模拟图片路径和模型名称
  const images = [
    { src: '/images/作品展示/dragon.png', alt: '祥龙衔珠花丝胸针：以龙为主题，龙身用花丝精心编织，形态威严霸气，龙口衔珍珠，寓意祥瑞，是传统吉祥文化与精湛花丝工艺的结合，彰显尊贵大气 。<span class="click-to-view">点击查看</span>', path: '祥龙衔珠花丝胸针' },
    { src: '/images/作品展示/红宝石项链.png', alt: '瑞彩团福花丝镶宝吊坠：以传统吉祥符号为灵感，主体运用花丝镶嵌工艺勾勒精致框架，中央镶嵌黑色主石，搭配钻石、珍珠与红色宝石，色彩对比鲜明，寓意福气满满、生活多彩。<span class="click-to-view">点击查看</span>', path: '瑞彩团福花丝镶宝吊坠' },
    { src: '/images/作品展示/戒指.png', alt: '蓝晶逸韵花丝戒指：以蓝色宝石为视觉焦点，周围环绕精美的花丝造型，工艺细腻，将宝石的璀璨与花丝的精致完美融合，时尚且富有艺术感 。<span class="click-to-view">点击查看</span>', path: '蓝晶逸韵花丝戒指' },
    { src: '/images/作品展示/项链.png', alt: '吉瓶繁花花丝挂坠：造型似宝瓶，以花丝镶嵌塑造瓶身及花枝图案，搭配蓝色装饰与红色坠饰，宝瓶寓意平安，整体设计精巧，富有古典吉祥寓意 。<span class="click-to-view">点击查看</span>', path: '吉瓶繁花花丝挂坠' },
    { src: '/images/作品展示/图.png', alt: '龙御云间花丝圆牌：圆形牌面之上，以花丝工艺呈现巨龙于云间翻腾之姿，线条灵动，龙纹栩栩如生，富有动感与气势，是传统龙文化的精美演绎 。<span class="click-to-view">点击查看</span>', path: '龙御云间花丝圆牌' },
    { src: '/images/作品展示/扇形项链.png', alt: '金缕扇韵花丝项链：造型取意折扇，通过细腻花丝工艺打造扇面纹理，线条流畅优美，下方坠饰增添灵动之感，古典雅致，展现东方温婉韵味 。<span class="click-to-view">点击查看</span>', path: '金缕扇韵花丝项链' },
  ];

  return (
    <div className="model-detail1-container1">
      

      {/* 网格展示 */}
      <div className="model-grid1">
        {images.map((image) => (
          <div 
            key={image.path} 
            className="model-grid1-item1" 
            onClick={() => handleClick(image.path)} 
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="model-overlay1">
              <p dangerouslySetInnerHTML={{ __html: image.alt }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelDetail;
