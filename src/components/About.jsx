import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const About = () => {
    const stats = [
        { id: 1, title: 'Experience', value: '1+ Years', icon: <FaBriefcase /> },
        { id: 2, title: 'Projects', value: '10+ Completed', icon: <FaCode /> },
        { id: 3, title: 'University', value: 'OUSL', icon: <FaGraduationCap /> },
    ];

    return (
        <div name="about" className="w-full min-h-screen text-white relative flex items-center">
            <div className="max-w-screen-lg p-4 mx-auto grid md:grid-cols-2 gap-8 items-center">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center h-full"
                >
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-[var(--color-primary)]">
                            About Me
                        </p>
                    </div>

                    <p className="text-xl mt-4 text-gray-300 leading-relaxed">
                        I am <span className="text-[var(--color-primary)] font-bold">Keshara Rathnayaka</span>, a passionate Undergraduate at the <span className="text-[var(--color-secondary)] font-bold">Open University of Sri Lanka</span>.
                    </p>
                    <br />
                    <p className="text-xl text-gray-300 leading-relaxed">
                        I specialize in the <span className="font-bold text-white">MERN Stack</span> and love bringing creative ideas to life on the web. My goal is to build applications that are not just functional, but also provide a visually stunning user experience.
                    </p>

                    <motion.a
                        href="/cv-dummy.pdf" // Placeholder for CV
                        download={true}
                        whileHover={{ scale: 1.05 }}
                        className="w-fit mt-8 px-6 py-3 rounded-md bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-bold shadow-lg shadow-green-500/30 cursor-pointer"
                    >
                        Download CV
                    </motion.a>
                </motion.div>

                {/* Right Column: Visuals/Stats */}
                <div className="grid grid-cols-1 gap-6">

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map(({ id, title, value, icon }) => (
                            <Tilt key={id} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} className="parallax-effect">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: id * 0.2 }}
                                    className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center hover:border-[var(--color-primary)] duration-300"
                                >
                                    <div className="text-3xl text-[var(--color-primary)] mb-2">
                                        {icon}
                                    </div>
                                    <h3 className="text-2xl font-bold">{value}</h3>
                                    <p className="text-gray-400 text-sm">{title}</p>
                                </motion.div>
                            </Tilt>
                        ))}
                    </div>

                    {/* Featured Education/Highlight Card */}
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="glass p-6 rounded-xl border-l-4 border-l-[var(--color-secondary)]"
                        >
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <FaGraduationCap className="text-[var(--color-secondary)]" />
                                Education
                            </h3>
                            <p className="mt-2 text-gray-300">Bachelor's Degree in Software Engineering (Reading)</p>
                            <p className="text-sm text-gray-500">The Open University of Sri Lanka</p>
                        </motion.div>
                    </Tilt>

                </div>

            </div>
        </div>
    );
};

export default About;
