"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

interface ServiceCardProps {
  service: {
    name: string;
    description: string;
    icon: React.ReactNode;
    slug: string;
    features?: string[];
  };
  themeColor?: string;
  gradient?: string;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, themeColor = "blue", gradient = "from-blue-500 to-blue-600", index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="group h-full"
    >
      <Link href={`/services/${service.slug}`}>
        <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200/50 group-hover:-translate-y-2 group-hover:bg-white/90">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Animated background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

          <div className="relative z-10">
            {/* Icon and Title Section */}
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                className={`flex-shrink-0 w-14 h-14 bg-${themeColor}-50/50 rounded-xl flex items-center justify-center text-xl shadow-sm border border-${themeColor}-100/50 group-hover:scale-110 transition-all duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <div>
                  {service.icon}
                </div>
              </motion.div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900 transition-colors duration-300 leading-tight mb-1">
                  {service.name}
                </h3>
                <div
                  className="w-12 h-1 rounded-full group-hover:w-20 transition-all duration-300"
                  style={{ background: gradient }}
                ></div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
              {service.description}
            </p>

            {/* Features List */}
            {service.features && (
              <div className="grid grid-cols-1 gap-3 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-600"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 bg-${themeColor}-50 rounded-full flex items-center justify-center`}>
                      <FaCheckCircle className={`text-${themeColor}-400 text-[10px]`} />
                    </div>
                    <span className="flex-1 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {/* CTA Section */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100/50">
              <span className={`text-sm font-bold text-${themeColor}-600 group-hover:text-${themeColor}-700 transition-colors duration-300`}>
                Explore Service
              </span>
              <motion.div
                className={`flex items-center justify-center w-9 h-9 bg-${themeColor}-50 rounded-full group-hover:bg-${themeColor}-600 group-hover:text-white transition-all duration-300 shadow-sm`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowRight className="text-xs" />
              </motion.div>
            </div>
          </div>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;