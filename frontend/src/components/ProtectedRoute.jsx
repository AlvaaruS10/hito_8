import React from 'react';
import { Navigate } from 'react-router-dom'
import { useUser } from './UserContext'

const ProtectedRoute = ({ children, redirectPath = '/login', inverse = false }) => {
  const { token } = useUser();
  const shouldRedirect = inverse ? token : !token;

  if (shouldRedirect) {
    return <Navigate to={redirectPath} replace />
  }

  return children;
};

export default ProtectedRoute

