import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
function GuestRoute() {
    const { userToken } = useAuthContext();

    return userToken ? <Navigate to="/profile" /> : <Outlet />;
}

export default GuestRoute;
