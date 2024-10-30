import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

export const MainLayout = () => {
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
