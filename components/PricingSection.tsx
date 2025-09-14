'use client';

import React from 'react';
import SlackButton from './SlackButton';
import SectionWrapper from './common/SectionWrapper';
import { motion } from 'framer-motion';

const PricingSection = () => {
    const plans = [
        {
            name: "Group Session",
            price: "30,000/m",
            description: "Learn coding with other kids in fun, interactive group sessions.",
            features: [
                "Access to all coding courses",
                "4 group sessions per month",
                "Interactive group projects",
                "Peer learning environment",
                "Group challenges and competitions",
                "Email support",
                "Certificate of completion"
            ],
            color: "bg-[#4ecdc4]",
            popular: true
        },
        {
            name: "Personal Session",
            price: "50,000/m",
            description: "One-on-one personalized coding lessons tailored to your child's pace.",
            features: [
                "All Group Session features",
                "4 private 1-on-1 sessions per month",
                "Personalized learning path",
                "Custom project guidance",
                "Flexible scheduling",
                "Priority support",
                "Parent progress reports",
                "Advanced portfolio creation"
            ],
            color: "bg-[#45b7d1]",
            popular: false
        }
    ];

    return (
        <SectionWrapper>
            <section className="py-20 bg-[#eee4ec]">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="hero-title text-4xl md:text-6xl mb-6">
                            SIMPLE <span className="text-[#df15bc]">PRICING</span> FOR EVERY FAMILY
                        </h2>
                        <p className="hero-subtitle text-xl max-w-3xl mx-auto">
                            Choose the perfect plan for your child&apos;s coding journey.
                            All plans include our fun, interactive learning platform and caring mentors.
                        </p>
                    </motion.div>

                    {/* Pricing Cards */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-12 justify-center">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                className="relative group max-w-md"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                {/* uncomment if you want to show Popular Badge */}
                                {/* {plan.popular && (
                                    <motion.div 
                                        className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <div className="bg-[#df15bc] text-white px-6 py-2 rounded-full border-2 border-black font-bold text-sm">
                                            MOST POPULAR
                                        </div>
                                    </motion.div>
                                )} */}

                                {/* Shadow Element */}
                                {/* <div className={`absolute top-4 left-4 w-full h-full bg-black rounded-2xl ${plan.popular ? 'scale-105' : ''}`}></div> */}

                                {/* Main Card */}
                                <div className={`relative bg-white border-2 border-black rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${plan.popular ? 'scale-105 border-[#df15bc]' : ''}`}>
                                    {/* Plan Header */}
                                    <div className="text-center mb-4">
                                        <motion.div
                                            className={`inline-block px-4 py-2 ${plan.color} border-2 border-black rounded-xl text-sm font-bold mb-4`}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {plan.name}
                                        </motion.div>

                                        <motion.div
                                            className="mb-2"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        >
                                            <span className="text-5xl font-bold text-black">{plan.price}</span>
                                        </motion.div>

                                        <p className="text-gray-600 leading-relaxed">
                                            {plan.description}
                                        </p>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-4 mb-4 flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="flex items-start gap-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                whileHover={{ x: 5 }}
                                            >
                                                <span className="text-[#df15bc] text-lg mt-0.5">✓</span>
                                                <span className="text-gray-700">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <SlackButton className={`w-full justify-center cursor-pointer ${plan.popular ? '!bg-[#df15bc] text-white border-none' : '!bg-[#45b7d1] border-none'}`}>
                                            {plan.popular ? 'Start Free Trial' : 'Choose Plan'}
                                        </SlackButton>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </SectionWrapper>
    );
};

export default PricingSection;
