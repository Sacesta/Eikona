'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/Final Eikona.png"
            alt="Eikona Logo"
            width={56}
            height={56}
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-gray-900 tracking-wide leading-tight font-semibold">EIKONA</span>
            <span className="text-gray-700 text-sm leading-tight">Experiential Living</span>
          </div>
        </div>

        {/* Center Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#our-program" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Our Program
          </a>
          
          {/* About with Dropdown */}
          <div className="relative group">
            <button 
              className="text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-1 font-medium"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              About
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div className="py-2">
                    <a 
                      href="#about-eikona" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      About Eikona
                    </a>
                    <a 
                      href="#about-founder" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      About the Founder
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Signature - Placeholder */}
        <div className="flex items-center">
          <div className="h-8 w-32 md:h-10 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-signature">Saloni Parikh</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}