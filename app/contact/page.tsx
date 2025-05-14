'use client';

import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'support@washingtale.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Address',
      value: '123 Laundry Street, Clean City, ST 12345',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Hours',
      value: 'Mon-Sun: 7:00 AM - 9:00 PM',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our friendly team"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-8 relative overflow-hidden order-2 md:order-1">
              <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#4AC4FF]/10 blur-3xl animate-pulse-slow" />
              <div className="absolute -left-20 bottom-20 w-64 h-64 rounded-full bg-[#FF4A8D]/10 blur-3xl animate-pulse-slow" />
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4AC4FF] to-[#FF4A8D] bg-clip-text text-transparent mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">
                      Name
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200 placeholder:text-gray-400"
                        placeholder="Enter your name"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200 placeholder:text-gray-400"
                        placeholder="Enter your email"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">
                      Subject
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200 appearance-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="service">Service Question</option>
                        <option value="booking">Booking Issue</option>
                        <option value="feedback">Feedback</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                        placeholder="Enter your message"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full group relative px-8 py-3 rounded-xl bg-gradient-to-r from-[#4AC4FF] via-[#FF4A8D] to-[#FF9F4A] text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4A8D]/25 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span className="relative z-10">Send Message</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF9F4A] via-[#FF4A8D] to-[#4AC4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 order-1 md:order-2">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl p-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4AC4FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#4AC4FF] via-[#FF4A8D] to-[#FF9F4A] p-0.5 mb-4">
                        <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center">
                          <div className="text-[#FF4A8D]">
                            {info.icon}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-sm font-medium text-gray-500 mb-1">{info.title}</h3>
                      <p className="text-gray-800 font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Section */}
              <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#FF9F4A]/10 blur-3xl animate-pulse-slow" />
                
                <div className="relative z-10">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-[#4AC4FF] to-[#FF4A8D] bg-clip-text text-transparent mb-4">
                    Find Us
                  </h2>
                  <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100">
                    {/* Add your map component or iframe here */}
                    <div className="w-full h-full bg-gradient-to-br from-[#4AC4FF]/5 via-[#FF4A8D]/5 to-[#FF9F4A]/5 flex items-center justify-center">
                      <span className="text-gray-400">Map placeholder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 