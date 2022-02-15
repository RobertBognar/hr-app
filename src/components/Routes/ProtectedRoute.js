import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
function ProtectedRoute() {
    const { userToken } = useAuthContext();
    // return userToken ? <Outlet /> : <Navigate to="/login" />;
    return <Outlet />;
}

export default ProtectedRoute;
