'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#', hasDropdown: true },
    { name: 'PAGES', href: '#', hasDropdown: true },
    { name: 'SERVICES', href: '#', hasDropdown: false },
    { name: 'BLOG', href: '#', hasDropdown: true },
    { name: 'CONTACT', href: '#', hasDropdown: false },
  ];

  return (
    <nav className=" max-w-[1340px] mx-auto fixed top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 md:top-6 md:left-6 md:right-6 lg:top-12 lg:left-8 lg:right-8 z-50 bg-black/20 backdrop-blur rounded-xl sm:rounded-2xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-2">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/nav-logo.png"
              alt="NISHA"
              width={100}
              height={32}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-4 xl:ml-6 flex items-center space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-white hover:text-blue-200 px-2 py-1 text-xs xl:text-sm font-semibold uppercase tracking-wide transition-colors duration-200 flex items-center font-[family-name:var(--font-space-grotesk)]"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Get In Touch Button Only */}
          <div className="hidden lg:flex items-center">
            <button className="bg-white text-gray-800 hover:bg-gray-50 px-4 xl:px-8 py-2 xl:py-3 rounded-[8px] text-xs xl:text-sm font-bold transition-colors duration-200 flex items-center shadow-lg hover:text-white hover:bg-gray-900 font-[family-name:var(--font-space-grotesk)]">
              <span className="hidden xl:inline">Get In Touch</span>
              <span className="xl:hidden">Contact</span>
              <div className="w-px h-3 xl:h-4 bg-gray-300 mx-2 xl:mx-3"></div>
              <svg
                className="h-3 xl:h-4 w-3 xl:w-4"
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

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 p-1.5 sm:p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-3 sm:px-4 pt-3 pb-4 space-y-2 bg-blue-900/90 backdrop-blur-sm rounded-lg mt-2 mx-1 sm:mx-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-200 hover:bg-white/10 block px-3 py-2.5 text-sm font-medium uppercase tracking-wide font-[family-name:var(--font-space-grotesk)] rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <button 
                className="w-full bg-white text-gray-800 hover:bg-gray-50 px-4 py-3 rounded-lg text-sm font-medium mt-4 flex items-center justify-center shadow-lg font-[family-name:var(--font-space-grotesk)] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Get In Touch
                <div className="w-px h-4 bg-gray-300 mx-3"></div>
                <svg
                  className="h-4 w-4"
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
