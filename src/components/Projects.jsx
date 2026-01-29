import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

const Projects = () => {
    const projects = [
        { id: 1, src: project1, isImage: true, title: 'Personal Portfolio', code: 'https://github.com/keshara05/my-portfolio', demo: 'https://keshararathnayaka.vercel.app/' },
        { id: 2, src: project2, isImage: true, title: 'Eduflex Institute Management System', code: 'https://github.com/keshara05/Eduflex', demo: 'https://eduflexsms.vercel.app/login' },
        { id: 3, src: project3, isImage: true, title: 'CricHub (Group Project)', code: 'https://github.com/keshara05', demo: '' },
        { id: 4, src: project4, isImage: true, title: 'K-Maths (Educational Platform)', code: 'https://github.com/K-Maths', demo: 'https://kmaths.vercel.app/' },
        { id: 5, src: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)', title: 'Project Five' },
        { id: 6, src: 'linear-gradient(to right, #200122, #6f0000)', title: 'Project Six' },
    ];

    return (
        <div name="projects" className="w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-[var(--color-primary)]"
                    >
                        Projects
                    </motion.p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(({ id, src, title, code, demo, isImage }) => (
                        <Tilt key={id} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="shadow-md shadow-gray-600 rounded-lg overflow-hidden glass group h-full"
                            >
                                {isImage ? (
                                    <img src={src} alt={title} className="w-full h-48 object-cover duration-200 group-hover:scale-110" />
                                ) : (
                                    <div
                                        className="h-48 w-full duration-200 group-hover:scale-110"
                                        style={{ background: src }}
                                    ></div>
                                )}
                                <div className="p-4 flex flex-col items-center justify-center">
                                    <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
                                    <div className="flex items-center justify-center gap-4 w-full">
                                        <a href={demo || '#'} target="_blank" rel="noopener noreferrer" className="w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105 bg-[var(--color-primary)] text-black font-bold rounded-md hover:shadow-[0_0_15px_var(--color-primary)] text-center">Demo</a>
                                        <a href={code || '#'} target="_blank" rel="noopener noreferrer" className="w-1/2 px-3 py-2 m-2 duration-200 hover:scale-105 border border-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary)] hover:text-black text-center">Code</a>
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default Projects;
