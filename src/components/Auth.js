<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/acgbbs.css'; // 确保正确引入CSS文件

const Auth = ({ setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
<<<<<<< HEAD
=======
// src/components/Auth.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/acgbbs.css';

const Auth = ({ setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
  const history = useHistory();

  const toggleForm = () => {
    setIsLogin(!isLogin);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里应该有实际的登录/注册逻辑
    // 假设登录/注册成功
    setIsLoggedIn(true);
    history.push('/main');
<<<<<<< HEAD
=======
    setError(null); // 切换时清除错误信息
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // 提交时清除之前的错误信息

    const apiUrl = isLogin ? 'http://localhost:5000/api/users/login' : 'http://localhost:5000/api/users/register';
    const requestBody = isLogin
      ? { username, password }
      : { username, email, password };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        if (isLogin) {
          const data = await response.json();
          localStorage.setItem('token', data.token);
          setIsLoggedIn(true);
          history.push('/main');
        } else {
          // 注册成功后，可以选择自动登录或跳转到登录页面
          // setIsLoggedIn(true);
          // history.push('/main');
          alert('注册成功！请登录。');
          setIsLogin(true); // 切换到登录表单
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || '操作失败，请稍后再试');
      }
    } catch (error) {
      console.error('网络错误：', error);
      setError('网络错误，请稍后再试');
    }
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
  };

  return (
    <div className="background-container">
      <div className="auth-glass-container">
        <div className={`auth-form ${isLogin ? 'login-form' : 'register-form'}`}>
          <h2>{isLogin ? '登录' : '注册'}</h2>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="用户名" required />
            {!isLogin && <input type="email" placeholder="邮箱" required />}
            <input type="password" placeholder="密码" required />
<<<<<<< HEAD
=======
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="用户名"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {!isLogin && (
              <input
                type="email"
                placeholder="邮箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            )}
            <input
              type="password"
              placeholder="密码"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
            <button type="submit">{isLogin ? '登录' : '注册'}</button>
          </form>
          <p className="form-switch">
            {isLogin ? '还没有账号？' : '已有账号？'}
<<<<<<< HEAD
<<<<<<< HEAD
            <span onClick={toggleForm} style={{ color: '#4CAF50', cursor: 'pointer', marginLeft: '5px' }}>
=======
            <span
              onClick={toggleForm}
              style={{ color: '#4CAF50', cursor: 'pointer', marginLeft: '5px' }}
            >
>>>>>>> 47bbfa4 (调整界面和ui)
=======
            <span onClick={toggleForm} style={{ color: '#4CAF50', cursor: 'pointer', marginLeft: '5px' }}>
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
              {isLogin ? '注册' : '登录'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
