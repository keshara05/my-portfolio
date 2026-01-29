import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-black text-white py-8">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
                <div className="flex space-x-6 mb-4">
                    <a href="https://github.com/keshara" className="hover:text-[var(--color-primary)] duration-200"><FaGithub size={30} /></a>
                    <a href="https://linkedin.com" className="hover:text-[var(--color-primary)] duration-200"><FaLinkedin size={30} /></a>
                    <a href="https://facebook.com" className="hover:text-[var(--color-primary)] duration-200"><FaFacebook size={30} /></a>
                    <a href="https://instagram.com" className="hover:text-[var(--color-primary)] duration-200"><FaInstagram size={30} /></a>
                </div>
                <p className="text-sm text-gray-400">© 2026 Keshara Rathnayaka. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
