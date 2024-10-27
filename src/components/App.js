import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import Welcome from './Welcome';
import Auth from './Auth';
import CreatePost from './CreatePost';
import UserProfile from './UserProfile';
import PostList from './PostList';
import PostDetail from './PostDetail';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 添加登录状态

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <Welcome {...props} isLoggedIn={isLoggedIn} />} />
        <Route path="/auth" render={(props) => <Auth {...props} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/main" render={(props) => 
          isLoggedIn ? <MainPage {...props} /> : <Redirect to="/auth" />
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
