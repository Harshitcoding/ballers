import React from 'react';
import {motion} from 'framer-motion'
const Howitworks = () => {
    return (
        <div className="min-h-screen bg-black/95 text-white py-24 px-6">
            <motion.h2
                className="text-4xl md:text-5xl lg:text-7xl font-light text-center mb-32"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <span className="bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    How it works
                </span>
                <div className="w-48 h-px mx-auto bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mt-6" />
            </motion.h2>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-4">
                <motion.div 
                    className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-amber-500/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute -top-4 left-8 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-medium">
                        STEP 1
                    </div>
                    <h3 className="text-2xl font-light mb-6 text-amber-400">
                        Choose Your Cause
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                        Explore our carefully curated list of athletes and sports initiatives 
                        that need your support. Select the one that resonates with your values 
                        and aspirations, making a meaningful impact in the world of sports.
                    </p>
                </motion.div>

                <motion.div 
                    className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-amber-500/30 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="absolute -top-4 left-8 bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-medium">
                        STEP 2
                    </div>
                    <h3 className="text-2xl font-light mb-6 text-amber-400">
                        Make Your Impact
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                        Join our community of supporters and make a difference. Your contribution 
                        helps talented athletes achieve their dreams and supports vital sports 
                        initiatives that shape the future of athletics.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Howitworks;