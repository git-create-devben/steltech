'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SlackButton from '../SlackButton';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#features", label: "Features" },
        { href: "#courses", label: "Courses" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#pricing", label: "Pricing" },
    ];

    return (
        <motion.header 
            className="w-full px-6 py-6 bg-[#eee4ec] sticky top-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    className="bg-white/80 backdrop-blur-sm rounded-3xl border border-black px-8 py-3 shadow-lg"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.a 
                            href="#home" 
                            className="flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <h1 className="text-2xl font-black">
                                Stel<span className="text-[#df15bc]">Tech</span>
                            </h1>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link, index) => (
                                <motion.a 
                                    key={link.href} 
                                    href={link.href} 
                                    className="text-foreground hover:text-[#df15bc] font-medium transition-colors"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center">
                            <SlackButton className="rounded-full !bg-[#df15bc] text-white border-none">Enroll Now</SlackButton>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <motion.button 
                                onClick={() => setIsOpen(!isOpen)} 
                                className="text-black"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <AnimatePresence mode="wait">
                                    {isOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: 0 }}
                                            animate={{ rotate: 180 }}
                                            exit={{ rotate: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X size={24} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 180 }}
                                            animate={{ rotate: 0 }}
                                            exit={{ rotate: 180 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu size={24} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="md:hidden mt-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className="bg-white/90 backdrop-blur-sm rounded-2xl border border-black p-6"
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            exit={{ y: -20 }}
                        >
                            <nav className="flex flex-col items-center space-y-6">
                                {navLinks.map((link, index) => (
                                    <motion.a 
                                        key={link.href} 
                                        href={link.href} 
                                        className="text-lg text-foreground hover:text-[#df15bc] font-semibold transition-colors"
                                        onClick={() => setIsOpen(false)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: navLinks.length * 0.1 }}
                                >
                                    <SlackButton className="rounded-full !bg-[#df15bc] text-white border-none w-full justify-center">
                                        Enroll Now
                                    </SlackButton>
                                </motion.div>
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;