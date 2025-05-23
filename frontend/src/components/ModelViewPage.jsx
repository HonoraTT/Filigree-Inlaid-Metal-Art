import React from 'react';
import { useParams } from 'react-router-dom';
import './ModelViewPage.css';  // 引入CSS文件

const ModelViewPage = () => {
  const { modelId } = useParams();  // 获取动态路由参数

  const modelPaths = {
    祥龙衔珠花丝胸针: '/images/3Dmodels/dragon.glb',
    瑞彩团福花丝镶宝吊坠: '/images/3Dmodels/红宝石项链.glb',
    蓝晶逸韵花丝戒指: '/images/3Dmodels/戒指.glb',
    吉瓶繁花花丝挂坠: '/images/3Dmodels/项链.glb',
    龙御云间花丝圆牌: '/images/3Dmodels/图.glb',
    金缕扇韵花丝项链: '/images/3Dmodels/扇形项链.glb',
  };

  return (
    <div className="model-view-page">
      <h2>
        {`展示模型: ${modelId}`}
        <span className="model-instruction">（拖拽3D模型进行旋转）</span>
      </h2>
      <model-viewer
        src={modelPaths[modelId]}  // 动态加载模型
        alt="3D展示"
        camera-controls
        camera-orbit="0deg 90deg 500px"
        className="model-viewer"
      />
    </div>
  );
};

export default ModelViewPage;
