"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, GraduationCap, Play } from 'lucide-react';
import Image from 'next/image';

export default function AcademyHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#0a0a1a]">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -animate-pulse pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/80 via-[#0a0a1a]/95 to-[#0a0a1a]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8 backdrop-blur-md">
                            <GraduationCap className="w-5 h-5 text-blue-400" />
                            <span className="text-sm font-bold text-blue-300 uppercase tracking-widest">Master Your Logistics Career</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                            Nisha <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Academy.</span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                            Where logistics excellence begins. Learn from industry pioneers with 43+ years of real-world expertise and master the skills driving India's $200B logistics future.
                        </p>

                        <div className="flex flex-wrap gap-6 mb-12">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-blue-900/40 transition-all hover:scale-105 active:scale-95 group">
                                Start Your Journey
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold flex items-center gap-3 backdrop-blur-md transition-all">
                                Explore Courses
                                <BookOpen className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                            <div>
                                <div className="text-3xl font-black text-white mb-1">500+</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">Partners</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-white mb-1">16+</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">Sectors</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-white mb-1">43+</div>
                                <div className="text-sm text-slate-400 uppercase tracking-wider font-bold">Years Exp.</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative lg:h-[520px] flex items-center justify-center mt-12 lg:mt-16"
                    >
                        {/* Main Visual Card */}
                        <div className="relative w-full max-w-[480px] aspect-[4/5] bg-gradient-to-br from-white/10 to-transparent p-1 rounded-[40px] shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-500"></div>
                            <Image
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                                alt="Academy Learning"
                                fill
                                className="object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent"></div>

                            <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                        <Play className="w-6 h-6 fill-current" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold">Student Success</div>
                                        <div className="text-slate-300 text-sm">30% Salary Increase Avg.</div>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '85%' }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                        className="h-full bg-gradient-to-r from-blue-400 to-indigo-400"
                                    ></motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Accents */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"
                        ></motion.div>
                        <motion.div
                            animate={{ x: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute bottom-20 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
