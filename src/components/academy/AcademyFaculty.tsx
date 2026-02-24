"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Linkedin, CheckCircle2 } from 'lucide-react';

export default function AcademyFaculty() {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Industry Practitioners</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Logistics Legends.</span></h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-medium">
                        Our faculty isn't just academic—they're the leaders who built India's most trusted logistics infrastructure.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Main Faculty Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[48px] overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="flex flex-wrap items-center gap-8 mb-10">
                                <div className="relative w-28 h-28 rounded-3xl overflow-hidden border-2 border-blue-500/30">
                                    <div className="absolute inset-0 bg-blue-600 flex items-center justify-center text-3xl font-black">NA</div>
                                    {/* Image would go here */}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black mb-2">Navin Agarwal</h3>
                                    <p className="text-blue-400 font-bold tracking-wide uppercase text-sm mb-4">CEO & Strategic Advisor</p>
                                    <div className="flex gap-4">
                                        <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
                                    </div>
                                </div>
                            </div>

                            <div className="relative mb-10">
                                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-blue-500/20" />
                                <p className="text-xl text-slate-300 italic font-light leading-relaxed">
                                    "Logistics isn't just about moving cargo—it's about moving India forward. At the Academy, we pass on the hard-won secrets of 43 years of success to the next generation."
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {["Strategic Planning", "Technology Integration", "Partnership Development", "Team Leadership"].map((skill, i) => (
                                    <div key={i} className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-2xl border border-white/5">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                        <span className="text-sm font-bold text-slate-300">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Teams List */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-black mb-8 border-l-4 border-blue-500 pl-6">Operations Leadership Team</h3>
                        <p className="text-slate-400 text-lg mb-10 font-medium">
                            A collective 100+ years of operational experience across diverse logistics domains:
                        </p>

                        <div className="grid gap-6">
                            {[
                                { title: "Container Operations", desc: "Port logistics and ICD protocol masters." },
                                { title: "Project Cargo Management", desc: "Specialists in 120-ton+ heavy lift logistics." },
                                { title: "Chemical Transport Safety", desc: "Experts in ADR-certified hazardous logistics." },
                                { title: "Warehouse Optimization", desc: "Modern WMS and inventory algorithm specialists." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-3xl transition-all cursor-default group"
                                >
                                    <h4 className="text-lg font-black text-white group-hover:text-blue-400 transition-colors mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
