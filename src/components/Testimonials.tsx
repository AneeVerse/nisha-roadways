"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  rating: number; // 0-5
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jennifer Smith",
    role: "Client, France",
    avatar: "/testimonals/6790b4bfb4f8cf5b84488dc5_testimonial-img-01.jpg",
    rating: 4,
    quote:
      "I have lost the weight I struggled with, I feel fitter and I'm getting the right fuel for my body every day. Your team personalized nutrition plan help me improve my daily plan to change my habit for healthy living.",
  },
  {
    name: "Richard Scott",
    role: "Client, Oman",
    avatar: "/testimonals/6790b4bf4ec37274ab84d565_testimonial-img-02.jpg",
    rating: 4,
    quote:
      "I feel fitter and I'm getting the right fuel for my body every day. The plan helped me change my habits for healthy living and stay consistent.",
  },
  {
    name: "Emily Carter",
    role: "Client, USA",
    avatar: "/testimonals/6790b4c0a82850ef10ddac7b_testimonial-img-03.jpg",
    rating: 5,
    quote:
      "Professional service and thoughtful guidance. The approach made it easy to follow and I saw real results in a few weeks.",
  },
  {
    name: "Daniel Lee",
    role: "Client, Singapore",
    avatar: "/testimonals/6790b4c141507d69d69e8d99_testimonial-img-04.jpg",
    rating: 4,
    quote:
      "Clear plan, helpful tips, and great support. I have more energy and better daily rhythm now.",
  },
  {
    name: "Priya Sharma",
    role: "Client, India",
    avatar: "/testimonals/6790b4bf2b5038278f91241f_testimonial-img-05.jpg",
    rating: 5,
    quote:
      "The team made the process simple. I feel confident and focused—highly recommended!",
  },
];

function chunkIntoPairs<T>(items: T[]): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    result.push(items.slice(i, i + 2));
  }
  return result;
}

const Star: React.FC<{ filled?: boolean }> = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "#f59e0b" : "none"}
    stroke={filled ? "#f59e0b" : "#cbd5e1"}
    strokeWidth="2"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const QuoteIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="#3b82f6" opacity="0.9">
    <path d="M7.17 6.17C5.41 7.93 4.5 9.86 4.5 12v6h6v-6H8.5c0-1.31.67-2.69 2.17-4.17L7.17 6.17zm9 0C14.41 7.93 13.5 9.86 13.5 12v6h6v-6h-2c0-1.31.67-2.69 2.17-4.17l-3.5-1.66z" />
  </svg>
);

const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => {
  return (
    <article className="relative h-full rounded-[28px] bg-white p-6 sm:p-8 shadow-sm ring-1 ring-black/5 card-clip">
      <div className="mb-4 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} filled={idx < t.rating} />
        ))}
      </div>
      <p className="text-slate-600 leading-7">
        {t.quote}
      </p>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={t.avatar} alt={t.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">{t.name}</p>
            <p className="text-xs text-slate-500">{t.role}</p>
          </div>
        </div>
        <QuoteIcon />
      </div>
    </article>
  );
};

const Testimonials: React.FC = () => {
  const slides = useMemo(() => chunkIntoPairs(testimonials), []);
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = slides.length || 1;

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setPage((p) => (p + 1) % total);
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused, total]);

  const goPrev = () => setPage((p) => (p - 1 + total) % total);
  const goNext = () => setPage((p) => (p + 1) % total);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-[#f4f6ff]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[360px_1fr]">
        {/* Left dark panel */}
        <div className="rounded-[28px] bg-[#0a0f2a] text-white p-8 flex flex-col justify-between min-h-[420px]">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70">
              <Image src="/67761af397573ca47fb7f6cb_subtitle-icon.png" alt="Testimonials icon" width={16} height={16} />
              <span>Clients Testimonials!</span>
            </div>
            <h3 className="text-4xl font-bold leading-tight font-[family-name:var(--font-space-grotesk)]">
              Clients Say
              <br />
              <span className="text-blue-400">About us</span>
            </h3>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous testimonials"
              className="h-12 w-12 rounded-xl bg-white text-slate-900 ring-1 ring-black/5 flex items-center justify-center hover:bg-slate-100 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonials"
              className="h-12 w-12 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {slides.map((pair, idx) => (
              <div key={idx} className="min-w-full px-1 sm:px-2">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {pair.map((t, i) => (
                    <TestimonialCard key={`${t.name}-${i}`} t={t} />
                  ))}
                  {pair.length === 1 ? (
                    <div className="hidden md:block" />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


