# useGTMTracking Hook

A comprehensive React hook for tracking events to Google Tag Manager (GTM) and Google Analytics 4 (GA4).

## Features

- 🎯 **GTM Integration**: Sends events to GTM dataLayer with container ID `GTM-T3JR3XB8`
- 📊 **GA4 Support**: Dual tracking to both GTM and GA4 via gtag
- 🔄 **Type Safety**: Full TypeScript support with proper interfaces
- 🎨 **Easy to Use**: Simple, intuitive API for all tracking needs
- 🐛 **Debug Mode**: Console logging in development environment
- ⚡ **Performance**: Optimized with useCallback for minimal re-renders

## Installation

The hook is already set up in your project. Just import it:

```typescript
import { useGTMTracking } from '@/hooks/useGTMTracking'
```

## Basic Usage

```typescript
'use client'

import { useGTMTracking } from '@/hooks/useGTMTracking'

export default function MyComponent() {
  const { trackEvent, trackPhoneCall, trackQuizStart } = useGTMTracking()

  const handleClick = () => {
    trackEvent('button_click', {
      event_category: 'engagement',
      button_text: 'Get Started'
    })
  }

  return (
    <button onClick={handleClick}>
      Get Started
    </button>
  )
}
```

## Available Methods

### Core Tracking

#### `trackEvent(eventName, parameters)`
Generic event tracking for any custom event.

```typescript
trackEvent('custom_event', {
  event_category: 'engagement',
  event_label: 'test',
  custom_parameter: 'value'
})
```

#### `trackPhoneCall(params)`
Track phone call interactions with source attribution.

```typescript
trackPhoneCall({
  phone_number: '(888) 888-8888',
  source: 'hero', // 'header' | 'hero' | 'quiz_success' | 'service' | 'other'
  service_type: 'bed_bug_treatment'
})
```

### Quiz Tracking

#### `trackQuizStart(params?)`
Track when a user starts the qualification quiz.

```typescript
trackQuizStart({
  custom_parameters: { source: 'homepage' }
})
```

#### `trackQuizStep(params)`
Track progression through quiz steps.

```typescript
trackQuizStep({
  step: 'income',
  step_number: 1,
  income_range: '$50,000 - $75,000'
})
```

#### `trackQuizCompletion(params)`
Track quiz completion and qualification results.

```typescript
trackQuizCompletion({
  qualification_result: true,
  income_range: '$75,000 - $100,000',
  zipcode: '12345'
})
```

### Conversion Tracking

#### `trackConversion(params)`
Track conversion events with values.

```typescript
trackConversion({
  conversion_type: 'qualification_success',
  conversion_value: 100,
  currency: 'USD'
})
```

### Page & Navigation Tracking

#### `trackPageView(params?)`
Track page views with additional context.

```typescript
trackPageView({
  page_title: 'Service Page',
  service_type: 'rodent_control',
  user_journey_step: 'service_selection'
})
```

#### `trackServicePageView(serviceType, params?)`
Specialized tracking for service pages.

```typescript
trackServicePageView('termite_treatment', {
  page_title: 'Termite Treatment Services'
})
```

### Interaction Tracking

#### `trackButtonClick(params)`
Track button interactions.

```typescript
trackButtonClick({
  button_text: 'Call Now',
  button_id: 'hero-cta',
  button_location: 'hero'
})
```

#### `trackLinkClick(params)`
Track link clicks.

```typescript
trackLinkClick({
  button_text: 'Learn More',
  button_id: 'learn-more-link',
  button_location: 'footer'
})
```

#### `trackScrollDepth(percentage, params?)`
Track scroll depth milestones.

```typescript
// Track when user scrolls 50% down the page
trackScrollDepth(50)
```

### User & Custom Data

#### `setCustomDimension(dimension, value)`
Set custom dimensions for enhanced tracking.

```typescript
setCustomDimension('income_range', '$100,000+')
setCustomDimension('zipcode', '90210')
setCustomDimension('service_type', 'bed_bug_treatment')
```

#### `setUserId(userId)`
Set user ID for cross-device tracking.

```typescript
setUserId('user_12345')
```

## Event Parameters

### Common Parameters

All tracking methods accept these common parameters:

```typescript
interface BaseEventParams {
  event_category?: string
  event_label?: string
  value?: number
  custom_parameters?: Record<string, any>
}
```

### Specific Parameter Types

#### PhoneCallEventParams
```typescript
interface PhoneCallEventParams extends BaseEventParams {
  phone_number: string
  source: 'header' | 'hero' | 'quiz_success' | 'service' | 'other'
  service_type?: string
}
```

#### QuizEventParams
```typescript
interface QuizEventParams extends BaseEventParams {
  step?: string
  step_number?: number
  income_range?: string
  zipcode?: string
  qualification_result?: boolean
  total_steps?: number
}
```

#### ConversionEventParams
```typescript
interface ConversionEventParams extends BaseEventParams {
  conversion_type: 'phone_call' | 'quiz_completion' | 'form_submission' | 'qualification_success'
  conversion_value?: number
  currency?: string
}
```

## Configuration

The hook uses configuration from `@/app/config/tracking`:

- **GTM Container ID**: `GTM-T3JR3XB8`
- **Event Categories**: `engagement`, `conversion`, `navigation`
- **Custom Dimensions**: `income_range`, `zipcode`, `service_type`, `source`

## Example Component

Check out `src/components/examples/GTMTrackingExample.tsx` for a complete example showing all tracking methods in action.

## Development & Debug

In development mode, all tracking events are logged to the console with the format:

```
🎯 GTM Event Tracked: { event: 'event_name', parameters: {...} }
```

## GTM Setup

This hook is designed to work with the GTM container `GTM-T3JR3XB8`. Make sure your GTM setup includes:

1. **Triggers** for ID-based element tracking
2. **Variables** for dynamic values
3. **Tags** for GA4 events and conversion tracking

Refer to `GTM_TARGETING_GUIDE.md` for complete GTM configuration details.

## Environment Variables

Set these in your `.env.local`:

```env
NEXT_PUBLIC_GTM_ID=GTM-T3JR3XB8
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Best Practices

1. **Use specific event names** that match your GTM configuration
2. **Include context** in event parameters (source, location, etc.)
3. **Track user journey** progression for better analysis
4. **Set custom dimensions** early in the user journey
5. **Test in development** using browser dev tools and GTM preview mode
6. **Monitor console logs** for tracking verification

## TypeScript Support

The hook is fully typed with TypeScript interfaces for all parameters. Your IDE will provide autocomplete and type checking for all tracking methods.
