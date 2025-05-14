'use client';

import Hero from './components/Hero'
import Services from './components/Services'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: 'Easy Scheduling',
    description: 'Book your laundry pickup with just a few clicks',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="5" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 11H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 15H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    bgColor: 'bg-blue-50',
    iconColor: 'text-[#4AC4FF]'
  },
  {
    title: 'Quality Care',
    description: 'Expert handling of all your garments',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.2 8.6L22 9.6L17 14.6L18.2 21.4L12 18.2L5.8 21.4L7 14.6L2 9.6L8.8 8.6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgColor: 'bg-pink-50',
    iconColor: 'text-[#FF4A8D]'
  },
  {
    title: 'Fast Delivery',
    description: '96-hour turnaround on standard services',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 17H4C3.44772 17 3 16.5523 3 16V11L5 5H15L17 11V16C17 16.5523 16.5523 17 16 17H15M5 17L6 11M5 17H15M15 17L14 11M6 11L8 7M6 11H14M14 11L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="20" r="1" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="13" cy="20" r="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    bgColor: 'bg-orange-50',
    iconColor: 'text-[#FF9F4A]'
  },
  {
    title: 'Eco-Friendly',
    description: 'Sustainable cleaning practices and products',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7C14.4853 7 16.5 9.01472 16.5 11.5C16.5 13.9853 14.4853 16 12 16C9.51472 16 7.5 13.9853 7.5 11.5C7.5 9.01472 9.51472 7 12 7Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" fill="currentColor"/>
      </svg>
    ),
    bgColor: 'bg-green-50',
    iconColor: 'text-[#22C55E]'
  }
];

const testimonials = [
  {
    name: 'Randhir Pandey',
    role: 'Busy Professional',
    content: 'Washing Tale has made my life so much easier. Their service is reliable and my clothes always come back perfectly clean and pressed.',
    image: '/testimonial1.jpg'
  },
  {
    name: 'Aman Gond',
    role: 'Business Owner',
    content: 'As a business owner, I appreciate their attention to detail and professional service. They handle our company uniforms with great care.',
    image: '/testimonial2.jpg'
  },
  {
    name: 'Sudeep Mishra',
    role: 'Working Parent',
    content: 'The convenience of their pickup and delivery service is a game-changer for our busy family. Highly recommended!',
    image: '/testimonial3.jpg'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
            Why Choose Washing Tale?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-3 transform hover:scale-110 transition-transform ${feature.iconColor}`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF9F4A] to-[#FF9F4A]/80 rounded-xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule Pickup</h3>
              <p className="text-sm text-gray-600">Book your preferred pickup time through our easy-to-use platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF4A8D] to-[#FF4A8D]/80 rounded-xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">We Clean</h3>
              <p className="text-sm text-gray-600">Your items are professionally cleaned with eco-friendly products</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4AC4FF] to-[#4AC4FF]/80 rounded-xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery</h3>
              <p className="text-sm text-gray-600">Clean clothes delivered back to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Testimonials Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-[#FF4A8D]/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-[#FF9F4A] to-[#FF4A8D]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience the Best Laundry Service?
          </h2>
          <p className="text-white text-base mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Washing Tale with their laundry needs.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-[#FF4A8D] px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}
