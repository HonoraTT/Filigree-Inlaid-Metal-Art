import React from 'react';
import { useParams } from 'react-router-dom';

const ModelViewPage = () => {
  const { modelId } = useParams();  // 获取动态路由参数

  const modelPaths = {
    model1: '/images/3Dmodels/3D花丝凤冠.glb',
  };

  return (
    <div className="model-view-page">
      <h2>{`展示模型: ${modelId}`}</h2>
      <model-viewer
        src={modelPaths[modelId]}  // 动态加载模型
        alt="3D展示"
        camera-controls
        camera-orbit="0deg 90deg 500px"
        style={{ width: '100%', height: '600px' }}
      />
    </div>
  );
};

export default ModelViewPage;
