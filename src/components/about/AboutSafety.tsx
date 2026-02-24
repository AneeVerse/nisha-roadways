"use client";

import { motion } from "framer-motion";
import { Shield, Award, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSafety() {
    const commitments = [
        {
            title: "Zero Tolerance Policy",
            icon: <Shield className="w-10 h-10" />,
            description: "We have zero tolerance for substandard deliveries and strictly adhere to safety measures matching international agency standards.",
            tag: "100% Compliance",
            theme: {
                tagBg: "bg-red-400/20",
                tagText: "text-red-400",
                tagBorder: "border-red-400/30",
                gradient: "from-red-500 to-pink-600"
            }
        },
        {
            title: "Investment in Excellence",
            icon: <Award className="w-10 h-10" />,
            description: "Nisha Roadways invests in best-in-class materials and equipment ensuring your cargo reaches its destination safely and intact.",
            tag: "Premium Assets",
            theme: {
                tagBg: "bg-yellow-400/20",
                tagText: "text-yellow-400",
                tagBorder: "border-yellow-400/30",
                gradient: "from-yellow-400 to-orange-500"
            }
        },
        {
            title: "100% Transparency",
            icon: <Eye className="w-10 h-10" />,
            description: "From pickup to delivery, we track and update every movement. Complete transparency with online tracking empowers our clients.",
            tag: "Real-time Visibility",
            theme: {
                tagBg: "bg-blue-400/20",
                tagText: "text-blue-400",
                tagBorder: "border-blue-400/30",
                gradient: "from-blue-600 to-cyan-600"
            }
        }
    ];

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Particles/Glows */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-sm uppercase tracking-widest"
                    >
                        <Shield className="w-4 h-4 text-yellow-400" />
                        Our Sacred Promise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
                    >
                        Handle With <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Care</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-blue-100 text-2xl max-w-4xl mx-auto font-medium leading-relaxed"
                    >
                        We realize that the shipments we carry are the lifeline of our clients&apos; businesses. That&apos;s why we take &quot;Handle with Care&quot; beyond industry standards.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 mb-20">
                    {commitments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-[3rem] border border-white/10 group-hover:bg-white/10 transition-all duration-500"></div>
                            <div className="relative p-12 flex flex-col items-center text-center h-full">
                                <div className={`w-24 h-24 rounded-[2rem] bg-gradient-to-br ${item.theme.gradient} flex items-center justify-center mb-10 shadow-2xl group-hover:rotate-12 transition-transform duration-500`}>
                                    <div className="text-white">
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.theme.tagBg} ${item.theme.tagText} border ${item.theme.tagBorder}`}>
                                        {item.tag}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-black text-white mb-6 leading-tight">{item.title}</h3>
                                <p className="text-blue-100/70 text-lg leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Final CTA Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 group"
                >
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-14 h-14 rounded-full border-4 border-slate-900 bg-slate-800 overflow-hidden shadow-2xl">
                                    <div className={`w-full h-full bg-gradient-to-br ${i === 1 ? 'from-blue-500 to-blue-700' : i === 2 ? 'from-yellow-400 to-orange-500' : 'from-emerald-500 to-teal-700'}`}></div>
                                </div>
                            ))}
                            <div className="w-14 h-14 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center text-white font-black text-sm z-10 shadow-2xl">
                                500+
                            </div>
                        </div>
                        <div className="text-left">
                            <h4 className="text-2xl font-black text-white">Trust is Our Foundation</h4>
                            <p className="text-blue-200 font-medium">Your Cargo, Our Commitment • Serving 500+ Companies</p>
                        </div>
                    </div>

                    <Button className="bg-white text-slate-900 hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] font-black px-12 py-8 rounded-2xl text-lg transition-all transform hover:scale-105 group/cta h-auto">
                        <span className="flex items-center gap-3">
                            Contact Our Experts
                            <ArrowRight className="w-6 h-6 group-hover/cta:translate-x-2 transition-transform" />
                        </span>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
