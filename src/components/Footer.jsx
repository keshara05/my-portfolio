import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaArrowUp } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="w-full bg-black/50 backdrop-blur-sm text-white py-12 relative z-10 border-t border-white/10">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center relative px-4">

                {/* Back to Top */}
                <Link to="home" smooth={true} duration={500} className="absolute -top-16 p-3 rounded-full bg-gradient-to-t from-primary to-secondary cursor-pointer hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(139,92,246,0.5)] group">
                    <FaArrowUp size={20} className="text-white group-hover:-translate-y-1 transition-transform" />
                </Link>

                <div className="flex space-x-8 mb-8">
                    <a href="https://github.com/keshara" className="hover:text-primary duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(139,92,246,1)]"><FaGithub size={30} /></a>
                    <a href="https://linkedin.com" className="hover:text-blue-500 duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(59,130,246,1)]"><FaLinkedin size={30} /></a>
                    <a href="https://facebook.com" className="hover:text-blue-600 duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(37,99,235,1)]"><FaFacebook size={30} /></a>
                    <a href="https://instagram.com" className="hover:text-pink-500 duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(236,72,153,1)]"><FaInstagram size={30} /></a>
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-400 font-light tracking-wider">
                        © 2026 <span className="text-primary font-bold">Keshara Rathnayaka</span>. Crafted with <span className="text-red-500 animate-pulse">❤</span> in React & Tailwind.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
