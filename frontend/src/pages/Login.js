import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  return (
    <div>
      <Header />
      <main>
        <h1>用户登录</h1>
        <form>
          <label>
            用户名:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            密码:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">登录</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Login;

