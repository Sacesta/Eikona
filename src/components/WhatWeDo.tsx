import React from "react";
import Image from "next/image";

const WhatWeDo = () => {
  const items = [
    {
      title: "Images and Presence",
      description: "Transform your professional image with personalized coaching.",
      icon: "groups",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFl_48Kf5A4_E2e7fwLJ7jQX2oxZU9bqvdRXnymgAWbCI_UvlGCGIuTFnHLwuw_kzWaYL_B9ElevQNWqL88Fqb9RRXSJVHtgo4J9iJNrCfRU1OGPHC_BIBO6LRsJZEgxHXlUSEWn6T0FwL0sMAXDyPfNf9mwiJVRua1JOvTOuSdCO1oiDgBCYwFUtCLkhZg_eGI8FU1uDBa4RA6i6bAZrec76qjf5mTTpYEOL90fEdPRx1gcRk6df5F-TS7XkZ9GDjkeuNbbW5neI",
    },
    {
      title: "Interview Accelerator",
      description: "Ace your interviews with targeted preparation.",
      icon: "person_search",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWNAy5uVZCv51VlWmF8ZVJpM1yEPnWT--g04Fr9GqacCcqcTSjC__9UdOgr9kfUWih-PUNm1IiP1Zqya9bpVW31BcLnzY8b6gJga7AaUFaODDvRaMgC9fxq1z_GghJtZXCi3KPTRBA3RQYBGQdC91XzESZX7MoRclFEV9cfegjrTVZ9Hw1r9X_zqW1qz8Ns8EdHR3FAHnoDSG-A0gRz2_P7XtrvLCsOhHNtAYxM0xDEKniUoxYUu9ZqiIvjMeYqQn105b3xg7kXrI",
    },
    {
      title: "Corporate Workshops",
      description: "Enhance team dynamics and communication skills.",
      icon: "workspaces",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB77rBWBBXBBTl0m9X4jk5CgNwG7ZaCI3vIRt-4r6IK8NUcs71YrQhGWFxU0sHHPUmOzqq5molv8nflps9P6xk9mBe-arduelxl3QmKieiWSSiySUxbdtUvCrcddp1k_AqEuP2hFuRZi6HgC6i04lac6SaLlD9XvJC2gvzIui1uP8C73HJHBczMxLepdTe4BO_bkV1Oozw5TysNBmwOOt5BZQWFSxNnRnR-6Snr668bIeN-drEEXJhDj1YH3rey8mOjPBBmUmLeVso",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
      
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group h-[450px] shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 transition-all duration-300">
                <div className="bg-orange-500/90 backdrop-blur-md p-4 rounded-xl mb-4 max-w-max flex items-center gap-3 shadow-lg transform transition-all duration-300 group-hover:bg-orange-600/90 group-hover:scale-105">
                  <span className="material-symbols-outlined text-white text-3xl">
                    {item.icon}
                  </span>
                  <span className="font-bold text-white text-lg">{item.title}</span>
                </div>
                <p className="text-white font-medium text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
