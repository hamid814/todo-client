import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthState';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenicated, loading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenicated && !loading ? (
          <Redirect to={process.env.PUBLIC_URL + '/login'} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
