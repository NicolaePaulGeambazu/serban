# Google Tag Manager Targeting Guide

## 🎯 Overview
This guide provides all the ID selectors for setting up triggers in Google Tag Manager. No dataLayer events are used - all tracking is done through ID-based triggers.

## 📞 Phone Call Tracking

### Header Phone Calls
- **ID**: `header-phone-call`
- **Trigger Type**: Click - All Elements
- **Selector**: `#header-phone-call`
- **Event**: Phone call from header

### Hero Phone Calls
- **ID**: `hero-phone-call`
- **Trigger Type**: Click - All Elements
- **Selector**: `#hero-phone-call`
- **Event**: Phone call from hero section

### Service-Specific Phone Calls
- **Bed Bug**: `bed-bug-header-phone-call`, `bed-bug-hero-phone-call`
- **Rodent Control**: `rodent-header-phone-call`, `rodent-hero-phone-call`
- **Termite Treatment**: `termite-header-phone-call`, `termite-hero-phone-call`
- **General Pest Control**: `general-header-phone-call`, `general-hero-phone-call`

### Quiz Success Phone Call
- **ID**: `quiz-success-phone-call`
- **Trigger Type**: Click - All Elements
- **Selector**: `#quiz-success-phone-call`
- **Event**: Phone call after quiz qualification

## 🧩 Quiz Tracking

### Quiz Navigation
- **Next Button**: `quiz-next-button`
- **Back Button**: `quiz-back-button`
- **Submit Button**: `quiz-submit-button`

### Quiz Inputs
- **Income Options**: `quiz-income-option-1` through `quiz-income-option-6`
- **ZIP Code Input**: `quiz-zipcode-input`
- **Connect Options**: `quiz-connect-yes`, `quiz-connect-no`

### Quiz Triggers Setup
```javascript
// Quiz Step Progression
Trigger: Click - All Elements
Selector: #quiz-next-button, #quiz-submit-button

// Quiz Income Selection
Trigger: Click - All Elements
Selector: #quiz-income-option-1, #quiz-income-option-2, #quiz-income-option-3, #quiz-income-option-4, #quiz-income-option-5, #quiz-income-option-6

// Quiz ZIP Code Input
Trigger: Change - All Elements
Selector: #quiz-zipcode-input

// Quiz Connect Selection
Trigger: Click - All Elements
Selector: #quiz-connect-yes, #quiz-connect-no

// Quiz Back Navigation
Trigger: Click - All Elements
Selector: #quiz-back-button
```

## 🏠 Service Page Tracking

### Service Selection
- **Bed Bug Treatment**: `service-bed-bug-treatment`
- **Rodent Control**: `service-rodent-control`
- **Termite Treatment**: `service-termite-treatment`
- **General Pest Control**: `service-general-pest-control`

### Service Page Triggers
```javascript
// Service Page Views
Trigger: Page View
URL: contains '/services/bed-bug-treatment'
URL: contains '/services/rodent-control'
URL: contains '/services/termite-treatment'
URL: contains '/services/general-pest-control'

// Service Selection Clicks
Trigger: Click - All Elements
Selector: #service-bed-bug-treatment, #service-rodent-control, #service-termite-treatment, #service-general-pest-control
```

## 🎯 Conversion Tracking Setup

### 1. Phone Call Conversions
```javascript
// All Phone Call Clicks
Trigger: Click - All Elements
Selector: a[href^="tel:"]

// Specific Phone Call Sources
Trigger: Click - All Elements
Selector: #header-phone-call, #hero-phone-call, #quiz-success-phone-call
```

### 2. Quiz Completion
```javascript
// Quiz Submit Button
Trigger: Click - All Elements
Selector: #quiz-submit-button

// Quiz Success Page (when qualified)
Trigger: Page View
URL: contains 'qualified' OR
Trigger: Element Visibility
Selector: .quiz-success-message
```

### 3. Service Page Engagement
```javascript
// Service Page Views
Trigger: Page View
URL: contains '/services/'

// Service Selection
Trigger: Click - All Elements
Selector: #service-bed-bug-treatment, #service-rodent-control, #service-termite-treatment, #service-general-pest-control
```

## 📊 Event Tracking Variables

### Built-in Variables
- **Click ID**: `{{Click ID}}`
- **Click URL**: `{{Click URL}}`
- **Page URL**: `{{Page URL}}`
- **Page Path**: `{{Page Path}}`

