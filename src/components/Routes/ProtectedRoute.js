import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import Login from '../Login/Login';
function ProtectedRoute() {
    const { loginSuccessfull } = useAuthContext();
    return loginSuccessfull ? <Outlet /> : <Login />;
}

export default ProtectedRoute;
