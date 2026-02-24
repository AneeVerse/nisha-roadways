"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Stat {
    value: string;
    label: string;
}

interface ServiceAboutProps {
    title: string;
    description: string;
    stats?: Stat[];
}

export default function ServiceAbout({ title, description, stats }: ServiceAboutProps) {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-indigo-100/30 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">


                        {/* Left Column - Premium Dark Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full"
                        >
                            <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-10 overflow-hidden flex flex-col">
                                {/* Decorative Background Elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Section Label */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                        <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                                            About This Service
                                        </span>
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white leading-tight tracking-tight mb-10">
                                        {title}
                                    </h2>

                                    {/* Stats Row */}
                                    {stats && stats.length > 0 && (
                                        <div className="flex flex-wrap gap-6">
                                            {stats.map((stat, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                                    className="flex-1 min-w-[120px]"
                                                >
                                                    <div className="relative">
                                                        {/* Stat Value */}
                                                        <div className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-1">
                                                            {stat.value}
                                                        </div>
                                                        {/* Stat Label */}
                                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                                                            {stat.label}
                                                        </div>
                                                        {/* Underline Accent */}
                                                        <div className="mt-4 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Corner Decoration */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-blue-500/20 rounded-2xl rotate-12"></div>
                            </div>
                        </motion.div>

                        {/* Right Column - Description Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="h-full"
                        >
                            <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/50 flex flex-col">
                                {/* Quote Icon */}
                                <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-medium flex-1">
                                    {description}
                                </p>

                                {/* Bottom Decoration */}
                                <div className="mt-10 pt-8 border-t border-slate-100 flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-white flex items-center justify-center">
                                                <CheckCircle2 className="w-5 h-5 text-white" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">Trusted by 500+ businesses</p>
                                        <p className="text-xs text-slate-500">Across India</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
