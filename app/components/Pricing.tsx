'use client';

import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Basic',
    price: '29',
    description: 'Perfect for basic laundry needs',
    features: [
      'Up to 5kg of clothes',
      'Standard 96-hour turnaround',
      'Basic wash & fold',
      'Free pickup & delivery',
      'Online scheduling'
    ],
    color: 'text-[#4AC4FF]',
    gradient: 'from-[#4AC4FF]/20 to-[#4AC4FF]/5',
    buttonClass: 'border-[#4AC4FF] text-[#4AC4FF] hover:bg-[#4AC4FF]'
  },
  {
    name: 'Premium',
    price: '49',
    description: 'Most popular for regular customers',
    features: [
      'Up to 10kg of clothes',
      '72-hour turnaround',
      'Premium wash & fold',
      'Stain treatment included',
      'Priority scheduling',
      'Garment repairs'
    ],
    color: 'text-[#FF4A8D]',
    gradient: 'from-[#FF4A8D]/20 to-[#FF4A8D]/5',
    buttonClass: 'bg-[#FF4A8D] text-white hover:bg-[#FF4A8D]/90',
    featured: true
  },
  {
    name: 'Business',
    price: '89',
    description: 'Ideal for businesses and bulk orders',
    features: [
      'Up to 20kg of clothes',
      '48-hour turnaround',
      'Premium wash & fold',
      'Stain treatment included',
      'Priority scheduling',
      'Garment repairs',
      'Dedicated account manager'
    ],
    color: 'text-[#FF9F4A]',
    gradient: 'from-[#FF9F4A]/20 to-[#FF9F4A]/5',
    buttonClass: 'border-[#FF9F4A] text-[#FF9F4A] hover:bg-[#FF9F4A]'
  }
];

const Pricing = () => {
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
            <span className="text-[#1e293b]">Simple, </span>
            <span className="bg-gradient-to-r from-[#FF9F4A] to-[#FF4A8D] bg-clip-text text-transparent">Transparent</span>
            <span className="text-[#1e293b]"> Pricing</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Choose the perfect plan for your laundry needs. All plans include free pickup and delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative group ${plan.featured ? 'md:-mt-6' : ''}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-[#FF4A8D] text-white px-8 py-2 rounded-full text-base font-medium shadow-pink">
                    Most Popular
                  </div>
                </div>
              )}

              <div 
                className={`
                  glass-card p-8 h-full relative overflow-hidden rounded-3xl
                  ${plan.featured ? 'ring-2 ring-[#FF4A8D]/20 shadow-lg' : ''}
                  ${plan.featured ? 'bg-white/90' : 'bg-white/80'}
                `}
              >
                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-3xl font-bold mb-2 ${plan.color}`}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-800">£{plan.price}</span>
                    <span className="text-gray-600 ml-1">/week</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <span className={`${plan.color} mr-3 flex-shrink-0`}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.2"/>
                            <path d="M16.5 8.5L10.5 14.5L7.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`
                      w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300
                      ${plan.buttonClass} hover:shadow-lg
                    `}
                  >
                    Choose Plan
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -right-6 -bottom-6 w-32 h-32 rounded-full ${plan.gradient.split(' ')[0]} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 transform group-hover:scale-150`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 