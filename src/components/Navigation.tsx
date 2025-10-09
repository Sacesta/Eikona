'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiSparkles, HiMenu, HiX } from 'react-icons/hi';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <HiSparkles className="w-6 h-6 text-orange-500" />
            <span className="text-lg font-bold">EIKONA Experiential Living</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/About" className="text-gray-700 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-gray-900 transition">
              Services
            </Link>
            <Link href="/#testimonials" className="text-gray-700 hover:text-gray-900 transition">
              Testimonials
            </Link>
            <Link href="/#resources" className="text-gray-700 hover:text-gray-900 transition">
              Resources
            </Link>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition">
              Book a Call
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 transition"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/About" 
                className="text-gray-700 hover:text-gray-900 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/#services" 
                className="text-gray-700 hover:text-gray-900 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/#testimonials" 
                className="text-gray-700 hover:text-gray-900 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="/#resources" 
                className="text-gray-700 hover:text-gray-900 transition py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
