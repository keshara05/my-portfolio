import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaArrowUp } from "react-icons/fa";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="w-full bg-slate-950 text-white py-8 relative z-50 border-t border-white/5">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center relative px-4">

                {/* Back to Top */}
                <Link
                    to="home"
                    smooth={true}
                    duration={800}
                    className="absolute -top-12 p-4 rounded-full bg-gradient-to-t from-primary to-secondary cursor-pointer hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.5)] group z-50"
                >
                    <FaArrowUp size={20} className="text-white animate-bounce group-hover:animate-none" />
                </Link>

                <div className="flex space-x-8 mb-8 mt-4">
                    <a href="https://github.com/keshara05" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"><FaGithub size={24} /></a>
                    <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"><FaLinkedin size={24} /></a>
                    <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]"><FaFacebook size={24} /></a>
                    <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"><FaInstagram size={24} /></a>
                </div>

                <div className="text-center">
                    <p className="text-sm text-gray-500 font-mono tracking-widest uppercase">
                        © 2026 Keshara Rathnayaka. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
