"use client";

import React from "react";

const STATS = [
    {
        value: "102",
        suffix: "M",
        label: "TEU global capacity"
    },
    {
        value: "80",
        suffix: "+",
        label: "Countness worldwide"
    },
    {
        value: "$5",
        suffix: "B",
        label: "Invested in global logistics network"
    },
    {
        value: "55",
        suffix: "%",
        label: "Electricity sourced from renewable energy projects in 2025"
    }
];

export default function ImpactStats() {
    return (
        <section className="bg-[#EDF1FA] py-[100px] mt-[100px] font-poppins relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center mb-[80px]">
                    <span className="text-[18px] font-semibold text-black uppercase tracking-normal mb-1 block leading-[24px]">
                        MAKE AN IMPACT
                    </span>
                    <h2 className="text-[50px] font-semibold text-black leading-[55px] max-w-[766px] text-center">
                        WE MOVE <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1654ED] to-[#0D3087]">10% OF GLOBAL TRADE</span> DAILY
                    </h2>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[34px] w-full max-w-[998px]">
                    {STATS.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="flex items-baseline mb-1 h-[50px]">
                                <span className="text-[60px] font-semibold text-[#1556F1] leading-[40px]">
                                    {stat.value}
                                </span>
                                <span className="text-[20px] font-semibold text-[#1556F1] leading-[40px] ml-1">
                                    {stat.suffix}
                                </span>
                            </div>
                            <p className="text-[16px] font-normal text-black leading-[20px] max-w-[224px]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
