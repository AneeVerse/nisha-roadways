"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { featuredPartnerLogos } from "@/data/partners";

const MarqueeRow = ({
  logos,
  direction = "left",
  speed = 0.5
}: {
  logos: typeof featuredPartnerLogos,
  direction?: "left" | "right",
  speed?: number
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPos = useRef(0);

  // Triple set of logos for infinite feel
  const allLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Set initial position
    if (direction === "right") {
      scrollPos.current = el.scrollWidth / 3;
    } else {
      scrollPos.current = 0;
    }
    el.scrollLeft = scrollPos.current;

    let requestID: number;
    const animate = () => {
      const third = el.scrollWidth / 3;

      if (direction === "left") {
        scrollPos.current += speed;
        if (scrollPos.current >= third * 2) {
          scrollPos.current -= third;
        }
      } else {
        scrollPos.current -= speed;
        if (scrollPos.current <= third) {
          scrollPos.current += third;
        }
      }

      el.scrollLeft = scrollPos.current;
      requestID = requestAnimationFrame(animate);
    };

    requestID = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestID);
  }, [direction, speed, logos.length]);

  return (
    <div
      ref={scrollRef}
      className="flex overflow-x-auto scrollbar-hide touch-pan-x pointer-events-auto"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div className="flex items-center gap-3 py-2 px-6 min-w-max">
        {allLogos.map((logo, idx) => (
          <div key={`${logo.src}-${idx}`} className="flex-shrink-0">
            <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 w-32 h-16 relative flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain select-none filter grayscale opacity-70"
                  sizes="128px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function CompanyLogos() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sets for desktop and mobile
  const allLogos = [...featuredPartnerLogos, ...featuredPartnerLogos, ...featuredPartnerLogos];
  const row1Logos = featuredPartnerLogos.slice(0, Math.ceil(featuredPartnerLogos.length / 2));
  const row2Logos = featuredPartnerLogos.slice(Math.ceil(featuredPartnerLogos.length / 2));

  return (
    <section aria-label="Companies using our services" className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 mt-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center px-4">
          <p className="text-[8px] sm:text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2 sm:mb-4">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Companies We Have <span className="text-blue-600">Collaborated</span> With
          </h2>
        </div>

        {/* Company Logos Container */}
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-30 pointer-events-none"></div>

          {/* Desktop View */}
          <div className="hidden md:flex overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex items-center gap-6 sm:gap-8 md:gap-10 py-4"
              animate={{
                x: [0, -1500],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {allLogos.map((logo, idx) => (
                <div key={`${logo.src}-${idx}`} className="flex-shrink-0">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-500 hover:-translate-y-1">
                    <div className="relative w-24 sm:w-32 h-10 sm:h-12">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain select-none filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500"
                        sizes="(max-width: 640px) 96px, 128px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile View - Two rows with fixed auto-scroll */}
          <div className="md:hidden flex flex-col gap-3">
            <MarqueeRow logos={row1Logos} direction="left" speed={0.6} />
            <MarqueeRow logos={row2Logos} direction="right" speed={0.6} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @media (max-width: 640px) {
        }
      `}</style>
    </section>
  );
}
