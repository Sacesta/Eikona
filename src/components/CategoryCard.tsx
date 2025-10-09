import React from 'react';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
}

export default function CategoryCard({ icon, title }: CategoryCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
}
