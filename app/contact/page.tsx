'use client';

import { useState } from 'react';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our friendly team"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-[#FF9F4A]/5 to-[#FF4A8D]/5 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF4A8D] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF4A8D] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF4A8D] focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF4A8D] focus:border-transparent"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#FF4A8D] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#4AC4FF]/10 to-[#FF9F4A]/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visit Us</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800">Address</h4>
                  <p className="text-gray-600">123 Laundry Lane<br />Cleanville, CV 12345</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 7:00 AM - 9:00 PM<br />
                    Saturday - Sunday: 8:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#FF4A8D]/10 to-[#4AC4FF]/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">info@washingtale.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Emergency Service</h4>
                  <p className="text-gray-600">(555) 999-8888</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 