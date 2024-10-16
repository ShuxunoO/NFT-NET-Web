import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Playground() {
  return (
    <div>
      <Header />
      <main>
        <h1>数据探索广场</h1>
        <p>在这里你可以进行交互式的数据探索。</p>
        {/* 这里可以添加更多交互式组件 */}
      </main>
      <Footer />
    </div>
  );
}

export default Playground;

