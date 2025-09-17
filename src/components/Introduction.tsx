"use client";

import Image from "next/image";
import React, { useState } from "react";

type StatCardProps = {
  percentage: number;
  title: string;
  subtitle?: string;
};

const StatCard: React.FC<StatCardProps> = ({ percentage, title, subtitle }) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 lg:p-6 shadow-sm ring-1 ring-black/5">
      <div className="relative h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 shrink-0">
        <svg viewBox="0 0 48 48" className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16">
          <circle cx="24" cy="24" r="20" fill="#f1f5f9" />
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="transparent"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeDasharray={`${Math.round((percentage / 100) * 2 * Math.PI * 20)} ${
              Math.round(2 * Math.PI * 20)
            }`}
            transform="rotate(-90 24 24)"
            opacity="0.8"
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="8"
            fill="#1e293b"
            fontWeight="700"
            className="sm:text-[10px]"
          >
            {percentage}%
          </text>
        </svg>
      </div>
      <div>
        <p className="text-xs sm:text-sm font-semibold text-slate-800">{title}</p>
        {subtitle ? (
          <p className="text-xs text-slate-600">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
};

const tabs = [
  {
    key: "mission",
    label: "Our Mission",
    image: "/hero-bg/677cbf6b0eadd303c270446e_slider1-img-01.jpg",
    text:
      "Nemo enim ipsam voluptatem quia voluptas aut odit aut fugit, sed quia consequuntur eos qui ratione vnesciunt.",
  },
  {
    key: "vision",
    label: "Our Vision",
    image: "/hero-bg/677cbf6b709a8c5f7cae8999_slider1-img-02.jpg",
    text:
      "Creating reliable, scalable logistics that empower businesses to move faster with clarity and confidence.",
  },
  {
    key: "history",
    label: "Our History",
    image: "/hero-bg/677cbf6dbe9c1d6d943f28b7_slider1-img-03.jpg",
    text:
      "Built on decades of experience, continually improving processes to deliver exceptional value.",
  },
] as const;

const Introduction: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative mx-auto max-w-[1400px] px-3 py-8 sm:px-4 sm:py-12 md:py-16 lg:px-8 bg-[#f4f6ff]">
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="mb-4 sm:mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <Image
              src="/67761af397573ca47fb7f6cb_subtitle-icon.png"
              alt="Introduction icon"
              width={16}
              height={16}
            />
            <span>Introduction</span>
          </div>
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-slate-900 font-[family-name:var(--font-space-grotesk)]">
            Exceptional Quality that <span className="text-blue-600">Can&apos;t be beaten.</span>
          </h2>

          <div className="mb-6 sm:mb-8 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-3">
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveIndex(index)}
                  className={`${
                    isActive ? "bg-blue-600 text-white" : "bg-white text-slate-700 ring-1 ring-black/5"
                  } rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-center shadow-sm transition-colors font-[family-name:var(--font-space-grotesk)]`}
                >
                  <span className="text-sm sm:text-base font-semibold">{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src={tabs[activeIndex].image}
                alt={tabs[activeIndex].label}
                width={560}
                height={380}
                className="h-48 sm:h-56 md:h-64 lg:h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center">
              <p className="text-sm sm:text-base leading-6 sm:leading-7 text-slate-600 font-[family-name:var(--font-space-grotesk)]">
                {tabs[activeIndex].text}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6">
          <StatCard percentage={80} title="Clients Satisfactions" />
          <StatCard percentage={90} title="Inventory" subtitle="management" />
          <StatCard percentage={80} title="Supply chain" subtitle="network analysis" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;


