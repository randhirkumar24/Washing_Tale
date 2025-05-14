'use client';

import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-[#FF9F4A]/5 via-[#FF4A8D]/5 to-[#4AC4FF]/5 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-3 transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.svg"
                alt="Washing Tale Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-[#FF9F4A] via-[#FF4A8D] to-[#4AC4FF] bg-clip-text text-transparent">
              Washing Tale
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-1.5">
            {title}
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-[#4AC4FF]/10 flex items-center justify-center group-hover:bg-[#4AC4FF]/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-[#4AC4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">24/7 Service</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-[#FF4A8D]/10 flex items-center justify-center group-hover:bg-[#FF4A8D]/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-[#FF4A8D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Quality Assured</span>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="w-7 h-7 rounded-lg bg-[#FF9F4A]/10 flex items-center justify-center group-hover:bg-[#FF9F4A]/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-[#FF9F4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader; 