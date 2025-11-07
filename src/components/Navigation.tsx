'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 md:px-12 bg-[#F3EDE4] backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
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
        </Link>

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
                    <Link
                      href="/About#second-section"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      About Eikona
                    </Link>
                    <Link
                      href="/About#founder-section"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      About the Founder
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Signature with fixed white background */}
        <div className="hidden md:flex items-center">
          <div className="bg-white rounded-md shadow-sm border border-gray-100 px-1 py-1">
            <Image
              src="/saloni sign.jpg"
              alt="Saloni Parikh Signature"
              width={128}
              height={32}
              className="h-8 w-26 md:h-10 object-contain"
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            // Close (X) icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {/* Close button for mobile */}
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                <span className="text-gray-900 font-semibold">Menu</span>
                <button 
                  onClick={closeMobileMenu}
                  className="p-1 text-gray-500 hover:text-gray-700"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <a
                href="#our-program"
                className="block py-3 text-gray-700 hover:text-gray-900 transition-colors font-medium border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                Our Program
              </a>
              
              <div className="py-3 border-b border-gray-100">
                <div className="text-gray-700 font-medium mb-2">About</div>
                <div className="space-y-2 pl-4">
                  <Link
                    href="/About#second-section"
                    className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    About Eikona
                  </Link>
                  <Link
                    href="/About#founder-section"
                    className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    About the Founder
                  </Link>
                </div>
              </div>

              {/* Mobile Signature */}
              <div className="pt-4 border-t border-gray-200">
                <div className="bg-white rounded-md shadow-sm border border-gray-100 px-3 py-2 inline-block">
                  <Image
                    src="/saloni sign.jpg"
                    alt="Saloni Parikh Signature"
                    width={100}
                    height={25}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}