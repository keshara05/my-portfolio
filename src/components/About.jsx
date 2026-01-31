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
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Card 1: Main Intro (Spans 2 cols, 2 rows on lg) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl md:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-center space-y-4"
                    >
                        <h3 className="text-3xl font-bold text-white">
                            I'm <span className="text-primary">Keshara Rathnayaka</span>
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg font-light">
                            A passionate Undergraduate at the <span className="text-secondary font-semibold">Open University of Sri Lanka</span>.
                            I specialize in the <span className="text-white font-medium">MERN Stack</span> and thrive on building scalable,
                            high-performance web applications. My mission is to merge code with creativity to deliver distinct digital experiences.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-accent">#FullStack</span>
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-accent">#UI/UX</span>
                            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-accent">#ReactNative</span>
                        </div>
                    </motion.div>

                    {/* Card 2: Experience */}
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="md:col-span-1 lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel p-6 rounded-3xl h-full flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary text-3xl group-hover:scale-110 transition-transform">
                                <FaBriefcase />
                            </div>
                            <h4 className="text-2xl font-bold text-white">1+ Years</h4>
                            <p className="text-gray-400 text-sm">Experience</p>
                        </motion.div>
                    </Tilt>

                    {/* Card 3: Projects */}
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} className="md:col-span-1 lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="glass-panel p-6 rounded-3xl h-full flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary text-3xl group-hover:scale-110 transition-transform">
                                <FaCode />
                            </div>
                            <h4 className="text-2xl font-bold text-white">10+</h4>
                            <p className="text-gray-400 text-sm">Completed Projects</p>
                        </motion.div>
                    </Tilt>

                    {/* Card 4: Education (Spans 2 cols on md) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 rounded-3xl md:col-span-2 lg:col-span-2 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full -mr-8 -mt-8"></div>
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-secondary text-3xl">
                                <FaGraduationCap />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Education</h4>
                                <h5 className="text-lg text-gray-300 mt-1">BSc in Software Engineering (Reading)</h5>
                                <p className="text-gray-500 text-sm">The Open University of Sri Lanka</p>
                                <div className="mt-4 flex gap-3">
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <FaLaptopCode className="text-accent" /> Dean's List
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <FaRocket className="text-accent" /> Top Performer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 5: Soft Skills / Download CV */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 rounded-3xl md:col-span-3 lg:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6"
                    >
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3 text-gray-300">
                                <FaLightbulb className="text-yellow-400" />
                                <span>Creative Problem Solver</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <FaRocket className="text-green-400" />
                                <span>Fast Learner</span>
                            </div>
                        </div>

                        <a
                            href="/cv-dummy.pdf"
                            download
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
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
