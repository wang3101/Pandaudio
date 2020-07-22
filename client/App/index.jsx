import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
// import { PrivateRoute } from './PrivateRoute';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="*" component={() => '404 NOT FOUND'} />
    </Switch>
  </div>
);

export default App;