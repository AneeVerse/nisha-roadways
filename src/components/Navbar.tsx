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
    <nav className=" max-w-[1340px] mx-auto absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 lg:top-12 lg:left-8 lg:right-8 z-50 bg-black/10 backdrop-blur-md rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/nav-logo.png"
              alt="NISHA"
              width={100}
              height={32}
              className="h-16 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-white hover:text-blue-200 px-2 py-1 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <svg
                        className="ml-1 h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Get In Touch Button Only */}
          <div className="hidden md:flex items-center">
            <button className="bg-white text-gray-800 hover:bg-gray-50 px-8 py-3 rounded-[8px] text-sm font-bold transition-colors duration-200 flex items-center shadow-lg hover:text-white hover:bg-gray-900">
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 p-2"
            >
              <svg
                className="h-6 w-6"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-900/90 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-200 block px-3 py-2 text-sm font-medium uppercase tracking-wide"
                >
                  {item.name}
                </a>
              ))}
              
              <button className="w-full bg-white text-gray-800 hover:bg-gray-50 px-4 py-3 rounded-xl text-sm font-medium mt-4 flex items-center justify-center shadow-lg">
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
