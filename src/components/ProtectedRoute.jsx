import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // 防止 token 是字符串形式的 "null" 或 "undefined"
  if (!token || token === 'null' || token === 'undefined') {
    alert('请先登录！');
    return <Navigate to="/page4" replace />;
  }

  return children;
};

export default ProtectedRoute;
