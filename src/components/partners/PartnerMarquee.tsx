"use client";

import { motion } from "framer-motion";

export default function PartnerMarquee() {
    const logos = [
        "Shipping Lines", "Rail Operators", "Coastal Carriers", "Warehousing", "Asset Owners", "Customs Agents", "Insurance Hub", "Tech Partners"
    ];

    return (
        <div className="py-12 bg-white border-y border-slate-100 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8">
                <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
                    Backed by Industry Giants
                </p>

                <div className="flex overflow-hidden group">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex gap-20 items-center whitespace-nowrap"
                    >
                        {[...logos, ...logos].map((logo, i) => (
                            <span key={i} className="text-2xl font-black text-slate-200 hover:text-blue-600 transition-colors cursor-default uppercase italic tracking-tighter">
                                {logo}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
