import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

const Projects = () => {
    const projects = [
        { id: 1, src: project1, isImage: true, title: 'Personal Portfolio', desc: 'Modern React Portfolio with glassmorphism', code: 'https://github.com/keshara05/my-portfolio', demo: 'https://keshararathnayaka.vercel.app/' },
        { id: 2, src: project2, isImage: true, title: 'Eduflex Institute', desc: 'Institute Management System (IMS)', code: 'https://github.com/keshara05/Eduflex', demo: 'https://eduflexsms.vercel.app/login' },
        { id: 3, src: project3, isImage: true, title: 'CricHub', desc: 'Cricket Tournament Management System', code: 'https://github.com/keshara05', demo: '' },
        { id: 4, src: project4, isImage: true, title: 'K-Maths', desc: 'Educational Platform for Mathematics', code: 'https://github.com/K-Maths', demo: 'https://kmaths.vercel.app/' },
        { id: 5, src: project5, isImage: true, title: 'OL Countdown', desc: 'Exam Timer with motivational quotes', code: 'https://github.com/keshara05/2026-ol-countdown', demo: 'https://kmathsolcountdown.vercel.app/' },
        { id: 6, src: 'linear-gradient(to right, #8b5cf6, #3b82f6)', isImage: false, title: 'Coming Soon', desc: 'More exciting projects in the pipeline', code: 'https://github.com/keshara05', demo: '' },
    ];

    return (
        <div name="projects" className="w-full relative py-20 bg-grid">
            <div className="max-w-screen-xl mx-auto px-4 w-full h-full text-white">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-primary text-glow">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work, built with modern technologies.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(({ id, src, title, desc, code, demo, isImage }) => (
                        <Tilt key={id} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={400} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: id * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-panel rounded-2xl overflow-hidden h-full flex flex-col group relative"
                            >
                                {/* Image Area */}
                                <div className="relative h-48 overflow-hidden">
                                    {isImage ? (
                                        <img src={src} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    ) : (
                                        <div className="w-full h-full" style={{ background: src }}></div>
                                    )}
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-1 relative">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>

                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">{desc}</p>

                                    <div className="mt-auto flex gap-4">
                                        <a
                                            href={demo || '#'}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`flex-1 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${demo ? 'bg-white/10 hover:bg-white/20 text-white hover:text-primary' : 'bg-white/5 text-gray-500 cursor-not-allowed'
                                                }`}
                                        >
                                            <FaExternalLinkAlt /> Demo
                                        </a>
                                        <a
                                            href={code}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                                        >
                                            <FaGithub size={18} /> Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
