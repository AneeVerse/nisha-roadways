"use client";

import { motion } from "framer-motion";
import {
    FlaskConical,
    Ship,
    Pill,
    Scissors,
    ShoppingCart,
    Smartphone,
    Settings,
    Film,
    Zap,
    Store,
    HardHat,
    Droplets,
    BoxSelect,
    Factory,
    TowerControl,
    Plane
} from "lucide-react";

export default function AboutIndustries() {
    const industries = [
        { name: 'Chemicals', icon: <FlaskConical className="w-8 h-8" /> },
        { name: 'Shipping', icon: <Ship className="w-8 h-8" /> },
        { name: 'Pharmaceuticals', icon: <Pill className="w-8 h-8" /> },
        { name: 'Textiles', icon: <Scissors className="w-8 h-8" /> },
        { name: 'FMCG', icon: <ShoppingCart className="w-8 h-8" /> },
        { name: 'Electronics', icon: <Smartphone className="w-8 h-8" /> },
        { name: 'Engineering', icon: <Settings className="w-8 h-8" /> },
        { name: 'Entertainment', icon: <Film className="w-8 h-8" /> },
        { name: 'Energy & Power', icon: <Zap className="w-8 h-8" /> },
        { name: 'Retail', icon: <Store className="w-8 h-8" /> },
        { name: 'Construction', icon: <HardHat className="w-8 h-8" /> },
        { name: 'Oil & Gas', icon: <Droplets className="w-8 h-8" /> },
        { name: 'Steel', icon: <BoxSelect className="w-8 h-8" /> },
        { name: 'Cement', icon: <Factory className="w-8 h-8" /> },
        { name: 'Infrastructure', icon: <TowerControl className="w-8 h-8" /> },
        { name: 'Aviation & Defense', icon: <Plane className="w-8 h-8" /> }
    ];

    return (
        <section className="py-16 bg-slate-50 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-500 px-5 py-2.5 rounded-full text-xs font-black mb-6 shadow-sm uppercase tracking-widest"
                    >
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        Market Presence
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight"
                    >
                        Trusted Across <span className="text-blue-600">16+ Industry Sectors</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg max-w-2xl mx-auto font-medium"
                    >
                        Specialized logistics solutions tailored for every major business sector.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {industries.map((ind, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                            className="group bg-white border border-slate-200 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:border-blue-500/30"
                        >
                            <div className="text-slate-400 mb-3 flex justify-center group-hover:text-blue-600 transition-colors duration-300">
                                {ind.icon}
                            </div>
                            <h3 className="font-bold text-slate-700 text-[10px] tracking-widest uppercase group-hover:text-slate-900 transition-colors">
                                {ind.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
