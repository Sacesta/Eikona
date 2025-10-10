import React from 'react';
import { HiUserGroup, HiAcademicCap, HiBriefcase, HiUsers, HiOfficeBuilding } from 'react-icons/hi';

const WhoWeHelp = () => {
  const categories = [
    {
      icon: <HiUserGroup className="w-12 h-12" />,
      title: "Teens",
      description: "Building confidence and communication skills for the next generation"
    },
    {
      icon: <HiAcademicCap className="w-12 h-12" />,
      title: "College-to-Corporate",
      description: "Smooth transition from campus to professional life"
    },
    {
      icon: <HiBriefcase className="w-12 h-12" />,
      title: "Young Professionals",
      description: "Accelerate your career with executive presence"
    },
    {
      icon: <HiUsers className="w-12 h-12" />,
      title: "Women Leaders",
      description: "Empowering women to lead with authenticity and impact"
    },
    {
      icon: <HiOfficeBuilding className="w-12 h-12" />,
      title: "Corporate Teams",
      description: "Transform team dynamics and communication excellence"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
          
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We Help
          </h2>
      
        </div>

        {/* Cards Grid - All 5 in one line on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl border-2 border-gray-100 hover:border-orange-400 overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                {/* Icon with background */}
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/10 rounded-xl blur-lg group-hover:bg-orange-500/20 transition-all duration-300"></div>
                  <div className="relative bg-orange-100 group-hover:bg-orange-500 p-4 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <div className="text-orange-500 group-hover:text-white transition-colors duration-300">
                      {category.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 text-base transition-colors duration-300 leading-tight min-h-[48px] flex items-center">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-gray-700 text-sm leading-relaxed transition-colors duration-300">
                  {category.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
