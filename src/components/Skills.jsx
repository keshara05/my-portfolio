import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
    const techs = [
        { id: 1, src: <FaHtml5 size={50} className="text-orange-500" />, title: 'HTML', style: 'shadow-orange-500' },
        { id: 2, src: <FaCss3Alt size={50} className="text-blue-500" />, title: 'CSS', style: 'shadow-blue-500' },
        { id: 3, src: <FaJs size={50} className="text-yellow-500" />, title: 'JavaScript', style: 'shadow-yellow-500' },
        { id: 4, src: <FaReact size={50} className="text-cyan-500" />, title: 'React', style: 'shadow-cyan-500' },
        { id: 5, src: <FaNodeJs size={50} className="text-green-500" />, title: 'Node JS', style: 'shadow-green-500' },
        { id: 6, src: <SiExpress size={50} className="text-white" />, title: 'Express', style: 'shadow-white' },
        { id: 7, src: <SiMongodb size={50} className="text-green-400" />, title: 'MongoDB', style: 'shadow-green-400' },
        { id: 8, src: <FaGithub size={50} className="text-gray-400" />, title: 'GitHub', style: 'shadow-gray-400' },
    ];

    return (
        <div name="skills" className="w-full h-screen text-white relative">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold border-b-4 border-[var(--color-primary)] inline"
                    >
                        Skills
                    </motion.p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <Tilt key={id} tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.1} className="parallax-effect">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg glass ${style}`}
                            >
                                <div className="w-20 mx-auto mb-4">{src}</div>
                                <p className="mt-4">{title}</p>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
