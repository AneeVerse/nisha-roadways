'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import ReviewVideo from '@/components/ReviewVideo';
import Testimonials from '@/components/Testimonials';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-16 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full shadow-sm text-blue-600 font-black text-xs tracking-widest uppercase mb-6">
              <Star className="w-4 h-4 fill-blue-600" />
              Client Success Stories
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Client Experience</span>
            </h1>

            <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              We take pride in our service. Hear directly from our clients about how Nisha Roadways transforms their logistics operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <ReviewVideo hideHeader={true} />

      {/* Marquee Testimonials Section */}
      <Testimonials hideHeader={true} hideStats={true} />

      {/* CTA Section */}
      <CtaBanner />

      <Footer />
    </div>
  );
}
