'use client';

import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    service: 'wash-fold',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <PageHeader 
        title="Schedule Pickup" 
        description="Book your laundry service in minutes"
      />
      
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 relative overflow-hidden">
            {/* Background Gradient Blobs */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#4AC4FF]/10 blur-3xl animate-pulse-slow" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#FF4A8D]/10 blur-3xl animate-pulse-slow" />
            <div className="absolute right-20 bottom-20 w-64 h-64 rounded-full bg-[#FF9F4A]/10 blur-3xl animate-pulse-slow" />

            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="group">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">Name</label>
                  <div className="relative">
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200 placeholder:text-gray-400"
                      placeholder="Enter your full name"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">Email</label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200 placeholder:text-gray-400"
                      placeholder="Enter your email address"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">Phone</label>
                  <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200 placeholder:text-gray-400"
                      placeholder="Enter your phone number"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="service" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">Service</label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200 appearance-none"
                    >
                      <option value="wash-fold">Wash & Fold</option>
                      <option value="dry-cleaning">Dry Cleaning</option>
                      <option value="ironing">Steam Ironing</option>
                      <option value="shoe">Shoe Laundry</option>
                      <option value="carpet">Carpet Cleaning</option>
                      <option value="sofa">Sofa Cleaning</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                  </div>
                </div>

                <div className="group md:col-span-2">
                  <label htmlFor="address" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">Address</label>
                  <div className="relative">
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200 placeholder:text-gray-400"
                      placeholder="Enter your pickup address"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">Date</label>
                  <div className="relative">
                    <input
                      id="date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="time" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">Time</label>
                  <div className="relative">
                    <input
                      id="time"
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                  </div>
                </div>

                <div className="group md:col-span-2">
                  <label htmlFor="notes" className="text-sm font-medium text-gray-700 mb-1.5 block transition-colors group-focus-within:text-[#4AC4FF]">Special Instructions</label>
                  <div className="relative">
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#4AC4FF]/50 focus:border-[#4AC4FF] outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                      rows={3}
                      placeholder="Add any special instructions or notes"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4AC4FF]/0 via-[#FF4A8D]/0 to-[#FF9F4A]/0 opacity-0 group-focus-within:opacity-10 pointer-events-none transition-opacity duration-300" />
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-[#4AC4FF] via-[#FF4A8D] to-[#FF9F4A] text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4A8D]/25 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="relative z-10">Schedule Pickup</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF9F4A] via-[#FF4A8D] to-[#4AC4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 