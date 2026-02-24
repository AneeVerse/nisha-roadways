"use client";

import { motion } from "framer-motion";
import { Eye, Target, Star, Shield, Award, Cpu, Heart } from "lucide-react";

export default function AboutPillars() {
    const values = [
        {
            icon: <Star className="w-8 h-8" />,
            title: "Excellence",
            description: "In everything that we do. Every shipment, every route, every client interaction reflects our commitment to setting industry benchmarks.",
            theme: {
                iconContainer: "bg-amber-500/20 text-amber-400"
            }
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Reliability",
            description: "Giving our 100%, every time, in every shipment. When you trust us with your cargo, you trust us with your business success.",
            theme: {
                iconContainer: "bg-blue-500/20 text-blue-400"
            }
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "History",
            description: "Continuing our legacy of continuous development with pride. Four decades of learning, growing, and leading the industry forward.",
            theme: {
                iconContainer: "bg-emerald-500/20 text-emerald-400"
            }
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "Innovation",
            description: "Empowered with inventions, we arrive at newer technological solutions and scalable ideas in logistics and transportation.",
            theme: {
                iconContainer: "bg-purple-500/20 text-purple-400"
            }
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Customer First",
            description: "Aligning ourselves to our customers' goals helps us create suitable solutions that directly address their needs.",
            theme: {
                iconContainer: "bg-red-500/20 text-red-400"
            }
        }
    ];

    return (
        <section className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
                {/* Vision & Mission Row */}
                <div className="grid lg:grid-cols-2 gap-12 mb-32">
                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] opacity-90 group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl"></div>
                        <div className="relative p-12 overflow-hidden rounded-[3rem]">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-24 translate-x-24"></div>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform">
                                    <Eye className="w-10 h-10 text-indigo-900" />
                                </div>
                                <h3 className="text-4xl font-black text-white">Our Vision</h3>
                            </div>
                            <p className="text-blue-100 text-2xl leading-relaxed font-medium">
                                To use our values as the major driving force so that we can align our company with customer sensitivity by creating a niche in the transport and logistics sector.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[3rem] opacity-90 group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl"></div>
                        <div className="relative p-12 overflow-hidden rounded-[3rem]">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-24 translate-x-24"></div>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-xl group-hover:-rotate-12 transition-transform">
                                    <Target className="w-10 h-10 text-emerald-900" />
                                </div>
                                <h3 className="text-4xl font-black text-white">Our Mission</h3>
                            </div>
                            <p className="text-green-100 text-2xl leading-relaxed font-medium">
                                To be fully committed towards understanding and meeting the quality standards and expectations of clients with implementation of latest technology and superior services.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-sm uppercase tracking-widest"
                    >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        Our Core Values
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        The Pillars That <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Define Us</span>
                    </motion.h2>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {values.map((v, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-[2rem] border border-white/10 group-hover:bg-white/10 transition-colors"></div>
                            <div className="relative p-8 h-full flex flex-col items-center text-center">
                                <div className={`w-16 h-16 rounded-2xl ${v.theme.iconContainer} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    {v.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{v.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {v.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
