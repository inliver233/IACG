import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/auth');
    } else {
      fetch('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => setUsername(data.username))
      .catch(() => {
        localStorage.removeItem('token');
        history.push('/auth');
      });
    }
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/auth');
  };

  return (
    <div>
      <h1>欢迎来到ACG社区, {username}!</h1>
      <nav>
        <ul>
          <li><Link to="/anime">动漫</Link></li>
          <li><Link to="/manga">漫画</Link></li>
          <li><Link to="/games">游戏</Link></li>
          <li><Link to="/forum">论坛</Link></li>
        </ul>
      </nav>
      <button onClick={handleLogout}>登出</button>
    </div>
  );
};

export default Home;
