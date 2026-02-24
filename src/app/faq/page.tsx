"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Building, Truck, DollarSign, Shield, Headphones, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FAQ[] = [
  {
    id: 'company-1',
    question: 'How long has Nisha Roadways been in business?',
    answer: 'Nisha Roadways was established in October 1982 by Mr. Nandkishor Agarwal. We have been serving India\'s logistics needs for over 43 years, growing from a single 80 square feet office to a pan-India network of 30+ branches serving 500+ companies.',
    category: 'company'
  },
  {
    id: 'company-2',
    question: 'What makes Nisha Roadways different?',
    answer: 'We are pioneers in empty container transportation in India. We combine four decades of experience with modern technology, zero-damage delivery guarantee, and personalized service we call the "Nisha Parivaar" approach.',
    category: 'company'
  },
  {
    id: 'services-1',
    question: 'What types of containers do you transport?',
    answer: 'We handle all container types and sizes including: 20ft, 40ft, and 45ft standard containers, high-cube, refrigerated, tank containers (hazardous/non-hazardous), and flat rack for out-of-gauge cargo.',
    category: 'services'
  },
  {
    id: 'services-2',
    question: 'Do you handle project cargo?',
    answer: 'Yes, we specialize in project cargo with equipment capable of handling loads up to 120 tons. Our services include route surveys, permit acquisition, and specialized handling.',
    category: 'services'
  },
  {
    id: 'pricing-1',
    question: 'How do you calculate transportation rates?',
    answer: 'Our rates are calculated based on factors including cargo type, weight, dimensions, distance, route complexity, and service urgency. We provide transparent, competitive pricing with no hidden charges.',
    category: 'pricing'
  },
  {
    id: 'pricing-2',
    question: 'How quickly can I get a transportation quote?',
    answer: 'We provide custom quotes for specialized cargo within 24 hours. Our experienced team evaluates your specific requirements to provide accurate, competitive pricing tailored to your needs.',
    category: 'pricing'
  },
  {
    id: 'safety-1',
    question: 'What is your safety track record?',
    answer: 'We maintain a zero-tolerance policy for substandard deliveries and have achieved zero major incidents across 1,500+ projects. Our safety protocols match international standards.',
    category: 'safety'
  },
  {
    id: 'safety-2',
    question: 'How do you ensure cargo security?',
    answer: 'Our security measures include GPS tracking on all vehicles, trained and background-verified drivers, secure loading procedures, and comprehensive insurance coverage.',
    category: 'safety'
  },
  {
    id: 'tracking-1',
    question: 'How can I track my shipment?',
    answer: 'We provide real-time tracking through our online portal. From the moment we pick your cargo until delivery, you can follow your shipment movement with 100% transparency.',
    category: 'tracking'
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Topics', icon: HelpCircle, color: 'blue' },
  { id: 'company', name: 'About Us', icon: Building, color: 'indigo' },
  { id: 'services', name: 'Services', icon: Truck, color: 'emerald' },
  { id: 'pricing', name: 'Pricing', icon: DollarSign, color: 'purple' },
  { id: 'safety', name: 'Safety', icon: Shield, color: 'orange' },
  { id: 'tracking', name: 'Tracking', icon: Headphones, color: 'cyan' },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter(faq => {
      const query = searchTerm.toLowerCase();
      const matchesSearch = faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query);
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0a0a1a]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8"
            >
              <span className="text-xs font-black text-blue-400 uppercase tracking-widest">Support Center</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight"
            >
              How can we <span className="text-blue-500">help?</span>
            </motion.h1>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute left-6 top-1/2 -translate-y-1/2">
                <Search className="w-6 h-6 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search for questions, services, or pricing..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 pl-16 pr-8 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-xl transition-all"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 -mt-12 relative z-20">
        <div className="container mx-auto px-4">
          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {CATEGORIES.map((cat, index) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-6 rounded-[32px] border transition-all flex flex-col items-center gap-4 group ${isActive
                    ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-200"
                    : "bg-white border-slate-100 text-slate-600 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
                    }`}
                >
                  <div className={`p-3 rounded-2xl ${isActive ? "bg-white/20" : "bg-slate-50 group-hover:bg-blue-50"} transition-colors`}>
                    <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-blue-600"}`} />
                  </div>
                  <span className="font-bold text-sm">{cat.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white rounded-3xl border border-slate-100 hover:border-blue-100 transition-all overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                        className="w-full px-8 py-6 text-left flex items-center justify-between group"
                      >
                        <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {faq.question}
                        </span>
                        <div className={`p-2 rounded-full transition-all ${expandedId === faq.id ? "bg-blue-600 text-white rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-blue-50"}`}>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </button>
                      <AnimatePresence>
                        {expandedId === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-8 pb-8"
                          >
                            <div className="pt-4 border-t border-slate-50">
                              <p className="text-slate-600 leading-relaxed font-medium">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <MessageCircle className="w-16 h-16 text-slate-200 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No answers found</h3>
                  <p className="text-slate-500">Try rephrasing your question or exploring a different category.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Still Have Questions? */}
          <div className="mt-32 max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-[48px] p-12 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl -mr-32 -mt-32 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Still have questions?</h2>
                <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto">
                  Can’t find the answer you’re looking for? Please chat with our friendly team.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
                    Chat with experts
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all">
                    Email Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}