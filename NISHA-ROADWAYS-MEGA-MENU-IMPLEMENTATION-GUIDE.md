# NISHA ROADWAYS MEGA MENU IMPLEMENTATION GUIDE

## 🚀 Overview
This guide provides a complete implementation blueprint for creating a mega menu service structure for Nisha Roadways website, based on the proven Aneeverse website mega menu architecture. This guide is designed to be used by developers or AI agents to replicate the exact functionality and user experience.

## 🎨 Design System & Theme Colors
**Use your current website's theme colors throughout the implementation:**





## 📋 Service Structure Definition

### NISHA ROADWAYS SERVICES - ORGANIZED BY CATEGORY

#### CATEGORY 1: CONTAINER LOGISTICS SOLUTIONS
**Description:** Complete containerized cargo management
**Services:**
- Empty Container Transportation (ECT)
  - Exim empty containers (shipping lines)
  - Domestic empty containers (sale/lease)
- Export Import Containers (ExIm Transport Service)
  - Export container logistics
  - Import container logistics
- Domestic Cargo In Our Containers
  - Containerized domestic transportation
  - Secured cargo in owned ISO containers

#### CATEGORY 2: SPECIALIZED CARGO SOLUTIONS
**Description:** Custom solutions for unique cargo requirements
**Services:**
- Solar Panel & Parts Transportation (SolarTransport)
  - Solar modules and photovoltaic panels
  - Renewable energy components
- Over Dimension Cargo (ODC)
  - Oversized machinery and equipment
  - Project cargo management
- Bulk Cargo Transportation
  - Steel coils, grains, construction materials
  - Industrial bulk materials
- Chemical Transportation in Tank Containers
  - Hazardous and non-hazardous chemicals
  - Liquid logistics in ISO tank containers

#### CATEGORY 3: MULTIMODAL TRANSPORT SOLUTIONS
**Description:** Integrated transportation across multiple modes
**Services:**
- Rail Services
  - Container by rail
  - Bulk cargo by rail
  - Integrated rail-road solutions
- Coastal Services
  - Coastal shipping across 10 major Indian ports
  - Maritime alternative to road transport

#### CATEGORY 4: VALUE-ADDED LOGISTICS SERVICES
**Description:** Enhanced services for optimal supply chain management
**Services:**
- LCL Consolidation
  - Less-than-Container-Load cargo clubbing
  - Small shipment optimization
- Transportation Of High Value Goods
  - GPS-tracked premium cargo
  - Armed escort services
  - Enhanced security solutions
- Storage and Warehousing
  - Empty container parks
  - Loaded container storage
  - Cargo warehousing facilities
  - Cold storage and specialized storage

## 🏗️ Technical Implementation

### 1. Component Structure

