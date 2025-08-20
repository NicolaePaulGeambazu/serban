import { useCallback } from 'react'
import { TRACKING_CONFIG, TRACKING_EVENTS, USER_JOURNEY_STEPS } from '@/app/config/tracking'

// Extend Window interface to include GTM dataLayer
declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

// Event parameter types
interface BaseEventParams {
  event_category?: string
  event_label?: string
  value?: number
  custom_parameters?: Record<string, unknown>
}

interface PhoneCallEventParams extends BaseEventParams {
  phone_number: string
  source: 'header' | 'hero' | 'quiz_success' | 'service' | 'other'
  service_type?: string
}

interface QuizEventParams extends BaseEventParams {
  step?: string
  step_number?: number
  income_range?: string
  zipcode?: string
  qualification_result?: boolean
  total_steps?: number
}

interface ConversionEventParams extends BaseEventParams {
  conversion_type: 'phone_call' | 'quiz_completion' | 'form_submission' | 'qualification_success'
  conversion_value?: number
  currency?: string
}

interface PageViewEventParams extends BaseEventParams {
  page_title?: string
  page_location?: string
  service_type?: string
  user_journey_step?: string
}

interface ButtonClickEventParams extends BaseEventParams {
  button_text?: string
  button_id?: string
  button_location?: string
}

