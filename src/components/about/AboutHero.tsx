"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutHero() {
  return (
    <section className="relative pt-28 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full shadow-sm">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest text-nowrap">
                  Since 1982 • 43 Years of Excellence
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Story</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
                We started in 1982 with a simple idea: move cargo reliably, track it completely, and keep clients informed.
              </p>

              <p className="text-base text-slate-500 leading-relaxed max-w-xl">
                43 years later, we&apos;re moving 96,000 shipments annually across India. We&apos;ve grown from local transport to pan-India operations with plans for Dubai and Africa.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 items-center pt-2">
              <div className="space-y-1">
                <div className="text-4xl font-black text-slate-900">2.3M+</div>
                <div className="text-sm font-bold text-blue-600 uppercase tracking-widest">Shipments Moved</div>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden sm:block"></div>
              <div className="space-y-1">
                <div className="text-4xl font-black text-slate-900">300+</div>
                <div className="text-sm font-bold text-indigo-600 uppercase tracking-widest">Active Clients</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <Button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 overflow-hidden h-auto border-0">
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                <span className="relative z-10 flex items-center gap-2">
                  Discover Our Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <button className="group px-8 py-4 border-2 border-slate-200 text-slate-700 hover:bg-white hover:border-blue-600 hover:text-blue-600 rounded-full font-bold transition-all duration-300 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <div className="w-0 h-0 border-l-[6px] border-l-blue-600 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1 group-hover:border-l-white"></div>
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white group">
              <Image
                src="/images/use-everywhere/images1.png"
                alt="Nisha Roadways Journey"
                width={800}
                height={600}
                className="w-full h-[480px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

              {/* Image Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-3 border border-white/30 tracking-widest uppercase">
                  Founding Year
                </div>
                <h3 className="text-3xl font-bold mb-2">The Beginning - 1982</h3>
                <p className="text-white/80 font-medium">From a modest 80 sq ft office in Masjid Bunder, Mumbai</p>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-yellow-400 text-slate-900 px-6 py-4 rounded-2xl font-black shadow-xl border-4 border-white rotate-12"
            >
              Est. 1982
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 z-20 bg-blue-600 text-white px-6 py-4 rounded-2xl font-black shadow-xl border-4 border-white -rotate-6"
            >
              40+ Years Strong
            </motion.div>

            {/* Background Glows */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-3xl z-[-1]"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-200 rounded-full opacity-30 blur-3xl z-[-1]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
