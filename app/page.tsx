'use client';

import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: 'Easy Scheduling',
    description: 'Book your laundry pickup with just a few clicks',
    icon: '📅',
    bgColor: 'bg-blue-50'
  },
  {
    title: 'Quality Care',
    description: 'Expert handling of all your garments',
    icon: '✨',
    bgColor: 'bg-pink-50'
  },
  {
    title: 'Fast Delivery',
    description: '96-hour turnaround on standard services',
    icon: '🚚',
    bgColor: 'bg-orange-50'
  },
  {
    title: 'Eco-Friendly',
    description: 'Sustainable cleaning practices and products',
    icon: '🌱',
    bgColor: 'bg-green-50'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Busy Professional',
    content: 'Washing Tale has made my life so much easier. Their service is reliable and my clothes always come back perfectly clean and pressed.',
    image: '/testimonial1.jpg'
  },
  {
    name: 'Mark Davis',
    role: 'Business Owner',
    content: 'As a business owner, I appreciate their attention to detail and professional service. They handle our company uniforms with great care.',
    image: '/testimonial2.jpg'
  },
  {
    name: 'Emily Chen',
    role: 'Working Parent',
    content: 'The convenience of their pickup and delivery service is a game-changer for our busy family. Highly recommended!',
    image: '/testimonial3.jpg'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Washing Tale?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 text-3xl transform hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF9F4A] to-[#FF9F4A]/80 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg transform hover:scale-105 transition-transform">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Schedule Pickup</h3>
              <p className="text-gray-600">Book your preferred pickup time through our easy-to-use platform</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF4A8D] to-[#FF4A8D]/80 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg transform hover:scale-105 transition-transform">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">We Clean</h3>
              <p className="text-gray-600">Your items are professionally cleaned with eco-friendly products</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#4AC4FF] to-[#4AC4FF]/80 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg transform hover:scale-105 transition-transform">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Delivery</h3>
              <p className="text-gray-600">Clean clothes delivered back to your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#FF4A8D]/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF9F4A] to-[#FF4A8D]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Best Laundry Service?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Washing Tale with their laundry needs.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-[#FF4A8D] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
