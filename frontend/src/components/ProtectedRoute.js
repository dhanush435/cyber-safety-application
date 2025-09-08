import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthed, isAdmin } from '../utils/auth';

const ProtectedRoute = ({ children, requireAdmin = false }) => {
  if (!isAuthed()) return <Navigate to={requireAdmin ? '/admin/login' : '/login'} replace />;
  if (requireAdmin && !isAdmin()) return <Navigate to="/" replace />;
  return children;
};

export default ProtectedRoute;



