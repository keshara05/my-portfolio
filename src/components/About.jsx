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
        <div name="about" className="w-full min-h-screen relative flex items-center overflow-hidden">
            {/* Background blobs for depth */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10"></div>

            <div className="max-w-screen-xl p-4 mx-auto grid md:grid-cols-2 gap-12 items-center z-10">

                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center h-full space-y-6"
                >
                    <div className="pb-2">
                        <p className="text-4xl font-bold inline border-b-4 border-primary text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            About Me
                        </p>
                    </div>

                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                        I am <span className="text-primary font-bold text-glow">Keshara Rathnayaka</span>, a passionate Undergraduate at the <span className="text-secondary font-bold">Open University of Sri Lanka</span>.
                    </p>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        I specialize in the <span className="font-bold text-white">MERN Stack</span> and love bringing creative ideas to life on the web. My goal is to build applications that are not just functional, but also provide a visually stunning user experience.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <div className="glass px-4 py-2 text-sm text-gray-300 rounded-lg border-l-2 border-primary">
                            🚀 Fast Learner
                        </div>
                        <div className="glass px-4 py-2 text-sm text-gray-300 rounded-lg border-l-2 border-secondary">
                            💡 Creative Thinker
                        </div>
                    </div>

                    <motion.a
                        href="/cv-dummy.pdf"
                        download={true}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-fit mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300"
                    >
                        Download CV
                    </motion.a>
                </motion.div>

                {/* Right Column: Visuals/Stats */}
                <div className="grid grid-cols-1 gap-6">

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map(({ id, title, value, icon }) => (
                            <Tilt key={id} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} className="parallax-effect">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: id * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors duration-300 group"
                                >
                                    <div className="text-4xl text-primary mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                                        {icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-glow">{value}</h3>
                                    <p className="text-gray-400 text-sm mt-1">{title}</p>
                                </motion.div>
                            </Tilt>
                        ))}
                    </div>

                    {/* Featured Education/Highlight Card */}
                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.01}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl border-l-4 border-l-secondary relative overflow-hidden"
                        >
                            <div className="absolute right-0 top-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-4 -mt-4"></div>

                            <h3 className="text-xl font-bold flex items-center gap-3 text-white">
                                <FaGraduationCap className="text-secondary text-2xl" />
                                Education
                            </h3>
                            <p className="mt-3 text-gray-200 font-medium">Bachelor's Degree in Software Engineering (Reading)</p>
                            <p className="text-sm text-gray-500 mt-1">The Open University of Sri Lanka</p>
                        </motion.div>
                    </Tilt>

                </div>

            </div>
        </div>
    );
};

export default About;
