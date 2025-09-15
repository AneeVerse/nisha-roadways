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
    <section className="relative min-h-screen bg-white p-4 md:p-6 lg:p-8">
      <div className="relative h-[75vh] lg:h-[90vh] overflow-hidden rounded-2xl">
        {/* Background Images with Overlay */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Hero background ${index + 1}`}
                fill
                className="object-cover rounded-2xl"
                priority={index === 0}
              />
            </div>
          ))}
          
          {/* Black Gradient Overlay - Dark bottom to transparent top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
            <div className="w-full">
              {/* Top Section - Badge */}
              <div className="mb-8">
                <div className="inline-flex items-center bg-transparent border border-white/40 rounded-full px-6 py-3 text-sm font-medium tracking-wider uppercase text-white">
                  LET'S MOVE FORWARD.
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-16 items-end">
                {/* Left Side - Main Heading */}
                <div className="text-white">
                  <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    Exporting your goods{' '}
                    <br />
                    <span className="text-white">worldwide.</span>
                  </h1>
                </div>

                {/* Right Side - Description and CTA */}
                <div className="text-white space-y-6 lg:text-right lg:flex lg:flex-col lg:items-end">
                  {/* Description */}
                  <p className="text-lg lg:text-xl text-white/90 max-w-md leading-relaxed">
                    Streamlining your logistics with transportation solutions timely deliveries and exceptional service worldwide.
                  </p>

                  {/* CTA Button */}
                  <div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200 flex items-center group">
                      Get In Touch
                      <svg
                        className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
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
        <div className="absolute bottom-6 right-6 z-20">
          <div className="bg-black/20 backdrop-blur-sm rounded-full p-3">
            <div className="flex flex-col space-y-2">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
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
