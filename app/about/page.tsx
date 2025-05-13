import PageHeader from '../components/PageHeader'
import Image from 'next/image'

const features = [
  {
    title: 'Expert Care',
    description: 'Our trained professionals handle your clothes with the utmost care and attention to detail.',
    icon: '👕'
  },
  {
    title: 'Eco-Friendly',
    description: 'We use environmentally friendly cleaning products and energy-efficient machines.',
    icon: '🌱'
  },
  {
    title: 'Fast Service',
    description: '96-hour turnaround time for most services, with express options available.',
    icon: '⚡'
  },
  {
    title: 'Quality Guaranteed',
    description: '100% satisfaction guarantee on all our services.',
    icon: '✨'
  }
]

export default function About() {
  return (
    <main>
      <PageHeader 
        title="About Washing Tale" 
        description="We're on a mission to revolutionize the laundry industry with technology and exceptional service."
      />

      {/* Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-secondary-dark">Our Story</h2>
              <p className="text-gray-600">
                Founded in 2017, Washing Tale began with a simple mission: to make laundry day stress-free for busy professionals and families. What started as a small local service has grown into a trusted name in professional laundry and dry cleaning.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of satisfied customers with our state-of-the-art facilities and eco-friendly practices. Our commitment to quality and customer satisfaction remains at the heart of everything we do.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about-image.svg"
                alt="Modern Laundry Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-dark mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine modern technology with traditional expertise to deliver the best laundry service experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-blue/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5000+', label: 'Happy Customers' },
              { number: '96%', label: 'Satisfaction Rate' },
              { number: '15+', label: 'Service Locations' },
              { number: '24/7', label: 'Customer Support' }
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-primary-orange">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 