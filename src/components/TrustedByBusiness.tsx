"use client";

import Image from "next/image";
import { useState } from "react";
import { Shield, Award, Users, MapPin, Navigation, CheckCircle } from "lucide-react";

const items = [
  {
    title: "Zero Damage Guarantee",
    content:
      "Our precision handling, professional packing, and advanced safety equipment ensure your cargo reaches destination intact. We take 'Handle with Care' beyond industry standards.",
    icon: Shield
  },
  {
    title: "24/7 Real-Time Tracking",
    content:
      "From pickup to delivery, track every movement online. Complete transparency with GPS-enabled vehicles and instant updates at every checkpoint.",
    icon: MapPin
  },
  {
    title: "Pan-India Network",
    content:
      "30+ branches across India ensure seamless connectivity from any location to anywhere. No destination too remote for our extensive network.",
    icon: Navigation
  },
  {
    title: "Industry-Certified Expertise",
    content:
      "Specialized drivers, safety-trained personnel, and compliance with international standards. Every team member is an expert in their domain.",
    icon: Award
  },
];

export default function TrustedByBusiness() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section aria-label="Why choose us" className="py-14 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Why 500+ Companies Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab]">Nisha Roadways</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            We don't just move cargo – we move your business forward. With 35+ years of expertise, cutting-edge technology,
            and an uncompromising commitment to safety, we've earned the trust of India's biggest brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left content */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              {items.map((item, idx) => {
                const isOpen = openIndex === idx;
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isOpen
                              ? 'bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] text-white'
                              : 'bg-gray-100 text-gray-600'
                            }`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <button
                            className="text-left flex-1"
                            onClick={() => setOpenIndex(isOpen ? null : idx)}
                            aria-expanded={isOpen}
                            aria-controls={`trusted-item-${idx}`}
                          >
                            <p className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{item.title}</p>
                          </button>
                        </div>
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : idx)}
                          aria-label={isOpen ? "Collapse" : "Expand"}
                          className={`ml-4 h-10 w-10 shrink-0 rounded-full flex items-center justify-center text-xl font-bold leading-none transition-all duration-300 ${isOpen
                              ? 'bg-gradient-to-r from-[#6a31eb] via-[#9a45d1] to-[#d560ab] text-white rotate-45'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                          +
                        </button>
                      </div>
                      <div
                        id={`trusted-item-${idx}`}
                        className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'} overflow-hidden`}
                      >
                        <div className="min-h-0">
                          <p className="text-sm text-gray-600 max-w-lg leading-relaxed pl-16">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/our-solution/ship.avif"
                alt="Modern logistics operations"
                width={1200}
                height={800}
                className="w-full h-[400px] lg:h-[500px] object-cover"
                priority
              />
              {/* Overlay with key highlights */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Projects</span>
                      </div>
                      <div className="text-2xl font-bold">1,500+</div>
                      <div className="text-sm opacity-90">Delivered Successfully</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-5 h-5" />
                        <span className="font-semibold">Clients</span>
                      </div>
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm opacity-90">Happy Corporate Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1,500+ Projects</h3>
              <p className="text-gray-600 text-sm">Successfully delivered with zero damage guarantee and complete customer satisfaction.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">500+ Happy Clients</h3>
              <p className="text-gray-600 text-sm">Corporate clients trust us for their critical logistics and transportation needs.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">35+ Years Experience</h3>
              <p className="text-gray-600 text-sm">Industry-leading expertise built over three and half decades of excellence.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                <Navigation className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">30+ Branch Network</h3>
              <p className="text-gray-600 text-sm">Extensive network across India ensuring seamless connectivity nationwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
