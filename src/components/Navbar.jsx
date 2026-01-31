import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show background a bit earlier for smoother feel
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (nav) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "";
        }
    }, [nav]);

    const links = [
        { id: 1, link: "home" },
        { id: 2, link: "about" },
        { id: 3, link: "skills" },
        { id: 4, link: "projects" },
        { id: 5, link: "contact" },
    ];

    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 }
        })
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "100vh",
            transition: { duration: 0.4, ease: "easeInOut" }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.4, ease: "easeInOut" }
        }
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            className={`fixed w-full z-50 transition-all duration-300 ${nav ? "bg-transparent top-0" : scrolled ? "top-0 md:top-4" : "top-0 md:top-6"
                }`}
        >
            {/* 
                Desktop: Floating Glass Island 
                Mobile: Full width clean bar 
            */}
            <div
                className={`
                    max-w-screen-xl mx-auto 
                    ${nav ? 'bg-transparent' : scrolled ? 'glass-panel md:rounded-full bg-slate-900/80' : 'bg-transparent'}
                    transition-all duration-500
                    px-6 py-3 md:py-4
                    flex justify-between items-center
                `}
            >
                {/* Logo */}
                <div className="cursor-pointer z-50">
                    <Link to="home" smooth={true} duration={500}>
                        <h1 className="text-3xl font-bold tracking-wider font-sans group">
                            <span className="text-white group-hover:text-glow transition-all duration-300">K</span>
                            <span className="text-primary group-hover:text-white transition-colors duration-300">R</span>
                            <span className="text-accent text-4xl leading-none animate-pulse">.</span>
                        </h1>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 items-center">
                    {links.map(({ id, link }, i) => (
                        <motion.li
                            key={id}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={linkVariants}
                        >
                            <Link
                                to={link}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-100}
                                activeClass="text-primary font-bold text-glow"
                                className="cursor-pointer capitalize text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide relative group py-2"
                            >
                                {link}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </motion.li>
                    ))}

                    {/* Social Icons for Desktop */}
                    <div className="flex gap-4 border-l border-white/10 pl-6 ml-2">
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><FaGithub size={18} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all"><FaLinkedin size={18} /></a>
                    </div>
                </ul>

                {/* Mobile Menu Icon */}
                <div
                    onClick={() => setNav(!nav)}
                    className="md:hidden cursor-pointer z-50 text-white hover:text-primary transition-colors p-2 glass-panel rounded-lg"
                >
                    {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {nav && (
                    <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-0 left-0 w-full bg-slate-950 flex flex-col justify-center items-center z-40 overflow-hidden"
                    >
                        {/* Background Accent */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

                        <ul className="flex flex-col gap-8 items-center z-10">
                            {links.map(({ id, link }) => (
                                <motion.li
                                    key={id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (id * 0.1) }}
                                    className="text-4xl capitalize font-bold cursor-pointer text-gray-400 hover:text-white transition-all group"
                                >
                                    <Link
                                        onClick={() => setNav(false)}
                                        to={link}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        className="relative"
                                    >
                                        <span className="group-hover:text-glow-cyan transition-all duration-300">{link}</span>
                                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300"></span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