#### Main Mega Menu Component: `ServicesMegaMenu.jsx`
```jsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";
import Layout from "@/components/common/Layout";

// Import service-specific icons
import { 
  FaShippingFast, FaIndustry, FaTrain, FaWarehouse,
  FaSolarPanel, FaTruck, FaShip, FaBoxes,
  FaFlask, FaShieldAlt, FaMapMarkedAlt
} from "react-icons/fa";

const ServicesMegaMenu = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuCategories = [
    {
      title: "Container Logistics Solutions",
      url: "/services#container-logistics",
      color: "bg-blue-100 hover:bg-blue-200 text-blue-900",
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
      color: "bg-amber-100 hover:bg-amber-200 text-amber-900",
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
          slug: "bulk-cargo-transportation"
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
      color: "bg-emerald-100 hover:bg-emerald-200 text-emerald-900",
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
      color: "bg-violet-100 hover:bg-violet-200 text-violet-900",
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
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        href="/services" 
        style={{ color: color.text }}
        className="p-2 cursor-pointer flex items-center group"
      >
        <span 
          style={{ backgroundColor: color.text }}
          className={`${isOpen ? "mr-[6px] scale-100" : ""} h-[5px] w-[5px] inline-block transition-all group-hover:mr-[6px] duration-300 scale-0 group-hover:scale-100 rounded-full`}
        />  
        <span className="flex items-center gap-2">
          Services 
          <FaChevronDown className={`${isOpen ? "-rotate-180" : ""} group-hover:-rotate-180 duration-300 transition-all self-center text-[10px]`} />
        </span>
      </Link>
      
      {isOpen && (
        <motion.div
          className="absolute left-0 top-[60px] pt-[20px] w-full z-40"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="bg-[#EBFAFE] shadow-lg border py-3 overflow-y-auto h-[calc(100vh-80px)] border-gray-200">
            <Layout>
              <div className="grid grid-cols-2 gap-6">
                {/* First two categories in separate columns */}
                {menuCategories.slice(0, 2).map((category, index) => (
                  <div key={index}>
                    <Link 
                      onClick={() => setIsOpen(false)} 
                      href={category.url} 
                      className={`text-lg font-bold group py-2 px-4 rounded-md inline-flex items-center gap-2 ${category.color}`}
                    >
                      {category.title} 
                      <div className="relative">
                        <FiArrowUpRight className="z-10 group-hover:translate-x-[80%] group-hover:translate-y-[-80%] group-hover:opacity-0 transition-all duration-300" />
                        <FiArrowUpRight className="absolute inset-0 z-10 opacity-0 translate-x-[-80%] translate-y-[80%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </Link>
                    <p className="text-sm text-gray-600 mt-2 mb-4 px-4">{category.description}</p>
                    <ul className="mt-4 space-y-2">
                      {category.items.map((item, idx) => (
                        <Link 
                          onClick={() => setIsOpen(false)} 
                          href={`/services/${item.slug}`} 
                          key={idx} 
                          className="flex group px-3 py-2 border-b items-center justify-between gap-3"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <h4 className="text-md font-medium text-gray-700 flex items-center">
                                <span className="h-[5px] w-[5px] bg-secondary-500 inline-block transition-all duration-300 scale-0 group-hover:scale-100 rounded-full" />  
                                <span className="ml-[-5px] group-hover:ml-[6px] transition-all duration-300">{item.name}</span>
                              </h4>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                          </div>
                          <div className="text-gray-700 text-lg self-center">{item.icon}</div>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Second row for remaining categories */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {menuCategories.slice(2, 4).map((category, index) => (
                  <div key={index}>
                    <Link 
                      onClick={() => setIsOpen(false)} 
                      href={category.url} 
                      className={`text-lg font-bold group py-2 px-4 rounded-md inline-flex items-center gap-2 ${category.color}`}
                    >
                      {category.title}
                      <div className="relative">
                        <FiArrowUpRight className="z-10 group-hover:translate-x-[80%] group-hover:translate-y-[-80%] group-hover:opacity-0 transition-all duration-300" />
                        <FiArrowUpRight className="absolute inset-0 z-10 opacity-0 translate-x-[-80%] translate-y-[80%] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                    </Link>
                    <p className="text-sm text-gray-600 mt-2 mb-4 px-4">{category.description}</p>
                    <ul className="mt-4 space-y-2">
                      {category.items.map((item, idx) => (
                        <Link 
                          onClick={() => setIsOpen(false)} 
                          href={`/services/${item.slug}`} 
                          key={idx} 
                          className="flex group px-3 py-2 border-b items-center justify-between gap-3"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <h4 className="text-md font-medium text-gray-700 flex items-center">
                                <span className="h-[5px] w-[5px] bg-secondary-500 inline-block transition-all duration-300 scale-0 group-hover:scale-100 rounded-full" />  
                                <span className="ml-[-5px] group-hover:ml-[6px] transition-all duration-300">{item.name}</span>
                              </h4>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                          </div>
                          <div className="text-gray-700 text-lg self-center">{item.icon}</div>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Layout>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ServicesMegaMenu;
```

### 2. Routing Structure

#### Required Pages and Routes
Create the following page structure in your Next.js app:

```
/services
├── /services/page.jsx (Main services overview)
├── /services/empty-container-transportation/page.jsx
├── /services/export-import-containers/page.jsx
├── /services/domestic-cargo-containers/page.jsx
├── /services/solar-panel-transportation/page.jsx
├── /services/over-dimension-cargo/page.jsx
├── /services/bulk-cargo-transportation/page.jsx
├── /services/chemical-transportation/page.jsx
├── /services/rail-services/page.jsx
├── /services/coastal-services/page.jsx
├── /services/lcl-consolidation/page.jsx
├── /services/high-value-goods/page.jsx
└── /services/storage-warehousing/page.jsx
```

#### Main Services Page Template (`/services/page.jsx`)
```jsx
import React from 'react';
import Layout from '@/components/common/Layout';
import ServiceCard from '@/components/services/ServiceCard';

const ServicesPage = () => {
  const serviceCategories = [
    {
      id: "container-logistics",
      title: "Container Logistics Solutions",
      description: "Complete containerized cargo management",
      color: "bg-blue-100 border-blue-200",
      services: [
        "Empty Container Transportation (ECT)",
        "Export Import Containers",
        "Domestic Cargo In Our Containers"
      ]
    },
    {
      id: "specialized-cargo",
      title: "Specialized Cargo Solutions", 
      description: "Custom solutions for unique cargo requirements",
      color: "bg-amber-100 border-amber-200",
      services: [
        "Solar Panel & Parts Transportation",
        "Over Dimension Cargo (ODC)",
        "Bulk Cargo Transportation",
        "Chemical Transportation"
      ]
    },
    {
      id: "multimodal-transport",
      title: "Multimodal Transport Solutions",
      description: "Integrated transportation across multiple modes", 
      color: "bg-emerald-100 border-emerald-200",
      services: [
        "Rail Services",
        "Coastal Services"
      ]
    },
    {
      id: "value-added-services",
      title: "Value-Added Logistics Services",
      description: "Enhanced services for optimal supply chain management",
      color: "bg-violet-100 border-violet-200", 
      services: [
        "LCL Consolidation",
        "High Value Goods Transportation",
        "Storage and Warehousing"
      ]
    }
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nisha Roadways Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive logistics solutions across container management, specialized cargo, multimodal transport, and value-added services.
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-20">
              <div className={`p-8 rounded-lg border-2 ${category.color}`}>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {category.description}
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, idx) => (
                    <ServiceCard key={idx} service={service} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
```

