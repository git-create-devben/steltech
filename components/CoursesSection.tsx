'use client';

import React from 'react';
import SlackButton from './SlackButton';
import SectionWrapper from './common/SectionWrapper';
import { motion } from 'framer-motion';

const CoursesSection = () => {
    const courses = [
        {
            title: "Scratch Programming",
            description: "Perfect for beginners! Learn programming concepts through visual blocks and create your first animations and games.",
            age: "Ages 6-10",
            duration: "4 weeks",
            level: "Beginner",
            color: "bg-[#ff6b6b]",
            projects: ["Animated Stories", "Simple Games", "Interactive Art"]
        },
        {
            title: "Web Dev (HTML, CSS)",
            description: "Build your own websites using HTML and  CSS, Create cool projects you can share with friends!",
            age: "Ages 10-14",
            duration: "6 weeks",
            level: "Intermediate",
            color: "bg-[#4ecdc4]",
            projects: ["Personal Website", "Interactive Quiz", "Mini Games"]
        },
        {
            title: "Web Dev (JavaScript)",
            description: "Dive into real programming with Javascript! Create games, solve puzzles, and build awesome projects.",
            age: "Ages 12-16",
            duration: "8 weeks",
            level: "Advanced",
            color: "bg-[#45b7d1]",
            projects: ["Text Adventures", "Calculator App", "Drawing Programs"]
        }
    ];

    return (
        <SectionWrapper>
            <section className="py-20 bg-[#eee4ec]">
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
                            CHOOSE YOUR <span className="text-[#df15bc]">CODING</span> PATH
                        </h2>
                        <p className="hero-subtitle text-xl max-w-3xl mx-auto">
                            From visual programming to real code, we have the perfect course 
                            to match your child's age and skill level.
                        </p>
                    </motion.div>

                    {/* Courses Grid */}
                    <div className="grid lg:grid-cols-3 gap-8 mb-12">
                        {courses.map((course, index) => (
                            <motion.div 
                                key={index} 
                                className="relative group"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                            >
                                {/* Shadow Element */}
                                {/* <div className="absolute top-3 left-3 w-full h-full bg-black rounded-2xl"></div> */}
                                
                                {/* Main Card */}
                                <div className="relative bg-white border-2 border-black rounded-2xl p-8 transition-all duration-300">
                                    {/* Level Badge */}
                                    <motion.div 
                                        className={`inline-block px-4 py-2 ${course.color} border-2 border-black rounded-xl text-sm font-bold mb-6`}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {course.level}
                                    </motion.div>
                                    
                                    {/* Course Info */}
                                    <h3 className="text-2xl font-bold mb-4 text-black">
                                        {course.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {course.description}
                                    </p>

                                    {/* Course Details */}
                                    <div className="space-y-3 mb-6">
                                        <motion.div 
                                            className="flex items-center gap-2"
                                            whileHover={{ x: 5 }}
                                        >
                                            <span className="text-lg">👶</span>
                                            <span className="font-medium">{course.age}</span>
                                        </motion.div>
                                        <motion.div 
                                            className="flex items-center gap-2"
                                            whileHover={{ x: 5 }}
                                        >
                                            <span className="text-lg">⏰</span>
                                            <span className="font-medium">{course.duration}</span>
                                        </motion.div>
                                    </div>

                                    {/* Projects */}
                                    <div className="mb-8">
                                        <h4 className="font-bold mb-3 text-black">What You'll Build:</h4>
                                        <div className="space-y-2">
                                            {course.projects.map((project, idx) => (
                                                <motion.div 
                                                    key={idx} 
                                                    className="flex items-center gap-2"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <span className="text-[#df15bc]">✓</span>
                                                    <span className="text-sm text-gray-600">{project}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <SlackButton className="w-full justify-center">
                                            Start This Course
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

export default CoursesSection;
