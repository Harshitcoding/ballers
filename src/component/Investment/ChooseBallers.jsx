import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, Trophy } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="relative group"
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-700/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />
    
    <div className="relative p-8 bg-black/40 backdrop-blur-sm border border-yellow-500/10 rounded-lg hover:border-yellow-500/30 transition-all duration-500 h-full">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-full bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 border border-yellow-500/20">
          <Icon className="w-8 h-8 text-yellow-500" />
        </div>
        
        <h3 className="text-2xl font-light text-yellow-500">{title}</h3>
        
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

export default function ChooseBallers() {
  return (
    <div className="relative w-full bg-black px-4 md:px-6">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-32 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"
            style={{
              transform: `rotate(${45 + i * 5}deg)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative py-20">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Why Choose Excellence?
            </span>
          </h2>
          <div className="w-40 h-px mx-auto bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon={Crown}
            title="Unmatched Prestige"
            description="Experience a level of excellence that sets you apart. Our exclusive offerings are crafted for those who demand nothing but the finest in life."
            delay={0.2}
          />
          
          <FeatureCard
            icon={Shield}
            title="Premium Security"
            description="Rest assured with our fortress-like protection. Every transaction and interaction is guarded with state-of-the-art security measures."
            delay={0.4}
          />
          
          <FeatureCard
            icon={Trophy}
            title="Elite Benefits"
            description="Access a world of privileged advantages. Our members enjoy carefully curated perks that enhance every aspect of their journey."
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
}