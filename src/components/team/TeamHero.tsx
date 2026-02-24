"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const teamMembers = [
    {
        name: "NK",
        surname: "AGARWAL",
        role: "Founder & Chairman",
        imageSrc: "/images/dream-team/person photo/NK AGARWAL.png",
    },
    {
        name: "NAVIN",
        surname: "AGARWAL",
        role: "CEO",
        imageSrc: "/images/dream-team/person photo/NAVIN AGARWAL.png",
    },
    {
        name: "RAJKUMAR",
        surname: "AGARWAL",
        role: "Mentor",
        imageSrc: "/images/dream-team/person photo/RAJKUMAR AGARWAL.png",
    },
    {
        name: "SUMIT",
        surname: "SINGHANIA",
        role: "CA Consultant",
        imageSrc: "/images/dream-team/person photo/SUMIT SINGHANIA.png",
    },
    {
        name: "ARUN KUMAR",
        surname: "PANDEY",
        role: "CA Consultant",
        imageSrc: "/images/dream-team/person photo/ARUN KUMAR PANDEY.png",
    },
];

export default function TeamHero() {
    return (
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden min-h-screen">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-indigo-100 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative">
                {/* Header Section - Centered */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-tight tracking-tight mb-6"
                    >
                        The People Behind
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Every Successful Delivery</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8"
                    >
                        Meet the faces behind the expertise, making Nisha Roadways your trusted partner in container logistics and supply chain solutions for over 35 years.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="flex flex-wrap justify-center items-center gap-8"
                    >
                        <Link
                            href="#leadership"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Meet Our Leadership
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-2 text-slate-700 font-bold hover:text-blue-600 transition-colors"
                        >
                            Get In Touch
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Team Photos Grid - Centered */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10"
                >
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                            className="group relative text-center"
                        >
                            {/* Circular Shape Container */}
                            <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mx-auto">
                                {/* Background Shape - Circle */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-blue-100 group-hover:to-indigo-200 transition-all duration-500 shadow-lg group-hover:shadow-xl rounded-full"></div>

                                {/* Person Image */}
                                <div className="absolute inset-2 overflow-hidden rounded-full">
                                    <Image
                                        src={member.imageSrc}
                                        alt={`${member.name} ${member.surname}`}
                                        fill
                                        className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-105"
                                    />
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-2 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                            </div>

                            {/* Name Label - Centered */}
                            <div className="mt-5">
                                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                                    {member.surname}
                                </p>
                                <p className="text-[10px] text-slate-500 mt-1 font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
