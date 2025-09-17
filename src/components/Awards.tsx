"use client";

import Image from "next/image";
import React from "react";

type Award = {
  icon: string;
  lines: string[];
};

const awards: Award[] = [
  {
    icon: "/award/679487582871c5dca7684985_award-img-01.png",
    lines: ["Top 5 interior design", "inspiration 2023"],
  },
  {
    icon: "/award/679487559545deb12b383617_award-img-02.png",
    lines: ["Top 10 Agency Use", "Sustainable Material"],
  },
  {
    icon: "/award/67948755e82e8953835fee15_award-img-03.png",
    lines: ["Winner Best CGI Artist", "2022"],
  },
  {
    icon: "/award/67946e7975edc57c75aa27a4_award-img-04.png",
    lines: ["Global Award Site of", "year 2023"],
  },
  {
    icon: "/award/679487554b7845f3fbff662e_award-img-05.png",
    lines: ["Expert  Interior Design", "Inspiration 2023"],
  },
];

const Awards: React.FC = () => {
  return (
    <section className="relative w-full bg-[#f4f6ff] py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Right background truck */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block">
        <Image
          src="/truck-img.png"
          alt="Truck"
          width={680}
          height={220}
          className="absolute bottom-0 right-0 translate-x-4 lg:translate-x-8 opacity-90 w-[400px] lg:w-[680px]"
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section title with dividers */}
        <div className="mb-6 sm:mb-8 md:mb-10 flex items-center gap-4">
          <div className="hidden h-px flex-1 bg-slate-200 md:block" />
          <p className="text-xs sm:text-sm font-semibold text-blue-600">Award & achivement</p>
          <div className="hidden h-px flex-1 bg-slate-200 md:block" />
        </div>

        {/* Awards grid */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 text-center sm:grid-cols-3 lg:grid-cols-5">
          {awards.map((a, idx) => (
            <div key={idx} className="mx-auto flex max-w-[180px] sm:max-w-[200px] lg:max-w-[220px] flex-col items-center">
              <Image src={a.icon} alt={`Award ${idx + 1}`} width={160} height={160} className="mb-3 sm:mb-4 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain" />
              <p className="text-sm sm:text-base font-semibold leading-snug text-slate-900 font-[family-name:var(--font-space-grotesk)]">
                {a.lines[0]}
                <br />
                <span className="font-normal text-slate-700">{a.lines[1]}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;


