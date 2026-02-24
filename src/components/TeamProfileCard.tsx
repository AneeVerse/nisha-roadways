"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

type TeamProfileCardProps = {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
  accentGradient?: string;
};

export default function TeamProfileCard({
  name,
  role,
  imageSrc,
  description,
  accentGradient = 'from-blue-600 to-indigo-700',
}: TeamProfileCardProps) {
  return (
    <div className="group relative pt-20 pb-4 flex flex-col max-w-[420px] mx-auto">
      {/* 3D Pop-out Portrait Container */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 sm:w-44 sm:h-44 z-20">
        <motion.div
          whileHover={{ y: -8, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-full h-full"
        >
          {/* Decorative Glow & Stage */}
          <div className={`absolute inset-2 bg-gradient-to-br ${accentGradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-all duration-700`} />
          <div className="absolute inset-2 rounded-full bg-white shadow-xl overflow-hidden border-4 border-white">
            {/* Inner background for the portrait */}
            <div className={`absolute inset-0 bg-gradient-to-b ${accentGradient} opacity-[0.08]`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.8),transparent)]" />
          </div>

          {/* Person Image (Transparent PNG) */}
          <div className="absolute inset-x-0 -top-6 bottom-0 flex items-end justify-center">
            <div className="relative w-full h-[115%]">
              <Image
                src={imageSrc}
                alt={name}
                fill
                sizes="300px"
                className="object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] group-hover:drop-shadow-[0_25px_20px_rgba(0,0,0,0.35)] transition-all duration-700"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Card Content */}
      <div className="bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-6 pt-28 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] group-hover:bg-slate-50/50 flex flex-col relative overflow-hidden text-center">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.01] pointer-events-none"></div>

        <div className="relative z-10 mb-4">
          <div className={`inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r ${accentGradient} text-white text-[10px] font-black uppercase tracking-widest mb-3 shadow-md`}>
            {role}
          </div>
          <h3 className="text-xl font-black text-slate-900 leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-500">
            {name}
          </h3>
        </div>

        <p className="text-slate-500 leading-relaxed text-sm font-medium italic line-clamp-4">
          "{description}"
        </p>

        {/* Dynamic accent line */}
        <div className="mt-6 flex justify-center relative z-10">
          <div className={`h-1 w-12 bg-gradient-to-r ${accentGradient} rounded-full opacity-10 group-hover:opacity-100 transition-all duration-700 shadow-sm`} />
        </div>
      </div>
    </div>
  );
}