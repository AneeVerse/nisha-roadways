"use client";

import { motion } from "framer-motion";
import { Award, Zap, Target, Globe, Sparkles, CheckCircle } from "lucide-react";

interface Benefit {
    title: string;
    description: string;
}

interface ServiceBenefitsProps {
    benefits: Benefit[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
    const benefitIcons = [Award, Zap, Target, Globe];
    const gradients = [
        "from-blue-500 to-indigo-600",
        "from-emerald-500 to-teal-600",
        "from-orange-500 to-red-500",
        "from-purple-500 to-pink-600",
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

            {/* Decorative Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest">
                            Key Benefits
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
                        Why Choose Our Service
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Discover the advantages that set us apart from the competition.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefitIcons[index % benefitIcons.length];
                        const gradient = gradients[index % gradients.length];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                                    {/* Hover Gradient Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                    {/* Number Badge */}
                                    <div className="absolute top-6 right-6 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    <div className="relative z-10 flex items-start gap-5">
                                        {/* Icon */}
                                        <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                                                {benefit.description}
                                            </p>

                                            {/* Checkmark List Effect */}
                                            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 group-hover:text-blue-400 transition-colors duration-300">
                                                <CheckCircle className="w-4 h-4" />
                                                <span className="font-medium">Guaranteed quality</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Accent Line */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
