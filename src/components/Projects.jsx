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
        <div name="projects" className="w-full min-h-screen text-white relative py-20 flex items-center">

            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-12 text-center"
                >
                    <p className="text-5xl font-bold inline border-b-4 border-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Featured Projects
                    </p>
                    <p className="py-6 text-xl text-gray-400">Check out some of my recent work</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 sm:px-0">
                    {projects.map(({ id, src, title, desc, code, demo, isImage }) => (
                        <Tilt key={id} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02} transitionSpeed={400} className="parallax-effect">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: id * 0.1 }}
                                viewport={{ once: true }}
                                className="glass rounded-2xl overflow-hidden group h-full flex flex-col relative border border-white/5 hover:border-primary/30 transition-colors duration-500"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden w-full h-56">
                                    {isImage ? (
                                        <img src={src} alt={title} className="w-full h-full object-cover duration-500 group-hover:scale-110 group-hover:rotate-1" />
                                    ) : (
                                        <div
                                            className="w-full h-full duration-500 group-hover:scale-110"
                                            style={{ background: src }}
                                        ></div>
                                    )}
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1 relative z-10">
                                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{title}</h3>
                                    <p className="text-gray-400 mb-6 text-sm line-clamp-2">{desc}</p>

                                    <div className="mt-auto flex justify-between gap-4">
                                        <a
                                            href={demo || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-sm transition-all duration-300 ${demo ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/50 hover:scale-105' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                        <a
                                            href={code || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-sm bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105"
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
