'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1D2D84] text-white font-poppins pt-[83px] pb-[34px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[98px]">
        {/* Top Section - Fulfillment solution */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[46px] pb-[46px]">
          <div>
            <p className="text-[15.11px] font-semibold leading-[40.28px] mb-[1px]">
              Get in touch with ShipBob
            </p>
            <h2 className="text-[34.24px] font-semibold leading-[40.28px] mb-[20px]">
              Looking for a fulfillment solution?
            </h2>
            <div className="flex gap-[16px] items-center">
              <div className="relative w-[57.29px] h-[57.29px]">
                <Image
                  src="/images/footer/542b1b8ddfdc1fb5e6b45eb750a595dcdb0d9ef5.png"
                  alt="AMMT Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[57.29px] h-[57.29px]">
                <Image
                  src="/images/footer/0ac53d892398e072949c7f80ae7efc8a77c580f3.png"
                  alt="BGTA Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-[20px] md:mt-0">
            <button className="inline-flex items-center bg-white rounded-full px-[18px] py-[8px] gap-[8px] hover:shadow-lg transition-all duration-300 group">
              <span className="text-[#1D2D84] font-semibold text-[14px] leading-[20px]">
                Contact Us
              </span>
              <div className="w-[22px] h-[22px] bg-[#1D2D84] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Thick Divider Line - Figma Line 7 */}
        <div className="w-full h-[2px] bg-[#6373BD] mb-[66px]"></div>

        {/* Middle Section - Links and Info */}
        <div className="flex flex-col lg:flex-row justify-between mb-[100px] gap-12 lg:gap-8">
          {/* Company Column */}
          <div className="max-w-[300px]">
            <div className="mb-[24px]">
              <div className="relative w-[220.54px] h-[73.51px]">
                <Image
                  src="/images/nav-logo.png"
                  alt="Nisha Logo"
                  fill
                  className="brightness-0 invert object-contain"
                />
              </div>
            </div>

            <div className="flex gap-[34px] mb-[32px]">
              <Link href="https://www.linkedin.com/company/nisha-roadways-pvt-ltd/" target="_blank" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/roadwaysnisha/" target="_blank" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="https://www.facebook.com/nisharoadways" target="_blank" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="https://wa.me/919820420924" target="_blank" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </Link>
              <Link href="mailto:info@nisharoadways.com" className="hover:opacity-70 transition-opacity">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </Link>
            </div>

            <p className="text-[11px] text-white/80 leading-[16px]">
              Copyright © 2017 Nisha Roadways Pvt. Ltd.<br />
              Terms and Conditions of Use and Privacy Policy.
            </p>
          </div>

          {/* Nav Links columns */}
          <div className="flex flex-wrap gap-12 lg:gap-[130px]">
            {/* Contact Info */}
            <div className="min-w-[200px]">
              <div className="inline-block relative mb-[20px]">
                <h3 className="text-[17.11px] font-semibold leading-[20.14px]">
                  Contact Info
                </h3>
                <div className="absolute -bottom-[8px] left-0 w-[40px] h-[2px] bg-white"></div>
              </div>
              <ul className="space-y-[4px] text-[14.08px] text-white font-medium leading-[21.13px]">
                <li>Nisha Roadways Pvt. Ltd</li>
                <li>909, Mayuresh Cosmos,Plot No. 37,</li>
                <li>Sector-11,C.B.D Belapur,Navi Mumbai – 400 614</li>
                <li className="pt-[16px]">
                  <strong>Phone:</strong> +91-22- 41632222<br />
                  <strong>Mobile:</strong> +91-22-2757 2220<br />
                  <strong>Email:</strong> info@nisharoadways.com
                </li>
              </ul>
            </div>

            {/* Company Column Links */}
            <div className="min-w-[100px]">
              <div className="inline-block relative mb-[20px]">
                <h3 className="text-[17.11px] font-semibold leading-[20.14px]">
                  Company
                </h3>
                <div className="absolute -bottom-[8px] left-0 w-[40px] h-[2px] bg-white"></div>
              </div>
              <ul className="space-y-[8px] text-[14.08px] text-white font-medium leading-[21.13px]">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/infrastructure">Infrastructure</Link></li>
                <li><Link href="/container-sizes">Container Sizes</Link></li>
                <li><Link href="/media">Media</Link></li>
                <li><Link href="/network">Network</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Legal Column Links */}
            <div className="min-w-[100px]">
              <div className="inline-block relative mb-[20px]">
                <h3 className="text-[17.11px] font-semibold leading-[20.14px]">
                  Legal
                </h3>
                <div className="absolute -bottom-[8px] left-0 w-[40px] h-[2px] bg-white"></div>
              </div>
              <ul className="space-y-[8px] text-[14.08px] text-white font-medium leading-[21.13px]">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/code-of-conduct">Supplier Code of Conduct</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Thick Divider Line - Bottom Divider */}
        <div className="w-full h-[2px] bg-[#6373BD] mb-[30px]"></div>

        {/* Bottom Section */}
        <div className="pt-[0px] flex flex-col md:flex-row justify-between items-center text-[11px] text-white/60">
          <p>© 2025 Nisha Roadways Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-[8px] mt-[10px] md:mt-0">
            <span>Designed & Managed by Aneeverse</span>
            <Image
              src="/images/aneeverse-logo.svg"
              alt="Aneeverse Logo"
              width={16}
              height={16}
              className="brightness-0 invert"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
