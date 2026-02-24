"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface WhyUsMegaMenuProps {
    color?: {
        text: string;
        background?: string;
    };
    onOpenChange?: (isOpen: boolean) => void;
}

const WhyUsMegaMenu: React.FC<WhyUsMegaMenuProps> = ({
    color = { text: "#171717" },
    onOpenChange
}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Notify parent when open state changes
    useEffect(() => {
        onOpenChange?.(isOpen);
    }, [isOpen, onOpenChange]);

    const whyUs = [
        { title: "About", desc: "Who we are and our mission", href: "/about", image: "/images/use-everywhere/images1.png" },
        { title: "Our team", desc: "Meet the folks behind Nisha", href: "/team", image: "/images/use-everywhere/images2.png" },
        { title: "Collaborated with", desc: "Brands that trust us", href: "/partners", image: "/images/use-everywhere/images3.png" },
        { title: "Testimonials", desc: "What customers say", href: "/testimonials", image: "/images/use-everywhere/images4.png" },
    ];

    return (
        // ⚠️ CRITICAL: Parent container handles ALL hover events
        <div
            className="flex items-stretch h-full"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Trigger Button */}
            <button
                style={{ color: color.text }}
                className="px-4 cursor-pointer flex items-center group h-full"
            >
                {/* Animated dot indicator */}
                <span
                    style={{ backgroundColor: color.text }}
                    className={`${isOpen ? "mr-[6px] scale-100" : ""} 
            h-[5px] w-[5px] inline-block transition-all 
            group-hover:mr-[6px] duration-300 scale-0 
            group-hover:scale-100 rounded-full`}
                />
                <span className="flex items-center gap-2">
                    Why Us
                    <ChevronDown
                        className={`${isOpen ? "-rotate-180" : ""} 
              group-hover:-rotate-180 duration-300 
              transition-all self-center w-4 h-4`}
                    />
                </span>
            </button>

            {/* Mega Menu Dropdown */}
            {isOpen && (
                <>
                    {/* Dropdown content - positioned right below navbar with NO gap */}
                    <motion.div
                        className="fixed left-0 top-[80px] w-full z-[90]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="bg-white shadow-2xl border-t border-gray-100 w-full">
                            <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10">
                                <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center w-full gap-6">
                                    {whyUs.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="group block w-full"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <div className="aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden mb-4 shadow-sm border border-gray-100">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={400}
                                                    height={225}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="space-y-1 px-1">
                                                <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 text-lg">{item.title}</div>
                                                <div className="text-sm text-gray-500 leading-relaxed font-normal">{item.desc}</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </div>
    );
};

export default WhyUsMegaMenu;
