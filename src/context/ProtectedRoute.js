import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "./AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ _isLoggedIn }) =>
     <Route
        render={
            props =>
                _isLoggedIn 
                ? <Component {...props} /> 
                : <Redirect to="/" />
            }
        {...rest}
    />
    }
  </AuthConsumer>
);

export default ProtectedRoute;
