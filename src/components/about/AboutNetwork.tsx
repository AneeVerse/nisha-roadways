"use client";

import { motion } from "framer-motion";
import { MapPin, Award, Star, CheckCircle, Ship, Warehouse } from "lucide-react";

export default function AboutNetwork() {
    const awards = [
        {
            title: "EXIM MALA AWARDS",
            category: "Container Transport Operator of the Year (Road)",
            year: "2011",
            icon: <Award className="w-12 h-12" />,
            gradient: "from-yellow-400 via-orange-500 to-yellow-600"
        },
        {
            title: "GUJARAT STAR AWARDS",
            category: "Industry Excellence Recognition",
            year: "Excellence",
            icon: <Star className="w-12 h-12" />,
            gradient: "from-blue-400 via-indigo-600 to-purple-600"
        },
        {
            title: "GUJARAT JUNCTION AWARDS",
            category: "Best Transport Operator of the Year",
            year: "2016",
            icon: <CheckCircle className="w-12 h-12" />,
            gradient: "from-emerald-400 via-teal-600 to-cyan-600"
        }
    ];

    return (
        <section className="py-16 bg-slate-50 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">

                {/* Network Section */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="text-left">
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-sm uppercase tracking-widest">
                                <MapPin className="w-3 h-3 animate-bounce" />
                                Nationwide Presence
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
                                Pan-India <span className="text-blue-600">Network</span>, <br />Localized Expertise
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-lg">
                                With 30+ strategically located branches across India, we deliver unmatched connectivity and localized expertise for seamless logistics solutions at every major port and ICD.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg group hover:border-blue-300 transition-all text-left">
                                <div className="flex items-center justify-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <Ship className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900">Major Ports</h4>
                                </div>
                                <ul className="space-y-2">
                                    {['Mumbai', 'JNPT', 'Chennai', 'Kolkata', 'Kandla'].map((port, i) => (
                                        <li key={i} className="flex items-center justify-start gap-2 text-slate-500 font-bold text-xs">
                                            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                                            {port}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-lg group hover:border-emerald-300 transition-all text-left">
                                <div className="flex items-center justify-start gap-3 mb-4">
                                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                        <Warehouse className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900">Primary ICDs</h4>
                                </div>
                                <ul className="space-y-2">
                                    {['Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad'].map((icd, i) => (
                                        <li key={i} className="flex items-center justify-start gap-2 text-slate-500 font-bold text-xs">
                                            <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
                                            {icd}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Network Visual/Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-6 mb-10">
                                    <div className="w-20 h-20 bg-yellow-400 rounded-[1.5rem] flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform">
                                        <MapPin className="w-10 h-10 text-slate-900" />
                                    </div>
                                    <div>
                                        <h3 className="text-5xl font-black">30+</h3>
                                        <p className="text-blue-200 font-bold uppercase tracking-widest text-sm">Strategic Branches</p>
                                    </div>
                                </div>

                                <p className="text-2xl text-blue-50 font-medium leading-relaxed mb-12">
                                    Our nationwide network ensures that no destination is too remote and no cargo too challenging for our expert logistics solutions.
                                </p>

                                <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/10 text-center">
                                    <div>
                                        <div className="text-3xl font-black text-yellow-400">30+</div>
                                        <div className="text-xs font-bold text-blue-200 uppercase tracking-widest mt-1">Branches</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-white">5</div>
                                        <div className="text-xs font-bold text-blue-200 uppercase tracking-widest mt-1">Major Ports</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-cyan-400">4</div>
                                        <div className="text-xs font-bold text-blue-200 uppercase tracking-widest mt-1">ICDs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Awards Section */}
                <div>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900">Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600">Recognition</span></h2>
                        <div className="w-24 h-2 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ y: -15 }}
                                className="group relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${award.gradient} rounded-[3rem] opacity-90 transition-transform group-hover:scale-105 shadow-2xl`}></div>
                                <div className="relative p-12 h-full flex flex-col items-center text-center text-white overflow-hidden rounded-[3rem]">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>

                                    <div className="bg-white/20 backdrop-blur-md p-6 rounded-3xl mb-8 group-hover:scale-110 transition-transform">
                                        {award.icon}
                                    </div>

                                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-tight">{award.title}</h3>
                                    <p className="text-white/80 font-medium mb-6 flex-grow">{award.category}</p>

                                    <div className="mt-auto pt-8 border-t border-white/20 w-full text-4xl font-black tracking-widest">
                                        {award.year}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