export const useGTMTracking = () => {
  // Initialize GTM dataLayer if it doesn't exist
  const initializeDataLayer = useCallback(() => {
    if (typeof window !== 'undefined' && !window.dataLayer) {
      window.dataLayer = []
    }
  }, [])

  // Generic event tracking function
  const trackEvent = useCallback((eventName: string, parameters: Record<string, unknown> = {}) => {
    if (typeof window === 'undefined') return

    initializeDataLayer()

    // Send to GTM dataLayer
    window.dataLayer.push({
      event: eventName,
      ...parameters,
      timestamp: Date.now(),
      gtm_container_id: TRACKING_CONFIG.GTM_ID
    })

    // Send to GA4 via gtag (if available)
    if (window.gtag) {
      window.gtag('event', eventName, parameters)
    }

    // Console log for debugging (remove in production)
    if (process.env.NODE_ENV === 'development') {
      console.log('🎯 GTM Event Tracked:', { event: eventName, parameters })
    }
  }, [initializeDataLayer])

  // Phone call tracking
  const trackPhoneCall = useCallback((params: PhoneCallEventParams) => {
    trackEvent(TRACKING_EVENTS.PHONE_CALL, {
      event_category: TRACKING_CONFIG.EVENT_CATEGORIES.CONVERSION,
      phone_number: params.phone_number,
      call_source: params.source,
      service_type: params.service_type,
      conversion_type: 'phone_call',
      ...params.custom_parameters
    })
  }, [trackEvent])

  // Quiz event tracking
  const trackQuizStart = useCallback((params: QuizEventParams = {}) => {
    trackEvent(TRACKING_EVENTS.QUIZ_START, {
      event_category: TRACKING_CONFIG.EVENT_CATEGORIES.ENGAGEMENT,
      user_journey_step: USER_JOURNEY_STEPS.QUIZ_START,
      ...params.custom_parameters
    })
  }, [trackEvent])

  const trackQuizStep = useCallback((params: QuizEventParams) => {
    trackEvent(TRACKING_EVENTS.QUIZ_STEP, {
      event_category: TRACKING_CONFIG.EVENT_CATEGORIES.ENGAGEMENT,
      quiz_step: params.step,
      step_number: params.step_number,
      income_range: params.income_range,
      zipcode: params.zipcode,
      user_journey_step: params.step === 'income' ? USER_JOURNEY_STEPS.QUIZ_STEP_1 : 
                         params.step === 'zipcode' ? USER_JOURNEY_STEPS.QUIZ_STEP_2 :
                         params.step === 'agent' ? USER_JOURNEY_STEPS.QUIZ_STEP_3 : params.step,
      ...params.custom_parameters
    })
  }, [trackEvent])

  const trackQuizCompletion = useCallback((params: QuizEventParams) => {
    trackEvent(TRACKING_EVENTS.QUIZ_COMPLETION, {
      event_category: TRACKING_CONFIG.EVENT_CATEGORIES.CONVERSION,
      qualification_result: params.qualification_result,
      income_range: params.income_range,
      zipcode: params.zipcode,
      user_journey_step: params.qualification_result ? 
        USER_JOURNEY_STEPS.QUALIFICATION_SUCCESS : 
        USER_JOURNEY_STEPS.QUIZ_STEP_3,
      conversion_type: 'quiz_completion',
      ...params.custom_parameters
    })
  }, [trackEvent])

  // Conversion tracking
  const trackConversion = useCallback((params: ConversionEventParams) => {
    trackEvent('conversion', {
      event_category: TRACKING_CONFIG.EVENT_CATEGORIES.CONVERSION,
      conversion_type: params.conversion_type,
      conversion_value: params.conversion_value || 1,
      currency: params.currency || 'USD',
      ...params.custom_parameters
    })

    // Also track specific conversion goal
    if (params.conversion_type === 'qualification_success') {
      trackEvent(TRACKING_EVENTS.QUALIFICATION_SUCCESS, {
        event_category: TRACKING_CONFIG.EVENT_CATEGORIES.CONVERSION,
        user_journey_step: USER_JOURNEY_STEPS.QUALIFICATION_SUCCESS,
        ...params.custom_parameters
      })
    }
  }, [trackEvent])

  // Page view tracking
  const trackPageView = useCallback((params: PageViewEventParams = {}) => {
    trackEvent(TRACKING_EVENTS.PAGE_VIEW, {
      event_category: TRACKING_CONFIG.EVENT_CATEGORIES.NAVIGATION,
      page_title: params.page_title || document.title,
      page_location: params.page_location || window.location.href,
      service_type: params.service_type,
      user_journey_step: params.user_journey_step || USER_JOURNEY_STEPS.LANDING_PAGE,
      ...params.custom_parameters
    })
  }, [trackEvent])

  // Service page view tracking
  const trackServicePageView = useCallback((serviceType: string, params: PageViewEventParams = {}) => {
    trackEvent(TRACKING_EVENTS.SERVICE_PAGE_VIEW, {
      event_category: TRACKING_CONFIG.EVENT_CATEGORIES.ENGAGEMENT,
      service_type: serviceType,
      page_title: params.page_title || document.title,
      page_location: params.page_location || window.location.href,
      user_journey_step: USER_JOURNEY_STEPS.SERVICE_SELECTION,
      ...params.custom_parameters
    })
  }, [trackEvent])

  // Button click tracking
  const trackButtonClick = useCallback((params: ButtonClickEventParams) => {
    trackEvent(TRACKING_EVENTS.BUTTON_CLICK, {
      event_category: TRACKING_CONFIG.EVENT_CATEGORIES.ENGAGEMENT,
      button_text: params.button_text,
      button_id: params.button_id,
      button_location: params.button_location,
      ...params.custom_parameters
    })
  }, [trackEvent])

  // Link click tracking
  const trackLinkClick = useCallback((params: ButtonClickEventParams) => {
    trackEvent(TRACKING_EVENTS.LINK_CLICK, {
      event_category: TRACKING_CONFIG.EVENT_CATEGORIES.ENGAGEMENT,
      link_text: params.button_text,
      link_id: params.button_id,
      link_location: params.button_location,
      ...params.custom_parameters
    })
  }, [trackEvent])

  // Scroll depth tracking
  const trackScrollDepth = useCallback((percentage: number, params: BaseEventParams = {}) => {
    trackEvent(TRACKING_EVENTS.SCROLL_DEPTH, {
      event_category: TRACKING_CONFIG.EVENT_CATEGORIES.ENGAGEMENT,
      scroll_percentage: percentage,
      page_location: window.location.href,
      ...params.custom_parameters
    })
  }, [trackEvent])

  // Custom dimension tracking
  const setCustomDimension = useCallback((dimension: string, value: string) => {
    if (typeof window === 'undefined') return

    initializeDataLayer()

    // Send custom dimension to GTM
    window.dataLayer.push({
      event: 'custom_dimension',
      dimension_name: dimension,
      dimension_value: value,
      [TRACKING_CONFIG.CUSTOM_DIMENSIONS.INCOME_RANGE]: dimension === 'income_range' ? value : undefined,
      [TRACKING_CONFIG.CUSTOM_DIMENSIONS.ZIPCODE]: dimension === 'zipcode' ? value : undefined,
      [TRACKING_CONFIG.CUSTOM_DIMENSIONS.SERVICE_TYPE]: dimension === 'service_type' ? value : undefined,
      [TRACKING_CONFIG.CUSTOM_DIMENSIONS.SOURCE]: dimension === 'source' ? value : undefined
    })

    // Send to GA4 via gtag
    if (window.gtag) {
      window.gtag('config', TRACKING_CONFIG.GA_MEASUREMENT_ID, {
        custom_map: { [dimension]: value }
      })
    }
  }, [initializeDataLayer])

  // Enhanced ecommerce tracking (for future use)
  const trackPurchase = useCallback((transactionId: string, value: number, items: unknown[] = []) => {
    trackEvent('purchase', {
      event_category: TRACKING_CONFIG.EVENT_CATEGORIES.CONVERSION,
      transaction_id: transactionId,
      value: value,
      currency: 'USD',
      items: items
    })
  }, [trackEvent])

  // User ID tracking (for cross-device attribution)
  const setUserId = useCallback((userId: string) => {
    if (typeof window === 'undefined') return

    initializeDataLayer()

    window.dataLayer.push({
      event: 'user_id_set',
      user_id: userId
    })

    if (window.gtag) {
      window.gtag('config', TRACKING_CONFIG.GA_MEASUREMENT_ID, {
        user_id: userId
      })
    }
  }, [initializeDataLayer])

  return {
    // Core tracking functions
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
    
    // Utility functions
    setCustomDimension,
    setUserId,
    trackPurchase,
    
    // Configuration
    config: TRACKING_CONFIG,
    events: TRACKING_EVENTS,
    userJourneySteps: USER_JOURNEY_STEPS
  }
}

export type GTMTrackingHook = ReturnType<typeof useGTMTracking>
