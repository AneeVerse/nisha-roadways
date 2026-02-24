
'use client';

import React from 'react';

const CtaBanner: React.FC = () => {
  return (
    <section className="py-4 sm:py-6 flex justify-center mt-4 sm:mt-4">
      <div className="relative bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 text-white overflow-hidden rounded-xl sm:rounded-2xl max-w-7xl w-full mx-2 sm:mx-4 mb-6 sm:mb-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        </div>

        {/* Floating Elements - Hidden on mobile */}
        <div className="hidden sm:block absolute top-4 left-8 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-lg animate-pulse"></div>
        <div className="hidden sm:block absolute bottom-4 right-8 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>

        <div className="px-4 py-5 sm:px-8 sm:py-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-8">

            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-xs sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-1.5 sm:mb-4">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Ready to Transform Your Supply Chain?
                </span>
              </h2>

              <p className="text-[9px] sm:text-sm lg:text-base text-slate-200 mb-3 sm:mb-6 leading-relaxed font-light">
                Let's discuss how our integrated logistics solutions can optimize your operations.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center lg:items-start lg:justify-start justify-center">
                <button className="group relative px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-[10px] sm:text-sm rounded-lg shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                    START YOUR FIRST SHIPMENT
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>

                <div className="flex items-center gap-1.5 sm:gap-2 text-slate-300 text-[9px] sm:text-sm">
                  <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 bg-green-500/20 rounded-full">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Free consultation • 24h response</span>
                </div>
              </div>
            </div>

            {/* Right Stats - Full width on mobile with justify-around */}
            <div className="flex w-full sm:w-auto justify-around sm:justify-start gap-2 sm:gap-4 lg:gap-8">
              <div className="text-center p-2 sm:p-3 lg:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex-1 sm:flex-none max-w-[90px] sm:max-w-none">
                <div className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-yellow-500/20 rounded-full mb-1 sm:mb-2 mx-auto">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-bold text-white">4.9/5</div>
                <div className="text-[9px] sm:text-xs text-slate-300">Rating</div>
              </div>

              <div className="text-center p-2 sm:p-3 lg:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex-1 sm:flex-none max-w-[90px] sm:max-w-none">
                <div className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-green-500/20 rounded-full mb-1 sm:mb-2 mx-auto">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-bold text-white">ISO</div>
                <div className="text-[9px] sm:text-xs text-slate-300">Certified</div>
              </div>

              <div className="text-center p-2 sm:p-3 lg:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 flex-1 sm:flex-none max-w-[90px] sm:max-w-none">
                <div className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-500/20 rounded-full mb-1 sm:mb-2 mx-auto">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15V9h4v6H8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-bold text-white">500+</div>
                <div className="text-[9px] sm:text-xs text-slate-300">Clients</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;