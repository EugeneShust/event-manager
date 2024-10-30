import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignUpForm } from '../components';
import { registerUser } from '../services';

export const SignUpPage = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        setError('');
        try {
            const signInfo = await registerUser(data);

            console.log(signInfo);

            if (signInfo.error) throw new Error(signInfo.error);

            //navigate('/login');

            // const response = await fetch('http://localhost:3001/api/users', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData),
            // });

            // const data = await response.json();

            // if (response.ok) {
            //     localStorage.setItem('userId', data.userId);
            //     localStorage.setItem('userName', data.name);
            //     localStorage.setItem('userEmail', data.email);

            //     if (data.role) {
            //         localStorage.setItem('userRole', data.role);
            //     }

            //     navigate('/create-event');
            // } else {
            //     if (data.error === 'USER_EXISTS') {
            //         setError('Account already exists. Please login instead');
            //         setTimeout(() => {
            //             navigate('/login');
            //         }, 2000);
            //     } else {
            //         setError(data.message || 'An error occurred during signup');
            //     }
            // }
        } catch (err) {
            setError('Connection error. Please try again.');
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        {error && (
                            <div className="alert alert-error">
                                <span>{error}</span>
                            </div>
                        )}
                        <SignUpForm onSubmit={handleSubmit} />
                        <div className="text-center mt-4">
                            <Link to="/login" className="link link-hover">
                                Already have an account? Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
