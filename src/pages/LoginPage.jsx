import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginForm } from '../components';
import { loginUser } from '../services';
import { useAuth } from '../hooks';

export const LoginPage = () => {
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (data) => {
        setError('');
        try {
            const loginInfo = await loginUser(data);

            console.log(loginInfo);

            if (loginInfo.error) throw new Error(loginInfo.error);

            login(loginInfo);
            navigate('/');

            // localStorage.setItem('userId', data.userId);
            // localStorage.setItem('userEmail', data.email);

            // if (data.role) {
            //     localStorage.setItem('userRole', data.role);
            // }
        } catch (err) {
            console.error(err.message);
            setError(`Connection error. Error code${err.message}`);
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        {error && (
                            <div className="alert alert-error">
                                <span>{error}</span>
                            </div>
                        )}
                        <LoginForm onSubmit={handleLogin} />
                        <div className="text-center mt-4">
                            <Link to="/signup" className="link link-hover">
                                Need an account? Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
