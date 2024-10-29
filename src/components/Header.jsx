import { Navbar } from './Navbar';

export const Header = () => {
    return (
        <header className="flex flex-row align-center justify-between m-4 p-2 bg-gray-400">
            <img className="h-10 w-20" src="../pictures/event-manager.jpg" />
            <div
                id="search"
                className="flex flex-row flex-nowrap gap-4 items-center border-3 rounded-md"
            >
                <Navbar />
            </div>
        </header>
    );
};
