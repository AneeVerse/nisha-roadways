'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Users, Building2 } from 'lucide-react';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';
import PartnerNetwork from '@/components/partners/PartnerNetwork';
import PartnerValue from '@/components/partners/PartnerValue';
import CompanyLogos from '@/components/CompanyLogos';
import PartnerLogosGrid from '@/components/partners/PartnerLogosGrid';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-24 left-8 lg:left-20 w-16 h-16 bg-white shadow-xl rounded-2xl border border-slate-100 hidden sm:flex items-center justify-center animate-float">
          <Users className="w-8 h-8 text-blue-600" />
        </div>
        <div className="absolute bottom-32 right-8 lg:right-20 w-20 h-20 bg-white shadow-xl rounded-[2rem] border border-slate-100 hidden sm:flex items-center justify-center animate-float delay-1000">
          <Building2 className="w-10 h-10 text-indigo-600" />
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 border border-blue-100 rounded-full shadow-sm text-blue-700 font-black text-xs tracking-widest uppercase">
              <Building2 className="w-4 h-4" />
              Elite Partner Ecosystem
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
            Strength Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Strategic Alliance</span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-500 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            We collaborate with premier shipping lines, rail operators, and technology providers to deliver a truly global, high-performance logistics experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="#partners" className="group px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3">
              Explore Our Network
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <CompanyLogos />

      {/* Full Partner Logos Grid */}
      <PartnerLogosGrid />

      {/* Partner Network Grid */}
      <div id="partners">
        <PartnerNetwork />
      </div>

      {/* Why Partners Matter / Value Section */}
      <PartnerValue />

      {/* CTA Banner */}
      <div className="py-20 bg-white">
        <CtaBanner />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
