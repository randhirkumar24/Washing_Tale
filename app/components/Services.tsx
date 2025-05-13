'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Wash & Fold',
    description: 'Professional washing and folding service with 96-hour turnaround time',
    features: [
      'Eco-friendly detergents',
      'Fabric softener included',
      'Individual packaging'
    ],
    iconBg: 'bg-blue-50',
    iconColor: 'text-[#4AC4FF]'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
      </svg>
    ),
    title: 'Dry Cleaning',
    description: 'Premium dry cleaning service with eco-friendly solutions',
    features: [
      'Stain removal',
      'Premium pressing',
      'Delicate fabric care'
    ],
    iconBg: 'bg-pink-50',
    iconColor: 'text-[#FF4A8D]'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v3m6.5-3.5l-2 2m-11 0l-2-2M4.5 8a3.5 3.5 0 117 0M3 12h3m12 0h3M12 18v3m2-18.5l4 4M6 7.5l4-4" />
        <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
    title: 'Steam Ironing',
    description: 'Expert steam ironing for crisp, wrinkle-free clothes',
    features: [
      'Professional equipment',
      'Collar & cuff care',
      'Hanging delivery'
    ],
    iconBg: 'bg-orange-50',
    iconColor: 'text-[#FF9F4A]'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M7.5 4.21l4.5 2.6 4.5-2.6" />
        <path d="M7.5 19.79V14.6L3 12" />
        <path d="M21 12l-4.5 2.6v5.19" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05" />
        <path d="M12 22.08V12" />
      </svg>
    ),
    title: 'Shoe Laundry',
    description: 'Specialized cleaning for all types of footwear',
    features: [
      'Deep cleaning',
      'Sanitization',
      'Shape restoration'
    ],
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    title: 'Carpet Cleaning',
    description: 'Deep cleaning service for carpets and rugs',
    features: [
      'Stain removal',
      'Deodorizing',
      'Deep sanitization'
    ],
    iconBg: 'bg-green-50',
    iconColor: 'text-green-500'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M21 11V7a2 2 0 00-2-2H5a2 2 0 00-2 2v4" />
        <path d="M12 17v-6" />
        <path d="M9 14h6" />
      </svg>
    ),
    title: 'Sofa Cleaning',
    description: 'Professional cleaning for all types of upholstery',
    features: [
      'Fabric protection',
      'Dust removal',
      'Stain treatment'
    ],
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-600'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const Services = () => {
  return (
    <section className="py-20 bg-gradient-bg">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Premium</span> Services
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Experience the finest laundry and cleaning services tailored to your needs. 
            We take pride in delivering exceptional quality with attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="glass-card group p-8 relative overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Background Gradient Blob */}
              <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${service.iconBg} opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-500`} />
              
              {/* Icon */}
              <div className={`relative z-10 ${service.iconBg} ${service.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-lg`}>
                {service.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#FF4A8D] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                      <svg className={`w-5 h-5 ${service.iconColor} mr-3 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 h-1 ${service.iconColor} w-0 group-hover:w-full transition-all duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 