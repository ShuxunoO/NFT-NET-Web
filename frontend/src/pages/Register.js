import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Register() {
  return (
    <div>
      <Header />
      <main>
        <h1>用户注册</h1>
        <form>
          <label>
            用户名:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            邮箱:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            密码:
            <input type="password" name="password" />
          </label>
          <br />
          <button type="submit">注册</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default Register;

