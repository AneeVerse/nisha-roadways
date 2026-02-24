"use client";

import { motion } from "framer-motion";
import { Target, Users, Shield, Zap, Briefcase, FileText } from "lucide-react";

export default function TeamStructure() {
    const departments = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Operations",
            description: "Planning routes, assigning vehicles, tracking shipments, and solving issues in real-time.",
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Customer Success",
            description: "Your dedicated point of contact for quotes, bookings, real-time updates, and rapid problem resolution.",
            gradient: "from-purple-500 to-pink-600"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Safety & Compliance",
            description: "Ensuring all shipments meet regulatory requirements and safety standards with zero compromise.",
            gradient: "from-emerald-500 to-teal-600"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Technology",
            description: "Building the DICE platform, maintaining GPS systems, and managing logistics data intelligence.",
            gradient: "from-orange-500 to-yellow-600"
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Fleet Management",
            description: "Maintaining our premium owned fleet and coordinating with our massive leased vehicle network.",
            gradient: "from-indigo-500 to-blue-600"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Documentation",
            description: "Expertly handling paperwork, customs documents, permits, billing, and legal clearances.",
            gradient: "from-rose-500 to-red-600"
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
                        Our Ecosystem
                    </motion.div>
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                        The Departments That <span className="text-blue-600">Make It Happen</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                        Logistics is a team sport. Our specialized departments work in perfect sync to ensure your cargo never stops moving.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {departments.map((dept, index) => (
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
