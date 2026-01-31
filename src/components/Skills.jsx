import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs, SiFramer, SiVite } from 'react-icons/si';

const Skills = () => {
    const techs = [
        { id: 1, src: <FaHtml5 />, title: 'HTML', color: '#e34c26' },
        { id: 2, src: <FaCss3Alt />, title: 'CSS', color: '#264de4' },
        { id: 3, src: <FaJs />, title: 'JavaScript', color: '#f7df1e' },
        { id: 4, src: <FaReact />, title: 'React', color: '#61dafb' },
        { id: 5, src: <SiNextdotjs />, title: 'Next.js', color: '#ffffff' },
        { id: 6, src: <FaNodeJs />, title: 'Node JS', color: '#339933' },
        { id: 7, src: <SiExpress />, title: 'Express', color: '#ffffff' },
        { id: 8, src: <SiMongodb />, title: 'MongoDB', color: '#47a248' },
        { id: 9, src: <SiTailwindcss />, title: 'Tailwind', color: '#38b2ac' },
        { id: 10, src: <SiFramer />, title: 'Framer', color: '#0055ff' },
        { id: 11, src: <SiVite />, title: 'Vite', color: '#646cff' },
        { id: 12, src: <FaGithub />, title: 'GitHub', color: '#ffffff' },
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
        <div name="skills" className="w-full relative py-20 bg-grid">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col justify-center w-full h-full text-white">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-primary text-glow">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl">
                        The tools and technologies I use to craft digital reality.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {techs.map(({ id, src, title, color }) => (
                        <motion.div
                            key={id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* Glow Effect */}
                            <div
                                className="absolute -inset-1 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                                style={{ background: color }}
                            ></div>

                            {/* Card Content */}
                            <div className="relative glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 h-full border border-white/5 hover:border-white/20 transition-colors">
                                <div
                                    className="text-5xl transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
                                    style={{ color: color }}
                                >
                                    {src}
                                </div>
                                <h3 className="font-medium text-gray-300 group-hover:text-white transition-colors">
                                    {title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
