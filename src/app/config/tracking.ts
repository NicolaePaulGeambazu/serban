// Tracking Configuration
export const TRACKING_CONFIG = {
  // Google Analytics 4
  GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-JQR27P5C2W',
  
  // Google Tag Manager
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-T3JR3XB8',
  
  // Call Tracking
  PHONE_NUMBER: '(888) 888-8888',
  
  // Conversion Goals
  CONVERSION_GOALS: {
    PHONE_CALL: 'phone_call',
    QUIZ_COMPLETION: 'quiz_completion',
    FORM_SUBMISSION: 'form_submission',
    SERVICE_PAGE_VIEW: 'service_page_view',
    QUALIFICATION_SUCCESS: 'qualification_success'
  },
  
  // Event Categories
  EVENT_CATEGORIES: {
    ENGAGEMENT: 'engagement',
    CONVERSION: 'conversion',
    NAVIGATION: 'navigation'
  },
  
  // Custom Dimensions
  CUSTOM_DIMENSIONS: {
    INCOME_RANGE: 'income_range',
    ZIPCODE: 'zipcode',
    SERVICE_TYPE: 'service_type',
    SOURCE: 'source'
  }
}

// Tracking Events
export const TRACKING_EVENTS = {
  // Page Views
  PAGE_VIEW: 'page_view',
  SERVICE_PAGE_VIEW: 'service_page_view',
  
  // Quiz Events
  QUIZ_START: 'quiz_start',
  QUIZ_STEP: 'quiz_step',
  QUIZ_COMPLETION: 'quiz_completion',
  QUIZ_INTERACTION: 'quiz_interaction',
  
  // Conversion Events
  PHONE_CALL: 'phone_call',
  FORM_SUBMISSION: 'form_submission',
  QUALIFICATION_SUCCESS: 'qualification_success',
  
  // User Journey Events
  BUTTON_CLICK: 'button_click',
  LINK_CLICK: 'link_click',
  SCROLL_DEPTH: 'scroll_depth'
}

// User Journey Tracking
export const USER_JOURNEY_STEPS = {
  LANDING_PAGE: 'landing_page',
  SERVICE_SELECTION: 'service_selection',
  QUIZ_START: 'quiz_start',
  QUIZ_STEP_1: 'quiz_step_1_income',
  QUIZ_STEP_2: 'quiz_step_2_zipcode',
  QUIZ_STEP_3: 'quiz_step_3_agent',
  QUALIFICATION_SUCCESS: 'qualification_success',
  PHONE_CALL: 'phone_call'
}

// Call Tracking Setup
export const CALL_TRACKING = {
  // Dynamic phone numbers for different sources
  PHONE_NUMBERS: {
    DEFAULT: '(888) 888-8888',
    GOOGLE_ADS: '(888) 888-8889',
    FACEBOOK_ADS: '(888) 888-8890',
    ORGANIC_SEARCH: '(888) 888-8888',
    DIRECT_TRAFFIC: '(888) 888-8888'
  },
  
  // Call tracking parameters
  CALL_PARAMS: {
    UTM_SOURCE: 'utm_source',
    UTM_MEDIUM: 'utm_medium',
    UTM_CAMPAIGN: 'utm_campaign',
    REFERRER: 'referrer'
  }
}

// Form Tracking
export const FORM_TRACKING = {
  FORMS: {
    QUALIFICATION_QUIZ: 'qualification_quiz',
    CALLBACK_FORM: 'callback_form',
    CONTACT_FORM: 'contact_form'
  },
  
  FORM_STEPS: {
    START: 'start',
    STEP_1: 'step_1',
    STEP_2: 'step_2',
    STEP_3: 'step_3',
    COMPLETE: 'complete',
    ERROR: 'error'
  }
}

// Service Tracking
export const SERVICE_TRACKING = {
  SERVICES: {
    BED_BUG_TREATMENT: 'bed_bug_treatment',
    RODENT_CONTROL: 'rodent_control',
    TERMITE_TREATMENT: 'termite_treatment',
    GENERAL_PEST_CONTROL: 'general_pest_control'
  },
  
  SERVICE_ACTIONS: {
    PAGE_VIEW: 'page_view',
    PHONE_CALL: 'phone_call',
    QUIZ_START: 'quiz_start',
    ESTIMATE_REQUEST: 'estimate_request'
  }
} 