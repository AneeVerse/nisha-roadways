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
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: brand + map image */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Image src="/next.svg" alt="logo" width={26} height={26} />
                </div>
                <span className="text-xl font-semibold tracking-wide">Delivar</span>
              </div>
              <div className="relative w-full max-w-md aspect-[16/10]">
                <Image
                  src="/footer/677f51b86a775b868658e1f7_footer-img-map.png"
                  alt="world map"
                  fill
                  className="object-contain opacity-90"
                  priority={false}
                />
              </div>
              <div className="mt-6 flex items-center gap-3 text-white/70">
                <button className="w-9 h-9 rounded-full border border-white/15 hover:bg-white/10 transition" aria-label="Facebook">F</button>
                <button className="w-9 h-9 rounded-full border border-white/15 hover:bg-white/10 transition" aria-label="Twitter">X</button>
                <button className="w-9 h-9 rounded-full border border-white/15 hover:bg-white/10 transition" aria-label="Instagram">I</button>
                <button className="w-9 h-9 rounded-full border border-white/15 hover:bg-white/10 transition" aria-label="LinkedIn">in</button>
              </div>
            </div>

            {/* Right: newsletter and links */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">Subscribe to
                <br />Our Newsletter</h3>
              <div className="mt-6 flex max-w-xl">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1 rounded-l-md px-4 py-3 text-sm text-gray-900 outline-none"
                />
                <button className="rounded-r-md bg-blue-600 hover:bg-blue-700 px-5 text-sm font-semibold">Subscribe Now</button>
              </div>

              <div className="grid md:grid-cols-3 gap-10 mt-12 text-sm">
                <div>
                  <h4 className="text-white/80 font-semibold mb-4">Useful Link</h4>
                  <ul className="space-y-2 text-white/70">
                    <li>About us</li>
                    <li>Appointment</li>
                    <li>Experts</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white/80 font-semibold mb-4">Working Hours</h4>
                  <ul className="space-y-2 text-white/70">
                    <li>Mon to Fri : 9:00 AM - 5:00 PM</li>
                    <li>Saturday : 10:00 AM - 6:00 PM</li>
                    <li>Sunday Closed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white/80 font-semibold mb-4">Say Hello</h4>
                  <ul className="space-y-2 text-white/70">
                    <li>contact@pbmit.com</li>
                    <li className="text-lg font-semibold text-white">(02) 574 - 328 - 301</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-white/60 flex items-center justify-between">
            <span>© 2024 PBM Infotech</span>
            <a href="#" className="hover:text-white/80">Terms and conditions</a>
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


