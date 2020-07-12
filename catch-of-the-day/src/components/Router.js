import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
<<<<<<< HEAD
    {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
    <Switch>
      {/* If the current URL is /, using the 'exact path' let this route renders the StorePicker component only
      while the rest are ignored */}
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
=======
    <Switch>
      <Route exact path="/" component={StorePicker}></Route>
      <Route path="/store/:storeId" component={App}></Route>
      <Route component={NotFound}></Route>
>>>>>>> 8f49e58aab8cfc747fb863ad8d6b566b80714de0
    </Switch>
  </BrowserRouter>
);

export default Router;
