import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs, SiFramer, SiVite } from 'react-icons/si';

const Skills = () => {
    const techs = [
        { id: 1, src: <FaHtml5 />, title: 'HTML', color: 'text-orange-500', shadow: 'shadow-orange-500/50' },
        { id: 2, src: <FaCss3Alt />, title: 'CSS', color: 'text-blue-500', shadow: 'shadow-blue-500/50' },
        { id: 3, src: <FaJs />, title: 'JavaScript', color: 'text-yellow-400', shadow: 'shadow-yellow-400/50' },
        { id: 4, src: <FaReact />, title: 'React', color: 'text-cyan-400', shadow: 'shadow-cyan-400/50' },
        { id: 5, src: <SiNextdotjs />, title: 'Next.js', color: 'text-white', shadow: 'shadow-white/50' },
        { id: 6, src: <FaNodeJs />, title: 'Node JS', color: 'text-green-500', shadow: 'shadow-green-500/50' },
        { id: 7, src: <SiExpress />, title: 'Express', color: 'text-gray-300', shadow: 'shadow-gray-300/50' },
        { id: 8, src: <SiMongodb />, title: 'MongoDB', color: 'text-green-400', shadow: 'shadow-green-400/50' },
        { id: 9, src: <SiTailwindcss />, title: 'Tailwind', color: 'text-cyan-300', shadow: 'shadow-cyan-300/50' },
        { id: 10, src: <SiFramer />, title: 'Framer', color: 'text-pink-500', shadow: 'shadow-pink-500/50' },
        { id: 11, src: <SiVite />, title: 'Vite', color: 'text-purple-400', shadow: 'shadow-purple-400/50' },
        { id: 12, src: <FaGithub />, title: 'GitHub', color: 'text-gray-200', shadow: 'shadow-gray-200/50' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div name="skills" className="w-full min-h-screen relative flex items-center py-20 overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 w-full h-full bg-grid-white/[0.02] -z-10"></div>

            <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-12 text-center"
                >
                    <p className="text-5xl font-bold inline border-b-4 border-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Tech Stack
                    </p>
                    <p className="py-6 text-xl text-gray-400">
                        Technologies I use to build modern applications
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8 text-center px-2 sm:px-4"
                >
                    {techs.map(({ id, src, title, color, shadow }) => (
                        <Tilt key={id} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1} className="parallax-effect">
                            <motion.div
                                variants={itemVariants}
                                className={`glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                <div className={`text-5xl mx-auto mb-4 ${color} drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300`}>
                                    {src}
                                </div>
                                <p className="mt-2 font-bold tracking-wide group-hover:text-glow transition-all duration-300">
                                    {title}
                                </p>
                            </motion.div>
                        </Tilt>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
