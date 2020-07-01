import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
    <Switch>
      {/* If the current URL is /, using the 'exact path' let this route renders the StorePicker component only
      while the rest are ignored */}
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
