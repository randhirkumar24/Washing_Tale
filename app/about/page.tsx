'use client';

import PageHeader from '../components/PageHeader'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <PageHeader 
        title="About Us" 
        description="Your trusted laundry service partner"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Story Section */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#4AC4FF]/10 blur-3xl animate-pulse-slow" />
            <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-[#FF4A8D]/10 blur-3xl animate-pulse-slow" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#4AC4FF] to-[#FF4A8D] bg-clip-text text-transparent mb-6">
                Our Story
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] rounded-2xl overflow-hidden">
                  <Image
                    src="/about-image.jpg"
                    alt="Modern Laundry Facility"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-600 mb-4">
                    Founded in 2020, Washing Tale began with a simple mission: to make laundry day a breeze for busy professionals and families. We understood the challenges of balancing work, life, and household chores, which inspired us to create a service that takes the hassle out of laundry care.
                  </p>
                  <p className="text-gray-600">
                    Today, we're proud to serve thousands of satisfied customers, providing premium laundry and dry cleaning services with the convenience of doorstep pickup and delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4AC4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#4AC4FF]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#4AC4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality First</h3>
                <p className="text-gray-600">We use premium detergents and state-of-the-art equipment to ensure your clothes receive the best care possible.</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4A8D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#FF4A8D]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#FF4A8D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Time-Saving</h3>
                <p className="text-gray-600">Our efficient service saves you precious time, with convenient pickup and delivery at your preferred schedule.</p>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9F4A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#FF9F4A]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#FF9F4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">We're committed to using environmentally friendly practices and products to protect both your clothes and our planet.</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -right-20 bottom-20 w-64 h-64 rounded-full bg-[#FF9F4A]/10 blur-3xl animate-pulse-slow" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#4AC4FF] to-[#FF4A8D] bg-clip-text text-transparent">5000+</div>
                  <div className="text-gray-600 mt-1">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#FF4A8D] to-[#FF9F4A] bg-clip-text text-transparent">15+</div>
                  <div className="text-gray-600 mt-1">Service Areas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#FF9F4A] to-[#4AC4FF] bg-clip-text text-transparent">24/7</div>
                  <div className="text-gray-600 mt-1">Customer Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#4AC4FF] to-[#FF4A8D] bg-clip-text text-transparent">98%</div>
                  <div className="text-gray-600 mt-1">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 