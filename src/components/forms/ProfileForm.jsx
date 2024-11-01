import { useState } from 'react';
import { validateEmail } from '../../utils';
// Atomic Design: Auth form components for login and signup forms.
export const ProfileForm = ({ data, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: data.name,
        email: data.email,
        password: '',
    });

    //setFormData(data);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.password) {
            throw new Error('Please fill in all fields');
        }

        if (!validateEmail(formData.email)) {
            throw new Error('No valid email address');
        }
        onSubmit({
            name: formData.name,
            email: formData.email,
            password: formData.password,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            name: e.target.value,
                        })
                    }
                />
            </div>
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
                <button className="btn btn-primary">Save</button>
            </div>
        </form>
    );
};
