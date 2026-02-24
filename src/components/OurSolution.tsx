"use client"

import { motion } from "framer-motion"
import { Container, Boxes, Truck, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

const SERVICES = [
  {
    key: "container-logistics",
    title: "Container Solutions",
    description: "End-to-end container management from ports to your doorstep. We handle the complexity of global trade so you don't have to.",
    icon: Container,
    link: "/services#container-logistics",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    key: "specialized-cargo",
    title: "Specialized Transport",
    description: "Expert handling for ODC and delicate solar components with cutting-edge tracking and AI integration.",
    icon: Boxes,
    link: "/services#specialized-cargo",
    gradient: "from-blue-400 to-blue-500"
  },
  {
    key: "multimodal-transport",
    title: "Integrated Logistics",
    description: "Seamless multimodal connectivity via rail and coastal routes for maximum efficiency and cost optimization.",
    icon: Truck,
    link: "/services#multimodal-transport",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    key: "value-added-services",
    title: "Value-Added Care",
    description: "Precision-targeted warehousing and high-value cargo protection with comprehensive security loops.",
    icon: Shield,
    link: "/services#value-added-services",
    gradient: "from-blue-400 to-blue-500"
  }
]

export default function OurSolution() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#0a0f1c] overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAgNjAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10 w-full">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 sm:gap-5"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full">
              <span className="text-[11px] sm:text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">
                Innovative Future
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
              Our Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 italic">Solutions</span>
            </h2>

            {/* Subheading */}
            <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-400 font-medium leading-relaxed">
              Propel your business forward with our cutting-edge digital ecosystem and glassmorphism-inspired strategies.
            </p>
          </motion.div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-12 sm:mb-16">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
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
              >
                {/* Glassmorphic Card */}
                <div className="relative h-full p-6 sm:p-7 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 transition-all duration-500 overflow-hidden">

                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/0 to-blue-500/0 group-hover:from-blue-600/5 group-hover:via-blue-600/3 group-hover:to-blue-500/5 transition-all duration-700 rounded-[1.5rem] sm:rounded-[2rem]"></div>

                  {/* Corner glow effect */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full min-h-[220px] sm:min-h-[260px]">
                    {/* Icon */}
                    <div className="mb-5 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-blue-500/25 transition-all duration-500`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-blue-400 transition-colors duration-300 group/link mt-auto"
                    >
                      <span className="relative">
                        Learn More
                        <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-blue-400 group-hover/link:w-full transition-all duration-300"></span>
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>


      </div>
    </section>
  )
}
