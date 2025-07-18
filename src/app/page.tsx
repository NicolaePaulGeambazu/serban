import { Phone, Shield, Calculator, Leaf, Star, Clock, MapPin, CheckCircle } from 'lucide-react'
import Quiz from './components/Quiz'
import Link from 'next/link'

export default function Home() {
  const phoneNumber = "(888) 888-8888"
  const serviceArea = "Serving Dhaka, C and the surrounding area"
  
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header with Phone Number */}
      <header className="sticky top-0 z-50 bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">Your Local Pest Control</div>
            <a 
              id="header-phone-call"
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {phoneNumber}
            </a>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Your Local Pest Control
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-red-600">
              Call For A Free Pest Inspection & Estimate
            </h2>
            
            <p className="text-xl font-bold text-gray-900">
              {serviceArea}
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Local Pest Control Pros specialized in residential and commercial treatments for bed bugs, rodents, termites & fleas, cockroaches, mosquitos, ant infestations, bee&apos;s & wasp removal, wildlife extraction and more!
            </p>

            {/* Primary CTA - Phone Call */}
            <div className="space-y-4">
              <a 
                id="hero-phone-call"
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-3 bg-red-600 text-white text-2xl font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-colors w-full lg:w-auto"
              >
                <Phone className="w-8 h-8" />
                {phoneNumber}
              </a>
              
              {/* Trust Indicators */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-lg font-bold text-gray-900 mb-2">
                  TRUSTED LOCAL BUSINESS
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
                    ))}
                  </div>
                  <span className="text-green-600 font-semibold">TrustScore 9.6 | 279 reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Quiz Section */}
          <div className="lg:sticky lg:top-24">
            <Quiz />
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="h-full">
              <Link href="/services/bed-bug-treatment" className="group block h-full">
                <div id="service-bed-bug-treatment" className="flex flex-col h-full bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-red-600 font-bold text-lg">🛏️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bed Bug Treatment</h3>
                  <p className="text-gray-600 text-sm flex-grow">Complete elimination of bed bug infestations with proven methods</p>
                </div>
              </Link>
            </div>
            
            <div className="h-full">
              <Link href="/services/rodent-control" className="group block h-full">
                <div id="service-rodent-control" className="flex flex-col h-full bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-red-600 font-bold text-lg">🐭</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Rodent Control</h3>
                  <p className="text-gray-600 text-sm flex-grow">Eliminate mice, rats and other rodents from your property</p>
                </div>
              </Link>
            </div>
            
            <div className="h-full">
              <Link href="/services/termite-treatment" className="group block h-full">
                <div id="service-termite-treatment" className="flex flex-col h-full bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-red-600 font-bold text-lg">🐜</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Termite Treatment</h3>
                  <p className="text-gray-600 text-sm flex-grow">Protect your home from destructive termite damage</p>
                </div>
              </Link>
            </div>
            
            <div className="h-full">
              <Link href="/services/general-pest-control" className="group block h-full">
                <div id="service-general-pest-control" className="flex flex-col h-full bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-lg transition-all duration-200 group-hover:scale-105">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-red-600 font-bold text-lg">🕷️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">General Pest Control</h3>
                  <p className="text-gray-600 text-sm flex-grow">Comprehensive pest elimination and prevention services</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Icons Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">TRUSTED & LOCAL SERVICES</h3>
            <p className="text-gray-600">Licensed and insured professionals serving your community</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Calculator className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">FREE ESTIMATES</h3>
            <p className="text-gray-600">No obligation quotes and transparent pricing</p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <Leaf className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">ECO FRIENDLY</h3>
            <p className="text-sm font-semibold text-emerald-600 mb-2">NON TOXIC</p>
            <p className="text-gray-600">Safe for your family and pets</p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">How It Works</h2>
          <p className="text-xl text-red-600 font-semibold mb-8">Easy As 1-2-3</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">1. Call Now</h3>
              <p className="text-gray-600">Speak with our friendly team for immediate assistance</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">2. Schedule Service</h3>
              <p className="text-gray-600">Book your free inspection at your convenience</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">3. Problem Solved</h3>
              <p className="text-gray-600">Professional treatment and peace of mind</p>
            </div>
          </div>
        </div>

        {/* Secondary CTA Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Callback Instead?
          </h2>
                      <p className="text-lg text-gray-600 mb-6">
              Prefer to schedule a callback? Fill out our quick form and we&apos;ll call you back within 30 minutes.
            </p>
          <a 
            href="/callback"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors"
          >
            Schedule Callback
            <Clock className="w-5 h-5" />
          </a>
        </div>

        {/* Service Areas */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>{serviceArea}</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Disclaimer</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              This website is for informational purposes only. Results may vary based on individual circumstances. 
              Free estimates are subject to availability and may require an on-site inspection. 
              All services are provided by licensed professionals in accordance with local regulations.
            </p>
            <p>
              Emergency services are available 24/7 but response times may vary based on location and current demand. 
              Pricing is subject to change without notice. Contact us for current rates and availability.
            </p>
            <p>
              This is an affiliate marketing website. We may receive compensation for referrals to local service providers. 
              All service providers are independently owned and operated.
            </p>
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
                <p>Free Estimates</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <div className="space-y-2 text-gray-300">
                <p>• Bed Bug Treatment</p>
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
