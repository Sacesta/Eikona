import React from 'react';
import Link from 'next/link';
import { CiInstagram , CiTwitter , CiLinkedin  } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: '#112534' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8">
          <Link 
            href="/#services" 
            className="text-orange-500 hover:text-orange-400 transition-colors text-base"
          >
            Services
          </Link>
          <Link 
            href="/About" 
            className="text-orange-500 hover:text-orange-400 transition-colors text-base"
          >
            About
          </Link>
          <Link 
            href="/#blog" 
            className="text-orange-500 hover:text-orange-400 transition-colors text-base"
          >
            Blog
          </Link>
          <Link 
            href="/#contact" 
            className="text-orange-500 hover:text-orange-400 transition-colors text-base"
          >
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 transition-colors"
            aria-label="Instagram"
          >
            <CiInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 transition-colors"
            aria-label="Twitter"
          >
            <CiTwitter className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-400 transition-colors"
            aria-label="LinkedIn"
          >
            <CiLinkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-300 text-sm">
            ©2024 EIKONA <span className="font-semibold">Experiential Living</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
