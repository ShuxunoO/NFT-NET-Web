import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>欢迎来到NFT-Net</h1>
        <p>这是一个用于管理和浏览NFT项目的平台。</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

