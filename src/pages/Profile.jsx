import { useEffect, useState } from 'react';
import { fetchProfile } from '../modules';

export const Profile = () => {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchProfile();
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
                <div>
                    <h1 className="text-5xl font-bold">{profile.name}</h1>
                    <p className="py-6">{profile.id}</p>
                    <p className="py-6">{profile.email}</p>
                    <p className="py-6">{profile.isActive}</p>
                    <p className="py-6">{profile.createdAt}</p>
                    <p className="py-6">{profile.updatedAt}</p>
                    <button className="btn btn-primary">Edit profile</button>
                </div>
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
