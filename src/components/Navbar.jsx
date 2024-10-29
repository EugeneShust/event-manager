import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex flex-col content-around justify-around lg:flex-row lg:gap-4 border-r-2">
                <li className="hover:bg-gray-800 hover:text-white px-4 mx-4 text-gray-900">
                    <Link to="/" className="text-xl">
                        Home
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
