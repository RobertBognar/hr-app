import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState();
    const [userToken, setUserToken] = useState();

    return (
        <AuthContext.Provider
            value={{ userData, setUserData, userToken, setUserToken }}
        >
            {children}
        </AuthContext.Provider>
    );
};
