'use client';

import potteryKid from "@/public/image.png";
import SlackButton from "./SlackButton";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="min-h-screen bg-[#eee4ec] pt-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center px-6">
                    {/* Left Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h1
                            className="hero-title"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            SHAPE YOUR{" "}
                            <span className="text-[#df15bc]">FUTURE</span>, ONE LINE OF CODE AT A TIME
                        </motion.h1>

                        <motion.p
                            className="hero-subtitle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Discover the fun of coding with expert guidance. Interactive lessons,
                            hands-on projects, and courses designed for kids of all levels.
                        </motion.p>

                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <SlackButton>Start Learning</SlackButton>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <SlackButton>View Courses</SlackButton>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image with Paint Splashes */}
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.img
                            src={potteryKid.src}
                            alt="Child working with pottery clay"
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>
            </div>
            {/* Success Stats */}
            <motion.div
                className="md:grid md:grid-cols-3 gap-6 mt-15 hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                {[
                    { number: "50+", label: "Happy Students" },
                    { number: "1000+", label: "Projects Built" },
                    { number: "98%", label: "Parent Satisfaction" },
                    // { number: "50+", label: "Coding Mentors" }
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <motion.div
                            className="text-4xl font-bold text-[#df15bc] mb-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                        >
                            {stat.number}
                        </motion.div>
                        <div className="text-gray-600 font-medium">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default HeroSection;