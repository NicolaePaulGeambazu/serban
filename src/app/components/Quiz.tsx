'use client'

import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react'
import { CheckCircle } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Star } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Shield } from 'lucide-react';

interface QuizData {
  income: string
  zipcode: string
  connectNow: boolean
}

export default function Quiz() {
  const [step, setStep] = useState(1)
  const [quizData, setQuizData] = useState<QuizData>({
    income: '',
    zipcode: '',
    connectNow: true
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isQualified, setIsQualified] = useState(false)
  const [zipError, setZipError] = useState<string | null>(null)

  useEffect(() => {
    if (isQualified) {
      // Set quiz-completed cookie for 180 days
      const expires = new Date();
      expires.setTime(expires.getTime() + 1000 * 60 * 60 * 24 * 180);
      document.cookie = `quiz-completed=true; expires=${expires.toUTCString()}; path=/; samesite=lax`;
    }
  }, [isQualified]);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    setIsQualified(true)
  }

  const handleInputChange = (field: keyof QuizData, value: string | boolean) => {
    setQuizData(prev => ({ ...prev, [field]: value }))
    if (field === 'zipcode') {
      // Validate ZIP code on change
      if (typeof value === 'string' && value.length === 5 && /^\d{5}$/.test(value)) {
        setZipError(null)
      } else if (typeof value === 'string' && value.length > 0) {
        setZipError('Please enter a valid 5-digit ZIP code')
      } else {
        setZipError(null)
      }
    }
  }

  const phoneNumber = "(888) 888-8888"

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="animate-spin w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full mx-auto mb-4"></div>
        <h3 className="text-2xl font-bold text-black mb-2">Checking Your Eligibility...</h3>
        <p className="text-gray-600 mb-4">Verifying your information with our database</p>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <Shield className="w-4 h-4" />
          <span>Secure & Private</span>
        </div>
      </div>
    )
  }

  if (isQualified) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-600 mb-2">🎉 Congratulations!</h3>
        <p className="text-lg text-black mb-2 font-semibold">You Are Pre-Qualified!</p>
        <p className="text-gray-600 mb-4">Based on your information, you meet our eligibility requirements.</p>
       
        <a 
          id="quiz-success-phone-call"
          href={`tel:${phoneNumber.replace(/\D/g, '')}`}
          className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors text-lg"
        >
          <Phone className="w-6 h-6" />
          Call Now: {phoneNumber}
        </a>
        
        <p className="text-xs text-gray-500 mt-3">No obligation • Free inspection</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {/* Header with Trust Indicators */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-green-600">100% Secure & Private</span>
        </div>
        <h2 className="text-3xl font-bold text-black mb-2">Quick Eligibility Check</h2>
        <p className="text-gray-600 mb-4">Takes less than 60 seconds • No credit check required</p>
        
        {/* Social Proof */}
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>4.9/5</span>
          </div>
          <span>•</span>
          <span>10,000+ Reviews</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Step {step} of 3</span>
          <span className="text-sm font-medium text-gray-700">{Math.round((step / 3) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step 1: Pest Selection */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-black mb-2">What pest are you dealing with?</h3>
            <p className="text-sm text-gray-600 mb-4">This helps us match you with the right treatment</p>
            <div className="space-y-3">
              {[
                'Ants',
                'Spiders',
                'Cockroaches',
                'House Crickets',
                'Earwigs',
                'Silverfish',
                'Clothes Moths',
                'Centipedes',
                'Millipedes',
                'Termites'
              ].map((option, index) => (
                <button
                  key={option}
                  id={`quiz-pest-option-${index + 1}`}
                  onClick={() => handleInputChange('income', option)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    quizData.income === option
                      ? 'border-red-600 bg-red-50 text-red-600 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 text-black hover:shadow-sm'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Zipcode - Enhanced for USA */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-black mb-2">What's your ZIP code?</h3>
            <p className="text-sm text-gray-600 mb-4">We'll check if we service your area</p>
            <input
              id="quiz-zipcode-input"
              type="text"
              value={quizData.zipcode}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 5)
                handleInputChange('zipcode', value)
              }}
              placeholder="Enter your 5-digit ZIP code"
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none text-black text-center text-lg font-medium focus:ring-2 focus:ring-red-500"
              maxLength={5}
              aria-label="ZIP code"
              inputMode="numeric"
              pattern="[0-9]*"
            />
            {zipError && <p className="text-xs text-red-600 mt-2 text-center" role="alert">{zipError}</p>}
            <p className="text-xs text-gray-500 mt-2 text-center">We'll verify service availability in your area</p>
          </div>
        </div>
      )}

      {/* Step 3: Connect with Agent - Enhanced for conversion */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-black mb-2">Would you like to speak with an agent now?</h3>
            <p className="text-sm text-gray-600 mb-4">Get immediate assistance and lock in your special rate</p>
            
            {/* Urgency Banner */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4 text-red-600" />
                <span className="font-semibold text-red-800 text-sm">Limited Time Offer</span>
              </div>
              <p className="text-xs text-red-700">Call now to secure your exclusive rate before it expires!</p>
            </div>

            <div className="space-y-3">
              <button
                id="quiz-connect-yes"
                onClick={() => handleInputChange('connectNow', true)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  quizData.connectNow === true
                    ? 'border-red-600 bg-red-50 text-red-600 shadow-md'
                    : 'border-gray-200 hover:border-gray-300 text-black hover:shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">Yes, connect me now</div>
                    <div className="text-sm text-gray-600">Speak with an agent immediately</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-3 mt-8">
        <button
          id={step === 3 ? "quiz-submit-button" : "quiz-next-button"}
          onClick={handleNext}
          disabled={
            (step === 1 && !quizData.income) ||
            (step === 2 && (!quizData.zipcode || !!zipError)) ||
            (step === 3 && quizData.connectNow === undefined)
          }
          className="w-full px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label={step === 3 ? 'Submit Quiz' : 'Continue to Next Step'}
          role="button"
        >
          {step === 3 ? 'Check Eligibility →' : 'Continue →'}
        </button>
        {step > 1 && (
          <button
            id="quiz-back-button"
            onClick={() => setStep(step - 1)}
            className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Go Back"
            role="button"
          >
            ← Back
          </button>
        )}
      </div>

      {/* Trust Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
          <span>🔒 Secure</span>
          <span>•</span>
          <span>⚡ Fast</span>
          <span>•</span>
          <span>✅ No Obligation</span>
        </div>
      </div>
    </div>
  )
} 