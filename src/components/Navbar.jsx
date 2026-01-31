import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
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

    const menuVariants = {
        hidden: { x: "100%" },
        visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } }
    };

    return (
        <nav
            className={`fixed w-full left-0 z-50 transition-all duration-300 ${scrolled ? "glass h-[70px] shadow-lg top-0" : "h-[90px] bg-transparent top-0"
                }`}
        >
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex justify-between items-center h-full">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="cursor-pointer"
                >
                    <Link to="home" smooth={true} duration={500}>
                        <h1 className="text-3xl font-bold font-sans tracking-wider">
                            <span className="text-white">K</span>
                            <span className="text-primary drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">R</span>
                        </h1>
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8">
                    {links.map(({ id, link }) => (
                        <motion.li
                            key={id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: id * 0.1 }}
                        >
                            <Link
                                to={link}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-70}
                                activeClass="text-primary text-glow font-bold border-b-2 border-primary"
                                className="cursor-pointer capitalize text-gray-300 hover:text-white hover:text-glow transition-all duration-300 text-lg font-light tracking-wide px-2 py-1"
                            >
                                {link}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div
                    onClick={() => setNav(!nav)}
                    className="md:hidden cursor-pointer z-50 text-white hover:text-primary transition-colors"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {nav && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-0 left-0 w-full h-screen bg-bg-secondary/95 backdrop-blur-xl flex flex-col justify-center items-center z-40"
                    >
                        <ul className="flex flex-col gap-10">
                            {links.map(({ id, link }) => (
                                <motion.li
                                    key={id}
                                    whileHover={{ scale: 1.1 }}
                                    className="text-4xl capitalize font-bold cursor-pointer text-gray-300 hover:text-primary hover:text-glow transition-all"
                                >
                                    <Link
                                        onClick={() => setNav(false)}
                                        to={link}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                    >
                                        {link}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
