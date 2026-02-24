"use client";

import { motion } from "framer-motion";
import { Ship, Train, Warehouse, ShieldCheck, Zap, Anchor } from "lucide-react";

export default function PartnerNetwork() {
    const categories = [
        {
            icon: <Ship className="w-8 h-8" />,
            title: "Shipping Line Partners",
            description: "Approved transporters for major shipping lines operating in India. Fast container releases and priority support.",
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            icon: <Train className="w-8 h-8" />,
            title: "Rail Partners",
            description: "Partnerships with rail operators across India for flexible, cost-effective multimodal transport solutions.",
            gradient: "from-emerald-500 to-teal-600"
        },
        {
            icon: <Anchor className="w-8 h-8" />,
            title: "Coastal Shipping",
            description: "Connecting 10 major Indian ports through deep partnerships with coastal vessel operators.",
            gradient: "from-cyan-500 to-blue-600"
        },
        {
            icon: <Warehouse className="w-8 h-8" />,
            title: "Storage Partners",
            description: "Pan-India warehousing network through owned and partner facilities in every major city and port.",
            gradient: "from-purple-500 to-pink-600"
        },
        {
            icon: <ShieldCheck className="w-8 h-8" />,
            title: "Insurance Partners",
            description: "Collaborations with major providers to offer tailored insurance options for high-value cargo.",
            gradient: "from-orange-500 to-red-600"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Platform Partners",
            description: "Tech specialized in logistics SaaS, GPS tracking, and AI to power our DICE platform.",
            gradient: "from-indigo-500 to-purple-600"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-500 px-5 py-2.5 rounded-full text-xs font-black mb-6 shadow-sm uppercase tracking-widest"
                    >
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        Collaborative Strength
                    </motion.div>
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Complete Logistics Solutions <br /><span className="text-blue-600">Through Partnership</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                        Our strength lies in our ecosystem. We coordinate with industry leaders to provide you a single-point, seamless logistics experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((dept, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${dept.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Decorative Top Line */}
                            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${dept.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`w-14 h-14 bg-gradient-to-br ${dept.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                        {dept.icon}
                                    </div>
                                    <span className="text-5xl font-black text-slate-100 group-hover:text-slate-100/50 transition-colors select-none font-outline-2">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                    {dept.title}
                                </h3>

                                <p className="text-slate-500 leading-relaxed text-sm font-medium">
                                    {dept.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
