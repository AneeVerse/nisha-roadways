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
    <section className="relative w-full bg-[#f4f6ff] py-16 overflow-hidden">
      {/* Right background truck */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden md:block">
        <Image
          src="/truck-img.png"
          alt="Truck"
          width={680}
          height={220}
          className="absolute bottom-0 right-0 translate-x-8 opacity-90"
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title with dividers */}
        <div className="mb-10 flex items-center gap-4">
          <div className="hidden h-px flex-1 bg-slate-200 sm:block" />
          <p className="text-sm font-semibold text-blue-600">Award & achivement</p>
          <div className="hidden h-px flex-1 bg-slate-200 sm:block" />
        </div>

        {/* Awards grid */}
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-5">
          {awards.map((a, idx) => (
            <div key={idx} className="mx-auto flex max-w-[220px] flex-col items-center">
              <Image src={a.icon} alt={`Award ${idx + 1}`} width={160} height={160} className="mb-4 h-28 w-28 object-contain md:h-32 md:w-32" />
              <p className="text-base font-semibold leading-snug text-slate-900 font-[family-name:var(--font-space-grotesk)]">
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


