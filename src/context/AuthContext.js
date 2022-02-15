import { createContext, useState, useContext, useEffect } from 'react';
import Auth from '../services/AuthService';

export const AuthContext = createContext('');
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState();
    const [userToken, setUserToken] = useState();

    async function login(user, password) {
        let loginData = await Auth.login(user, password);

        if (loginData) {
            console.log(loginData);
            localStorage.setItem(
                'userData',
                JSON.stringify(loginData.data.user),
            );
            setUserData(loginData.data.user);
            localStorage.setItem('userToken', loginData.data.jwt);
            setUserToken(loginData.data.jwt);
        } else {
            alert('Login failed');
        }
    }

    useEffect(() => {
        if (localStorage.getItem('userData')) {
            setUserData(localStorage.getItem('userData'));
        }
        if (localStorage.getItem('userToken')) {
            setUserToken(localStorage.getItem('userToken'));
        }

        console.log(userData);
        console.log(userToken);
    }, []);

    return (
        <AuthContext.Provider value={{ userData, userToken, login }}>
            {children}
        </AuthContext.Provider>
    );
};
