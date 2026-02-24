"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Package, Headset, TrendingUp } from "lucide-react";

export default function PartnerValue() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-500 px-5 py-2.5 rounded-full text-xs font-black shadow-sm uppercase tracking-widest">
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                            The Partner Advantage
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
                            One Point of Contact, <br />
                            <span className="text-blue-600">Complete Integration</span>
                        </h2>

                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            You don't need to juggle separate vendors for rail, coastal, warehousing, and insurance.
                            We coordinate our entire elite partner network on your behalf.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-6">
                            {[
                                { title: "Seamless Coordination", desc: "We handle the complex scheduling between all operators." },
                                { title: "Priority Access", desc: "Our approved status grants your cargo priority releases." },
                                { title: "Simplified Billing", desc: "Uniform documentation and billing for all services." },
                                { title: "Global Standards", desc: "Every partner is vetted for peak safety and compliance." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 leading-tight mb-1">{item.title}</h4>
                                        <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10 space-y-8">
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Package className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-3xl font-black leading-tight">
                                    Integrated Partnership <br />Approach
                                </h3>

                                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                    When you work with Nisha Roadways, you gain an entire network.
                                    We handle the coordination, so you can focus on your business growth.
                                </p>

                                <div className="pt-8 border-t border-white/10 flex items-center gap-6">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-black">
                                                P{i}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-blue-400 font-bold text-sm">
                                        Joined by 50+ Trusted Providers
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden xl:block"
                        >
                            <Headset className="w-10 h-10 text-blue-600 mb-4" />
                            <div className="text-3xl font-black text-slate-900 leading-none">24/7</div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Single Point Support</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