### 3. Individual Service Page Template

#### Example: Solar Panel Transportation Page (`/services/solar-panel-transportation/page.jsx`)
```jsx
import React from 'react';
import Layout from '@/components/common/Layout';
import { FaSolarPanel, FaShieldAlt, FaTruck, FaMapMarkedAlt } from 'react-icons/fa';

const SolarPanelTransportationPage = () => {
  return (
    <Layout>
      <div className="py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
            <FaSolarPanel className="text-2xl text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Solar Panel & Parts Transportation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized logistics solutions for renewable energy components, ensuring safe and efficient transportation of solar modules and photovoltaic panels.
          </p>
        </div>

        {/* Service Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <FaSolarPanel className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Solar Modules Transportation</h3>
                  <p className="text-gray-600">Secure handling and transport of photovoltaic panels with specialized equipment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaShieldAlt className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Renewable Energy Components</h3>
                  <p className="text-gray-600">Complete logistics for inverters, mounting systems, and electrical components.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaTruck className="text-amber-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Specialized Vehicles</h3>
                  <p className="text-gray-600">Custom-equipped trucks designed for fragile solar equipment transport.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                <span className="text-gray-700">Temperature-controlled transportation</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                <span className="text-gray-700">Vibration-resistant packaging</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                <span className="text-gray-700">Real-time GPS tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                <span className="text-gray-700">Insurance coverage included</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                <span className="text-gray-700">Pan-India delivery network</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transport Your Solar Equipment?
          </h2>
          <p className="text-gray-600 mb-6">
            Get a customized quote for your renewable energy logistics needs.
          </p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
            Request Quote
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SolarPanelTransportationPage;
```

## 🎯 Implementation Checklist

### Phase 1: Setup & Structure
- [ ] Create component directory structure
- [ ] Install required dependencies (framer-motion, react-icons)
- [ ] Set up color scheme in tailwind.config
- [ ] Create Layout component wrapper

### Phase 2: Mega Menu Component
- [ ] Build ServicesMegaMenu component
- [ ] Implement hover states and animations
- [ ] Add responsive design considerations
- [ ] Test dropdown functionality

### Phase 3: Routing & Pages
- [ ] Create main /services page
- [ ] Build individual service pages (13 pages total)
- [ ] Implement proper SEO meta tags
- [ ] Add breadcrumb navigation

### Phase 4: Styling & UX
- [ ] Apply consistent color scheme
- [ ] Add hover animations and transitions
- [ ] Implement responsive design
- [ ] Test accessibility features

### Phase 5: Content & SEO
- [ ] Add service descriptions and features
- [ ] Implement structured data markup
- [ ] Create service-specific CTAs
- [ ] Add contact forms integration

## 🔧 Dependencies Required

```json
{
  "dependencies": {
    "framer-motion": "^10.16.4",
    "react-icons": "^4.11.0",
    "next": "^13.5.0",
    "react": "^18.2.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "@tailwindcss/typography": "^0.5.10"
  }
}
```

## 📱 Responsive Considerations

### Mobile Menu Alternative
For mobile devices, implement a collapsible accordion-style menu:

```jsx
// Mobile version component
const MobileServicesMenu = () => {
  const [openCategory, setOpenCategory] = useState(null);
  
  return (
    <div className="lg:hidden">
      {menuCategories.map((category, index) => (
        <div key={index} className="border-b">
          <button 
            onClick={() => setOpenCategory(openCategory === index ? null : index)}
            className="w-full text-left p-4 flex justify-between items-center"
          >
            <span className="font-semibold">{category.title}</span>
            <FaChevronDown className={`transition-transform ${openCategory === index ? 'rotate-180' : ''}`} />
          </button>
          {openCategory === index && (
            <div className="pb-4 px-4">
              {category.items.map((item, idx) => (
                <Link 
                  key={idx}
                  href={`/services/${item.slug}`}
                  className="block py-2 px-4 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
```

## 🚀 Final Notes

This implementation guide provides:

1. **Complete Component Structure** - Ready-to-use React components
2. **Routing Logic** - Full page structure and navigation
3. **Styling System** - Consistent design using your theme colors
4. **Content Organization** - All Nisha Roadways services properly categorized
5. **User Experience** - Smooth animations and intuitive navigation
6. **SEO Optimization** - Proper page structure and meta tags
7. **Responsive Design** - Works across all device sizes

When implementing this guide, ensure you:
- Use your website's existing color scheme
- Maintain consistent typography and spacing
- Test all hover states and animations
- Verify all links and routing work correctly
- Optimize for search engines with proper meta tags

This structure will create a professional, user-friendly mega menu that showcases all Nisha Roadways services in an organized, accessible manner, following the proven Aneeverse website pattern.