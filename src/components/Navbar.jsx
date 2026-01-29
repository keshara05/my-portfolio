import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'contact' },
    ];

    return (
        <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 text-white z-50 glass">
            {/* Logo */}
            <div className="text-3xl font-bold cursor-pointer font-[Outfit]">
                <Link to="home" smooth={true} duration={500}>
                    <span className="text-[var(--color-primary)]">KR</span>
                </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-[var(--color-primary)] hover:scale-110 duration-200 relative group">
                        <Link
                            to={link}
                            smooth={true}
                            duration={500}
                            spy={true}
                            activeClass="active-link"
                            className="transition-colors duration-300"
                        >
                            {link}
                        </Link>
                        {/* Underline animation */}
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-[var(--color-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                    </li>
                ))}
            </ul>

            {/* Mobile Icon */}
            <div onClick={handleClick} className="md:hidden cursor-pointer z-10 text-[var(--color-primary)] hover:rotate-180 duration-500">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Mobile Menu */}
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg text-gray-200">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-[var(--color-primary)] duration-200">
                            <Link onClick={() => setNav(false)} to={link} smooth={true} duration={500}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
