import React from 'react';
import { Star, Crown, Shield } from 'lucide-react';

const TranscendGame = () => {
  return (
    <div className="relative min-h-screen bg-[#1A1814] text-[#D5C5A3] overflow-hidden font-serif">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
      
      {/* Inner border */}
      <div className="absolute inset-8 border border-[#937341]/20" />
      
      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-[#937341]/40" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-[#937341]/40" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-[#937341]/40" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-[#937341]/40" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 md:py-24">
        {/* Header */}
        <div className="flex justify-between items-center mb-24">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-[#937341]" />
            <span className="text-lg tracking-[0.2em] text-[#937341]">BALLERS</span>
          </div>
          <button className="px-8 py-3 border border-[#937341] text-[#937341] hover:bg-[#937341]/10 transition-colors duration-300 tracking-widest text-sm">
            REQUEST ACCESS
          </button>
        </div>

        {/* Hero Section */}
        <div className="space-y-20 text-center">
          <div className="space-y-2">
            <p className="text-[#937341] tracking-[0.3em] text-sm">DISTINCTION IN SPORT</p>
            <h1 className="text-4xl md:text-6xl font-light tracking-wider text-white/90 mt-6">
              How Do You Transcend
              <span className="block mt-4">the Game?</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-[#937341] max-w-3xl mx-auto leading-relaxed font-light">
            By elevating beyond the conventional. Sports has evolved beyond mere competition—it has become the hallmark of sophisticated investment and refined lifestyle.
          </p>

          {/* Feature Blocks */}
          <div className="grid md:grid-cols-2 gap-12 text-left mt-24">
            <div className="p-12 border border-[#937341]/20 hover:border-[#937341]/40 transition-colors duration-500">
              <Crown className="w-8 h-8 text-[#937341] mb-8" />
              <h3 className="text-2xl font-light tracking-wide text-white/90 mb-4">Elite Heritage</h3>
              <p className="text-[#937341] leading-relaxed">
                Ballers presents an unparalleled experience—cultivating the finest aspects of sport for the world's most discerning individuals.
              </p>
            </div>
            
            <div className="p-12 border border-[#937341]/20 hover:border-[#937341]/40 transition-colors duration-500">
              <Star className="w-8 h-8 text-[#937341] mb-8" />
              <h3 className="text-2xl font-light tracking-wide text-white/90 mb-4">Legacy Assets</h3>
              <p className="text-[#937341] leading-relaxed">
                Our portfolio comprises exclusively of legacy investments—assets traditionally reserved for the most distinguished circles.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 space-y-12">
            <div className="space-y-4">
              <p className="text-lg text-[#937341] tracking-wide">Join us at Ballers, where excellence meets legacy;</p>
              <p className="text-2xl font-light text-white/90 tracking-wide">
                crafting the most distinguished sporting experience for the truly exceptional.
              </p>
            </div>
            
            <div className="flex justify-center">
              <button className="group relative px-16 py-5 border border-[#937341] bg-transparent
                             text-[#937341] tracking-[0.2em] text-sm
                             transition-all duration-500 overflow-hidden
                             hover:text-white/90">
                <span className="relative z-10">TRANSCEND THE ORDINARY</span>
                <div className="absolute inset-0 bg-[#937341] transform -translate-x-full 
                              group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical decorative lines */}
      <div className="absolute left-24 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#937341]/10 to-transparent" />
      <div className="absolute right-24 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#937341]/10 to-transparent" />
    </div>
  );
};

export default TranscendGame;