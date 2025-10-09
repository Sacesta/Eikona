import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

interface TestimonialCardProps {
  name: string;
  timeAgo: string;
  rating: number;
  text: string;
  likes: number;
  avatar?: string;
}

export default function TestimonialCard({ name, timeAgo, rating, text, likes }: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 font-semibold">{name.charAt(0)}</span>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{timeAgo}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <AiFillStar key={i} className={`${i < rating ? "text-orange-500" : "text-gray-300"} w-5 h-5`} />
        ))}
      </div>
      
      <p className="text-gray-700 mb-4">{text}</p>
      
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <button className="flex items-center gap-1 hover:text-gray-700">
          <BiLike className="w-5 h-5" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-gray-700">
          <BiDislike className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
