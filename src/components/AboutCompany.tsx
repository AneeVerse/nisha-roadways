"use client"

import { motion } from "framer-motion"

export default function AboutCompany() {
    return (
        <section className="relative pt-[60px] pb-[80px] bg-white overflow-hidden flex flex-col items-center font-poppins">
            <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full flex flex-col items-center">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-[36px]">
                    {/* Badge */}
                    <div
                        className="flex items-center justify-center border border-[#3873FF] bg-[#BBCFFF]/30 rounded-[70px] mb-[24px]"
                        style={{ width: '188px', height: '33px' }}
                    >
                        <span className="text-[15px] font-semibold text-[#3873FF] uppercase tracking-normal leading-none">
                            ABOUT OUR COMPANY
                        </span>
                    </div>

                    {/* Main Heading */}
                    <div className="flex flex-col items-center mb-[16px]">
                        <h2
                            className="text-[25px] font-semibold text-black leading-[40px]"
                        >
                            Decades of Excellence. Tons of Deliverables.
                        </h2>
                        <span
                            className="text-[34px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1557F3] to-[#0C328D] leading-[40px]"
                        >
                            But all Built on Trust & Reliability.
                        </span>
                    </div>

                    {/* Subheading */}
                    <p
                        className="text-[17px] font-medium text-[#9F9F9F] leading-[27px] max-w-[730px]"
                    >
                        Experience of nearly 5 decades speaks about the consistency in servicing and trust of customers
                    </p>
                </div>

                {/* Info Cards Grid */}
                <div className="flex flex-wrap items-center justify-center gap-[40px] md:gap-[100px] w-full mt-[20px]">
                    {/* Card 01 */}
                    <div className="relative flex items-center group">
                        {/* Top Blue Line - Centered over the white pill */}
                        <div className="absolute -top-[12px] left-[140px] w-[370px] h-[2px] bg-[#3873FF]"></div>

                        {/* Number Part */}
                        <div className="flex items-center justify-start pl-[35px] bg-[#1A56F0] rounded-l-full w-[160px] h-[82px] shrink-0">
                            <span className="text-white text-[32px] font-bold">01</span>
                        </div>
                        {/* Text Part */}
                        <div className="flex items-center bg-white border-[2px] border-[#E7E7E7] rounded-full pl-[50px] pr-[40px] h-[113px] w-[468px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] -ml-[70px] z-10">
                            <p className="text-[#6B7280] text-[15px] leading-[20px] font-semibold max-w-[394px]">
                                Anyone having the need to move something in containers by road, will definitely need us
                            </p>
                        </div>
                    </div>

                    {/* Card 02 */}
                    <div className="relative flex items-center group">
                        {/* Top Red Line - Centered over the white pill */}
                        <div className="absolute -top-[12px] left-[140px] w-[370px] h-[2px] bg-[#D13B3D]"></div>

                        {/* Number Part */}
                        <div className="flex items-center justify-start pl-[35px] bg-[#B91C1C] rounded-l-full w-[160px] h-[82px] shrink-0">
                            <span className="text-white text-[32px] font-bold">02</span>
                        </div>
                        {/* Text Part */}
                        <div className="flex items-center bg-white border-[2px] border-[#E7E7E7] rounded-full pl-[60px] pr-[40px] h-[113px] w-[468px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] -ml-[70px] z-10">
                            <p className="text-[#6B7280] text-[15px] leading-[20px] font-semibold max-w-[394px]">
                                Pan-India network with 20+ offices connecting ports, ICDs, warehouses, and factories from Mundra to Kolkata.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
