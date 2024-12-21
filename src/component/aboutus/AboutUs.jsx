import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import about from '../../assets/about.json';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-[#EA9E10] flex items-center justify-center p-4 overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      
      {/* Decorative border */}
      <div className="absolute inset-6 border border-[#937341]/20" />
      
      {/* Corner ornaments */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-[#937341]/40" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-[#937341]/40" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-[#937341]/40" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-[#937341]/40" />

      {/* Background Lottie with reduced opacity */}
      <Lottie
        animationData={about}
        loop={true}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
      />

      {/* Main Content */}
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-4xl w-full text-center px-8"
      >
        <div className="space-y-16">
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#937341] to-transparent" />
            <div className="text-[#937341] font-serif">EST. 2024</div>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#937341] to-transparent" />
          </div>

          {/* Main heading */}
          <div className="space-y-8">
            <h1 className="font-serif text-4xl md:text-6xl tracking-wide">
              <span className="text-[#937341] font-light">Beyond the Game</span>
              <br />
              <span className="text-white/90 mt-4 block font-normal tracking-widest">
                INVEST IN SPORTS
              </span>
              <span className="text-white/80 mt-2 block text-3xl md:text-4xl font-light tracking-widest">
                SUPPORT CHAMPIONS
              </span>
            </h1>
            
            <p className="text-[#937341]  text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              An exclusive fellowship of distinguished sports investors, 
              united in pursuit of excellence and legacy.
            </p>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button 
              className="group relative px-12 py-4 border border-[#937341] bg-transparent
                       text-[#937341] font-serif text-lg tracking-widest
                       transition-all duration-300 overflow-hidden
                       hover:text-white/90"
            >
              <span className="relative z-10">JOIN THE HERITAGE</span>
              <div className="absolute inset-0 bg-[#937341] transform -translate-x-full 
                            group-hover:translate-x-0 transition-transform duration-300" />
            </button>
          </motion.div>

          {/* Bottom decorative element */}
          <div className="pt-8">
            <div className="mx-auto w-px h-16 bg-gradient-to-b from-[#937341] to-transparent" />
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default AboutUs;