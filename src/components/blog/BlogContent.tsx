/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { PortableText } from '@portabletext/react';
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/client";
import {
    Clock,
    Linkedin,
    Link2,
    ChevronRight,
    ArrowUp,
    ArrowLeft,
    Calendar,
    ShieldCheck,
    TrendingUp,
    Layout,
    MessageSquare
} from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, AnimatePresence } from "framer-motion";

interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage?: any;
    authorImage?: any;
    publishedAt: string;
    author: string;
    authorRole?: string;
    excerpt?: string;
    body: any;
    categories?: string[];
    faqs?: { question: string; answer: string }[];
}

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

export default function BlogContent({ blog, relatedBlogs }: { blog: BlogPost, relatedBlogs: BlogPost[] }) {
    const [activeSection, setActiveSection] = useState<string>('');
    const [tocItems, setTocItems] = useState<TOCItem[]>([]);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [copied, setCopied] = useState(false);

    // Extract TOC from body
    useEffect(() => {
        if (blog?.body) {
            const headings: TOCItem[] = [];
            blog.body.forEach((block: any, index: number) => {
                if (block._type === 'block' && ['h1', 'h2', 'h3'].includes(block.style)) {
                    const text = block.children?.map((c: any) => c.text).join('') || '';
                    const id = `heading-${index}`;
                    headings.push({
                        id,
                        text,
                        level: block.style === 'h1' ? 1 : (block.style === 'h2' ? 2 : 3)
                    });
                }
            });
            setTocItems(headings);
        }
    }, [blog?.body]);

    // Scroll spy for TOC
    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);

            const headingElements = tocItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = headingElements.length - 1; i >= 0; i--) {
                const element = headingElements[i];
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(tocItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [tocItems]);

    // Estimate reading time
    const estimateReadingTime = (body: any[]): number => {
        if (!body) return 5;
        const text = body
            .filter((block: any) => block._type === 'block')
            .map((block: any) => block.children?.map((c: any) => c.text).join(' '))
            .join(' ');
        const wordCount = text.split(/\s+/).length;
        return Math.max(1, Math.ceil(wordCount / 200));
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 120;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
    };

    const copyLink = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const portableTextComponents = {
        types: {
            image: ({ value }: any) => (
                value && value.asset ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="my-10 group"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src={urlFor(value).url()}
                                alt={value.alt || 'Blog image'}
                                className="w-full h-auto object-cover max-h-[500px] group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {value.alt && (
                            <p className="text-center text-sm text-slate-500 mt-4 italic font-medium px-4">{value.alt}</p>
                        )}
                    </motion.div>
                ) : null
            ),
            markdownTable: ({ value }: any) => {
                if (!value || !value.tableContent) return null;
                return (
                    <div className="my-10 overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white">
                        <div className="inline-block min-w-full align-middle">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    table: ({ children }) => <table className="min-w-full divide-y divide-slate-200">{children}</table>,
                                    thead: ({ children }) => <thead className="bg-slate-50 font-black">{children}</thead>,
                                    tr: ({ children }) => <tr className="hover:bg-blue-50/30 transition-colors">{children}</tr>,
                                    th: ({ children }) => (
                                        <th className="px-6 py-4 text-left text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] whitespace-nowrap">
                                            {children}
                                        </th>
                                    ),
                                    td: ({ children }) => (
                                        <td className="px-6 py-4 text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100">
                                            {children}
                                        </td>
                                    ),
                                }}
                            >
                                {value.tableContent}
                            </ReactMarkdown>
                        </div>
                    </div>
                );
            },
        },
        block: {
            h1: ({ children, value }: any) => {
                const index = blog?.body?.findIndex((b: any) => b._key === value._key) || 0;
                return <h1 id={`heading-${index}`} className="text-3xl sm:text-4xl font-bold mt-16 mb-8 text-slate-900 leading-tight scroll-mt-32">{children}</h1>;
            },
            h2: ({ children, value }: any) => {
                const index = blog?.body?.findIndex((b: any) => b._key === value._key) || 0;
                return <h2 id={`heading-${index}`} className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-slate-900 leading-tight scroll-mt-32">{children}</h2>;
            },
            h3: ({ children, value }: any) => {
                const index = blog?.body?.findIndex((b: any) => b._key === value._key) || 0;
                return <h3 id={`heading-${index}`} className="text-xl sm:text-2xl font-bold mt-10 mb-5 text-slate-900 leading-tight scroll-mt-32">{children}</h3>;
            },
            blockquote: ({ children }: any) => (
                <blockquote className="border-l-4 border-blue-600 pl-8 pr-8 py-10 my-12 bg-blue-50/50 rounded-r-3xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <MessageSquare className="w-24 h-24 text-blue-600" />
                    </div>
                    <div className="relative z-10 text-xl font-bold text-slate-700 italic leading-relaxed">{children}</div>
                </blockquote>
            ),
            normal: ({ children }: any) => <p className="mb-8 leading-relaxed text-slate-600 text-lg sm:text-[1.1rem] font-medium">{children}</p>,
        },
        marks: {
            strong: ({ children }: any) => <strong className="font-bold text-slate-900 underline decoration-blue-100 decoration-4 underline-offset-0 px-0.5">{children}</strong>,
            em: ({ children }: any) => <em className="italic">{children}</em>,
            link: ({ value, children }: any) => (
                <a href={value?.href} className="text-blue-600 hover:text-blue-800 font-bold underline decoration-2 underline-offset-4 transition-all" target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            ),
        },
        list: {
            bullet: ({ children }: any) => <ul className="list-disc list-outside mb-10 ml-8 space-y-4 text-slate-600 text-lg font-medium">{children}</ul>,
            number: ({ children }: any) => <ol className="list-decimal list-outside mb-10 ml-8 space-y-4 text-slate-600 text-lg font-medium">{children}</ol>,
        },
    };

    const _readingTime = estimateReadingTime(blog.body);

    return (
        <div className="bg-white min-h-screen">
            {/* Main Hero Header - Aligns with Navbar Width */}
            <header className="relative pt-32 pb-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
                <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] -z-0"></div>
                <div className="absolute bottom-0 left-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-[100px] -z-0"></div>

                <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left Side: Content */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                {/* Premium Badge */}
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full shadow-sm">
                                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                                    <span className="text-[10px] font-black text-blue-800 uppercase tracking-[0.2em]">
                                        Knowledge & Insights
                                    </span>
                                </div>

                                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                                    {blog.title}
                                </h1>

                                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                                    {blog.excerpt?.substring(0, 180)}...
                                </p>
                            </motion.div>

                            {/* Author & Meta Row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap items-center gap-6 py-8 border-y border-slate-200/60"
                            >
                                <div className="flex items-center gap-4">
                                    {blog.authorImage ? (
                                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-xl border-2 border-white ring-1 ring-slate-100">
                                            <Image src={urlFor(blog.authorImage).url()} alt={blog.author} fill className="object-cover" />
                                        </div>
                                    ) : (
                                        <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-bold shadow-xl">
                                            {blog.author?.charAt(0)}
                                        </div>
                                    )}
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Author</p>
                                        <p className="text-sm font-black text-slate-900 uppercase tracking-widest">{blog.author}</p>
                                        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-0.5">{blog.authorRole || "Specialist"}</p>
                                    </div>
                                </div>

                                <div className="h-12 w-px bg-slate-200 hidden sm:block mx-2"></div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Published</p>
                                        <p className="text-sm font-black text-slate-900 uppercase tracking-widest">
                                            {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 ml-auto">
                                    <div className="flex -space-x-2">
                                        <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')} className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-1"><Linkedin size={18} /></button>
                                        <button onClick={copyLink} className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-1 relative">
                                            <Link2 size={18} />
                                            {copied && <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded font-black uppercase">Copied</span>}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Featured Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white group">
                                {blog.mainImage && (
                                    <Image
                                        src={urlFor(blog.mainImage).url()}
                                        alt={blog.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                            </div>
                            {/* Decorative Glows */}
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Main Content Sections - Same Width Pattern */}
            <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">

                    {/* Left TOC Sidebar (Sticky) */}
                    <aside className="lg:col-span-3 order-2 lg:order-1">
                        <div className="lg:sticky lg:top-28 space-y-12">

                            {/* Detailed TOC */}
                            {tocItems.length > 0 && (
                                <div className="space-y-8">
                                    <div className="flex items-center gap-3">
                                        <TrendingUp className="w-5 h-5 text-blue-600" />
                                        <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">In this Guide</h3>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        {tocItems.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className={`text-left group flex items-start gap-4 py-3 transition-all duration-300 ${activeSection === item.id
                                                    ? 'text-blue-600 translate-x-3'
                                                    : 'text-slate-500 hover:text-slate-900'
                                                    }`}
                                            >
                                                <div className={`mt-1.5 w-6 h-[2px] rounded-full transition-all duration-300 ${activeSection === item.id ? 'bg-blue-600 w-10' : 'bg-slate-200 group-hover:bg-slate-400'}`}></div>
                                                <span className={`text-sm font-black whitespace-normal line-clamp-2 uppercase tracking-widest ${item.level === 3 ? 'text-[10px] pl-2 opacity-70' : ''}`}>
                                                    {item.text}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Sidebar CTA Card - Service Page Style */}
                            <div className="relative group perspective-1000">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative bg-slate-900 rounded-[2.5rem] p-10 overflow-hidden flex flex-col items-center text-center">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                                    <Layout className="w-12 h-12 text-blue-400 mb-6" />
                                    <h4 className="text-2xl font-black text-white mb-4 leading-tight">Ready for Modern Logistics?</h4>
                                    <p className="text-slate-400 text-sm font-medium mb-10 leading-relaxed">Let's build a smarter supply chain together. Expert consultation available across India.</p>
                                    <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-900/40 transition-all flex items-center justify-center gap-3 group/link uppercase tracking-[0.2em] text-[10px]">
                                        Start Conversation
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area (Reading Experience) */}
                    <div className="lg:col-span-9 order-1 lg:order-2">
                        <div className="max-w-4xl">
                            {/* Readability Intro */}
                            {blog.excerpt && (
                                <div className="relative mb-20">
                                    <div className="absolute -left-8 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"></div>
                                    <p className="text-2xl sm:text-3xl font-bold text-slate-800 leading-[1.6]">
                                        {blog.excerpt}
                                    </p>
                                </div>
                            )}

                            {/* Prose Engine */}
                            <article className="prose prose-lg prose-slate max-w-none">
                                <PortableText value={blog.body} components={portableTextComponents} />
                            </article>

                            {/* Insight FAQ Section - Enhanced Style */}
                            {blog.faqs && blog.faqs.length > 0 && (
                                <section className="mt-32 pt-20 border-t border-slate-100">
                                    <div className="text-center mb-16 space-y-4">
                                        <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto" />
                                        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">Common Industry Queries.</h2>
                                        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                                    </div>

                                    <div className="grid gap-10">
                                        {blog.faqs.map((faq, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                initial={{ opacity: 0, y: 30 }}
                                                className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 bg-slate-50 border border-slate-200 rounded-[2.5rem] p-10 lg:p-12 hover:shadow-2xl hover:bg-white transition-all duration-500"
                                            >
                                                <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center text-white font-black text-2xl shadow-xl">
                                                    0{idx + 1}
                                                </div>
                                                <div className="space-y-6">
                                                    <h3 className="text-2xl font-black text-slate-900 leading-tight uppercase tracking-tight">{faq.question}</h3>
                                                    <p className="text-lg text-slate-600 font-medium leading-relaxed">{faq.answer}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Related Articles - Modern Grid */}
                            {relatedBlogs.length > 0 && (
                                <section className="mt-32">
                                    <div className="flex flex-col sm:flex-row items-baseline justify-between gap-6 mb-16">
                                        <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Continue Learning.</h2>
                                        <Link href="/blog" className="flex items-center gap-2 text-sm font-black text-blue-600 hover:text-blue-800 transition-all group">
                                            HUB OVERVIEW <ArrowLeft className="w-5 h-5 rotate-180 transition-transform group-hover:translate-x-2" />
                                        </Link>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                                        {relatedBlogs.map((related: any) => (
                                            <Link key={related._id} href={`/blog/${related.slug.current}`} className="group block">
                                                <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 shadow-xl border-4 border-white transition-all group-hover:border-blue-100 group-hover:shadow-2xl">
                                                    <Image
                                                        src={related.mainImage ? urlFor(related.mainImage).url() : "/images/blog/images1.avif"}
                                                        alt={related.title}
                                                        fill
                                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-x-4 bottom-4">
                                                        <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] font-black text-blue-600 uppercase tracking-widest">{related.categories?.[0] || 'Logistics'}</span>
                                                    </div>
                                                </div>
                                                <h4 className="font-black text-lg text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 uppercase tracking-tight">
                                                    {related.title}
                                                </h4>
                                                <div className="flex items-center gap-2 mt-4 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    5 MIN READ
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Scroll To Top */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-12 right-6 sm:right-12 w-16 h-16 bg-slate-900 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-blue-600 transition-all z-[90] group active:scale-95"
                    >
                        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
