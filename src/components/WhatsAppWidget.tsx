'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { IoSend } from 'react-icons/io5';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 z-50 bg-green-500 cursor-pointer hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Open WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)]">
          <div className="bg-gray-900 rounded-3xl shadow-2xl overflow-visible">
            {/* WhatsApp Header */}
            <div className="bg-green-500 rounded-t-3xl text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaWhatsapp className="w-7 h-7" />
                <h3 className="text-xl font-semibold">WhatsApp</h3>
              </div>
              <button
                onClick={toggleModal}
                className="text-white hover:bg-green-600 rounded-full cursor-pointer p-1.5 transition"
                aria-label="Close modal"
              >
                <HiX className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Content */}
            <div className="bg-gray-900 p-6 pb-8 relative rounded-b-3xl">
              {/* Message Bubble */}
              <div className="bg-gray-700 rounded-2xl rounded-tl-sm px-5 py-3 mb-6 inline-block max-w-[80%]">
                <p className="text-white text-sm">How can we help you?</p>
              </div>

              {/* WhatsApp Button */}
              <div className="flex justify-end relative">
                {/* QR Code Popup - Shows on hover above the button */}
                {showQR && (
                  <div className="absolute bottom-full border-1 right-0 mb-4 bg-white rounded-2xl shadow-2xl p-4 transition-all duration-300 ease-in-out z-10">
                    <div className="flex items-center justify-center mb-2 ">
                      {/* QR Code Image - 200x200 */}
                      <Image 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/7383155232"
                        alt="WhatsApp QR Code"
                        width={200}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                    <p className="text-center text-gray-700 text-sm font-medium">Scan the code</p>
                    {/* Arrow pointing down */}
                    <div className="absolute bottom-[-8px] right-8 w-4 h-4 bg-white transform rotate-45"></div>
                  </div>
                )}
                
                <a
                  href="https://wa.me/7383155232"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setShowQR(true)}
                  onMouseLeave={() => setShowQR(false)}
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 group shadow-lg"
                >
                  <span className="text-base">Whatsapp</span>
                  <IoSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
