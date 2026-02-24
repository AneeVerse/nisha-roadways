"use client";

import { motion } from "framer-motion";
import TeamProfileCard from "@/components/TeamProfileCard";

export default function AboutTeam() {
    const leaders = [
        {
            name: "NK AGARWAL",
            role: "Founder & Chairman",
            imageSrc: "/images/dream-team/person photo/NK AGARWAL.png",
            description: "Born and brought up in Calcutta, Mr. Nandkishor Agarwal moved to Mumbai in 1975. Having completed his education in Calcutta, he got a job in a small transport company as Supervisor as soon as he arrived in Mumbai. He subsequently started out on his own and founded Nisha Roadways Pvt. Ltd. in 1982. The company has grown from strength to strength over the years.",
            accentGradient: "from-blue-600 to-indigo-700"
        },
        {
            name: "NAVIN AGARWAL",
            role: "CEO",
            imageSrc: "/images/dream-team/person photo/NAVIN AGARWAL.png",
            description: "After completing his B.Com from Mumbai University, Navin acquired an MBA from K. J. Somaiya Institute of Management Studies, Mumbai, and subsequently joined the business in the year 2000. Bringing innovative ideas, he worked to boost the business from just four to 30+ branches, thus widening the network pan-India.",
            accentGradient: "from-green-600 to-emerald-700"
        },
        {
            name: "RAJKUMAR AGARWAL",
            role: "Mentor",
            imageSrc: "/images/dream-team/person photo/RAJKUMAR AGARWAL.png",
            description: "Mr. Raj Kumar Agarwal, a practicing lawyer in the field of Income tax, left his practice to pursue his dream in the field of Real estate in the year 1990. Currently the founder & Managing Director of Kolkata's Real Estate company 'AMBEY GROUP'.",
            accentGradient: "from-purple-600 to-violet-700"
        }
    ];

    const consultants = [
        {
            name: "SUMIT SINGHANIA",
            role: "C.A (Consultant)",
            imageSrc: "/images/dream-team/person photo/SUMIT SINGHANIA.png",
            description: "He is a chartered accountant with over 18 years of working experience in the field of audit, finance, real-estate and taxation. He has extensive knowledge of the Indian real-estate sector.",
            accentGradient: "from-orange-600 to-red-700"
        },
        {
            name: "ARUN KUMAR PANDEY",
            role: "C.A (Consultant)",
            imageSrc: "/images/dream-team/person photo/ARUN KUMAR PANDEY.png",
            description: "Arun Pandey comes with a rock solid experience of 30 years as a Chartered Accountant. Having worked with 15 companies which are in the big league, today he runs his own company 'A Pandey & Associates'.",
            accentGradient: "from-teal-600 to-cyan-700"
        }
    ];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-600 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-sm uppercase tracking-widest"
                    >
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                        The Visionaries
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Dream Team</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto font-medium"
                    >
                        Led by pioneers with decades of industry experience and a passion for redefining logistics.
                    </motion.p>
                </div>

                {/* Main Leaders */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                        >
                            <TeamProfileCard {...leader} />
                        </motion.div>
                    ))}
                </div>

                {/* Consultants */}
                <div className="flex flex-wrap justify-center gap-16">
                    {consultants.map((leader, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index + 3) * 0.1, duration: 0.8 }}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)]"
                        >
                            <TeamProfileCard {...leader} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
