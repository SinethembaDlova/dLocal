import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const [isAuth] = useState({ token: true });
  return isAuth.token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
