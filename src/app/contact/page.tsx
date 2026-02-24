"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Building2, Send, CheckCircle, MessageSquare, Globe } from 'lucide-react';
import Footer from '@/components/Footer';
import CtaBanner from '@/components/CtaBanner';

const SERVICES = [
  'Empty Container Transportation',
  'Export Import Containers',
  'Domestic Cargo',
  'Solar & Project Cargo',
  'ODC Specialized',
  'Bulk & Rail Services',
  'Coastal & LCL',
  'Warehousing & Storage'
];

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: "Call Us",
    desc: "24/7 Operations Support",
    action: "022 - 41632222",
    link: "tel:+912241632222",
    color: "blue"
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "Quick business inquiries",
    action: "business@nisharoadways.com",
    link: "mailto:business@nisharoadways.com",
    color: "indigo"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    desc: "Chat with our team",
    action: "Start instant chat",
    link: "#",
    color: "purple"
  }
];

const BRANCHES = [
  'Mumbai', 'Surat', 'Vapi', 'Ankleshwar', 'Vadodara', 'Ahmedabad',
  'Gandhidham', 'Mundra', 'Pipava', 'Jodhpur', 'Bikaner', 'Jaipur',
  'Delhi', 'Dadri', 'Kanpur', 'Ludhiana', 'Indore', 'Kolkata', 'Chennai'
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-[#0a0a1a]">
        <div className="absolute inset-0 z-0 text-[30vw] font-black text-white/[0.02] select-none text-center flex items-center justify-center whitespace-nowrap">
          NISHA
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8"
            >
              <span className="text-xs font-black text-blue-400 uppercase tracking-widest">Get in touch</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight"
            >
              Let's move your <span className="text-blue-500">cargo.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 font-medium leading-relaxed"
            >
              Ready to transform your supply chain? Let's discuss how our integrated solutions can optimize your operations.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left Side - Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 rounded-[48px] p-10 text-white relative overflow-hidden group border border-white/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl -mr-32 -mt-32 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-blue-900/40">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-black mb-6">Head Office</h2>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-blue-500 flex-shrink-0" />
                      <div>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Location</p>
                        <p className="text-lg font-medium text-slate-200">
                          909, Mayuresh Cosmos, Plot 37, Sector 11, CBD Belapur, Navi Mumbai 400614
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Clock className="w-6 h-6 text-blue-500 flex-shrink-0" />
                      <div>
                        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">Hours</p>
                        <p className="text-lg font-medium text-slate-200">
                          Mon – Sat: 09:00 – 19:00<br />
                          <span className="text-blue-500 font-bold">24/7 Ops Support Available</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {CONTACT_METHODS.slice(0, 2).map((method, idx) => {
                  const Icon = method.icon;
                  return (
                    <a href={method.link} key={idx} className="bg-white p-8 rounded-[40px] border border-slate-100 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                        <Icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                      </div>
                      <h3 className="text-lg font-black text-slate-900 mb-1">{method.title}</h3>
                      <p className="text-slate-400 text-sm font-bold mb-4">{method.desc}</p>
                      <p className="text-blue-600 font-black text-sm">{method.action}</p>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[48px] p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50"
              >
                <div className="mb-10">
                  <h2 className="text-4xl font-black text-slate-900 mb-4">Send an inquiry</h2>
                  <p className="text-slate-500 font-medium">Complete the form below and our team will be in touch shortly.</p>
                </div>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500 font-medium mb-8">We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition-all"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-slate-900 focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-slate-900 focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                          placeholder="Logistics Inc."
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-slate-900 focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-slate-900 focus:ring-2 focus:ring-blue-500/50 transition-all font-medium"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Service Interest</label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-slate-900 focus:ring-2 focus:ring-blue-500/50 transition-all font-medium appearance-none"
                      >
                        <option value="" disabled>Select a service</option>
                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 border-none rounded-2xl py-4 px-6 text-slate-900 focus:ring-2 focus:ring-blue-500/50 transition-all font-medium resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-black py-5 rounded-3xl text-lg shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 group"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Submit Inquiry
                          <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full mb-8 font-black text-xs uppercase tracking-widest">
            <Globe className="w-4 h-4" />
            Our Network
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Pan-India Presence</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-20 font-medium">30+ strategic branches across India ensuring seamless connectivity to every corner.</p>

          <div className="flex flex-wrap justify-center gap-3">
            {BRANCHES.map((city, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                className="px-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-slate-600 hover:bg-blue-600 hover:text-white hover:shadow-xl hover:shadow-blue-500/20 transition-all cursor-default"
              >
                {city}
              </motion.div>
            ))}
            <div className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-black shadow-xl shadow-blue-500/20">
              +11 More Branches
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </div>
  );
}
