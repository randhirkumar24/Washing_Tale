'use client';

import PageHeader from '../components/PageHeader';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Our Services" 
        description="Professional laundry and dry cleaning services tailored to your needs"
      />
      <div className="container mx-auto px-4 py-12">
        <Services />
        
        {/* Additional Service Details Section */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Process Description */}
            <div className="bg-gradient-to-br from-[#FF9F4A]/10 to-[#FF4A8D]/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Process</h3>
              <p className="text-gray-600">
                We use state-of-the-art equipment and eco-friendly detergents to ensure your clothes
                receive the best care while protecting the environment.
              </p>
            </div>
            
            {/* Quality Guarantee */}
            <div className="bg-gradient-to-br from-[#4AC4FF]/10 to-[#FF9F4A]/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quality Guarantee</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We guarantee spotless results and timely delivery
                for all our services.
              </p>
            </div>
            
            {/* Special Care */}
            <div className="bg-gradient-to-br from-[#FF4A8D]/10 to-[#4AC4FF]/10 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Special Care</h3>
              <p className="text-gray-600">
                Delicate items receive extra attention with our specialized cleaning processes and
                handling procedures.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesPage; 