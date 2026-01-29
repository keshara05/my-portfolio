import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { HiArrowNarrowRight, HiChevronDoubleDown } from 'react-icons/hi';
import profilePic from '../assets/profile.jpg';

const Hero = () => {
    return (
        <div name="home" className="min-h-screen w-full relative overflow-hidden flex items-center justify-center pt-24 md:pt-0">

            {/* Background Elements */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] z-0 animate-pulse hidden md:block"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] z-0 animate-pulse delay-700 hidden md:block"></div>

            <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 sm:px-8 z-10 gap-8 md:gap-12">

                {/* Text Content */}
                <div className="flex flex-col justify-center h-full w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">

                    {/* Futuristic Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-fit mx-auto md:mx-0"
                    >
                        <div className="glass px-3 py-1 rounded-full border border-primary/30 text-primary text-xs sm:text-sm font-mono tracking-widest uppercase flex items-center gap-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                            Available for Work 2026
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
                            I'm <span className="gradient-text">Keshara</span> <br />
                            <span className="text-stroke-white text-transparent opacity-80">Rathnayaka</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-300"
                    >
                        <span className="text-gray-500 mr-2">&gt;</span>
                        <TypeAnimation
                            sequence={[
                                'MERN Stack Developer',
                                1000,
                                'UI/UX Designer',
                                1000,
                                'Tech Innovator',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="gradient-text-alt font-mono"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-gray-400 max-w-lg mx-auto md:mx-0 text-base sm:text-lg leading-relaxed"
                    >
                        Undergraduate at The Open University of Sri Lanka.
                        Building the future of the web with modern technologies and pixel-perfect design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="group text-white px-8 py-3 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary cursor-pointer hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] border border-transparent"
                        >
                            View Projects
                            <HiArrowNarrowRight className="group-hover:translate-x-1 duration-300" size={20} />
                        </Link>

                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="text-white px-8 py-3 rounded-lg border border-white/20 hover:bg-white/5 cursor-pointer hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="w-full md:w-1/2 flex justify-center perspective-1000"
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] group mt-8 md:mt-0">

                        {/* Orbiting Elements */}
                        <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-4 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]"></div>

                        {/* Image Container with Tilt/Glow */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-primary/20 group-hover:shadow-primary/40 transition-shadow duration-500">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                            <img
                                src={profilePic}
                                alt="Keshara Rathnayaka"
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Cards - Hidden on very small mobile to prevent overlap, visible on sm+ */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 glass px-4 py-2 sm:px-6 sm:py-4 rounded-2xl z-30 flex items-center gap-4 transform scale-75 sm:scale-100 origin-bottom-right"
                        >
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <div>
                                <p className="text-xs text-gray-400 font-mono">Status</p>
                                <p className="text-xs sm:text-sm font-bold text-white">Online 24/7</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer hidden md:block"
            >
                <Link to="about" smooth={true} duration={500}>
                    <HiChevronDoubleDown size={30} className="text-gray-400 hover:text-white transition-colors" />
                </Link>
            </motion.div>
        </div>
    );
};

export default Hero;
