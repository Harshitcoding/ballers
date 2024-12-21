import Lottie from 'lottie-react';
import React from 'react';
import about from '../../assets/about.json';

const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-[#873C0F] flex items-center justify-center p-4 overflow-hidden">
      {/* Background Lottie Animation */}
      <Lottie
        animationData={about}
        loop={true}
        className="absolute top-0 mt-2 left-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-relaxed">
        Beyond the Game: Invest in        
        <br />
         Sports. Support Champions.
        </h1>

        <button 
          className="bg-white px-8 py-3 rounded-sm 
                     hover:bg-gray-100 transition-colors duration-200
                     text-lg font-medium italic bg-gradient-to-r from-[#873C0F] to-[#0A041A] text-white"
        >
          Join the exclusive club
        </button>
      </main>
    </div>
  );
};



export default AboutUs;
