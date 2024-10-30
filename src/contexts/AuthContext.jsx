// Context API pattern: Provides global state and functions for authentication.
import React, { createContext, useState, useEffect, useContext } from 'react';

// Initialize Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(
        () => localStorage.getItem('accessToken') || null,
    );

    const login = (token) => {
        setAccessToken(token);
        localStorage.setItem('accessToken', token);
    };

    const logout = () => {
        setAccessToken(null);
        localStorage.removeItem('accessToken');
    };

    return (
        <AuthContext.Provider value={{ accessToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
