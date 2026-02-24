"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const SERVICES = [
  {
    key: "container-solutions",
    title: "Container Solutions",
    description: "Empty Container Transportation (ECT) Export Import Containers (Exim Transport Service) Domestic Cargo In Our Containers.",
    icon: "/images/services/boxicons_container-filled.png",
    link: "/services"
  },
  {
    key: "green-energy",
    title: "GREEN ENERGY & NICHE MOVEMENTS",
    description: "Solar Panel & Parts Transportation (SolarTransport) Over Dimension Cargo (ODC) Bulk Cargo Transportation",
    icon: "/images/services/mdi_solar-energy-outline.png",
    link: "/services"
  },
  {
    key: "alternative-logistics",
    title: "ALTERNATIVE LOGISTICS",
    items: [
      "Rail Services",
      "Coastal Services",
      "CL Consolidation"
    ],
    icon: "/images/services/carbon_web-services-container.png",
    link: "/services"
  },
  {
    key: "value-added-services",
    title: "VALUE-ADDED SERVICES",
    items: [
      "Transportation Of High Value Goods",
      "Storage and Warehousing",
      "Chemical Transportation In Tank Containers"
    ],
    icon: "/images/services/eos-icons_init-container-outlined.png",
    link: "/services"
  }
]

export default function OurSolution() {
  return (
    <section className="relative pt-[100px] pb-[140px] bg-[#030816] flex items-center justify-center font-poppins">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className="flex items-center justify-center border border-[#3873FF] rounded-[70px] mb-[24px]"
            style={{ width: '157px', height: '31px' }}
          >
            <span className="text-[12px] font-bold text-[#3873FF] uppercase tracking-[0.2em] leading-none">
              SERVICES
            </span>
          </div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] font-semibold text-[#3873FF] leading-[40px] mb-[16px] max-w-[1145px]"
          >
            Integrated Intelligence. Seamless Connectivity.
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[18px] font-medium text-[#9B9B9B] leading-[27px] mb-[64px] max-w-[1062px]"
          >
            Trade flows better when every connection works intelligently. We orchestrate comprehensive supply chain solutions that anticipate challenges, optimize resources and change what&apos;s possible for businesses across India.
          </motion.p>
        </div>

        {/* Service Cards Grid & CTA Container */}
        <div className="relative w-full max-w-[1240px] flex flex-col items-center">
          {/* Dotted Line Removed as requested */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] mb-[48px] relative z-10 w-full">
            {SERVICES.map((service, index) => {
              return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.21, 0.45, 0.32, 0.9]
                  }}
                  className="group relative"
                  style={{ width: '285px', height: '340px' }}
                >
                  {/* Visual Card */}
                  <div className="relative h-full p-[32px] rounded-[24px] bg-[#21293B] border border-[#3873FF]/80 hover:border-[#3873FF] hover:opacity-90 transition-all duration-300 flex flex-col shadow-2xl overflow-hidden">
                    {/* Icon Box (Centered) */}
                    <div className="mb-[36px] flex justify-center w-full">
                      <div className="relative">
                        <div className="w-[82px] h-[82px] rounded-[20px] bg-[#3873FF] flex items-center justify-center">
                          <div className="relative w-10 h-10">
                            <Image
                              src={service.icon}
                              alt={service.title}
                              fill
                              className="object-contain brightness-0 invert"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Title (Left Aligned) */}
                    <h3 className="text-[18px] font-semibold text-white mb-[8px] leading-[22px] text-left uppercase">
                      {service.title}
                    </h3>

                    {/* Description or List (Left Aligned) */}
                    <div className="w-full">
                      {service.description ? (
                        <p className="text-[12px] font-medium text-[#9B9B9B] leading-[16px] text-left">
                          {service.description}
                        </p>
                      ) : (
                        <ul className="text-[12px] font-medium text-[#9B9B9B] space-y-[2px] text-left">
                          {service.items?.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-[6px] w-[3px] h-[3px] rounded-full bg-[#9B9B9B] shrink-0" />
                              <span className="leading-[16px]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Learn More Link (Pinned to bottom) */}
                    <div className="mt-auto pt-6 w-full flex justify-end">
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-1 text-[12px] font-medium text-[#9B9B9B] hover:text-white transition-colors duration-300 group/link"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center w-full"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-[40px] py-[16px] bg-[#124adb] hover:bg-[#1a56f0] text-white text-[14px] font-bold rounded-full transition-all duration-300 shadow-xl shadow-blue-900/30 group"
            >
              EXPLORE ALL SERVICES
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-4 h-4 rotate-[-45deg]" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