### Custom Variables
```javascript
// Service Type Variable
Variable Type: Custom JavaScript
Code:
function() {
  var path = {{Page Path}};
  if (path.includes('bed-bug')) return 'bed_bug_treatment';
  if (path.includes('rodent')) return 'rodent_control';
  if (path.includes('termite')) return 'termite_treatment';
  if (path.includes('general')) return 'general_pest_control';
  return 'home';
}

// Phone Call Source Variable
Variable Type: Custom JavaScript
Code:
function() {
  var clickId = {{Click ID}};
  if (clickId === 'header-phone-call') return 'header';
  if (clickId === 'hero-phone-call') return 'hero';
  if (clickId === 'quiz-success-phone-call') return 'quiz_success';
  return 'other';
}
```

## 🎯 GTM Tag Configuration

### Google Analytics 4 Events
```javascript
// Phone Call Event
Event Name: phone_call
Parameters:
- phone_number: (888) 888-8888
- source: {{Phone Call Source}}
- event_category: conversion

// Quiz Step Event
Event Name: quiz_step
Parameters:
- step: {{Click ID}}
- event_category: engagement

// Service Page View Event
Event Name: service_page_view
Parameters:
- service_type: {{Service Type}}
- event_category: engagement

// Quiz Completion Event
Event Name: quiz_completion
Parameters:
- event_category: conversion
- event_label: qualified
```

### Conversion Tracking Tags
```javascript
// Google Ads Conversion
Tag Type: Google Ads Conversion Tracking
Conversion ID: AW-XXXXXXXXXX
Conversion Label: XXXXXXXXXX
Trigger: {{Phone Call Trigger}} OR {{Quiz Completion Trigger}}

// Facebook Pixel Conversion
Tag Type: Facebook Pixel
Event Name: Lead
Trigger: {{Phone Call Trigger}} OR {{Quiz Completion Trigger}}
```

## 🔧 Trigger Configuration Examples

### 1. Phone Call Tracking
```javascript
Trigger Name: Phone Call - All Sources
Trigger Type: Click - All Elements
Selector: a[href^="tel:"]
```

### 2. Quiz Step Tracking
```javascript
Trigger Name: Quiz Step Progression
Trigger Type: Click - All Elements
Selector: #quiz-next-button, #quiz-submit-button
```

### 3. Service Page Views
```javascript
Trigger Name: Service Page View
Trigger Type: Page View
URL: contains '/services/'
```

### 4. Quiz Income Selection
```javascript
Trigger Name: Quiz Income Selection
Trigger Type: Click - All Elements
Selector: #quiz-income-option-1, #quiz-income-option-2, #quiz-income-option-3, #quiz-income-option-4, #quiz-income-option-5, #quiz-income-option-6
```

## 📋 Complete ID Selector List

### Phone Calls
- `header-phone-call`
- `hero-phone-call`
- `quiz-success-phone-call`
- `bed-bug-header-phone-call`
- `bed-bug-hero-phone-call`
- `rodent-header-phone-call`
- `rodent-hero-phone-call`
- `termite-header-phone-call`
- `termite-hero-phone-call`
- `general-header-phone-call`
- `general-hero-phone-call`

### Quiz Elements
- `quiz-next-button`
- `quiz-back-button`
- `quiz-submit-button`
- `quiz-income-option-1` through `quiz-income-option-6`
- `quiz-zipcode-input`
- `quiz-connect-yes`
- `quiz-connect-no`

### Service Selection
- `service-bed-bug-treatment`
- `service-rodent-control`
- `service-termite-treatment`
- `service-general-pest-control`

## 🚀 Implementation Steps

### Step 1: Create Triggers
1. Go to GTM → Triggers → New
2. Use the selectors above to create triggers
3. Test triggers in Preview mode

### Step 2: Create Variables
1. Go to GTM → Variables → New
2. Create custom variables for dynamic values
3. Test variables in Preview mode

### Step 3: Create Tags
1. Go to GTM → Tags → New
2. Configure GA4 events and conversion tracking
3. Assign appropriate triggers

### Step 4: Test & Publish
1. Use Preview mode to test all triggers
2. Verify events are firing correctly
3. Publish container when ready

## 🔍 Testing Checklist

### Pre-Publish Testing
- [ ] All phone call triggers working
- [ ] Quiz step triggers firing
- [ ] Service page triggers active
- [ ] Conversion events tracking
- [ ] Variables returning correct values
- [ ] No duplicate events firing

### Post-Publish Verification
- [ ] Real-time data in GA4
- [ ] Conversion tracking in ads platforms
- [ ] Phone call attribution working
- [ ] User journey tracking complete
- [ ] No JavaScript errors in console

---

**Note**: All tracking is now based on ID selectors, making it easy to set up triggers in Google Tag Manager without custom dataLayer events. 