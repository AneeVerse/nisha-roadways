"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

interface Step {
    title: string;
    description: string;
}

interface ServiceProcessProps {
    steps: Step[];
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

            {/* Decorative Glows */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[200px] pointer-events-none -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[180px] pointer-events-none -translate-y-1/2"></div>

            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
                        <Zap className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">
                            Simple Process
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        A streamlined process designed for your convenience.
                    </p>
                </motion.div>

                {/* Process Steps - Timeline Style */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/50 via-indigo-600/50 to-blue-600/50 lg:-translate-x-1/2"></div>

                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className={`relative flex items-center gap-8 mb-12 last:mb-0 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    {/* Step Number Circle */}
                                    <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 z-20">
                                        <div className="relative">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center font-bold text-2xl text-white shadow-xl shadow-blue-600/30 hover:scale-110 transition-transform duration-300">
                                                {index + 1}
                                            </div>
                                            <div className="absolute inset-0 bg-blue-500/30 rounded-2xl blur-xl -z-10"></div>
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`ml-28 lg:ml-0 lg:w-[calc(50%-4rem)] ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                                        <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                                            {/* Glow on Hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

                                            <div className="relative z-10">
                                                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                                    {step.description}
                                                </p>

                                                {/* Arrow Indicator */}
                                                <div className="mt-4 flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                                                    <span className="text-sm font-semibold">Learn more</span>
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Empty Space for Alternating Layout */}
                                    <div className="hidden lg:block lg:w-[calc(50%-4rem)]"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
