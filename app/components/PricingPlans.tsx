import React from 'react';
import { laundryPricingData, WEIGHT_PRICE_PER_KG } from '../data/pricingData';

const PricingPlans = () => {
  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Laundry Service Pricing
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Professional cleaning services with transparent pricing for all types of garments and textiles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {laundryPricingData.map((category, index) => {
            const gradients = [
              'from-blue-500 to-blue-600',
              'from-purple-500 to-purple-600',
              'from-pink-500 to-pink-600',
              'from-green-500 to-green-600',
              'from-orange-500 to-orange-600',
              'from-indigo-500 to-indigo-600'
            ];
            
            return (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`bg-gradient-to-r ${gradients[index % gradients.length]} rounded-2xl p-6 mb-8 text-white`}>
                  <h4 className="text-2xl font-bold mb-2">{category.category}</h4>
                  <p className="text-white/90">{category.description}</p>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-3 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <span className="font-bold text-xl text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm">
                        ₹{item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="max-w-lg mx-auto bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl shadow-2xl p-10 text-white transform hover:scale-105 transition-transform duration-300">
            <div className="bg-white/20 rounded-2xl p-6 mb-6">
              <h4 className="text-3xl font-bold mb-2">Bulk Pricing</h4>
              <p className="text-xl text-white/90">For items charged by weight</p>
            </div>
            <div className="bg-white text-gray-800 rounded-2xl p-8">
              <p className="text-5xl font-bold text-emerald-600">₹{WEIGHT_PRICE_PER_KG}</p>
              <p className="text-xl font-semibold mt-2">per Kilogram</p>
              <p className="text-gray-600 mt-4">Perfect for large loads and mixed items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans; 