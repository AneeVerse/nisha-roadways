"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  FaShippingFast, FaIndustry, FaTrain, FaWarehouse,
  FaSolarPanel, FaTruck, FaShip, FaBoxes,
  FaFlask, FaShieldAlt, FaArrowRight
} from "react-icons/fa";

interface ServicesMegaMenuProps {
  color?: {
    text: string;
    background?: string;
  };
  onOpenChange?: (isOpen: boolean) => void;
}

interface MenuItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
}

interface MenuCategory {
  title: string;
  url: string;
  baseColor: string;
  style: React.CSSProperties;
  hoverStyle: React.CSSProperties;
  description: string;
  items: MenuItem[];
}

const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({
  color = { text: "#171717" },
  onOpenChange
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Notify parent when open state changes
  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  const menuCategories: MenuCategory[] = [
    {
      title: "Container Logistics Solutions",
      url: "/services#container-logistics",
      baseColor: "#1d4ed8",
      style: { background: 'linear-gradient(135deg, #1d4ed8, #1e40af)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #1e40af, #1e3a8a)' },
      description: "Complete containerized cargo management",
      items: [
        {
          name: "Empty Container Transportation (ECT)",
          description: "Exim and domestic empty container services",
          icon: <FaBoxes />,
          slug: "empty-container-transportation"
        },
        {
          name: "Export Import Containers",
          description: "ExIm transport services for international trade",
          icon: <FaShippingFast />,
          slug: "export-import-containers"
        },
        {
          name: "Domestic Cargo In Our Containers",
          description: "Secured cargo in owned ISO containers",
          icon: <FaTruck />,
          slug: "domestic-cargo-containers"
        }
      ]
    },
    {
      title: "Specialized Cargo Solutions",
      url: "/services#specialized-cargo",
      baseColor: "#63579b",
      style: { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #2563eb, #7c3aed)' },
      description: "Custom solutions for unique cargo requirements",
      items: [
        {
          name: "Solar Panel & Parts Transportation",
          description: "Renewable energy components logistics",
          icon: <FaSolarPanel />,
          slug: "solar-panel-transportation"
        },
        {
          name: "Over Dimension Cargo (ODC)",
          description: "Oversized machinery and project cargo",
          icon: <FaIndustry />,
          slug: "over-dimension-cargo"
        },
        {
          name: "Bulk Cargo Transportation",
          description: "Steel coils, grains, construction materials",
          icon: <FaWarehouse />,
          slug: "bulk-cargo-solutions"
        },
        {
          name: "Chemical Transportation",
          description: "Tank container logistics for chemicals",
          icon: <FaFlask />,
          slug: "chemical-transportation"
        }
      ]
    },
    {
      title: "Multimodal Transport Solutions",
      url: "/services#multimodal-transport",
      baseColor: "#964f77",
      style: { background: 'linear-gradient(135deg, #8b5cf6, #f43f5e)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #7c3aed, #e11d48)' },
      description: "Integrated transportation across multiple modes",
      items: [
        {
          name: "Rail Services",
          description: "Container and bulk cargo by rail",
          icon: <FaTrain />,
          slug: "rail-services"
        },
        {
          name: "Coastal Services",
          description: "Maritime shipping across major Indian ports",
          icon: <FaShip />,
          slug: "coastal-services"
        }
      ]
    },
    {
      title: "Value-Added Logistics Services",
      url: "/services#value-added-services",
      baseColor: "#cd3f45",
      style: { background: 'linear-gradient(135deg, #f43f5e, #9f1239)', color: '#ffffff' },
      hoverStyle: { background: 'linear-gradient(135deg, #e11d48, #881337)' },
      description: "Enhanced services for optimal supply chain management",
      items: [
        {
          name: "LCL Consolidation",
          description: "Less-than-Container-Load optimization",
          icon: <FaBoxes />,
          slug: "lcl-consolidation"
        },
        {
          name: "High Value Goods Transportation",
          description: "GPS-tracked premium cargo with security",
          icon: <FaShieldAlt />,
          slug: "high-value-goods"
        },
        {
          name: "Storage and Warehousing",
          description: "Comprehensive storage solutions",
          icon: <FaWarehouse />,
          slug: "storage-warehousing"
        }
      ]
    }
  ];

  return (
    // ⚠️ CRITICAL: Parent container handles ALL hover events
    <div
      className="flex items-stretch h-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Link */}
      <Link
        href="/services"
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
          Services
          <ChevronDown
            className={`${isOpen ? "-rotate-180" : ""} 
              group-hover:-rotate-180 duration-300 
              transition-all self-center w-4 h-4`}
          />
        </span>
      </Link>

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
            <div className="bg-white shadow-2xl border-t border-gray-100 w-full overflow-hidden">
              <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-8 lg:pb-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                  {menuCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-6 sm:space-y-8"
                    >
                      <div className="space-y-4">
                        <Link
                          onClick={() => setIsOpen(false)}
                          href={category.url}
                          className={`text-sm sm:text-base font-extrabold group py-3 sm:py-4 px-4 sm:px-5 rounded-xl inline-flex items-center gap-3 sm:gap-4 transition-all duration-300 w-full hover:shadow-lg hover:-translate-y-0.5`}
                          style={category.style}
                          onMouseEnter={(e) => {
                            const target = e.currentTarget;
                            const hoverStyle = category.hoverStyle;
                            if (hoverStyle) {
                              target.style.background = hoverStyle.background as string;
                            }
                          }}
                          onMouseLeave={(e) => {
                            const target = e.currentTarget;
                            target.style.background = category.style.background as string;
                          }}
                        >
                          <span className="whitespace-normal leading-tight uppercase tracking-wide">{category.title}</span>
                          <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform duration-300 flex-shrink-0" />
                        </Link>
                        <p className="text-[10px] sm:text-xs text-gray-500 px-5 sm:px-6 font-medium leading-relaxed border-l-2 border-gray-100 ml-2">{category.description}</p>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        {category.items.map((item, idx) => (
                          <Link
                            onClick={() => setIsOpen(false)}
                            href={`/services/${item.slug}`}
                            key={idx}
                            className="flex group px-3 sm:px-4 py-2 sm:py-3 rounded-xl hover:bg-gray-50/80 items-center gap-4 sm:gap-5 transition-all duration-300 border border-transparent hover:border-gray-100"
                            style={{ '--hover-color': category.baseColor } as React.CSSProperties}
                          >
                            <div
                              className="flex-shrink-0 text-lg sm:text-xl text-gray-400 group-hover:text-[var(--hover-color)] transition-all duration-300 transform group-hover:translate-x-1"
                            >
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs sm:text-[13px] font-bold text-[#111827] group-hover:text-[var(--hover-color)] transition-colors duration-300 flex items-center">
                                <span
                                  className="h-[6px] w-[6px] inline-block transition-all duration-300 scale-0 group-hover:scale-100 rounded-full mr-0 group-hover:mr-3 flex-shrink-0"
                                  style={{ backgroundColor: category.baseColor }}
                                />
                                <span className="whitespace-normal leading-tight tracking-tight">{item.name}</span>
                              </h4>
                              <p className="text-[10px] sm:text-[11px] text-gray-500 mt-1 line-clamp-2 leading-relaxed font-medium">{item.description}</p>
                            </div>
                            <FaArrowRight
                              className="text-white group-hover:text-[var(--hover-color)] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                              style={{ color: category.baseColor }}
                            />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
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

export default ServicesMegaMenu;