import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contributors() {
  return (
    <div>
      <Header />
      <main>
        <h1>贡献者墙</h1>
        <p>感谢所有为NFT-Net做出贡献的用户。</p>
        {/* 这里可以添加贡献者列表或展示组件 */}
      </main>
      <Footer />
    </div>
  );
}

export default Contributors;

