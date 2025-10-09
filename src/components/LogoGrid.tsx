import React from 'react';
import { HiOfficeBuilding } from 'react-icons/hi';

interface LogoGridProps {
  title: string;
  logos: { name: string; bgColor: string }[];
}

export default function LogoGrid({ title, logos }: LogoGridProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className={`${logo.bgColor} rounded-lg aspect-square flex items-center justify-center p-8`}
            >
              <div className="text-white text-center">
                <HiOfficeBuilding className="w-16 h-16 mx-auto mb-2" />
                <p className="text-xs font-medium">{logo.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
