import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiArrowNarrowRight, HiChevronDoubleDown } from 'react-icons/hi';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
    return (
        <div name="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
            {/* Background Grid & Glows */}
            <div className="absolute inset-0 bg-grid -z-20"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse -z-10"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse -z-10"></div>

            <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center text-center z-10 w-full">

                {/* Profile Avatar with Orbit */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative mb-8 group"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                        <img
                            src={profilePic}
                            alt="Keshara Rathnayaka"
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                        />
                    </div>
                    {/* Status Badge */}
                    <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 glass-panel px-3 py-1 rounded-full flex items-center gap-2">
                        <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                        <span className="text-xs font-mono text-white">Online</span>
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-sm md:text-lg font-mono text-accent mb-4 tracking-widest uppercase">
                        Welcome to 2026
                    </h2>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white mb-6">
                        I'm <span className="gradient-text-primary text-glow">Keshara</span>
                    </h1>
                </motion.div>

                {/* Typing Effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl sm:text-2xl md:text-4xl font-light text-gray-300 mb-8 h-12"
                >
                    <TypeAnimation
                        sequence={[
                            'Building Future Tech',
                            2000,
                            'Designing Premium UI',
                            2000,
                            'MERN Stack Engineer',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="gradient-text-secondary"
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-lg text-gray-400 text-sm md:text-lg sm:leading-relaxed mb-10"
                >
                    Undergraduate at The Open University of Sri Lanka.
                    Crafting digital experiences that merge <span className="text-white">innovation</span> with <span className="text-white">beauty</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white font-medium hover:bg-white/10 hover:scale-105 hover:border-primary/50 transition-all duration-300 flex items-center gap-3"
                    >
                        View Projects
                        <HiArrowNarrowRight className="group-hover:translate-x-1 duration-300 text-primary" />
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="px-8 py-4 bg-transparent border border-white/10 rounded-full text-gray-300 font-medium hover:text-white hover:border-white/30 transition-all duration-300"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                {/* Scroll Down */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 cursor-pointer"
                >
                    <Link to="about" smooth={true} duration={800} offset={-50}>
                        <HiChevronDoubleDown size={24} className="text-gray-500 hover:text-white transition-colors" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
