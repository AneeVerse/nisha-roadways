"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Users, Zap, CheckCircle2 } from 'lucide-react';

export default function AcademyPhilosophy() {
    const points = [
        {
            icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
            title: "Kaizen-Driven Education",
            desc: "Inspired by our corporate culture of continuous improvement, our learning methodology emphasizes gradual mastery through consistent practice and regular feedback."
        },
        {
            icon: <Target className="w-10 h-10 text-indigo-600" />,
            title: "Industry-First Approach",
            desc: "Every course module directly addresses real challenges faced by logistics professionals, ensuring immediate applicability in workplace scenarios."
        },
        {
            icon: <Users className="w-10 h-10 text-purple-600" />,
            title: "Mentorship Model",
            desc: "Learn directly from Nisha Roadways' leadership team and operations experts who've built India's most trusted logistics network."
        },
        {
            icon: <Zap className="w-10 h-10 text-amber-600" />,
            title: "Practical Learning",
            desc: "Hands-on training at our 30+ branches provides unparalleled exposure to live logistics operations across diverse industry sectors."
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6 font-bold text-xs uppercase tracking-widest">
                            The Nisha methodology
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                            Building India's Next Generation of <span className="text-blue-600">Logistics Leaders.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            At Nisha Academy, we believe that exceptional logistics professionals aren't born—they're developed through the right combination of industry knowledge, practical experience, and mentorship.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Distilled expertise from 43+ years of operations",
                                "Proven across 1,500+ successful projects",
                                "Direct exposure to major port and ICD protocols",
                                "Certifications recognized across 16+ industry sectors"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-slate-700 font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 bg-white rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100"
                            >
                                <div className="mb-6">{point.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{point.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                    {point.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
