'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  const leftTruckRef = useRef<HTMLDivElement | null>(null);
  const rightTruckRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          if (isVisible) {
            leftTruckRef.current?.classList.add('truck-move-left-to-right');
            rightTruckRef.current?.classList.add('truck-move-right-to-left');
          } else {
            leftTruckRef.current?.classList.remove('truck-move-left-to-right');
            rightTruckRef.current?.classList.remove('truck-move-right-to-left');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={sectionRef} className="relative bg-[#061128] text-white mt-16">
      {/* Road strip with two trucks */}
      <div className="relative h-20 md:h-24 overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-[#1b243b]"></div>
        <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex justify-between items-center">
          <div className="flex-1 h-[3px] bg-[repeating-linear-gradient(to_right,_transparent,_transparent_16px,_#ffffff_16px,_#ffffff_32px)] opacity-70"></div>
        </div>
        {/* Left truck goes right */}
        <div ref={leftTruckRef} className="pointer-events-none absolute left-[-120px] top-0 h-full flex items-center">
          <Image
            src="/footer/621dbe2c84d5870bfcca78a1_01.svg"
            alt="Truck moving right"
            width={120}
            height={60}
            className="drop-shadow-lg"
          />
        </div>
        {/* Right truck goes left */}
        <div ref={rightTruckRef} className="pointer-events-none absolute right-[-120px] top-0 h-full flex items-center">
          <Image
            src="/footer/62207283e85d0a3ded8b3d3c_05.svg"
            alt="Truck moving left"
            width={120}
            height={60}
            className="drop-shadow-lg"
          />
        </div>
      </div>

      {/* Main footer content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12">
          <div className="grid lg:grid-cols-4 gap-8 items-start">
            {/* Left: brand + map image - takes 1 column */}
            <div className="flex flex-col lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Image 
                  src="/nav-logo.png" 
                  alt="NISHA" 
                  width={110} 
                  height={35} 
                  className="h-16 w-auto"
                />
              </div>
              
              {/* Smaller world map image */}
              <div className="relative w-full max-w-[200px] mb-6">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/footer/677f51b86a775b868658e1f7_footer-img-map.png"
                    alt="world map"
                    fill
                    className="object-contain opacity-80"
                    priority={false}
                  />
                  {/* Blue location pin */}
                  <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full border border-white shadow-lg"></div>
                </div>
              </div>
              
              {/* Social icons with proper icons */}
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center text-white/70 hover:text-white" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center text-white/70 hover:text-white" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center text-white/70 hover:text-white" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.987 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.534-.757-.937-1.097-2.178-.932-3.394.165-1.216.858-2.288 1.898-2.936 1.04-.648 2.298-.774 3.442-.345 1.144.429 2.097 1.382 2.609 2.609.512 1.227.512 2.609 0 3.836-.256.613-.629 1.158-1.093 1.6-.464.441-1.01.791-1.603 1.027-.593.236-1.227.356-1.862.356-.635 0-1.269-.12-1.862-.356-.593-.236-1.139-.586-1.603-1.027-.464-.442-.837-.987-1.093-1.6-.512-1.227-.512-2.609 0-3.836.512-1.227 1.465-2.18 2.609-2.609 1.144-.429 2.402-.303 3.442.345 1.04.648 1.733 1.72 1.898 2.936.165 1.216-.175 2.457-.932 3.394-.757.938-1.908 1.534-3.205 1.534z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center text-white/70 hover:text-white" aria-label="YouTube">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right: newsletter and links - takes 3 columns */}
            <div className="flex flex-col lg:col-span-3">
              {/* Newsletter section on top */}
              <div className="mb-8 lg:mb-10">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                  {/* Left: Subscribe text */}
                  <div>
                    <h3 className="text-2xl lg:text-4xl font-bold font-space-grotesk mb-4">
                      Subscribe to<br />Our Newsletter
                    </h3>
                   
                  </div>
                  
                  {/* Right: Input form positioned higher and to the right */}
                  <div className="lg:mt-0">
                    <form className="w-full" onSubmit={(e) => e.preventDefault()}>
                      <div className="flex rounded-lg overflow-hidden shadow-lg">
                        <input
                          type="email"
                          placeholder="Enter Your Email Address"
                          className="flex-1 h-16 px-6 text-sm text-gray-900 placeholder-gray-500 bg-white border-0 outline-none"
                          required
                        />
                        <button
                          type="submit"
                          className="px-6 lg:px-8 h-16 bg-blue-600 hover:bg-blue-700 text-white text-sm lg:text-lg font-semibold transition-colors duration-200 whitespace-nowrap"
                        >
                          Subscribe Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Navigation links section below */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-4 text-base lg:text-lg">Useful Link</h4>
                  <ul className="space-y-3 text-sm lg:text-base text-white/70">
                    <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Appointment</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Experts</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-4 text-base lg:text-lg">Resources</h4>
                  <ul className="space-y-3 text-sm lg:text-base text-white/70">
                    <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Style Guide</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Change Log</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-4 text-base lg:text-lg">Working Hours</h4>
                  <ul className="space-y-3 text-sm lg:text-base text-white/70">
                    <li>Mon to Fri : 9:00 AM - 5:00 PM</li>
                    <li>Saturday : 10:00 AM - 6:00 PM</li>
                    <li>Sunday Closed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-400 font-semibold mb-4 text-base lg:text-lg">Say Hello</h4>
                  <ul className="space-y-3 text-sm lg:text-base text-white/70">
                    <li><a href="mailto:contact@pbmit.com" className="hover:text-white transition-colors">contact@pbmit.com</a></li>
                    <li className="text-lg lg:text-xl font-semibold text-white">+(02) 574 - 328 - 301</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-white/60 grid grid-cols-1 md:grid-cols-3 items-center">
            <a href="#" className="hover:text-white/80 text-left">Terms and conditions</a>
            <span className="text-center">© 2024 PBM Infotech</span>
            <a href="#" className="hover:text-white/80 text-right">Privacy Policy</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes truckLeftToRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100vw + 200px)); }
        }
        @keyframes truckRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100vw - 200px)); }
        }
        .truck-move-left-to-right {
          animation: truckLeftToRight 14s linear infinite;
        }
        .truck-move-right-to-left {
          animation: truckRightToLeft 14s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;


