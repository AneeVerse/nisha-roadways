"use client";

import { featuredPartnerLogos } from "@/data/partners";

export default function CompanyLogos() {
  const logoSet = featuredPartnerLogos;

  return (
    <section className="bg-[#F3FBFC] py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Text */}
        <div className="text-center mb-10">
          <h2 className="text-[#3F4859] text-sm sm:text-lg font-medium tracking-tight">
            100+ Industry Leaders Trust Nisha Roadways
          </h2>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative flex items-center">


          {/* Marquee Track */}
          <div className="marquee-track flex items-center">
            {/* First set */}
            <div className="flex items-center">
              {logoSet.map((logo, idx) => (
                <div
                  key={`a-${idx}`}
                  className="flex-shrink-0 w-[160px] flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-[30px] w-auto object-contain select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Second set for seamless looping */}
            <div className="flex items-center">
              {logoSet.map((logo, idx) => (
                <div
                  key={`b-${idx}`}
                  className="flex-shrink-0 w-[160px] flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-[30px] w-auto object-contain select-none pointer-events-none"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: marquee-scroll 40s linear infinite;
          will-change: transform;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Since the track contains two identical sets, we move by half the total width */
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
