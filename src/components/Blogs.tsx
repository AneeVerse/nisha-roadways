"use client";

import Image from "next/image";
import React from "react";

type Blog = {
  id: string;
  title: string;
  date: string;
  author: string;
  thumbnail: string;
};

const featured = {
  title: "COVID-19 How We Can Help your Logistics",
  date: "JAN 23, 2025",
  author: "ADMIN",
  image: "/blogs/67909529f933bda093f816f2_blog-img-04.jpg",
};

const items: Blog[] = [
  {
    id: "1",
    title: "The Guide On How to Ship Oversize Loads",
    date: "JAN 23, 2025",
    author: "ADMIN",
    thumbnail: "/blogs/679094aa2bda06f446f1ec5d_blog-img-01.jpg",
  },
  {
    id: "2",
    title: "Five reasons you can deliver best enterprise",
    date: "FEB 13, 2025",
    author: "ADMIN",
    thumbnail: "/blogs/67909505a92acb1b5b786478_blog-img-02.jpg",
  },
  {
    id: "3",
    title: "Three reasons you can visible in supply chain",
    date: "JAN 23, 2025",
    author: "ADMIN",
    thumbnail: "/blogs/6790951ba92acb1b5b787ea5_blog-img-03.jpg",
  },
];

const MetaRow: React.FC<{ date: string; author: string; className?: string }> = ({ date, author, className }) => (
  <div className={`flex items-center gap-4 text-xs text-slate-500 ${className ?? ""}`}>
    <div className="flex items-center gap-1">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 0 0 2-2V7H3v12a2 2 0 0 0 2 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{date}</span>
    </div>
    <div className="flex items-center gap-1">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" />
      </svg>
      <span>BY {author}</span>
    </div>
  </div>
);

const Blogs: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-[#f4f6ff]">
      {/* Section heading */}
      <div className="text-center mb-10">
        <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <Image src="/67761af397573ca47fb7f6cb_subtitle-icon.png" alt="Blog icon" width={16} height={16} />
          <span>Our Blog</span>
        </div>
        <h2 className="text-4xl font-bold leading-tight text-slate-900 font-[family-name:var(--font-space-grotesk)]">
          Updated Blogs <span className="text-blue-600">& News</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr]">
        {/* Left list */}
        <div className="space-y-6">
          {items.map((b) => (
            <article key={b.id} className="flex items-center gap-6 rounded-[28px] bg-white p-5 sm:p-6 ring-1 ring-black/5 shadow-sm card-clip overflow-hidden">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
                <Image src={b.thumbnail} alt={b.title} fill className="object-cover" />
              </div>
              <div>
                <MetaRow date={b.date} author={b.author} />
                <h3 className="mt-2 text-lg font-bold text-slate-900 max-w-xl font-[family-name:var(--font-space-grotesk)]">
                  {b.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Right featured */}
        <article className="relative rounded-[28px] overflow-hidden ring-1 ring-black/5 card-clip">
          <div className="relative h-[480px] w-full">
            <Image src={featured.image} alt={featured.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold max-w-xl font-[family-name:var(--font-space-grotesk)]">{featured.title}</h3>
            <MetaRow date={featured.date} author={featured.author} className="mt-3 text-white/80" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blogs;


