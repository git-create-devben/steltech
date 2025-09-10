'use client';

import React from 'react';
import SlackButton from './SlackButton';
import SectionWrapper from './common/SectionWrapper';
import { motion } from 'framer-motion';

const CommunitySection = () => {
    return (
        <SectionWrapper>
            <section className="py-20 bg-[#eee4ec]">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div 
                        className="bg-white border-2 border-black rounded-2xl p-8 relative text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                    >
                        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-2xl -z-10"></div>
                        
                        <motion.h2 
                            className="hero-title text-4xl md:text-5xl mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            JOIN OUR <span className="text-[#df15bc]">VIBRANT</span> COMMUNITY
                        </motion.h2>
                        
                        <motion.p 
                            className="hero-subtitle text-xl max-w-3xl mx-auto mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Connect with fellow parents, share your child's progress, and get support from our team in our exclusive Slack community.
                        </motion.p>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <SlackButton className="!bg-[#df15bc] text-white border-black">
                                Join our Slack Community
                            </SlackButton>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </SectionWrapper>
    );
};

export default CommunitySection;
