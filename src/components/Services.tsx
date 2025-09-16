"use client";

import Image from "next/image";
import React from "react";

const Services: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 bg-[#f4f6ff]">
      {/* Top Row: Heading + Right Copy with background container */}
      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        <div className="lg:col-span-6">
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <Image src="/67761af397573ca47fb7f6cb_subtitle-icon.png" alt="Services icon" width={16} height={16} />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-900 font-[family-name:var(--font-space-grotesk)]">
            Logistics Solution
            <br />
            and <span className="text-blue-600">Services</span>
          </h2>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="relative z-10 flex items-start justify-between gap-4 mt-11">
            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 font-[family-name:var(--font-space-grotesk)]">
              Together, we identify the industrial data automation project&apos;s general scope and the components needed to produce.
            </p>
            <button className="shrink-0 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors font-[family-name:var(--font-space-grotesk)]">
              All Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.333 8H12.667M12.667 8L8.667 4M12.667 8L8.667 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <Image
            src="/Container-bg-img.png"
            alt="Container Background"
            width={640}
            height={420}
            className="pointer-events-none absolute -top-16 right-6 hidden w-[420px] opacity-40 lg:block"
          />
        </div>
      </div>

      {/* Bottom Row: Left big image + Right copy with plane */}
      <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-12">
        {/* Left big image */}
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/service.jpg"
              alt="Air Freight"
              width={880}
              height={660}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        {/* Right copy block */}
        <div className="lg:col-span-7">
          <div className="relative lg:pr-40">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide"><span className="text-blue-600">01</span> <span className="text-slate-900">Analytics</span></span>
              <button className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-slate-700 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3.333v9.334M12.667 8H3.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <h3 className="mb-6 text-2xl font-bold text-slate-900 font-[family-name:var(--font-space-grotesk)]">Air Freight</h3>
            <div className="relative mt-4 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                Fast and reliable air cargo transportation with comprehensive tracking systems for urgent shipments worldwide ensuring temperature-controlled storage facilities and product integrity during transit and handling processes with expert customs clearance services to streamline international shipping and reduce delays at borders.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                Real-time monitoring and updates providing complete visibility throughout the entire shipping journey with specialized packaging solutions designed to protect fragile and high-value goods during air transport supported by dedicated customer support team available around the clock to assist with any shipping concerns.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-[family-name:var(--font-space-grotesk)]">
                Express delivery options with guaranteed time-definite service for critical business shipments and documents backed by comprehensive insurance coverage protecting your valuable cargo against loss or damage during transportation through multi-modal solutions combining air freight with ground services for complete logistics coverage.
              </p>
             
            </div>
            {/* Plane icon on the right */}
            <div className="pointer-events-none absolute -right-2 top-36 hidden lg:block">
              <Image src="/plan.png.png" alt="Plane" width={128} height={128} className="h-32 w-32 opacity-90" />
            </div>
            <div className="mt-8 h-px w-full bg-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
