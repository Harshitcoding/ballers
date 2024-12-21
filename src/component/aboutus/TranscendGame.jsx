import React from 'react';
import { Star, Sparkles, PlaneTakeoff } from 'lucide-react';

const TranscendGame = () => {
  return (
    <div className="relative min-h-screen  text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 via-transparent to-amber-900/10" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Decorative Border */}
      <div className="absolute inset-0 border-8 border-amber-500/10 m-4 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Header Logo */}
        <div className="flex justify-between items-center mb-16">
          <PlaneTakeoff className="w-8 h-8 text-amber-400" />
          <button className="px-6 py-2 border border-amber-400/30 rounded-full text-amber-400 hover:bg-amber-400/10 transition-colors duration-300">
            Join Now
          </button>
        </div>

        {/* Hero Section */}
        <div className="space-y-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent animate-gradient">
            How do you transcend the game?
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            By expanding beyond the field. Sports no longer exists just within the confines of a stadium, it has evolved into a lifestyle and a lucrative opportunity for those with the means.
          </p>

          {/* Feature Blocks */}
          <div className="grid md:grid-cols-2 gap-8 text-left mt-16">
            <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-colors duration-300">
              <Sparkles className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Elite Experience</h3>
              <p className="text-gray-400">That is what Ballers aims to unlock – the best of sports for the world's best.</p>
            </div>
            
            <div className="p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-400/30 transition-colors duration-300">
              <Star className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Trophy Assets</h3>
              <p className="text-gray-400">Our focus is on trophy assets, starting with sports. These are not just any assets—they're reserved for billionaires.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 space-y-8">
            <p className="text-xl text-amber-400">Join us at Ballers, where we're not just playing the game;</p>
            <p className="text-2xl font-semibold">we're creating the most elite sports experience for the world's most elite.</p>
            <button className="mt-8 px-12 py-4 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full text-black font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-amber-500/25">
              Transcend the Ordinary
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-amber-400/30" />
      <div className="absolute top-4 left-4 w-24 h-24 border-l-2 border-t-2 border-amber-400/30" />
    </div>
  );
};

export default TranscendGame;