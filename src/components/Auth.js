import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/acgbbs.css'; // 确保正确引入CSS文件

const Auth = ({ setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里应该有实际的登录/注册逻辑
    // 假设登录/注册成功
    setIsLoggedIn(true);
    history.push('/main');
  };

  return (
    <div className="background-container">
      <div className="auth-glass-container">
        <div className={`auth-form ${isLogin ? 'login-form' : 'register-form'}`}>
          <h2>{isLogin ? '登录' : '注册'}</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="用户名" required />
            {!isLogin && <input type="email" placeholder="邮箱" required />}
            <input type="password" placeholder="密码" required />
            <button type="submit">{isLogin ? '登录' : '注册'}</button>
          </form>
          <p className="form-switch">
            {isLogin ? '还没有账号？' : '已有账号？'}
            <span onClick={toggleForm} style={{ color: '#4CAF50', cursor: 'pointer', marginLeft: '5px' }}>
              {isLogin ? '注册' : '登录'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
