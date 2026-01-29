import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <div name="contact" className="w-full min-h-screen text-white relative py-20 flex items-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent -z-10"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-8 text-center"
                >
                    <p className="text-4xl font-bold inline border-b-4 border-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        Contact Me
                    </p>
                    <p className="py-6 text-gray-400 text-xl">Submit the form below to get in touch</p>
                </motion.div>

                <div className="flex justify-center items-center">
                    <motion.form
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        action="https://getform.io/f/YOUR_GETFORM_ENDPOINT" // User should update this
                        method="POST"
                        className="flex flex-col w-full md:w-3/4 lg:w-1/2 glass p-4 sm:p-8 rounded-2xl shadow-2xl relative"
                    >
                        <div className="absolute inset-0 bg-white/5 rounded-2xl -z-10"></div>

                        <div className="flex flex-col gap-6">
                            <div className="group">
                                <label className="text-sm font-bold text-gray-400 mb-1 block group-focus-within:text-primary transition-colors">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300 placeholder-gray-600"
                                    required
                                />
                            </div>

                            <div className="group">
                                <label className="text-sm font-bold text-gray-400 mb-1 block group-focus-within:text-primary transition-colors">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300 placeholder-gray-600"
                                    required
                                />
                            </div>

                            <div className="group">
                                <label className="text-sm font-bold text-gray-400 mb-1 block group-focus-within:text-primary transition-colors">Message</label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    placeholder="Enter your message"
                                    className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all duration-300 placeholder-gray-600"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <button className="text-white bg-gradient-to-r from-primary to-secondary px-8 py-4 my-8 mx-auto flex items-center gap-3 rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] duration-300 font-bold tracking-wide group">
                            Let's Talk
                            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
