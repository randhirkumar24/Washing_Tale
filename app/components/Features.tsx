'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SchedulePickupForm from './SchedulePickupForm';

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#4AC4FF]">
        <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.5" />
        <path d="M3 10H21" strokeWidth="1.5" />
        <path d="M16 2V6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 2V6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="15" r="1" fill="currentColor" />
        <circle cx="8" cy="15" r="1" fill="currentColor" />
        <circle cx="16" cy="15" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Easy Scheduling',
    description: 'Book your laundry pickup with just a few clicks',
    bgColor: 'bg-blue-50',
    iconColor: 'text-[#4AC4FF]',
    gradient: 'from-[#4AC4FF]/20 to-[#4AC4FF]/5'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#FF4A8D]">
        <path d="M12 2L14.4 7.2L20 8.4L16 12.4L17.2 18L12 15.2L6.8 18L8 12.4L4 8.4L9.6 7.2L12 2Z" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 8L13 10L15 10.5L13.5 12L14 14L12 13L10 14L10.5 12L9 10.5L11 10L12 8Z" fill="currentColor" />
      </svg>
    ),
    title: 'Quality Care',
    description: 'Expert handling of all your garments',
    bgColor: 'bg-pink-50',
    iconColor: 'text-[#FF4A8D]',
    gradient: 'from-[#FF4A8D]/20 to-[#FF4A8D]/5'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-[#FF9F4A]">
        <path d="M5 10L12 4L19 10L19 20H5L5 10Z" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 20V15C15 13.8954 14.1046 13 13 13H11C9.89543 13 9 13.8954 9 15V20" strokeWidth="1.5" />
        <path d="M12 4V2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Fast Delivery',
    description: '96-hour turnaround on standard services',
    bgColor: 'bg-orange-50',
    iconColor: 'text-[#FF9F4A]',
    gradient: 'from-[#FF9F4A]/20 to-[#FF9F4A]/5'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-green-500">
        <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" strokeWidth="1.5" />
        <path d="M12 6L12 18" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 9L12 6L17 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 15L12 18L17 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Eco-Friendly',
    description: 'Sustainable cleaning practices and products',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-500',
    gradient: 'from-green-500/20 to-green-500/5'
  }
];

const Features = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1e293b]">
            Why Choose <span className="gradient-text">Washing Tale</span>?
          </h2>
          
          {/* Schedule Pickup Button */}
          <motion.button
            onClick={() => setIsFormOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-[#4AC4FF] to-[#FF4A8D] text-white font-semibold hover:shadow-lg transform transition-all duration-200"
          >
            Schedule Pickup
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="glass-card p-6 h-full relative overflow-hidden rounded-2xl hover:shadow-lg transition-all duration-300">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon Container */}
                <div className="relative z-10">
                  <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-lg`}>
                    {feature.icon}
                  </div>

                  <h3 className={`text-xl font-bold mb-3 text-gray-800 ${feature.iconColor} group-hover:translate-x-1 transition-transform duration-300`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full ${feature.bgColor} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 transform group-hover:scale-150`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Schedule Pickup Form */}
      <SchedulePickupForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
};

export default Features; 