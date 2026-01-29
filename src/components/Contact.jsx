import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen text-white pt-20">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold inline border-b-4 border-[var(--color-primary)]"
                    >
                        Contact
                    </motion.p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>

                <div className="flex justify-center items-center">
                    <motion.form
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        action="https://getform.io/f/YOUR_GETFORM_ENDPOINT"
                        method="POST"
                        className="flex flex-col w-full md:w-1/2 glass p-8 rounded-lg"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:border-[var(--color-primary)]"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:border-[var(--color-primary)]"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Enter your message"
                            className="p-2 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:border-[var(--color-primary)]"
                        ></textarea>

                        <button className="text-black bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 font-bold">
                            Let's Talk
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
