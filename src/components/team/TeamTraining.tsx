"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle, GraduationCap } from "lucide-react";

export default function TeamTraining() {
    const topics = [
        'Managing ODC movements during monsoons',
        'Fast customs clearance techniques',
        'Handling reefer container emergencies',
        'Client relationship management',
        'Advanced GPS tracking optimization',
        'Crisis communication protocols'
    ];

    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                                <GraduationCap className="w-4 h-4 text-blue-400" />
                                <span className="text-xs font-bold text-blue-300 uppercase tracking-widest text-nowrap">
                                    Weekly Training Program
                                </span>
                            </div>

                            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                                Continuous <span className="text-blue-500">Learning Through Aamita</span>
                            </h2>

                            <p className="text-xl text-slate-400 leading-relaxed font-medium">
                                Every week, industry experts share decades of experiences with our team. Better training means better service for you—ensuring we're prepared for any challenge on the road.
                            </p>

                            <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                                <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 animate-pulse">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <p className="text-white font-bold text-lg leading-snug">
                                    "Our team doesn't just watch perfect situations—they figure out difficult ones."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {topics.map((topic, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                    <span className="text-slate-200 font-bold leading-tight">{topic}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
