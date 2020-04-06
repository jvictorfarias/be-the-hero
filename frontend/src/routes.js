import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from './pages/Logon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
      </Switch>
    </BrowserRouter>
  );
}
