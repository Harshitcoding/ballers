import React from 'react';
import { motion } from 'framer-motion';

const Join = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      {/* Background with diagonal lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-40 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-20"
            style={{
              transform: `rotate(-45deg) translateX(${i * 150}px)`,
              top: `${i * 30}px`,
              left: '-150px',
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative flex flex-col items-center justify-center gap-8 sm:gap-10 lg:gap-12 bg-gradient-to-br from-black via-gray-900 to-black p-8 sm:p-12 lg:p-16 rounded-lg shadow-xl">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-l-2 border-t-2 border-yellow-500 opacity-50" />
        <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-r-2 border-b-2 border-yellow-500 opacity-50" />

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl mb-2 font-medium">
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              DARE TO DREAM?
            </span>
          </h2>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              DARE TO JOIN!
            </span>
          </h1>
        </motion.div>

        {/* Decorative line */}
        <div className="w-32 sm:w-40 lg:w-48 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
          <div className="relative px-6 sm:px-10 lg:px-16 py-3 sm:py-4 lg:py-5 bg-black text-sm sm:text-lg font-semibold rounded-lg">
            <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              JOIN THE ELITE
            </span>
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default Join;
