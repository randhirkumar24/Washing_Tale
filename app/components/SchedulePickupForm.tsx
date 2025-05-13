'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SchedulePickupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchedulePickupForm = ({ isOpen, onClose }: SchedulePickupFormProps) => {
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
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[20]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-[5%] md:left-[15%] lg:left-[35%] top-[2%] w-[90%] md:w-[85%] lg:w-[80%] max-w-md z-[70]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="glass-card p-4 sm:p-6 md:p-8 rounded-2xl overflow-hidden relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
              {/* Background Gradient Blobs */}
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-[#4AC4FF]/30 blur-2xl animate-pulse-slow" />
              <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-[#FF4A8D]/30 blur-2xl animate-pulse-slow" />
              <div className="absolute right-20 bottom-20 w-40 h-40 rounded-full bg-[#FF9F4A]/30 blur-2xl animate-pulse-slow" />

              {/* Content Container */}
              <div className="relative z-10 bg-white/5 rounded-xl p-2 sm:p-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 id="modal-title" className="text-2xl font-bold text-gray-800">
                    Schedule <span className="text-[#FF9F4A]">Pickup</span>
                  </h2>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close pickup form"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-600 mb-1">Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/30 focus:bg-white/50 focus:ring-2 focus:ring-[#4AC4FF] focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/30 focus:bg-white/50 focus:ring-2 focus:ring-[#4AC4FF] focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/30 focus:bg-white/50 focus:ring-2 focus:ring-[#4AC4FF] focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm text-gray-600 mb-1">Service</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/30 focus:bg-white/50 focus:ring-2 focus:ring-[#4AC4FF] focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                      >
                        <option value="wash-fold">Wash & Fold</option>
                        <option value="dry-cleaning">Dry Cleaning</option>
                        <option value="ironing">Steam Ironing</option>
                        <option value="shoe">Shoe Laundry</option>
                        <option value="carpet">Carpet Cleaning</option>
                        <option value="sofa">Sofa Cleaning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm text-gray-600 mb-1">Address</label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/30 focus:bg-white/50 focus:ring-2 focus:ring-[#4AC4FF] focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                      placeholder="Pickup address"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm text-gray-600 mb-1">Date</label>
                      <input
                        id="date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/30 focus:bg-white/50 focus:ring-2 focus:ring-[#4AC4FF] focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm text-gray-600 mb-1">Time</label>
                      <input
                        id="time"
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/30 focus:bg-white/50 focus:ring-2 focus:ring-[#4AC4FF] focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm text-gray-600 mb-1">Special Instructions</label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-white/30 backdrop-blur-sm border border-white/30 focus:bg-white/50 focus:ring-2 focus:ring-[#4AC4FF] focus:border-transparent transition-all duration-200 placeholder:text-gray-500"
                      rows={3}
                      placeholder="Any special instructions or notes"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#4AC4FF] via-[#FF4A8D] to-[#FF9F4A] text-white font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Schedule Pickup
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SchedulePickupForm; 