// src/artisan-detail/ArtisanDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

// 动态加载匠人组件
const ArtisanDetail = () => {
  const { name } = useParams(); // 获取 URL 中的匠人名字参数

  // 动态导入匠人详情页面组件
  const Artisan = React.lazy(() => import(`./${name}`));

  return (
    <div>
      <React.Suspense fallback={<div>加载中...</div>}>
        <Artisan /> {/* 根据匠人名字渲染对应的组件 */}
      </React.Suspense>
    </div>
  );
};

export default ArtisanDetail;
