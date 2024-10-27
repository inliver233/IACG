import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Welcome = ({ isLoggedIn }) => {
  const history = useHistory();

  const handleEnterCommunity = () => {
    if (isLoggedIn) {
      history.push('/main');
    } else {
      history.push('/auth');
    }
  };

  return (
    <div className="background-container">
      <div className="welcome-glass-container">
        <div className="welcome-content">
          <h1>欢迎来到ACG社区</h1>
          <p>探索动漫、漫画和游戏的精彩世界</p>
          <div className="welcome-buttons">
            <button onClick={handleEnterCommunity} className="enter-button">
              进入社区
            </button>
            {!isLoggedIn && (
              <Link to="/auth" className="auth-button">登录/注册</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
