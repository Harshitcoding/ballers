import React from 'react';
import { motion } from 'framer-motion';

const WhyBallers = () => {
  const sections = [
    {
      title: "Extraordinary Experiences",
      description: "Elevate your lifestyle with curated, world-class experiences tailored to your discerning tastes."
    },
    {
      title: "Unmatched Privileges",
      description: "Gain exclusive access to a world of luxury, from private events to personalized concierge services."
    },
    {
      title: "Limitless Possibilities",
      description: "Unlock a realm where your aspirations become reality, backed by our unparalleled network and resources."
    }
  ];
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin mb-4">
  
</h2>
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-8xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-thin text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
    Why ballers 
  </span>
  <div className="w-40 h-px mx-auto bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mt-4" />

        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
              
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 backdrop-blur-sm border border-gray-700 group-hover:border-gray-600 transition-all duration-300 shadow-lg">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
                  <div className="absolute top-4 left-4 w-32 h-32 border-l border-t border-gray-700 rounded-tl-lg opacity-50" />
                  <div className="absolute bottom-4 right-4 w-32 h-32 border-r border-b border-gray-700 rounded-br-lg opacity-50" />
                </div>

                {/* Content */}
                <div className="relative space-y-6">
                  <motion.div 
                    className="w-16 h-px bg-gradient-to-r from-gray-500 to-gray-700"
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  />
                  
                  <h3 className="text-xl text-center lg:text-2xl font-semibold text-[#E1A140]">
                    {section.title}
                  </h3>
                  
                  <p className="text-base text-center text-gray-400 leading-relaxed">
                    {section.description}
                  </p>

                
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBallers;

