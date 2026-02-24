"use client";

import { motion } from "framer-motion";
import { Settings, Layers, Truck, Package } from "lucide-react";

interface Spec {
    title: string;
    description: string;
}

interface ServiceSpecsProps {
    specs: Spec[];
}

export default function ServiceSpecs({ specs }: ServiceSpecsProps) {
    const specIcons = [Settings, Layers, Truck, Package];
    const colors = [
        { bg: "from-blue-600 to-indigo-600" },
        { bg: "from-emerald-500 to-teal-600" },
        { bg: "from-orange-500 to-red-500" },
        { bg: "from-purple-600 to-pink-600" },
    ];

    return (
        <section className="relative py-20 bg-slate-50 overflow-hidden">
            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-3">
                        Specifications & Details
                    </h2>
                    <p className="text-base text-slate-600 leading-relaxed">
                        Everything you need to know about our service capabilities.
                    </p>
                </motion.div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {specs.map((spec, index) => {
                        const IconComponent = specIcons[index % specIcons.length];
                        const color = colors[index % colors.length];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="group"
                            >
                                <div className="relative h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300">
                                    {/* Icon */}
                                    <div className={`w-12 h-12 bg-gradient-to-br ${color.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                                        {spec.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        {spec.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
