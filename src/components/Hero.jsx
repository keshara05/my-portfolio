import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
    return (
        <div name="home" className="h-screen w-full pt-20 relative">
            {/* Background is handled in index.css global .animated-bg, checking if we need to add a specific wrapper here? 
            No, body has fixed background, but let's make sure this section is transparent.
        */}

            <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 text-white gap-8">

                {/* Text Section */}
                <div className="flex flex-col justify-center h-full w-full md:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-7xl font-bold"
                    >
                        I'm <span className="gradient-text">Keshara Rathnayaka</span>
                    </motion.h2>

                    <div className="text-2xl sm:text-4xl font-bold text-gray-400 mt-4 h-20 md:h-auto">
                        <TypeAnimation
                            sequence={[
                                'MERN Stack Developer',
                                1000,
                                'UI/UX Enthusiast',
                                1000,
                                'Tech Explorer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-[var(--color-primary)]"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-400 py-4 max-w-md text-lg"
                    >
                        Undergraduate at The Open University of Sri Lanka.
                        Crafting unique and modern digital experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] cursor-pointer hover:scale-105 duration-200 shadow-[0_0_20px_rgba(0,242,96,0.4)]"
                        >
                            View Work
                            <span className="group-hover:rotate-90 duration-300 ml-2">
                                ➔
                            </span>
                        </Link>
                    </motion.div>
                </div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <img
                            src={profilePic}
                            alt="Keshara"
                            className="relative w-full h-full object-cover rounded-full border-4 border-[var(--color-secondary)] shadow-2xl z-10 hover:scale-105 duration-500"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
