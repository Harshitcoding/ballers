import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Award } from 'lucide-react';

const Landing = () => {
  const decorativeIcons = [
    { Icon: Star, delay: 0.2 },
    { Icon: Trophy, delay: 0.4 },
    { Icon: Award, delay: 0.6 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-amber-900 via-amber-800 to-amber-900 flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {decorativeIcons.map(({ Icon, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay, duration: 0.8 }}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
              <Icon className="text-amber-200" size={48} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center space-y-8 z-10"
      >
        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-1 w-24 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mb-8"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200 italic"
          >
            Elevate Your Legacy
          </motion.span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-200 to-amber-400 italic"
          >
            in the Pinnacle of Sports
          </motion.span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-amber-200 max-w-4xl mx-auto"
        >
          Unlock Exclusive Access to Unparalleled Opportunities
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-lg sm:text-xl md:text-2xl text-amber-300 max-w-3xl mx-auto leading-relaxed"
        >
          Where Champions Converge, Legacies are Forged, and Greatness Becomes Reality
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-4 px-10 bg-gradient-to-r from-amber-400 to-yellow-300 
                       text-amber-900 font-bold text-lg sm:text-xl rounded-full shadow-xl 
                       hover:from-amber-300 hover:to-yellow-200 
                       transition-all duration-300 transform hover:-translate-y-1 italic
                       flex items-center gap-2"
          >
            <Trophy size={24} />
            Join the Elite Echelon
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 opacity-20">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Star size={64} className="text-amber-200" />
          </motion.div>
        </div>
        
        <div className="absolute bottom-1/4 right-10 opacity-20">
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Award size={64} className="text-amber-200" />
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Bottom SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FBBF24', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 0.6 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            fill="url(#grad1)"
            filter="url(#glow)"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Landing;