<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 47bbfa4 (调整界面和ui)
=======
import React, { useState } from 'react';
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import Welcome from './Welcome';
import Auth from './Auth';
import CreatePost from './CreatePost';
import UserProfile from './UserProfile';
import PostList from './PostList';
import PostDetail from './PostDetail';

const App = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 添加登录状态
=======
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
>>>>>>> 47bbfa4 (调整界面和ui)
=======
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 添加登录状态
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf

  return (
    <Router>
      <Switch>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
        <Route exact path="/" render={(props) => <Welcome {...props} isLoggedIn={isLoggedIn} />} />
        <Route path="/auth" render={(props) => <Auth {...props} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/main" render={(props) => 
          isLoggedIn ? <MainPage {...props} /> : <Redirect to="/auth" />
<<<<<<< HEAD
=======
        <Route exact path="/" render={(props) => <Welcome {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/auth" render={(props) => <Auth {...props} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/main" render={(props) => 
          isLoggedIn ? <MainPage {...props} setIsLoggedIn={setIsLoggedIn} /> : <Redirect to="/auth" />
>>>>>>> 47bbfa4 (调整界面和ui)
=======
>>>>>>> 2b1a3741d8ca9092c377dfb9800ef44ff1da04bf
        } />
        <Route path="/create-post" render={(props) => 
          isLoggedIn ? <CreatePost {...props} /> : <Redirect to="/auth" />
        } />
        <Route path="/profile" render={(props) => 
          isLoggedIn ? <UserProfile {...props} /> : <Redirect to="/auth" />
        } />
        <Route path="/posts" render={(props) => 
          isLoggedIn ? <PostList {...props} /> : <Redirect to="/auth" />
        } />
        <Route path="/post/:id" render={(props) => 
          isLoggedIn ? <PostDetail {...props} /> : <Redirect to="/auth" />
        } />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
