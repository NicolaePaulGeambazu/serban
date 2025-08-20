'use client'

import { Phone, Shield, Calculator, Leaf, Clock, CheckCircle } from 'lucide-react'
import Header from './components/Header'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export default function Home() {
  const phoneNumber = "(888) 888-8888"
  
  return (
    <div className="min-h-screen bg-white">
      <Header phoneNumber={phoneNumber} />

      {/* Main Hero Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Local Pest Control
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-red-600">
              Call For A Free Pest Inspection
            </h2>
            
            
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Local Pest Control Pros specialized in residential treatments for Ants, Spiders, Cockroaches, House Crickets, Earwigs, Silverfish, Clothes Moths, Centipedes, Millipedes, Termites
            </p>

            {/* Primary CTA - Phone Call */}
            <div className="space-y-4">
              <a 
                id="hero-phone-call"
                href={`tel:${phoneNumber.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-3 bg-red-600 text-white text-2xl font-bold py-4 px-8 rounded-lg hover:bg-red-700 transition-colors w-full lg:w-auto"
                onClick={() => {
                  // Track phone call conversion
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'phone_call', {
                      event_category: 'conversion',
                      event_label: 'hero_cta',
                      value: 50
                    });
                  }
                  // Also send to dataLayer for GTM
                  if (typeof window !== 'undefined' && window.dataLayer) {
                    window.dataLayer.push({
                      event: 'phone_call_conversion',
                      phone_number: phoneNumber,
                      source: 'hero',
                      conversion_value: 50
                    });
                  }
                }}
              >
                <Phone className="w-8 h-8" />
                {phoneNumber}
              </a>
              
              {/* Trust Indicators */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-lg font-bold text-gray-900">
                  TRUSTED LOCAL BUSINESS
                </div>
              </div>
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
            <h3 className="text-xl font-bold text-gray-900">FREE INSPECTION</h3>
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
                      Due to high demand, we recommend you call us directly since we might not be able to call you back.
            </p>
          <a 
            href="/callback"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors"
          >
            Schedule Callback
            <Clock className="w-5 h-5" />
          </a>
        </div>

        

        {/* Disclaimer */}
        <div className="mt-16 bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Disclaimer</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              Disclaimer: [CallHomeFixer] is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and [CallHomeFixer] does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on [CallHomeFixer].
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Local Pest Control</h3>
              <p className="text-gray-300">
                Professional pest control services for residential properties.
              </p>
            </div>
            <div />
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>Phone: {phoneNumber}</p>
                <p>Free Inspection</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Local Pest Control. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
