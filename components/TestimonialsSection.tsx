'use client';

import React from 'react';
import SectionWrapper from './common/SectionWrapper';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Emma, Age 12",
            quote: "I never thought coding could be so fun! I built my first website and showed it to all my friends. Now I want to become a game developer!",
            project: "Built a Harry Potter fan website",
            avatar: "👧",
            color: "bg-[#ff6b6b]"
        },
        {
            name: "Marcus, Age 10",
            quote: "The games we make in Scratch are awesome! My little brother loves playing the maze game I created for him.",
            project: "Created 5 interactive games",
            avatar: "👦",
            color: "bg-[#4ecdc4]"
        },
        {
            name: "Zoe, Age 14",
            quote: "Learning Python was challenging but so rewarding. I made a calculator that helps me with my math homework!",
            project: "Built a scientific calculator",
            avatar: "👩",
            color: "bg-[#45b7d1]"
        }
    ];

    const parentTestimonials = [
        {
            name: "Sarah Johnson",
            role: "Parent of Emma",
            quote: "My daughter went from being intimidated by technology to confidently explaining programming concepts to me. The transformation has been incredible!",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Parent of Marcus",
            quote: "The instructors are patient and encouraging. My son looks forward to every coding session and has gained so much confidence.",
            rating: 5
        }
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
                            HEAR FROM OUR <span className="text-[#df15bc]">YOUNG</span> CODERS
                        </h2>
                        <p className="hero-subtitle text-xl max-w-3xl mx-auto">
                            Don't just take our word for it - see what our students and their parents 
                            have to say about their coding journey with us.
                        </p>
                    </motion.div>

                    {/* Student Testimonials */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {testimonials.map((testimonial, index) => (
                            <motion.div 
                                key={index} 
                                className="relative group"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -8, rotate: 1 }}
                            >
                                {/* Shadow Element */}
                                {/* <div className="absolute top-3 left-3 w-full h-full bg-black rounded-2xl"></div> */}
                                
                                {/* Main Card */}
                                <div className="relative bg-white border-2 border-black rounded-2xl p-8 transition-all duration-300">
                                    {/* Avatar */}
                                    <motion.div 
                                        className={`w-16 h-16 ${testimonial.color} rounded-full flex items-center justify-center text-2xl mb-6 border-2 border-black mx-auto`}
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {testimonial.avatar}
                                    </motion.div>
                                    
                                    {/* Quote */}
                                    <blockquote className="text-gray-700 text-center mb-6 italic leading-relaxed">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    
                                    {/* Student Info */}
                                    <div className="text-center">
                                        <h4 className="font-bold text-black mb-2">{testimonial.name}</h4>
                                        <motion.div 
                                            className="inline-block px-3 py-1 bg-[#eee4ec] border border-black rounded-lg text-sm"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            🏆 {testimonial.project}
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Parent Testimonials */}
                    <motion.div 
                        className="bg-[#eee4ec] border-2 border-black rounded-2xl p-8 relative mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="absolute top-2 left-2 w-full h-full bg-black rounded-2xl -z-10"></div>
                        
                        <h3 className="text-2xl font-bold text-center mb-8">What Parents Say</h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {parentTestimonials.map((parent, index) => (
                                <motion.div 
                                    key={index} 
                                    className="bg-white border border-black rounded-xl p-6"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    // whileHover={{ scale: 1.02 }}
                                >
                                    {/* Rating Stars */}
                                    <div className="flex justify-center mb-4">
                                        {[...Array(parent.rating)].map((_, i) => (
                                            <motion.span 
                                                key={i} 
                                                className="text-yellow-400 text-xl"
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                whileHover={{ scale: 1.2 }}
                                            >
                                                ⭐
                                            </motion.span>
                                        ))}
                                    </div>
                                    
                                    {/* Quote */}
                                    <blockquote className="text-gray-700 text-center mb-4 italic">
                                        "{parent.quote}"
                                    </blockquote>
                                    
                                    {/* Parent Info */}
                                    <div className="text-center">
                                        <h4 className="font-bold text-black">{parent.name}</h4>
                                        <p className="text-sm text-gray-600">{parent.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </SectionWrapper>
    );
};

export default TestimonialsSection;
