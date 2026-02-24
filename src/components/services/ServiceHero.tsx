"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    ctaText: string;
    heroImage: string;
}

export default function ServiceHero({ title, subtitle, ctaText, heroImage }: ServiceHeroProps) {
    return (
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content Column */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            {/* Premium Badge - Matches User's Screenshot */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full shadow-sm">
                                <ShieldCheck className="w-4 h-4 text-blue-600" />
                                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                                    Nisha Roadways Certified
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                                {title}
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                                {subtitle}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-5"
                        >
                            <Button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 overflow-hidden h-auto py-4 px-8 border-0">
                                {/* Animated background overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>

                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>

                                <span className="relative flex items-center gap-2 font-bold text-lg">
                                    {ctaText}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform duration-300">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </span>
                            </Button>

                            <Button variant="outline" className="px-10 py-4 border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 hover:border-blue-600 rounded-full font-bold transition-all duration-300 h-auto text-lg flex items-center gap-3 bg-white group/btn">
                                <Phone className="w-5 h-5 text-blue-600 transition-transform group-hover/btn:scale-110" />
                                <span className="relative z-10 transition-colors">Call Expert</span>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Image Column */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Image Border/Frame */}
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                                <Image
                                    src={heroImage}
                                    alt={title}
                                    width={600}
                                    height={500}
                                    className="w-full h-[550px] object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                            </div>

                            {/* Background Glows (Subtle Reverted Version) */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full opacity-30 blur-3xl z-[-1]"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-40 blur-2xl z-[-1]"></div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
