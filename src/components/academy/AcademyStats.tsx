"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, ShieldCheck, Sparkles } from 'lucide-react';

export default function AcademyStats() {
    const stats = [
        {
            icon: <Target className="w-8 h-8 text-blue-500" />,
            value: "1,500+",
            label: "Success Projects",
            desc: "Real-world cases analyzed directly from Nisha ROADWAYS operations.",
            theme: "blue"
        },
        {
            icon: <Users className="w-8 h-8 text-indigo-500" />,
            value: "95%",
            label: "Graduate Hired",
            desc: "Placed in India's top 16+ industry sectors within 6 months.",
            theme: "indigo"
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
            value: "30%",
            label: "Salary Growth",
            desc: "Average career uplift reported by our certified alumni network.",
            theme: "purple"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
            value: "100%",
            label: "Zero Accident",
            desc: "Committed to safety-first logistics education and best practices.",
            theme: "emerald"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-slate-50 select-none -z-10 opacity-40">
                NUMBERS
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative p-10 rounded-[40px] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all group overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-white via-white to-${stat.theme}-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className={`w-20 h-20 rounded-3xl bg-${stat.theme}-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6`}>
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-black text-slate-900 mb-2 tracking-tight">{stat.value}</div>
                                <div className={`text-xs font-black text-${stat.theme}-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-2`}>
                                    <Sparkles className="w-3 h-3" />
                                    {stat.label}
                                </div>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    {stat.desc}
                                </p>
                            </div>

                            {/* Decorative corner accent */}
                            <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-${stat.theme}-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
