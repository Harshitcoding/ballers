'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhoIsItFor() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const leftInView = useInView(leftRef, { once: true })
  const rightInView = useInView(rightRef, { once: true })

  return (
    <div className=" py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden cursor-pointer">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#B8860B10_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#D4AF3710_0%,_transparent_50%)]" />
      
      {/* Animated Lines */}
      <motion.div 
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#B8860B]/10 via-[#B8860B]/5 to-transparent"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.div 
        className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-[#B8860B]/10 via-[#B8860B]/5 to-transparent"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 1.5, delay: 0.4 }}
      />

      <div className="max-w-[1400px] mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Section */}
          <motion.div 
            ref={leftRef}
            className="relative group"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: leftInView ? 1 : 0, x: leftInView ? 0 : -40 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Decorative Borders */}
            <div className="absolute inset-0 border border-[#B8860B]/20 rounded-lg" />
            <div className="absolute inset-2 border border-[#B8860B]/10 rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative space-y-10 p-8">
              <div className="space-y-4">
                <motion.div 
                  className="h-px w-24 bg-gradient-to-r from-[#B8860B] to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: leftInView ? 96 : 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.h2 
                  className="text-5xl sm:text-6xl lg:text-7xl "
                  style={{
                    background: 'linear-gradient(to right, #D4AF37, #B8860B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Is Ballers for you?
                </motion.h2>
              </div>
              
              <div className="space-y-8">
                <motion.p 
                  className="text-xl sm:text-2xl text-gray-300/90 font-light leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: leftInView ? 1 : 0, y: leftInView ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  This platform is tailored for Ultra-High-Net-Worth
                </motion.p>
                <motion.p 
                  className="text-lg sm:text-xl text-gray-400/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: leftInView ? 1 : 0, y: leftInView ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Individuals (UHNIs) and Family Offices who aspire to be
                  part of a passionate and luxurious lifestyle built around
                  sports and are looking for more than just buying and
                  selling sports assets.
                </motion.p>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#B8860B]/30 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-[#B8860B]/30 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-[#B8860B]/30 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#B8860B]/30 rounded-br-lg" />
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            ref={rightRef}
            className="relative group"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: rightInView ? 1 : 0, x: rightInView ? 0 : 40 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Decorative Borders */}
            <div className="absolute inset-0 border border-[#B8860B]/20 rounded-lg" />
            <div className="absolute inset-2 border border-[#B8860B]/10 rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-bl from-[#B8860B]/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative space-y-10 p-8">
              <div className="space-y-4">
                <motion.div 
                  className="h-px w-24 bg-gradient-to-r from-[#B8860B] to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: rightInView ? 96 : 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.h2 
                  className="text-5xl sm:text-6xl lg:text-7xl"
                  style={{
                    background: 'linear-gradient(to right, #D4AF37, #B8860B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Who is it for?
                </motion.h2>
              </div>
              
              <div className="space-y-8">
                <motion.p 
                  className="text-xl sm:text-2xl text-gray-300/90 font-light leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: leftInView ? 1 : 0, y: leftInView ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                 Where Passion Meets Prestige
                </motion.p>
                <motion.p 
                  className="text-lg sm:text-xl text-gray-400/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: leftInView ? 1 : 0, y: leftInView ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                 For those with a $5M+ net worth who see sports as more than a game. It’s about exclusive experiences, deeper connections, and elevating passion into a lifestyle.
                </motion.p>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#B8860B]/30 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-[#B8860B]/30 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-[#B8860B]/30 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#B8860B]/30 rounded-br-lg" />
            </div>
          </motion.div>
        </div>

        {/* Central Decorative Element */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 hidden lg:block"
          style={{
            background: 'linear-gradient(180deg, #B8860B 0%, transparent 100%)',
          }}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 128, opacity: 0.3 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#B8860B]/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

