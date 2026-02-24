"use client";

import { motion } from "framer-motion";
import { Target, Truck, Warehouse, CheckCircle } from "lucide-react";

export default function AboutStory() {
    const features = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Real tracking, not updates",
            subtitle: "Our GPS system",
            description: "Our GPS system tracks through driver phones and cell towers. You get automated reports every hour—not when someone remembers to call you.",
            gradient: "from-yellow-500 to-orange-500",
            bgGradient: "from-yellow-400/10 to-orange-400/10"
        },
        {
            icon: <Truck className="w-8 h-8" />,
            title: "Owned + Leased fleet",
            subtitle: "Flexibility",
            description: "75 owned vehicles and 650 leased vehicles give us flexibility. Need 50 trucks next week? We can make it happen.",
            gradient: "from-blue-500 to-indigo-500",
            bgGradient: "from-blue-400/10 to-indigo-400/10"
        }
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative">
                {/* Section Header */}
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-600 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-sm uppercase tracking-widest"
                    >
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                        Why We Are Different
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight max-w-3xl"
                    >
                        What Sets Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Apart</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-32 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full origin-left"
                    ></motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Progress Cards */}
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${feature.bgGradient} rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100`}></div>
                                <div className="relative bg-slate-50/50 backdrop-blur-sm p-8 rounded-[1.5rem] border border-slate-200 hover:bg-white hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500">
                                    <div className="flex flex-col sm:flex-row items-start gap-8">
                                        <div className="flex-shrink-0">
                                            <div className={`bg-gradient-to-br ${feature.gradient} text-white rounded-[1.2rem] w-16 h-16 flex items-center justify-center font-bold text-xl shadow-lg transform group-hover:rotate-6 transition-transform duration-500`}>
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{feature.title}</h3>
                                            <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">{feature.subtitle}</p>
                                            <p className="text-slate-600 leading-relaxed text-base font-medium">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Premium Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative lg:sticky lg:top-32"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-700/10 rounded-[3rem] blur-2xl"></div>
                        <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 p-10 rounded-[2.5rem] text-white shadow-2xl overflow-hidden group">
                            {/* Animated decorative shapes */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-20 translate-x-20 transition-transform duration-1000 group-hover:scale-110"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-16 -translate-x-16 transition-transform duration-1000 group-hover:scale-150"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                        <Warehouse className="w-6 h-6 text-blue-900" />
                                    </div>
                                    <h3 className="text-3xl font-black">500+ Containers Ready</h3>
                                </div>

                                <p className="text-blue-100 mb-8 leading-relaxed text-lg font-medium">
                                    We own 500+ containers in different sizes and types. GP, high cube, reefer, tank, flat rack—whatever your cargo needs, we have the specialized equipment for it.
                                </p>

                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/20 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-4 h-4 text-blue-900" />
                                        </div>
                                        <p className="text-yellow-300 font-black text-lg tracking-wide uppercase">Our Precision Approach</p>
                                    </div>
                                    <p className="text-blue-50 leading-relaxed text-base">
                                        We check container conditions before pickup. We provide bottle seals for your cargo. We verify everything at delivery and inform you immediately if there&apos;s an issue. When you need escorts, special locks, or brand-new containers for high-value cargo—you get them. <span className="text-white font-bold border-b-2 border-yellow-400/50">No upcharges, no negotiations.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
