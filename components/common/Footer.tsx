import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold">Steltech</h3>
                        <p className="text-sm">Empowering the next generation of innovators.</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#about" className="hover:text-[#df15bc] transition-colors">About</a>
                        <a href="#courses" className="hover:text-[#df15bc] transition-colors">Courses</a>
                        {/* <a href="#contact" className="hover:text-[#df15bc] transition-colors">Contact</a> */}
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Steltech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
