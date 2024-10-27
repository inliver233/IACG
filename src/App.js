import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import NotFound from './components/NotFound';

const Welcome = lazy(() => import('./components/Welcome'));
const Auth = lazy(() => import('./components/Auth'));
const Login = lazy(() => import('./components/Login'));
const Register = lazy(() => import('./components/Register'));
const MainPage = lazy(() => import('./components/MainPage'));
const Profile = lazy(() => import('./components/Profile'));
const CreatePost = lazy(() => import('./components/CreatePost'));
const PostDetail = lazy(() => import('./components/PostDetail'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/auth" component={Auth} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/main" component={MainPage} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/create-post" component={CreatePost} />
          <PrivateRoute path="/post/:id" component={PostDetail} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
