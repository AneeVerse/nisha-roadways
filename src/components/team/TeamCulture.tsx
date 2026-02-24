"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Shield, Target } from "lucide-react";
import Image from "next/image";

export default function TeamCulture() {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden group">
                    {/* Decorative Background Patterns */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-600/20 transition-all duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-600/20 transition-all duration-700"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                                    <Heart className="w-3 h-3 text-rose-500" />
                                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                                        Our Culture
                                    </span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                                    Problem Solvers, <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Not Problem Watchers</span>
                                </h2>

                                <p className="text-lg text-slate-400 leading-relaxed font-medium lg:max-w-xl">
                                    We're not just moving cargo—we're solving problems. Sometimes that means finding a vehicle at 11 PM for an urgent shipment. Sometimes it means getting 19 overweight vehicles through border checkpoints. Our team doesn't wait for perfect situations. They figure it out.
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                                <div className="space-y-1">
                                    <Zap className="w-6 h-6 text-yellow-400" />
                                    <h4 className="text-white font-black text-base">Instant Action</h4>
                                    <p className="text-slate-500 text-xs">Rapid response to any breakdown or delay.</p>
                                </div>
                                <div className="space-y-1">
                                    <Shield className="w-6 h-6 text-emerald-400" />
                                    <h4 className="text-white font-black text-base">Solid Logistics</h4>
                                    <p className="text-slate-500 text-xs">Secure handling of high-value cargo.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative z-10 aspect-square lg:aspect-auto lg:h-[450px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
                            >
                                <Image
                                    src="/images/use-everywhere/images2.png"
                                    alt="Nisha Roadways Team Spirit"
                                    fill
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                                    <p className="text-xl font-black text-white leading-tight">
                                        "When the road gets tough, our team gets smart."
                                    </p>
                                </div>
                            </motion.div>

                            {/* Floating decorative card */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -left-6 z-20 bg-blue-600 text-white p-6 rounded-2xl font-black shadow-2xl hidden xl:block"
                            >
                                <Target className="w-8 h-8 mb-3" />
                                <div className="text-2xl">43+ Years</div>
                                <div className="text-[10px] uppercase tracking-widest opacity-80">Of Figuring It Out</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
