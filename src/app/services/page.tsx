import { Phone, Shield, Clock, CheckCircle, Bug, Rat, Home, Leaf } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Pest Control Services - Cockroaches, Rodents, Termites & More',
  description: 'Professional pest control services including cockroach control, rodent control, termite treatment, and general pest control. Free inspection and 24/7 service.',
  keywords: ['pest control services', 'cockroach control', 'rodent control', 'termite treatment', 'pest exterminator'],
  openGraph: {
    title: 'Pest Control Services - Cockroaches, Rodents, Termites & More',
    description: 'Professional pest control services including cockroach control, rodent control, termite treatment, and general pest control.',
  },
}

export default function ServicesPage() {
  const phoneNumber = "(888) 888-8888"
  
  const services = [
    {
      icon: Bug,
      title: "Cockroach Control",
      description: "Complete cockroach elimination with heat treatment and chemical solutions. 100% guaranteed results.",
      features: ["Heat treatment", "Chemical treatment", "Follow-up inspection", "Guaranteed results"]
    },
    {
      icon: Rat,
      title: "Rodent Control",
      description: "Professional rodent removal and prevention for mice, rats, and other rodents.",
      features: ["Inspection & assessment", "Removal & exclusion", "Prevention measures", "Ongoing monitoring"]
    },
    {
      icon: Home,
      title: "Termite Treatment",
      description: "Comprehensive termite control and prevention to protect your property investment.",
      features: ["Termite inspection", "Treatment options", "Prevention barriers", "Warranty coverage"]
    },
    {
      icon: Leaf,
      title: "General Pest Control",
      description: "Complete pest control solutions for ants, spiders, fleas, and other common pests.",
      features: ["Regular treatments", "Eco-friendly options", "Customized plans", "Emergency service"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image 
                src="/logo.png?v=2" 
                alt="Callhomefixer Logo" 
                width={58} 
                height={48}
              />
            </div>
            <a 
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              {phoneNumber}
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Pest Control Services
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Comprehensive pest control solutions for residential and commercial properties
          </p>
          <a 
            href={`tel:${phoneNumber.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors text-lg"
          >
            <Phone className="w-5 h-5" />
            Call for Free Inspection
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Pest Control Services?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured professionals you can trust</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">24/7 Emergency Service</h3>
              <p className="text-gray-600">Available around the clock for emergency pest problems</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Guaranteed Results</h3>
              <p className="text-gray-600">We stand behind our work with satisfaction guarantees</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-red-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-6">
            Call us today for a free inspection and estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {phoneNumber}
            </a>
            <a 
              href="/callback"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors"
            >
              Schedule Callback
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Your Local Pest Control</h3>
              <p className="text-gray-300">
                Professional pest control services for residential and commercial properties.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>Phone: {phoneNumber}</p>
                <p>24/7 Emergency Service</p>
                <p>Free Inspection</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Cockroach Control</p>
                <p>• Rodent Control</p>
                <p>• Termite Treatment</p>
                <p>• General Pest Control</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Your Local Pest Control. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 