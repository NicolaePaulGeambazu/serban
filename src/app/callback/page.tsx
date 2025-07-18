import { Phone, Clock, MapPin, User } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule a Callback - Free Pest Control Estimate',
  description: 'Schedule a callback for your free pest control estimate. We\'ll call you back within 30 minutes. No obligation, professional service.',
  keywords: ['pest control callback', 'free estimate', 'schedule inspection', 'pest control quote'],
  openGraph: {
    title: 'Schedule a Callback - Free Pest Control Estimate',
    description: 'Schedule a callback for your free pest control estimate. We\'ll call you back within 30 minutes.',
  },
}

export default function CallbackPage() {
  const phoneNumber = "(888) 888-8888"
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">Your Local Pest Control</div>
            <a 
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {phoneNumber}
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Schedule Your Free Callback
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              We&apos;ll call you back within 30 minutes for your free pest control estimate
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
              <Clock className="w-5 h-5" />
              <span>30-Minute Response Guarantee</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* ZIP Code Field */}
              <div>
                <label htmlFor="zipcode" className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    required
                    maxLength={5}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="12345"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select a service</option>
                  <option value="bed-bugs">Bed Bug Treatment</option>
                  <option value="rodents">Rodent Control</option>
                  <option value="termites">Termite Treatment</option>
                  <option value="general">General Pest Control</option>
                  <option value="fleas">Flea Treatment</option>
                  <option value="cockroaches">Cockroach Control</option>
                  <option value="ants">Ant Control</option>
                  <option value="bees-wasps">Bee & Wasp Removal</option>
                  <option value="wildlife">Wildlife Removal</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Best Time to Call */}
              <div>
                <label htmlFor="best-time" className="block text-sm font-medium text-gray-700 mb-2">
                  Best Time to Call *
                </label>
                <select
                  id="best-time"
                  name="best-time"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select best time</option>
                  <option value="morning">Morning (8 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                  <option value="anytime">Anytime</option>
                </select>
              </div>

              {/* Notes Field */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Tell us about your pest problem or any specific concerns..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-colors text-lg"
              >
                Schedule My Callback
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                  <Clock className="w-5 h-5" />
                  <span>30-Minute Response Guarantee</span>
                </div>
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to receive a callback from our team. 
                  We respect your privacy and will only use your information to contact you about your pest control needs.
                </p>
              </div>
            </div>
          </div>

          {/* Alternative Contact */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Prefer to call now?</p>
            <a 
              href={`tel:${phoneNumber.replace(/\D/g, '')}`}
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {phoneNumber} Now
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Your Local Pest Control</h3>
            <p className="text-gray-300 mb-4">
              Professional pest control services for residential and commercial properties.
            </p>
            <div className="text-gray-300">
              <p>Phone: {phoneNumber}</p>
              <p>24/7 Emergency Service • Free Estimates</p>
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