"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { History, Globe, Sparkles, Headset } from 'lucide-react';

const FeaturesSection = () => {

  const features = [
    {
      title: "43 Years of Expertise",
      description: "Founded in 1982, we've moved over 2.3 million shipments with unmatched precision and care.",
      icon: History,
      color: "blue"
    },
    {
      title: "Pan-India Network",
      description: "20+ strategic offices connecting ports, ICDs, and factories across the entire subcontinent.",
      icon: Globe,
      color: "indigo"
    }
  ];

  return (
    <section className="relative py-14 sm:py-24 bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-50 rounded-full blur-[80px] -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-24 items-center">

          {/* Header & Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 lg:space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/10 border border-blue-600/20 rounded-full mb-4 sm:mb-8">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                <span className="text-[10px] sm:text-xs font-bold text-blue-700 uppercase tracking-widest">
                  Our Legacy & Reach
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-2 sm:mb-8 leading-tight tracking-tight">
                Decades of Excellence <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Built on Foundation of Trust.
                </span>
              </h2>

              <p className="text-xs sm:text-sm lg:text-lg text-slate-600 leading-relaxed font-medium max-w-xl">
                Since 1982, Nisha Roadways has moved over 2.3 million shipments across India. We're not just moving cargo—we're orchestrating supply chains that empower businesses and drive national growth.
              </p>
            </div>

            {/* Feature Cards - Desktop Only (hidden on mobile here) */}
            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 bg-slate-50 hover:bg-white rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                  <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <feature.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Premium Logistics Visual - (Shows after text on mobile) */}
          <div className="lg:col-span-6 relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden group shadow-2xl aspect-[4/3] lg:aspect-square"
            >
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
                alt="Integrated Logistics Partnership"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 sm:right-10 z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-6 rounded-xl sm:rounded-2xl">
                  <h3 className="text-sm sm:text-xl font-bold text-white mb-1 sm:mb-2 italic">Partnership Approach</h3>
                  <p className="text-slate-200 text-[10px] sm:text-sm font-medium">Powering global supply chains with strategic coordination.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-1 sm:-bottom-12 sm:right-0 lg:-right-6 xl:-right-10 bg-white p-3 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 z-20"
            >
              <Headset className="w-5 h-5 sm:w-10 sm:h-10 text-blue-600 mb-1 sm:mb-4" />
              <div className="text-lg sm:text-3xl font-black text-slate-900 leading-none">24/7</div>
              <div className="text-[7px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Support</div>
            </motion.div>
          </div>

          {/* Feature Cards - Mobile Only (shows after image) */}
          <div className="lg:hidden grid grid-cols-2 gap-3 mt-2">
            {features.map((feature, index) => (
              <div key={index} className="group p-4 bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 shadow-sm transition-all duration-300">
                <div className={`w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-md`}>
                  <feature.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 mb-1 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-[10px] leading-snug">
                  {feature.description.split(',')[0]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
