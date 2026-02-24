"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, Tag, Star } from 'lucide-react';
import Image from 'next/image';

const CATEGORIES = ["Foundation", "Specialized", "Advanced"];

const COURSES = [
    {
        category: "Foundation",
        title: "Logistics Fundamentals",
        duration: "3 Mo",
        mode: "Hybrid",
        price: "₹25k",
        rating: "4.8",
        students: "1.2k",
        desc: "Essential building blocks for your logistics career mastery.",
        outcomes: ["Terminology", "Econ Fundamentals", "Ops Basics"],
        badge: "Bestseller",
        color: "blue",
        image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "Foundation",
        title: "Supply Chain Essentials",
        duration: "4 Mo",
        mode: "Online",
        price: "₹35k",
        rating: "4.9",
        students: "850+",
        desc: "End-to-end understanding of global supply chain networks.",
        outcomes: ["Global Strategy", "Vendor Mgmt", "Risk Analysis"],
        color: "emerald",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "Foundation",
        title: "Warehousing Systems",
        duration: "2 Mo",
        mode: "Field",
        price: "₹30k",
        rating: "4.7",
        students: "600+",
        desc: "Modern techniques in warehouse management and inventory.",
        outcomes: ["Inventory Mgmt", "WMS Basics", "Safety"],
        color: "purple",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "Specialized",
        title: "Container Ops Mastery",
        duration: "2 Mo",
        mode: "Workshop",
        price: "₹35k",
        rating: "4.7",
        students: "500+",
        desc: "Deep-dive into container logistics and port protocols.",
        outcomes: ["Port Protocols", "ICD Mastery", "ROI Ops"],
        color: "purple",
        image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "Specialized",
        title: "Project Cargo & ODC",
        duration: "6 Wk",
        mode: "On-Site",
        price: "₹45k",
        rating: "5.0",
        students: "300+",
        desc: "Specialized training in ODC and heavy lift logistics.",
        outcomes: ["Heavy Lift", "Route Surveys", "Permits"],
        color: "orange",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
    },
    {
        category: "Specialized",
        title: "Chemical Logistics",
        duration: "8 Wk",
        mode: "Hybrid",
        price: "₹40k",
        rating: "4.8",
        students: "420+",
        desc: "Certified training for hazardous and specialized cargo.",
        outcomes: ["ADR safety", "Compliance", "Handling"],
        color: "rose",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "Advanced",
        title: "Logistics Leadership",
        duration: "6 Mo",
        mode: "Executive",
        price: "₹75k",
        rating: "4.9",
        students: "200+",
        desc: "Strategic management for future industry executives.",
        outcomes: ["Strategic Plan", "Finance", "Leadership"],
        color: "indigo",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "Advanced",
        title: "Tech Integration Expert",
        duration: "8 Wk",
        mode: "Online",
        price: "₹60k",
        rating: "4.8",
        students: "400+",
        desc: "Master WMS automation and logistics data analytics.",
        outcomes: ["Automation", "Data Analytics", "IT Sync"],
        color: "cyan",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
    },
    {
        category: "Advanced",
        title: "Global Export-Import",
        duration: "3 Mo",
        mode: "Elite",
        price: "₹55k",
        rating: "4.9",
        students: "350+",
        desc: "Master complex international trade and port logistics.",
        outcomes: ["Customs", "FMC Rules", "Cross-Border"],
        color: "emerald",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop"
    }
];

const COLOR_MAP: Record<string, { bg: string, text: string, shadow: string, border: string, btn: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", shadow: "shadow-blue-200", border: "border-blue-100", btn: "bg-blue-600" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", shadow: "shadow-emerald-200", border: "border-emerald-100", btn: "bg-emerald-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600", shadow: "shadow-purple-200", border: "border-purple-100", btn: "bg-purple-600" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", shadow: "shadow-orange-200", border: "border-orange-100", btn: "bg-orange-600" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", shadow: "shadow-indigo-200", border: "border-indigo-100", btn: "bg-indigo-600" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", shadow: "shadow-cyan-200", border: "border-cyan-100", btn: "bg-cyan-600" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", shadow: "shadow-rose-200", border: "border-rose-100", btn: "bg-rose-600" },
};

export default function CourseCatalog() {
    const [activeCategory, setActiveCategory] = useState("Foundation");

    const filteredCourses = COURSES.filter(course => course.category === activeCategory);

    return (
        <section className="py-20 bg-slate-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-100 rounded-full mb-4 shadow-sm">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Our Programs</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Master the pulse of <span className="text-blue-600">Logistics.</span></h2>
                    <p className="text-slate-500 max-w-xl mx-auto font-medium text-sm">
                        Specialized industry-ready programs designed for tomorrow's logistics leaders.
                    </p>
                </div>

                {/* Compact Category Selection */}
                <div className="flex justify-center gap-2 mb-12">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-2xl font-black text-xs transition-all duration-300 ${activeCategory === cat
                                ? "bg-slate-900 text-white shadow-xl scale-105"
                                : "bg-white text-slate-500 hover:bg-slate-50 border border-slate-100"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        {filteredCourses.map((course, index) => {
                            const colors = COLOR_MAP[course.color] || COLOR_MAP.blue;
                            return (
                                <motion.div
                                    key={course.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all flex flex-col h-full"
                                >
                                    {/* Compact Image Section */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                        {course.badge && (
                                            <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-wider rounded-lg shadow-lg">
                                                {course.badge}
                                            </div>
                                        )}

                                        <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 text-slate-900 text-[11px] font-black rounded-lg shadow-sm">
                                            {course.price}
                                        </div>

                                        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                            <span className="text-white text-[10px] font-bold">{course.rating}</span>
                                            <span className="text-white/60 text-[9px] border-l border-white/20 pl-2 ml-1">
                                                {course.students}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Compact Content Section */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                                                <Clock className="w-3 h-3" />
                                                {course.duration}
                                            </span>
                                            <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                                                <Tag className="w-3 h-3" />
                                                {course.mode}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                                            {course.title}
                                        </h3>

                                        <p className="text-slate-500 mb-6 font-medium leading-relaxed text-xs line-clamp-2">
                                            {course.desc}
                                        </p>

                                        <div className="mt-auto">
                                            <div className="space-y-2 mb-6">
                                                {course.outcomes.map((outcome, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <div className={`w-1 h-1 rounded-full ${colors.btn}`}></div>
                                                        <span className="text-[11px] font-bold text-slate-600">{outcome}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <button className="w-full py-3 bg-slate-900 text-white font-black rounded-xl text-xs shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2 active:scale-95">
                                                Enroll Now
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
