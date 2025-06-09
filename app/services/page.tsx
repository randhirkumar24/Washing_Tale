'use client';

import PageHeader from '../components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    name: 'Bedding & Linens',
    description: 'Professional cleaning for bed sheets, duvet covers, and bedroom textiles.',
    price: 'From ₹15',
    features: [
      'Double & Single Bedsheets',
      'Duvet covers & Blankets', 
      'Mattress Protectors',
      'Pillow Covers'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    name: 'Clothing & Garments',
    description: 'Expert cleaning for personal clothing and professional wear.',
    price: 'From ₹20',
    features: [
      'Shirts, Pants & T-shirts',
      'Coats & Waist Coats',
      'Chef Coats & Aprons',
      'Ties & Accessories'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    name: 'Towels & Bath Items',
    description: 'Specialized cleaning for all types of towels and bathroom textiles.',
    price: 'From ₹6',
    features: [
      'Bath Towels & Hand Towels',
      'Face Towels',
      'Bathmats',
      'Fresh & Hygienic cleaning'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    )
  },
  {
    name: 'Home Textiles',
    description: 'Complete cleaning service for curtains, table linens, and decorative items.',
    price: 'From ₹7',
    features: [
      'Window Curtains & Drapes',
      'Table Cloths & Runners',
      'Chair Covers & Cushions',
      'Decorative Frills'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
      </svg>
    )
  },
  {
    name: 'Kitchen & Cleaning Items',
    description: 'Professional cleaning for kitchen textiles and cleaning accessories.',
    price: 'From ₹8',
    features: [
      'Napkins & Naprons',
      'Wiping Cloths & Dusters',
      'Dry Mops & Ribbens',
      'Kitchen Essentials'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    )
  },
  {
    name: 'Bulk Pricing',
    description: 'Weight-based pricing for large loads and mixed textile items.',
    price: '₹49/Kg',
    features: [
      'Perfect for large loads',
      'Mixed textile items',
      'Cost-effective solution',
      'Quick turnaround'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-3m-3 3l-3-3" />
      </svg>
    )
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <PageHeader 
        title="Our Laundry Services" 
        description="Professional cloth-based cleaning services with transparent pricing"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Featured Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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