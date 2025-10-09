"use client";

import React, { useState } from 'react';
import { BiLike, BiDislike, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

interface Testimonial {
  name: string;
  timeAgo: string;
  rating: number;
  text: string;
  likes: number;
  role?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = currentPage * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Testimonials</h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-16 z-10 bg-white hover:bg-orange-500 text-gray-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:border-orange-500"
            aria-label="Previous testimonials"
          >
            <BiChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-16 z-10 bg-white hover:bg-orange-500 text-gray-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 border-2 border-gray-200 hover:border-orange-500"
            aria-label="Next testimonials"
          >
            <BiChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Grid - 2 cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={startIndex + index}
                className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-100 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105"
              >
                {/* Quote Icon */}
                <div className="text-orange-500 mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar 
                      key={i} 
                      className={`${i < testimonial.rating ? "text-orange-500" : "text-gray-300"} w-5 h-5`} 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-base leading-relaxed mb-6 min-h-[120px]">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.timeAgo}</p>
                  </div>
                </div>

                {/* Like/Dislike */}
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-200">
                  <button className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                    <BiLike className="w-5 h-5" />
                    <span className="font-medium">{testimonial.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-orange-500 transition-colors">
                    <BiDislike className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentPage
                    ? 'w-8 h-3 bg-orange-500'
                    : 'w-3 h-3 bg-gray-300 hover:bg-orange-300'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
