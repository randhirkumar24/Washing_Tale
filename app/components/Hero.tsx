'use client';

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-[30vh] pt-14 pb-4 md:pt-16 md:pb-6 bg-gradient-to-br from-white via-[#FF9F4A]/5 to-[#FF4A8D]/5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-3"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              <span className="text-[#FF4A8D]">Premium</span> Laundry Service at Your Doorstep
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Experience the convenience of professional laundry and dry cleaning services with free pickup and delivery. We take care of your clothes with the utmost attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <Link href="/book">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-[#FF4A8D] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#FF4A8D]/90 transition-colors shadow-md shadow-[#FF4A8D]/20"
                >
                  Schedule Pickup
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto border-2 border-[#FF9F4A] text-[#FF9F4A] px-5 py-2 rounded-lg font-semibold hover:bg-[#FF9F4A] hover:text-white transition-all"
                >
                  View Services
                </motion.button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-4 max-w-md">
              <div className="bg-white rounded-lg p-2.5 shadow-md shadow-[#4AC4FF]/10">
                <div className="flex items-center gap-2">
                  <div className="bg-[#FF4A8D]/10 p-1.5 rounded-md">
                    <svg className="w-4 h-4 text-[#FF4A8D]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">4.9/5</div>
                    <div className="text-xs text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-2.5 shadow-md shadow-[#4AC4FF]/10">
                <div className="flex items-center gap-2">
                  <div className="bg-[#4AC4FF]/10 p-1.5 rounded-md">
                    <svg className="w-4 h-4 text-[#4AC4FF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-800">100%</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-[450px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF9F4A]/20 to-[#FF4A8D]/20 rounded-full blur-3xl transform -translate-y-4"></div>
              <Image
                src="/logo.png"
                alt="Laundry Service Illustration"
                fill
                className="object-contain z-10 relative animate-float"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 -left-4 w-10 h-10 bg-[#4AC4FF]/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-4 w-12 h-12 bg-[#FF9F4A]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 