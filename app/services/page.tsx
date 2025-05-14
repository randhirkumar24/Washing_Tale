'use client';

import PageHeader from '../components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    name: 'Wash & Fold',
    description: 'Professional washing, drying, and folding service for your everyday laundry needs.',
    price: 'From $2.50/lb',
    features: [
      'Sorted by color and fabric type',
      'Premium detergents used',
      'Neatly folded and packaged',
      '24-hour turnaround available'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    name: 'Dry Cleaning',
    description: 'Expert dry cleaning service for your delicate and special care garments.',
    price: 'From $6/item',
    features: [
      'Gentle cleaning process',
      'Stain removal treatment',
      'Pressed and hung',
      'Eco-friendly solvents'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15l-5-5L5 21M5 3L3 5l2 2m14-4l2 2l-2 2M5 13l-2 2l2 2" />
      </svg>
    )
  },
  {
    name: 'Steam Ironing',
    description: 'Professional pressing service to keep your garments crisp and wrinkle-free.',
    price: 'From $3/item',
    features: [
      'Steam treatment',
      'Hand-pressed finish',
      'Hung or folded as requested',
      'Same-day service available'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    name: 'Specialty Cleaning',
    description: 'Specialized cleaning services for household items and delicate materials.',
    price: 'Custom Quote',
    features: [
      'Curtains and drapes',
      'Bedding and linens',
      'Leather and suede',
      'Designer garments'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <PageHeader 
        title="Our Services" 
        description="Professional laundry services tailored to your needs"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Featured Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-8 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#4AC4FF]/5 via-[#FF4A8D]/5 to-[#FF9F4A]/5 blur-3xl animate-pulse-slow" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#4AC4FF] via-[#FF4A8D] to-[#FF9F4A] p-0.5">
                      <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center">
                        <div className="text-[#FF4A8D]">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-[#4AC4FF] to-[#FF4A8D] bg-clip-text text-transparent">
                        {service.name}
                      </h3>
                      <div className="text-[#FF9F4A] font-semibold">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#4AC4FF]/10 flex items-center justify-center">
                          <svg className="w-3 h-3 text-[#4AC4FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/book"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#4AC4FF] via-[#FF4A8D] to-[#FF9F4A] text-white font-semibold hover:shadow-lg hover:shadow-[#FF4A8D]/25 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#4AC4FF]/10 blur-3xl animate-pulse-slow" />
            <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-[#FF4A8D]/10 blur-3xl animate-pulse-slow" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#4AC4FF] to-[#FF4A8D] bg-clip-text text-transparent mb-8 text-center">
                How It Works
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: '01',
                    title: 'Schedule',
                    description: 'Book your pickup online or via phone'
                  },
                  {
                    step: '02',
                    title: 'Pickup',
                    description: 'We collect from your doorstep'
                  },
                  {
                    step: '03',
                    title: 'Clean',
                    description: 'Expert cleaning of your items'
                  },
                  {
                    step: '04',
                    title: 'Deliver',
                    description: 'Return to your preferred location'
                  }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#4AC4FF] via-[#FF4A8D] to-[#FF9F4A] p-0.5 mx-auto mb-4">
                      <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center">
                        <span className="font-bold text-[#FF4A8D]">{step.step}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 