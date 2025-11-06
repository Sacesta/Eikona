import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image"

export default function Footer() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center space-y-8 md:space-y-12">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/Final Eikona.png"
            alt="Eikona Logo"
            width={192}
            height={192}
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
          />
        </div>

        {/* Quote */}
        <div>
          <p className="text-[#008080] italic text-[20px] md:text-[24px] tracking-wide">
            Styling with Substance. Inside Out
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-3 md:gap-6">
          <a
            href="#about"
            className="text-[#008080] hover:text-[#A3B18A] transition-colors text-[15px] md:text-[16px]"
          >
            About Us
          </a>
          <span className="text-[#A3B18A]">|</span>
          <a
            href="#work"
            className="text-[#008080] hover:text-[#A3B18A] transition-colors text-[15px] md:text-[16px]"
          >
            Work With Us
          </a>
          <span className="text-[#A3B18A]">|</span>
          <a
            href="#research"
            className="text-[#008080] hover:text-[#A3B18A] transition-colors text-[15px] md:text-[16px]"
          >
            Research
          </a>
          <span className="text-[#A3B18A]">|</span>
          <a
            href="#contact"
            className="text-[#008080] hover:text-[#A3B18A] transition-colors text-[15px] md:text-[16px]"
          >
            Contact
          </a>
        </nav>

        {/* Social Media Section */}
        <div>
          <p className="text-[#008080] mb-4 text-[15px] md:text-[16px]">
            Join the Community
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008080] hover:text-[#A3B18A] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008080] hover:text-[#A3B18A] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008080] hover:text-[#A3B18A] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008080] hover:text-[#A3B18A] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#008080] hover:text-[#A3B18A] transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6">
          <p className="text-[#008080]/70 text-[13px] md:text-[14px]">
            © 2025 Eikona Experiential Living Pvt. Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
