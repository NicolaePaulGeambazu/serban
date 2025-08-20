'use client'

import { useGTMTracking } from '@/hooks/useGTMTracking'
import { useEffect } from 'react'

/**
 * Example component showing how to use the GTM tracking hook
 * This is for reference and can be removed in production
 */
export default function GTMTrackingExample() {
  const {
    trackEvent,
    trackPhoneCall,
    trackQuizStart,
    trackQuizStep,
    trackQuizCompletion,
    trackConversion,
    trackPageView,
    trackServicePageView,
    trackButtonClick,
    trackLinkClick,
    trackScrollDepth,
    setCustomDimension,
    setUserId
  } = useGTMTracking()

  // Track page view on component mount
  useEffect(() => {
    trackPageView({
      page_title: 'GTM Tracking Example',
      service_type: 'example'
    })
  }, [trackPageView])

  // Example phone call tracking
  const handlePhoneCall = () => {
    trackPhoneCall({
      phone_number: '(888) 888-8888',
      source: 'hero',
      service_type: 'general_pest_control'
    })
  }

  // Example quiz tracking
  const handleQuizStart = () => {
    trackQuizStart()
  }

  const handleQuizStep = () => {
    trackQuizStep({
      step: 'income',
      step_number: 1,
      income_range: '$50,000 - $75,000'
    })
  }

  const handleQuizCompletion = () => {
    trackQuizCompletion({
      qualification_result: true,
      income_range: '$75,000 - $100,000',
      zipcode: '12345'
    })
  }

  // Example conversion tracking
  const handleConversion = () => {
    trackConversion({
      conversion_type: 'qualification_success',
      conversion_value: 100
    })
  }

  // Example service page tracking
  const handleServicePageView = () => {
    trackServicePageView('bed_bug_treatment', {
      page_title: 'Bed Bug Treatment Service'
    })
  }

  // Example button click tracking
  const handleButtonClick = () => {
    trackButtonClick({
      button_text: 'Get Started',
      button_id: 'cta-button',
      button_location: 'hero'
    })
  }

  // Example link click tracking
  const handleLinkClick = () => {
    trackLinkClick({
      button_text: 'Learn More',
      button_id: 'learn-more-link',
      button_location: 'footer'
    })
  }

  // Example scroll depth tracking
  const handleScrollDepth = () => {
    trackScrollDepth(50) // 50% scroll depth
  }

  // Example custom dimension
  const handleCustomDimension = () => {
    setCustomDimension('income_range', '$100,000+')
  }

  // Example user ID
  const handleSetUserId = () => {
    setUserId('user_12345')
  }

  // Example custom event
  const handleCustomEvent = () => {
    trackEvent('custom_event_example', {
      event_category: 'engagement',
      event_label: 'test_event',
      custom_parameter: 'test_value'
    })
  }

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-6">GTM Tracking Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <button
          onClick={handlePhoneCall}
          className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Track Phone Call
        </button>

        <button
          onClick={handleQuizStart}
          className="p-4 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Track Quiz Start
        </button>

        <button
          onClick={handleQuizStep}
          className="p-4 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Track Quiz Step
        </button>

        <button
          onClick={handleQuizCompletion}
          className="p-4 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Track Quiz Completion
        </button>

        <button
          onClick={handleConversion}
          className="p-4 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Track Conversion
        </button>

        <button
          onClick={handleServicePageView}
          className="p-4 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          Track Service Page View
        </button>

        <button
          onClick={handleButtonClick}
          className="p-4 bg-pink-500 text-white rounded hover:bg-pink-600"
        >
          Track Button Click
        </button>

        <button
          onClick={handleLinkClick}
          className="p-4 bg-teal-500 text-white rounded hover:bg-teal-600"
        >
          Track Link Click
        </button>

        <button
          onClick={handleScrollDepth}
          className="p-4 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Track Scroll Depth
        </button>

        <button
          onClick={handleCustomDimension}
          className="p-4 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Set Custom Dimension
        </button>

        <button
          onClick={handleSetUserId}
          className="p-4 bg-cyan-500 text-white rounded hover:bg-cyan-600"
        >
          Set User ID
        </button>

        <button
          onClick={handleCustomEvent}
          className="p-4 bg-lime-500 text-white rounded hover:bg-lime-600"
        >
          Track Custom Event
        </button>
      </div>

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">Usage Instructions:</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Open browser developer tools and check the Console tab</li>
          <li>Click any button above to see the tracking events in the console</li>
          <li>Check the Network tab to see GTM/GA requests</li>
          <li>Verify data appears in your GTM Preview mode</li>
          <li>Remove this component in production</li>
        </ul>
      </div>
    </div>
  )
}
