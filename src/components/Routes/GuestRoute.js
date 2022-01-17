import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import ProfilePage from '../my-profile-page/ProfilePage';
function GuestRoute() {
    const { loginSuccessfull } = useAuthContext();

    return loginSuccessfull ? <ProfilePage /> : <Outlet />;
}

export default GuestRoute;
