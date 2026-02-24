"use client";

import { motion } from "framer-motion";
import { Cpu, GraduationCap, Trophy, ArrowUpRight } from "lucide-react";

export default function AboutExperience() {
    const experiences = [
        {
            title: "Technology Integration",
            icon: <Cpu className="w-10 h-10" />,
            tag: "DICE Platform",
            description: "We're building DICE, our end-to-end logistics platform. It handles orders, tracking, documentation, and billing with minimal human intervention. AI integration improves route planning and reduces delivery times.",
            theme: {
                bg: "bg-blue-50",
                iconBg: "bg-blue-50",
                iconText: "text-blue-600",
                tagBg: "bg-blue-100",
                tagText: "text-blue-700",
                tagBorder: "border-blue-200",
                gradient: "from-blue-600 to-indigo-600"
            }
        },
        {
            title: "Training Matters",
            icon: <GraduationCap className="w-10 h-10" />,
            tag: "Aamita Program",
            description: "Aamita is our weekly training program where industry experts share real experiences. Our team learns from people who've handled ODC movements in monsoons, cleared customs in 2 hours, and managed port congestion.",
            theme: {
                bg: "bg-orange-50",
                iconBg: "bg-orange-50",
                iconText: "text-orange-600",
                tagBg: "bg-orange-100",
                tagText: "text-orange-700",
                tagBorder: "border-orange-200",
                gradient: "from-orange-500 to-red-600"
            }
        },
        {
            title: "Building Relationships",
            icon: <Trophy className="w-10 h-10" />,
            tag: "Nisha IPL",
            description: "We organize the Nisha Cricket Team IPL Championship every year. Clients join us for friendly matches. It's not about winning—it's about knowing the people who move your cargo.",
            theme: {
                bg: "bg-emerald-50",
                iconBg: "bg-emerald-50",
                iconText: "text-emerald-600",
                tagBg: "bg-emerald-100",
                tagText: "text-emerald-700",
                tagBorder: "border-emerald-200",
                gradient: "from-emerald-500 to-teal-600"
            }
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="grid lg:grid-cols-3 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative h-full"
                        >
                            <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-slate-200 group-hover:border-transparent"></div>

                            <div className="relative p-10 flex flex-col h-full">
                                <div className={`w-20 h-20 rounded-2xl ${exp.theme.iconBg} flex items-center justify-center mb-8 border border-transparent transition-colors group-hover:bg-gradient-to-br ${exp.theme.gradient}`}>
                                    <div className={`${exp.theme.iconText} group-hover:text-white transition-colors`}>
                                        {exp.icon}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${exp.theme.tagBg} ${exp.theme.tagText} border ${exp.theme.tagBorder}`}>
                                        {exp.tag}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">{exp.title}</h3>

                                <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10 flex-grow">
                                    {exp.description}
                                </p>

                                <div className="pt-6 border-t border-slate-100 mt-auto flex items-center justify-between group/link cursor-pointer">
                                    <span className="text-slate-900 font-bold group-hover/link:text-blue-600 transition-colors">Learn More</span>
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
