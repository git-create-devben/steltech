'use client';

import React from 'react';
import SlackButton from './SlackButton';
import SectionWrapper from './common/SectionWrapper';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
    const features = [

        {
            icon: "🎨",
            title: "Creative Projects",
            description: "Build websites, games, and apps that you can share with friends and family.",
            color: "bg-[#f9ca24]"
        },
        {
            icon: "📱",
            title: "Mobile Friendly",
            description: "Code anywhere, anytime with our mobile-optimized learning platform.",
            color: "bg-[#6c5ce7]"
        },

        {
            icon: "🌟",
            title: "Safe Environment",
            description: "A secure, kid-friendly platform with parental controls and monitoring.",
            color: "bg-[#fd79a8]"
        },
        {
            icon: "👥",
            title: "Live Mentorship",
            description: "Get guidance from experienced developers who love teaching kids to code.",
            color: "bg-[#4ecdc4]"
        },
        {
            icon: "🏆",
            title: "Achievement System",
            description: "Earn badges, certificates, and rewards as you progress through your coding journey.",
            color: "bg-[#45b7d1]"
        },
        {
            icon: "🎮",
            title: "Game-Based Learning",
            description: "Learn coding through fun, interactive games.",
            color: "bg-[#ff6b6b]"
        },
    ];

    return (
        <SectionWrapper>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="hero-title text-4xl md:text-6xl mb-6">
                            WHY KIDS <span className="text-[#df15bc]">LOVE</span> CODING WITH US
                        </h2>
                        <p className="hero-subtitle text-xl max-w-3xl mx-auto">
                            We&apos;ve designed every aspect of our platform to make learning to code
                            as exciting and engaging as possible for young minds.
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 h-full w-full gap-8 mb-12">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="relative group"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                {/* Shadow Element */}
                                <div className="absolute top-2 left-2 w-full h-full bg-black rounded-2xl opacity-5"></div>

                                {/* Main Card */}
                                <div className="relative bg-white border-2 border-black rounded-2xl p-8 transition-all duration-300">
                                    {/* Icon */}
                                    <motion.div
                                        className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-6 border-2 border-black`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {feature.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-4 text-black">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <SlackButton className="!bg-[#df15bc] text-white border-black hover:bg-[#c412a8]">
                                Start Your Coding Adventure
                            </SlackButton>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </SectionWrapper>
    );
};

export default FeaturesSection;
