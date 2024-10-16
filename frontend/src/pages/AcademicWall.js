import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AcademicWall() {
  return (
    <div>
      <Header />
      <main>
        <h1>学术墙</h1>
        <p>展示使用NFT-Net数据集的学术成果。</p>
        {/* 这里可以添加学术论文列表或展示组件 */}
      </main>
      <Footer />
    </div>
  );
}

export default AcademicWall;

