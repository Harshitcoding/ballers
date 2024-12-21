'use client'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Main Footer Content */}
        <div className="flex flex-col space-y-8 sm:space-y-12">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-3"
            >
              {/* Crown Logo */}
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8"
                style={{
                  fill: 'url(#crown-gradient)',
                }}
              >
                <defs>
                  <linearGradient id="crown-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#D4AF37' }} />
                    <stop offset="100%" style={{ stopColor: '#B8860B' }} />
                  </linearGradient>
                </defs>
                <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
              </svg>
              
              <span 
                className="text-xl sm:text-2xl font-bold"
                style={{
                  background: 'linear-gradient(to right, #D4AF37, #B8860B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                BALLERS
              </span>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center items-center gap-6 sm:gap-8"
            >
              <Link 
                to="/faqs" 
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                FAQs
              </Link>
              <Link 
                to="/about" 
                className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
              >
                About Us
              </Link>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Decorative Line */}
          <motion.div
            className="h-px w-full bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.4 }}
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col space-y-6 sm:space-y-8"
          >
            {/* Address */}
            <div className="text-center text-sm sm:text-base text-gray-500">
              14/4, J Block, 3rd Avenue, Anna Nagar East, Chennai, Tamil Nadu, 600102
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center text-xs sm:text-sm text-gray-500 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <span>© 2024 Ballers • All Rights Reserved</span>
                <span className="hidden sm:inline">•</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <Link to="/terms" className="hover:text-gray-400 transition-colors duration-300">
                  Terms and Conditions
                </Link>
                <span>•</span>
                <Link to="/privacy" className="hover:text-gray-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
