"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardCheck, Rocket, ChevronRight } from 'lucide-react';

export default function AcademyEnrollment() {
    const steps = [
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Application",
            desc: "Submit your online application with educational details, work history, and a statement of purpose.",
            color: "blue"
        },
        {
            icon: <ClipboardCheck className="w-8 h-8" />,
            title: "Assessment",
            desc: "Attend a personal interview and counseling session to align your career goals with the right program.",
            color: "indigo"
        },
        {
            icon: <Rocket className="w-8 h-8" />,
            title: "Commencement",
            desc: "Gain access to learning materials, meet your peer group, and begin your logistics transformation.",
            color: "purple"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Simple <span className="text-blue-600">3-Step</span> Enrollment.</h2>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed">
                        Begin your journey towards logistics excellence through our streamlined and professional admissions process.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

                    <div className="grid lg:grid-cols-3 gap-10 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group p-10 bg-white border border-slate-100 rounded-[48px] shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all text-center"
                            >
                                <div className={`w-20 h-20 mx-auto rounded-3xl bg-${step.color}-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-${step.color}-200 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    {step.icon}
                                </div>

                                <div className="inline-flex items-center justify-center px-4 py-1.5 bg-slate-100 rounded-full mb-6 font-black text-[10px] text-slate-500 uppercase tracking-[0.2em]">
                                    Step 0{index + 1}
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-4">{step.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                                    {step.desc}
                                </p>

                                {index < steps.length - 1 && (
                                    <div className="hidden lg:flex absolute top-1/2 -right-5 w-10 h-10 bg-white border border-slate-200 rounded-full items-center justify-center -translate-y-1/2 z-20 shadow-sm transition-transform group-hover:translate-x-2">
                                        <ChevronRight className="w-5 h-5 text-slate-400" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-20 text-center">
                    <button className="px-12 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-200 transition-all active:scale-95 group">
                        Check Eligibility & Apply
                        <ChevronRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
