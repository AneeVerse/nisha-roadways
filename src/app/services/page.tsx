"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import {
  Container, Boxes, Truck, Ship, Train, Shield,
  Package, Sparkles, ArrowRight, FlaskConical, Warehouse, Sun
} from "lucide-react";

const ServicesPage = () => {
  const serviceCategories = [
    {
      id: "container-logistics",
      number: "01",
      label: "Efficiency",
      title: "Container Solutions",
      subtitle: "End-to-end container management from ports to your doorstep. We handle the complexity of global trade so you don't have to.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      services: [
        {
          name: "Empty Container Transportation",
          description: "Pioneers in empty container movement across all major ports and ICDs with cost-effective solutions.",
          icon: Container,
          slug: "empty-container-transportation",
          image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
          features: ["Port Logistics", "Empty Depot", "Short/Long Haul"]
        },
        {
          name: "Export & Import Containers",
          description: "Full-service container logistics for 20ft, 40ft, and 45ft units with seamless port-to-door connectivity.",
          icon: Package,
          slug: "export-import-containers",
          image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
          features: ["Customs Support", "Real-time Tracking", "Documentation"]
        },
        {
          name: "Domestic Cargo Solutions",
          description: "Move your domestic cargo in our 20-foot or 40-foot ISO containers with complete security.",
          icon: Truck,
          slug: "domestic-cargo-containers",
          image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
          features: ["Your Own Seals", "GPS Tracking", "Insurance Options"]
        }
      ]
    },
    {
      id: "specialized-cargo",
      number: "02",
      label: "Expertise",
      title: "Specialized Transport",
      subtitle: "Expert handling for ODC and delicate components with cutting-edge tracking and specialized equipment.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
      services: [
        {
          name: "Solar Panel Transportation",
          description: "Precision-engineered solar transportation with trained drivers and specialized equipment.",
          icon: Sun,
          slug: "solar-panel-transportation",
          image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
          features: ["Fragile Handling", "Tarpaulin Coverage", "Site Delivery"]
        },
        {
          name: "Over Dimension Cargo (ODC)",
          description: "Oversized machinery transportation with route surveys, permits, and specialized vehicles.",
          icon: Boxes,
          slug: "over-dimension-cargo",
          image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop",
          features: ["Route Surveys", "Permit Assistance", "Escort Services"]
        },
        {
          name: "Bulk Cargo Solutions",
          description: "Steel coils, grains, construction materials with optimized vehicle configurations.",
          icon: Warehouse,
          slug: "bulk-cargo-solutions",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
          features: ["Load Optimization", "Multi-axle Trailers", "Weight Verification"]
        },
        {
          name: "Chemical Transportation",
          description: "Safe transport for liquids and gases in 20-foot ISO tank containers.",
          icon: FlaskConical,
          slug: "chemical-transportation",
          image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
          features: ["Zero Theft Risk", "MSDS Compliance", "Tank Cleaning"]
        }
      ]
    },
    {
      id: "multimodal-transport",
      number: "03",
      label: "Connectivity",
      title: "Integrated Logistics",
      subtitle: "Seamless multimodal connectivity via rail and coastal routes for cost-effective shipping.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      stats: [
        { value: "99.9%", label: "On-Time Delivery" },
        { value: "24/7", label: "Support Available" }
      ],
      services: [
        {
          name: "Rail Services",
          description: "Cost-effective rail transportation for high-volume products with first-mile and last-mile road transport.",
          icon: Train,
          slug: "rail-services",
          image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2084&auto=format&fit=crop",
          features: ["40% Cost Savings", "100+ Tons", "Rail + Road"]
        },
        {
          name: "Coastal Services",
          description: "Strategic coastal shipping connecting 10 major Indian ports with 30-50% cost savings.",
          icon: Ship,
          slug: "coastal-services",
          image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=2071&auto=format&fit=crop",
          features: ["10 Major Ports", "Bi-directional", "Bulk Commodities"]
        }
      ]
    },
    {
      id: "value-added-services",
      number: "04",
      label: "Care",
      title: "Value-Added Care",
      subtitle: "Beyond transportation – warehousing and high-value cargo protection systems.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072&auto=format&fit=crop",
      services: [
        {
          name: "High Value Goods",
          description: "Specialized security measures for electronics, pharmaceuticals, jewelry, and high-value machinery.",
          icon: Shield,
          slug: "high-value-goods",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2032&auto=format&fit=crop",
          features: ["GPS Tracking", "Armed Escorts", "Special Locks"]
        },
        {
          name: "Storage & Warehousing",
          description: "Complete storage solutions for empty containers, loaded containers, and cargo across India.",
          icon: Warehouse,
          slug: "storage-warehousing",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
          features: ["50+ Locations", "24/7 Security", "Inventory Mgmt"]
        },
        {
          name: "LCL Consolidation",
          description: "Ship small quantities cost-effectively without paying for a full container.",
          icon: Boxes,
          slug: "lcl-consolidation",
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
          features: ["No Minimum", "60% Savings", "Express Options"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500/8 rounded-full blur-[120px]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAgNjAgMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em]">
                The Logistics Journey
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Moving the world,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 italic">
                one solution
              </span>{' '}
              at a time.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mb-8"
            >
              Experience a seamless transition through our core capabilities. From heavy metal to delicate care, our network is designed for your success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Sections - Consistent UI for All Categories */}
      <div className="pb-24">
        {serviceCategories.map((category, catIndex) => (
          <motion.section
            key={category.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            id={category.id}
            className="mb-20 lg:mb-28"
          >
            {/* Category Header with Large Image - FULL WIDTH */}
            <div className="relative overflow-hidden mb-8">
              <div className="relative h-[350px] sm:h-[400px] lg:h-[450px]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c]/80 via-transparent to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-12">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 text-sm font-bold text-blue-400">
                      {category.number}
                    </span>
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      {category.label}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                    {category.title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed max-w-2xl text-sm sm:text-base">
                    {category.subtitle}
                  </p>

                  {/* Stats if available */}
                  {category.stats && (
                    <div className="flex gap-8 mt-6">
                      {category.stats.map((stat, i) => (
                        <div key={i}>
                          <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                          <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Consistent Service Cards Grid - IN CONTAINER */}
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
              <div className={`grid grid-cols-1 md:grid-cols-2 ${category.services.length >= 4 ? 'lg:grid-cols-4' : category.services.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-5`}>
                {category.services.map((service, sIndex) => {
                  const Icon = service.icon;
                  return (
                    <Link key={service.slug} href={`/services/${service.slug}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: sIndex * 0.1 }}
                        className="group relative h-full rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 transition-all duration-500 cursor-pointer"
                      >
                        {/* Service Image */}
                        <div className="relative h-40 sm:h-44 overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>

                          {/* Icon Badge */}
                          <div className="absolute bottom-3 left-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/80 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:bg-blue-600 transition-colors">
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Service Content */}
                        <div className="p-5">
                          <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                            {service.name}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
                            {service.description}
                          </p>

                          {/* Features */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {service.features.map((feature, fi) => (
                              <span key={fi} className="text-[10px] text-blue-400/80 flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-400/20">
                                <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* Learn More */}
                          <div className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-blue-400 transition-colors">
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.section>
        ))}


      </div>

      <Footer />
    </div>
  );
};

export default ServicesPage;