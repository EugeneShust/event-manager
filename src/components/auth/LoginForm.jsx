import { useState } from 'react';
// Atomic Design: Auth form components for login and signup forms.

export const LoginForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const validateEmail = (email) => {
        return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            //setError('Please fill in all fields');
            throw new Error('Please fill in all fields');
        }

        if (!validateEmail(formData.email)) {
            // setError('No valid email address');
            throw new Error('No valid email address');
        }

        // Pass data to LoginPage
        onSubmit({ email: formData.email, password: formData.password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            email: e.target.value,
                        })
                    }
                />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            password: e.target.value,
                        })
                    }
                />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>
        </form>
    );
};
