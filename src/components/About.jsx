import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGraduationCap, FaBriefcase, FaCode, FaLaptopCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const About = () => {
    return (
        <div name="about" className="w-full min-h-screen relative flex items-center py-20 bg-grid">
            <div className="max-w-screen-xl mx-auto px-4 z-10 w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-primary text-glow">Me</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Get to know a bit more about my journey, experience, and what drives me.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Main Intro (Spans 2 cols, 2 rows) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl md:col-span-2 md:row-span-2 flex flex-col justify-center space-y-4 h-full min-h-[300px]"
                    >
                        <h3 className="text-3xl font-bold text-white">
                            I'm <span className="text-primary">Keshara Rathnayaka</span>
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg font-light">
                            A passionate Undergraduate at the <span className="text-secondary font-semibold">Open University of Sri Lanka</span>.
                            I specialize in the <span className="text-white font-medium">MERN Stack</span> and thrive on building scalable,
                            high-performance web applications.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-accent">#FullStack</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-accent">#UI/UX</span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-accent">#Creative</span>
                        </div>
                    </motion.div>

                    {/* Right Column Stack for Desktop Balance */}
                    <div className="md:col-span-1 flex flex-col gap-6">
                        {/* Experience & Projects Row */}
                        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                            {/* Card 2: Experience */}
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass-panel p-6 rounded-3xl h-full flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3 text-primary text-2xl group-hover:scale-110 transition-transform">
                                        <FaBriefcase />
                                    </div>
                                    <h4 className="text-xl font-bold text-white">1+ Years</h4>
                                    <p className="text-gray-400 text-xs">Experience</p>
                                </motion.div>
                            </Tilt>

                            {/* Card 3: Projects */}
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="glass-panel p-6 rounded-3xl h-full flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-3 text-secondary text-2xl group-hover:scale-110 transition-transform">
                                        <FaCode />
                                    </div>
                                    <h4 className="text-xl font-bold text-white">10+</h4>
                                    <p className="text-gray-400 text-xs">Projects</p>
                                </motion.div>
                            </Tilt>
                        </div>
                    </div>

                    {/* Card 4: Education (Full Width on Mobile, spans 1 col on MD but needs to sit under...) 
                        Actually, let's move Education INSIDE the Right Column Stack to ensure perfect height match for Intro?
                        Or make Education span the full width below?
                        
                        Let's try a different Approach:
                        Grid 3 cols.
                        [Intro 2col] [Stats 1col]
                        [Intro 2col] [Edu 1col]
                    */}

                    {/* Card 4: Education (Placed in specific grid slot) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 rounded-3xl md:col-start-3 md:row-start-2 relative overflow-hidden flex flex-col justify-center"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full -mr-6 -mt-6"></div>
                        <div className="relative z-10">
                            <div className="mb-2 text-secondary text-2xl"><FaGraduationCap /></div>
                            <h4 className="text-lg font-bold text-white">Education</h4>
                            <p className="text-gray-400 text-xs mt-1">BSc Software Engineering</p>
                            <p className="text-gray-500 text-[10px]">Open University of SL</p>
                        </div>
                    </motion.div>

                    {/* Card 5: Soft Skills / PDF (Bottom Row Full Width) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 rounded-3xl md:col-span-3 flex flex-col sm:flex-row items-center justify-between gap-6"
                    >
                        <div className="flex gap-4 sm:gap-8 flex-wrap justify-center">
                            <div className="flex items-center gap-2 text-gray-300">
                                <FaLightbulb className="text-yellow-400" />
                                <span className="text-sm">Problem Solver</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <FaRocket className="text-green-400" />
                                <span className="text-sm">Fast Learner</span>
                            </div>
                        </div>

                        <a
                            href="/cv-dummy.pdf"
                            download
                            className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300"
                        >
                            Download CV
                        </a>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default About;
