import { Phone, Shield, Clock, CheckCircle, Star, MapPin } from 'lucide-react'
import Quiz from '../../components/Quiz'
import Header from '../../components/Header'

export default function BedBugTreatment() {
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
              id="bed-bug-header-phone-call"
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {phoneNumber}
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Professional Bed Bug Treatment
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-red-600">
                Eliminate Bed Bugs Completely
              </h2>
              
              <p className="text-xl font-bold text-gray-900">
                {serviceArea}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Don't let bed bugs take over your home! Our expert technicians use proven methods to completely eliminate bed bug infestations. We offer comprehensive treatment plans that target all life stages of bed bugs.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Our Bed Bug Treatment?</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Complete elimination of all bed bug life stages</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Safe for your family and pets</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Follow-up inspection included</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Warranty on all treatments</span>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="space-y-4">
              <a 
                id="bed-bug-hero-phone-call"
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

        {/* Treatment Process */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Bed Bug Treatment Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Inspection</h3>
              <p className="text-gray-600">Thorough inspection to identify all infested areas and bed bug hiding spots</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Treatment</h3>
              <p className="text-gray-600">Professional application of effective treatments to eliminate all bed bugs</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Follow-up</h3>
              <p className="text-gray-600">Follow-up inspection to ensure complete elimination and prevent re-infestation</p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>{serviceArea}</span>
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
                Professional bed bug treatment services for residential and commercial properties.
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