import { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import axiosWithAuth from '../helpers/axiosWithAuth';

const PrivateRoute = ({ path, component }) => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    axiosWithAuth()
      .get('/colors')
      .then((res) => {
        setAuthenticated(res.status === 200);
      })
      .catch((e) => {
        setAuthenticated(false);
      });
  }, []);
  return (
    <>
      {!authenticated ? (
        <Redirect to="/" />
      ) : (
        <Route path={path} component={component} />
      )}
    </>
  );
};

export default PrivateRoute;
//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in
