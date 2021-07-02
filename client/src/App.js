import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

import Cookie from 'js-cookie';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import AppLayout from './components/Layout/AppLayout';

import PageError from './pages/404';
import Logout from './pages/Logout';
import { useHistory } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import loadingSpinner from './assets/loading-gif/Skateboarding.gif';
const Dashboard = lazy(() => import('./pages/Dashboard'));
const ArtistProfile = lazy(() => import('./pages/ArtistProfile'));
const UserProfile = lazy(() => import('./pages/UserProfile'));

const App = () => {
  const history = useHistory();
  const automaticLogout = () => {
    const removeToken = Cookie.remove('token');
    const removeAuthenticated = Cookie.remove('isAuthenticated');
    history.push('/login');
  };
  const token = Cookie.get('token');
  setTimeout(() => {
    automaticLogout();
  }, 1000 * 60 * 60);
  return (
    <AppLayout>
      <Suspense fallback={<img src={loadingSpinner}></img>}>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard token={token} />
        </Route>
        <Route path="/Artist/:ArtistId" exact>
          <ArtistProfile />
        </Route>
        <Route path="/User/:userId" exact>
          <UserProfile />
        </Route>
        <Route path="/Logout" exact>
          <Logout />
        </Route>
        <Route path="*">
          <PageError />
        </Route>
      </Switch>
      </Suspense>
    </AppLayout>
  );
};

export default App;
