import React from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect } from 'react-router-dom';





export default function PrivateRoute({
  isAuthenticated,
  component: Component,
  redirectRoute,
  ...rest
}) {


  return (
    <Route {...rest} component={props => (
      // props are the history, router etc.
      isAuthenticated
        ?
        <Component {...props} />
        :
        <Redirect to={redirectRoute} />
    )} />
  )
}



// To make sure it's used the correct way
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
}