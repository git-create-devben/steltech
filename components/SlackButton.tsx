'use client';

import React from 'react';
import { motion } from 'framer-motion';

function SlackButton({ children, className, ...props }: { children: React.ReactNode, className?:string, onClick?: () => void }) {
    return (
        <motion.div 
            className="relative inline-block"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Shadow Element */}
            <motion.div 
                className="absolute top-1 left-1 w-full h-full bg-transparent border border-black rounded-xl"
                whileHover={{ x: 2, y: 2 }}
                transition={{ duration: 0.2 }}
            />

            {/* Main Button */}
            <motion.button 
                onClick={props.onClick}
                {...props} 
                className={`relative px-8 py-3 bg-white border border-black rounded-xl font-medium transition-all duration-200 ${className}`}
                whileHover={{ x: -1, y: -1 }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.button>
        </motion.div>
    )
}

export default SlackButton