import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginForm } from '../components';

export const LoginPage = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch(
                'http://localhost:3001/api/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                },
            );

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('userId', data.userId);
                localStorage.setItem('userEmail', data.email);

                if (data.role) {
                    localStorage.setItem('userRole', data.role);
                }

                navigate('/create-event');
            } else {
                setError(data.message || 'Invalid email or password');
            }
        } catch (err) {
            setError('Connection error. Please try again.');
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
                        <LoginForm onSubmit={handleSubmit} />
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
