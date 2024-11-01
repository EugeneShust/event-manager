import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks';

export function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav>
            <div className="navbar bg-[#374151]">
                <div className="flex-1">
                    <li className="btn btn-ghost border-b-2 border-[#CACED5] text-xl">
                        <Link to="/" className="text-xl">
                            /Event Manager/
                        </Link>
                    </li>
                </div>
                <div className="flex-none gap-2">
                    {!user ? (
                        <Link to="/login" className="text-xl">
                            Login
                        </Link>
                    ) : (
                        <div className="dropdown dropdown-end">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="A grinning cat"
                                        // src="src/pictures/vector-pixel-art-cat-sit.webp"
                                        src="src/assets/pictures/cat.gif"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-4 mr-4 w-16 p-2 shadow"
                            >
                                <li>
                                    <Link to="/profile" className="text-xl">
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={logout} className="text-xl">
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
