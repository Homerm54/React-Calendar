import React from 'react';

import { Route, Switch } from 'react-router-dom';
import * as routes from './routes';
import PrivateRoute from './PrivateRoute';
import PublicOnlyRoute from './NoAuthOnlyRoute';

import AuthScreen from 'pages/auth/AuthScreen';
import CalendarScreen from 'pages/CalendarScreen';
import NotFound from 'pages/404NotFound';



function AppRouter() {


  return (
    <Switch>

      <PublicOnlyRoute
        exact
        path={routes.AUTH}
        component={AuthScreen}
        redirectRoute={routes.MAIN}
        isAuthenticated={true}
      />

      <PrivateRoute
        exact
        path={routes.MAIN}
        component={CalendarScreen}
        redirectRoute={routes.AUTH}
        isAuthenticated={true}
      />

      <Route component={NotFound} />

    </Switch>
  )
}


export default AppRouter;

