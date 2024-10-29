import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        history.push('/main');
      } else {
        alert('登录失败，请检查用户名和密码');
      }
    } catch (error) {
      console.error('登录错误:', error);
      alert('登录过程中发生错误');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
      <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/images/background2.mp4" type="video/mp4" />

          您的浏览器不支持视频标签。
        </video>
        <h2>登录</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="用户名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">登录</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
