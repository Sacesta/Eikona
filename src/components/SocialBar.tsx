"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("second-section");
      if (!secondSection) return;

      const rect = secondSection.getBoundingClientRect();
      setVisible(rect.top <= window.innerHeight / 1.2); // becomes true when near viewport
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-1/2 right-12 -translate-y-1/2 hidden lg:flex flex-col space-y-3 z-9"
    >
      {[
        { icon: <FaFacebookF size={24} />, link: "https://www.facebook.com/salonee1609/" },
        { icon: <FaLinkedinIn size={24} />, link: "https://www.linkedin.com/in/parikhsaloni/" },
        { icon: <FaYoutube size={24} />, link: "https://youtube.com" },
        { icon: <FaInstagram size={24} />, link: "https://www.instagram.com/salonisphere" },
        { icon: <FaTwitter size={24} />, link: "https://x.com/Salonee__Parikh" },
      ].map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-2 rounded-full transition-colors"
        >
          {item.icon}
        </a>
      ))}
    </motion.div>
  );
}
