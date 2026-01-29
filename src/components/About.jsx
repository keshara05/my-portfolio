import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div name="about" className="w-full h-screen text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-[var(--color-primary)]"
                    >
                        About
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl mt-10 glass p-8 rounded-lg"
                >
                    <p>
                        I am Keshara Rathnayaka, an undergraduate at the Open University of Sri Lanka.
                        I have a passion for building modern, responsive, and user-friendly web applications.
                    </p>
                    <br />
                    <p>
                        My main expertise lies in the MERN stack (MongoDB, Express, React, Node.js), but I am also proficient in HTML, CSS, and JavaScript.
                        I strive to create beautiful animations and unique designs that stand out.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
