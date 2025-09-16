"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Step = {
  icon: string;
  title: string;
  subtitle: string;
  step: string;
};

const steps: Step[] = [
  {
    icon: "/process/677fbecc3c65f22117991f24_Icon-01-global.svg",
    title: "Replenishment &",
    subtitle: "Picking",
    step: "Step 01",
  },
  {
    icon: "/process/677fbecee8a5b2fcb9009a23_Icon-06-global.svg",
    title: "Warehousing",
    subtitle: "Operation",
    step: "Step 02",
   
  },
  {
    icon: "/process/677fbece680959a03193dca1_Icon-07-global.svg",
    title: "Packaging &",
    subtitle: "Distribution",
    step: "Step 03",
  },
  {
    icon: "/process/677fbecc699bef79c534444c_Icon-03-global.svg",
    title: "Transportation",
    subtitle: "Process",
    step: "Step 04",
  },
];

const OurProcess: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRef = useRef<HTMLDivElement | null>(null);
  const [lineTop, setLineTop] = useState<number | null>(null);

  useEffect(() => {
    const updateLineTop = () => {
      if (!containerRef.current || !stepRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const stepRect = stepRef.current.getBoundingClientRect();
      const top = stepRect.top - containerRect.top + stepRect.height / 2;
      setLineTop(top);
    };

    updateLineTop();
    window.addEventListener("resize", updateLineTop);
    return () => window.removeEventListener("resize", updateLineTop);
  }, []);

  return (
    <section className="relative w-full bg-[#f4f6ff] py-20">
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <Image
            src="/67761af397573ca47fb7f6cb_subtitle-icon.png"
            alt="Process icon"
            width={16}
            height={16}
          />
          <span>Our Process</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900 font-[family-name:var(--font-space-grotesk)]">
          Let us take the stress
          <br />
          out of <span className="text-blue-600">your move.</span>
        </h2>
      </div>

      {/* Steps */}
      <div className="relative mt-16" ref={containerRef}>
        {/* Dotted blue connector line positioned to Step level */}
        {lineTop !== null ? (
          <div className="pointer-events-none absolute inset-x-0 hidden md:block" style={{ top: lineTop }}>
            <div className="mx-4 sm:mx-6 lg:mx-8 border-t-2 border-blue-500 border-dotted opacity-70"></div>
          </div>
        ) : null}

        <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-8">
          {steps.map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              {/* Icon - no white background */}
              <div className="mb-8">
                <Image src={item.icon} alt={item.title} width={52} height={52} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-[family-name:var(--font-space-grotesk)]">
                {item.title}
                <br />
                {item.subtitle}
              </h3>
              <div className="mt-4" ref={idx === 0 ? stepRef : undefined}>
                <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-600 shadow-sm ring-1 ring-black/5">
                  {item.step}
                </span>
              </div>
              <p className="mt-8 max-w-[260px] text-sm leading-6 text-slate-600">
                Popularised in with release of Letraset containing passages and more recently
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;


