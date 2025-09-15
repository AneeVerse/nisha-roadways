'use client';

import React from 'react';
import Image from 'next/image';

const LogoSlider = () => {
  const logos = [
    {
      src: '/logo-slider/6791e180383eeafd4f2f647d_client-logo-01.png',
      alt: 'Client Logo 1'
    },
    {
      src: '/logo-slider/6791e17f208fbdf064b35971_client-logo-02.png',
      alt: 'Client Logo 2'
    },
    {
      src: '/logo-slider/6791e17f444e72d1912c044a_client-logo-03.png',
      alt: 'Client Logo 3'
    },
    {
      src: '/logo-slider/6791e1808c821e157fc6bb68_client-logo-04.png',
      alt: 'Client Logo 4'
    },
    {
      src: '/logo-slider/6791e182208fbdf064b36294_client-logo-05.png',
      alt: 'Client Logo 5'
    },
    {
      src: '/logo-slider/6791e180c9ca460b895251af_client-logo-06.png',
      alt: 'Client Logo 6'
    },
    {
      src: '/logo-slider/6791e180c5dd590931541deb_client-logo-07.png',
      alt: 'Client Logo 7'
    },
    {
      src: '/logo-slider/6791e18612fcde9b750f16aa_client-logo-08.png',
      alt: 'Client Logo 8'
    }
  ];

  type Logo = { src: string; alt: string };

  const Card = ({ src, alt }: Logo) => (
    <div className="mx-4 md:mx-6 lg:mx-8 flex-shrink-0">
      <div className="w-[160px] h-[90px] md:w-[180px] md:h-[100px] bg-white rounded-xl shadow-sm ring-1 ring-gray-100 flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={120}
          height={60}
          className="w-auto h-6 md:h-8 object-contain"
        />
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#f4f6ff] py-6 overflow-hidden">
      <div className="flex animate-slide">
        <div className="flex items-center justify-center min-w-max">
          {logos.map((logo, index) => (
            <Card key={`first-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
        <div className="flex items-center justify-center min-w-max">
          {logos.map((logo, index) => (
            <Card key={`second-${index}`} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide { animation: slide 30s linear infinite; }
        .animate-slide:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default LogoSlider;
