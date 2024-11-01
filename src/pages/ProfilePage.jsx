import { useEffect, useState } from 'react';
import { getProfile } from '../services';
import { ProfileForm } from '../components';
import { updateProfile } from '../services/authService';

export const ProfilePage = () => {
    const [profile, setProfile] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getProfile();
                console.log('fetchProfile', data);
                setProfile(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getData();

        return () => {
            console.log('Cleanup function ran');
        };
    }, []);

    async function handleSubmit(data) {
        setError('');
        try {
            console.log('data:', data);

            const updatedData = await updateProfile(profile.id, data);

            console.log('updatedData:', updatedData);

            setProfile(updatedData);
            setEditMode(false);

            if (updatedData.error) throw new Error(updatedData.error);
        } catch (err) {
            setError('Connection error. Please try again.');
        }
    }

    if (loading)
        return (
            <div
                id="category-container"
                className="flex gap-4 mt-2 flex-wrap justify-center"
            >
                Loading...
            </div>
        );
    if (error)
        return (
            <div
                id="category-container"
                className="flex gap-4 mt-2 flex-wrap justify-center"
            >
                Error: {error}
            </div>
        );
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                {!editMode ? (
                    <div>
                        <h1 className="text-5xl font-bold">{profile.name}</h1>
                        <p className="py-6">{profile.id}</p>
                        <p className="py-6">{profile.email}</p>
                        <p className="py-6">{profile.isActive}</p>
                        <p className="py-6">{profile.createdAt}</p>
                        <p className="py-6">{profile.updatedAt}</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => setEditMode(true)}
                        >
                            Edit profile
                        </button>
                    </div>
                ) : (
                    <ProfileForm data={profile} onSubmit={handleSubmit} />
                )}
            </div>
        </div>
    );
};

// {
//     "id": 1,
//     "name": null,
//     "email": "user@example.com",
//     "isActive": true,
//     "createdAt": "2024-10-29T15:00:31.847Z",
//     "updatedAt": "2024-10-29T15:00:31.847Z"
// }
