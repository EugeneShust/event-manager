import { Outlet } from 'react-router-dom';
import { Header, Footer } from './index';

export const MainLayout = () => {

    return (
        <>
            <Header />
            <main className="container mx-auto">
                <Outlet  />
            </main>
            <Footer />
        </>
    );
};
