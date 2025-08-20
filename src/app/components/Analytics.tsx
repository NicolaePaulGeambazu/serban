'use client'

import Script from 'next/script'

// Replace these with your actual tracking IDs
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Replace with your GA4 Measurement ID
const GTM_ID = 'GTM-XXXXXXX' // Replace with your GTM Container ID

export default function Analytics() {
  return (
    <>
      {/* Google Analytics 4 - Load with lower priority */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="lazyOnload"
        id="google-analytics-script"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>

      {/* Google Tag Manager - Load with lower priority */}
      <Script id="google-tag-manager" strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  )
}

// Analytics tracking functions using ID selectors for GTM
export const trackEvent = (eventName: string, parameters: Record<string, unknown> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

export const trackPhoneCall = (phoneNumber: string, source: string) => {
  trackEvent('phone_call', {
    phone_number: phoneNumber,
    source: source,
    event_category: 'engagement',
    event_label: 'phone_call'
  })
}

export const trackFormSubmission = (formName: string, step?: number) => {
  trackEvent('form_submit', {
    form_name: formName,
    step: step,
    event_category: 'engagement',
    event_label: 'form_submit'
  })
}

export const trackQuizCompletion = (step: number, quizData: Record<string, unknown>) => {
  trackEvent('quiz_completion', {
    step: step,
    income_range: quizData.income,
    zipcode: quizData.zipcode,
    connect_now: quizData.connectNow,
    event_category: 'conversion',
    event_label: 'quiz_completion'
  })
}

export const trackServicePageView = (serviceName: string) => {
  trackEvent('service_page_view', {
    service_name: serviceName,
    event_category: 'engagement',
    event_label: 'service_page_view'
  })
}

// Add gtag to window object
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
} 