import React from 'react';

import { Switch, Route } from 'react-router-dom';

import signIn from '../pages/signIn';

import dashboard from '../pages/dashboard';

import New from '../pages/New';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={signIn} />
      <Route path="/dashboard" component={dashboard} />
      <Route path="/new" component={New} />
    </Switch>
  );
}
