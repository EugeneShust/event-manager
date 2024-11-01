import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';
import { useAuth } from '../hooks';
import { getToken } from '../utils';
import { useEffect } from 'react';
import { getProfile } from '../services';

export const MainLayout = () => {
    const { updateProfile } = useAuth();

    useEffect(() => {
        const getData = async () => {
            try {
                const token = getToken();
                if (token.length === 0) return;

                const data = await getProfile();
                console.log('MainLayout.fetchProfile', data);
                updateProfile(data);
            } catch (err) {
                console.error(err);
            }
        };

        getData();

        return () => {
            console.log('Cleanup function ran');
        };
    }, []);

    return (
        <>
            <div className="max-w-screen-xl mx-auto">
                <Header />
                <main className="container mx-auto">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};
