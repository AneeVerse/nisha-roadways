"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react';

export default function AcademyCorporate() {
    const corporateBenefits = [
        {
            title: "Team Skill Enhancement",
            desc: "Comprehensive upgrade of your logistics workforce capabilities."
        },
        {
            title: "Reduced Operational Costs",
            desc: "Optimize handling and route planning through expert training."
        },
        {
            title: "Enhanced Safety Compliance",
            desc: "Adopt industry-standard ADR and chemical safety protocols."
        },
        {
            title: "Strategic Advantage",
            desc: "Build a lean, agile logistics team that powers your growth."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-md">
                            <Building2 className="w-5 h-5 text-blue-400" />
                            <span className="text-sm font-bold text-blue-300 uppercase tracking-widest">For Organizations</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
                            Elevate Your Team's <br />
                            <span className="text-blue-400">Logistics IQ.</span>
                        </h2>

                        <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">
                            Tailored training solutions for organizations looking to enhance their logistics capabilities, streamline operations, and build a high-performance supply chain team.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 mb-12">
                            {corporateBenefits.map((benefit, i) => (
                                <div key={i} className="group">
                                    <h4 className="flex items-center gap-2 text-white font-black mb-2 group-hover:text-blue-400 transition-colors">
                                        <ShieldCheck className="w-5 h-5 text-blue-500" />
                                        {benefit.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed">
                                        {benefit.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <button className="px-10 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:shadow-2xl hover:shadow-white/20 transition-all flex items-center gap-3 active:scale-95">
                            Request Corporate Proposal
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="relative">
                        {/* Stats Dashboard Effect */}
                        <div className="grid grid-cols-2 gap-8 relative z-10">
                            {[
                                { label: "Efficiency Boost", val: "25%", color: "blue" },
                                { label: "Error Reduction", val: "40%", color: "indigo" },
                                { label: "CSAT Increase", val: "30%", color: "purple" },
                                { label: "Cost Savings", val: "20%", color: "emerald" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] text-center"
                                >
                                    <div className={`text-4xl font-black text-${stat.color}-400 mb-2`}>{stat.val}</div>
                                    <div className="text-[10px] font-black text-white/60 uppercase tracking-widest">{stat.label}</div>
                                    <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '70%' }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className={`h-full bg-${stat.color}-400`}
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Background Decorative */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
                    </div>
                </div>
            </div>

            {/* Alumni Banner Sub-section */}
            <div className="container mx-auto px-4 mt-32 border-t border-white/10 pt-20">
                <div className="bg-white/5 backdrop-blur-sm rounded-[48px] p-10 border border-white/10 flex flex-wrap items-center justify-between gap-12">
                    <div className="flex-1 min-w-[300px]">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                                        {/* Avatar placeholders */}
                                        USER
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-[10px] font-black">+1k</div>
                            </div>
                            <div className="text-sm font-bold text-white tracking-wide">Join 1,000+ Alumni in Logistics</div>
                        </div>
                        <h3 className="text-2xl font-black mb-2">Build Your Professional Network.</h3>
                        <p className="text-slate-400 font-medium">Lifetime access to monthly meetups, trade conferences, and mentorship opportunities.</p>
                    </div>
                    <button className="px-8 py-4 border border-white/20 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-3">
                        Join Community
                        <Zap className="w-5 h-5 text-blue-400" />
                    </button>
                </div>
            </div>
        </section>
    );
}
