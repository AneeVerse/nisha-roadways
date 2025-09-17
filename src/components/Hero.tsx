'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/hero-bg/677cbf6b0eadd303c270446e_slider1-img-01.jpg',
    '/hero-bg/677cbf6b709a8c5f7cae8999_slider1-img-02.jpg',
    '/hero-bg/677cbf6dbe9c1d6d943f28b7_slider1-img-03.jpg',
  ];

  const contentVariations = [
    {
      badge: "LET'S MOVE FORWARD.",
      title: "Exporting your goods worldwide.",
      description: "Streamlining your logistics with transportation solutions timely deliveries and exceptional service worldwide."
    },
    {
      badge: "IMPACT OF MOVEMENT",
      title: "Providing Consistently Excellent Logistics",
      description: "Streamlining your logistics with transportation solutions timely deliveries and exceptional service worldwide."
    },
    {
      badge: "GLOBAL REACH",
      title: "Connecting Markets Worldwide",
      description: "Professional logistics services ensuring your cargo reaches its destination safely and on time across the globe."
    }
  ];

  // Auto-change background images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen bg-[#f4f6ff] p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="relative h-[92vh] sm:h-[75vh] lg:h-[90vh] overflow-hidden rounded-2xl sm:rounded-3xl hero-clip">
        {/* Background Images with Overlay */}
        <div className="absolute inset-0 hero-clip">
          {backgroundImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 hero-clip ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          
          {/* Black Gradient Overlay - Dark bottom to transparent top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent hero-clip"></div>
        </div>

        {/* Content - Responsive positioning */}
        <div className="relative z-10 w-full h-full flex items-end pb-8 sm:pb-12 md:pb-16">
          <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-2">
            <div className="w-full">
              {/* Top Section - Badge */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <div className="inline-flex items-center bg-transparent border border-white/40 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-white font-[family-name:var(--font-space-grotesk)]">
                  {contentVariations[currentImageIndex].badge}
                </div>
              </div>

              {/* Main Content Grid - Responsive layout */}
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 sm:gap-8 md:gap-12 lg:gap-24 items-start">
                {/* Left Side - Main Heading */}
                <div className="text-white max-w-4xl">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-[family-name:var(--font-space-grotesk)]">
                    {contentVariations[currentImageIndex].title}
                  </h1>
                </div>

                {/* Right Side - Description and CTA */}
                <div className="text-white space-y-3 sm:space-y-4 lg:pt-4 max-w-sm lg:ml-auto">
                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                    {contentVariations[currentImageIndex].description}
                  </p>

                  {/* CTA Button */}
                  <div>
                    <button className="bg-blue-600 text-white hover:bg-gray-900 hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-[8px] text-xs sm:text-sm font-bold transition-colors duration-200 flex items-center shadow-lg font-[family-name:var(--font-space-grotesk)]">
                      Get In Touch
                      <div className="w-px h-3 sm:h-4 bg-white/30 mx-2 sm:mx-3"></div>
                      <svg
                        className="h-3 sm:h-4 w-3 sm:w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H7M17 7V17"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute top-1/2 right-3 sm:right-4 md:right-6 transform -translate-y-1/2 z-20">
          <div className="bg-black/20 backdrop-blur-sm rounded-full p-2 sm:p-3">
            <div className="flex flex-col space-y-1.5 sm:space-y-2">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex
                      ? 'bg-white'
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
