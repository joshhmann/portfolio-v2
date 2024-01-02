import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 px-6">
            <div className="flex items-center justify-between">
                <div className="text-xl font-bold">My Portfolio</div>
                <div className="flex space-x-4">
                    <Link to="/about" className="hover:text-gray-300">About Me</Link>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                    <Link to="/projects" className="hover:text-gray-300">Projects</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;