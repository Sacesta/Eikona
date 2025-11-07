// components/LeadershipSection.tsx
'use client';

export function LeadershipSection() {
  const audiences = [
    { 
      id: "teens", 
      label: "TEENS",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 20C16 18.8954 16.8954 18 18 18H32C33.1046 18 34 18.8954 34 20V44C34 45.1046 33.1046 46 32 46H18C16.8954 46 16 45.1046 16 44V20Z" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 18V14C20 12.8954 20.8954 12 22 12H28C29.1046 12 30 12.8954 30 14V18" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25 32C25 29.7909 26.7909 28 29 28C31.2091 28 33 29.7909 33 32V46H17V32C17 29.7909 18.7909 28 21 28C23.2091 28 25 29.7909 25 32Z" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 24L30 24" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      id: "college", 
      label: "COLLEGE STUDENTS",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 28L32 18L50 28" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 30V42C18 43.1046 18.8954 44 20 44H44C45.1046 44 46 43.1046 46 42V30" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M50 28V46" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M46 48L50 46L54 48" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: "professionals", 
      label: "YOUNG PROFESSIONALS",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="24" width="32" height="24" rx="2" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 24V20C24 18.8954 24.8954 18 26 18H38C39.1046 18 40 18.8954 40 20V24" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 32H48" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 20L32 14L36 20" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: "women", 
      label: "WOMEN LEADERS",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="24" r="8" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 48C20 40.268 26.268 34 34 34C34.364 34 34.726 34.012 35.084 34.036" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="32" cy="32" r="18" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42 38C42 41.866 38.866 45 35 45C31.134 45 28 41.866 28 38C28 34.134 31.134 31 35 31C38.866 31 42 34.134 42 38Z" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: "corporate", 
      label: "CORPORATE TEAMS",
      icon: (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="22" r="6" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 46C22 40.477 26.477 36 32 36C37.523 36 42 40.477 42 46" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="46" cy="28" r="5" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M50 46C50 42.686 47.314 40 44 40" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="28" r="5" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 46C14 42.686 16.686 40 20 40" stroke="#A3B18A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full bg-[#F3EDE4] py-16 md:py-24 px-6 md:px-12 flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto w-full text-center">
        {/* Main Message */}
        <div className="mb-12 md:mb-16">
          <h2 className="px-4">
            <span className="block text-[#4A4945] text-[20px] md:text-[28px] lg:text-[32px]">
              We equip individuals with the skills and mindset to lead with purpose.
            </span>
          </h2>
        </div>

        {/* Audience Icons Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-start justify-items-center">
          {audiences.map((audience) => (
            <div key={audience.id} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                {audience.icon}
              </div>
              <p className="text-[#4A4945] tracking-wide text-[14px] md:text-[15px]">
                {audience.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}