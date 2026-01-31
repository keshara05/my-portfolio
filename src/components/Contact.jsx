import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaCommentAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div name="contact" className="w-full relative py-20 bg-grid flex items-center overflow-hidden">

            <div className="max-w-screen-lg mx-auto p-4 w-full h-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let's <span className="text-primary text-glow">Connect</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Got a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities.
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    <motion.form
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        action="https://formsubmit.co/kesharar99@gmail.com"
                        method="POST"
                        className="flex flex-col w-full md:w-3/4 lg:w-2/3 glass-panel p-8 rounded-3xl shadow-2xl relative border-t border-white/10"
                    >
                        {/* Decorative Blur */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

                        <div className="flex flex-col gap-6">
                            <div className="relative group">
                                <FaUser className="absolute top-4 left-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder-gray-500"
                                    required
                                />
                            </div>

                            <div className="relative group">
                                <FaEnvelope className="absolute top-4 left-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder-gray-500"
                                    required
                                />
                            </div>

                            <div className="relative group">
                                <FaCommentAlt className="absolute top-4 left-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message..."
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder-gray-500 resize-none"
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <button className="mt-8 mx-auto px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 group">
                            Send Message
                            <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
