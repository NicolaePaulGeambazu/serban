# Analytics & Tracking Setup Guide

## 🎯 Overview
This guide covers the complete analytics and tracking setup for your pest control website, including Google Analytics 4, Google Tag Manager, call tracking, and conversion tracking.

## 📊 Tracking Components

### 1. Google Analytics 4 (GA4)
- **Purpose**: Overall traffic and behavior analysis
- **Setup**: Replace `G-XXXXXXXXXX` with your actual GA4 Measurement ID
- **Location**: `src/app/components/Analytics.tsx`

### 2. Google Tag Manager (GTM)
- **Purpose**: Flexible tracking and tag management
- **Setup**: Replace `GTM-XXXXXXX` with your actual GTM Container ID
- **Location**: `src/app/components/Analytics.tsx`

### 3. Call Tracking
- **Purpose**: Phone call attribution and conversion tracking
- **Implementation**: Automatic tracking of all `tel:` links
- **Features**: Source attribution, conversion tracking

### 4. Form Tracking
- **Purpose**: Quiz completion and form submission analytics
- **Implementation**: Built into Quiz component
- **Events**: Step progression, completion, qualification success

## 🔧 Setup Instructions

### Step 1: Environment Variables
Create a `.env.local` file in your project root:

```env
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Call Tracking Service (Optional)
NEXT_PUBLIC_CALL_TRACKING_ENABLED=true
NEXT_PUBLIC_CALL_TRACKING_SERVICE=callrail

# Facebook Pixel (Optional)
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXXX

# LinkedIn Insight Tag (Optional)
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=XXXXXXXXXX

# Hotjar (Optional)
NEXT_PUBLIC_HOTJAR_ID=XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION=6

# Google Ads Conversion Tracking (Optional)
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXXXX

# Bing Ads (Optional)
NEXT_PUBLIC_BING_ADS_ID=XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Step 2: Update Tracking IDs
1. Open `src/app/components/Analytics.tsx`
2. Replace the placeholder IDs with your actual tracking IDs:
   - `G-XXXXXXXXXX` → Your GA4 Measurement ID
   - `GTM-XXXXXXX` → Your GTM Container ID

### Step 3: Verify Implementation
1. Start your development server: `npm run dev`
2. Open browser developer tools
3. Check Network tab for analytics requests
4. Verify data appears in your GA4 and GTM dashboards

## 📈 Tracked Events

### Quiz Events
- `quiz_start` - When user begins the quiz
- `quiz_step` - Each step progression (1, 2, 3)
- `quiz_interaction` - User input selections
- `quiz_completion` - Quiz completed successfully
- `qualification_success` - User qualified

### Conversion Events
- `phone_call` - Phone number clicked
- `form_submission` - Quiz form submitted
- `service_page_view` - Service page visited

### User Journey Events
- `button_click` - Button interactions
- `link_click` - Link clicks
- `scroll_depth` - Page scroll tracking

## 🎯 Conversion Goals

### Primary Goals
1. **Phone Calls**: Track all `tel:` link clicks
2. **Quiz Completions**: Track successful quiz submissions
3. **Service Page Views**: Track service-specific page visits
4. **Qualification Success**: Track successful qualifications

### Secondary Goals
1. **Page Engagement**: Time on page, scroll depth
2. **User Journey**: Step-by-step quiz progression
3. **Source Attribution**: UTM parameters and referrer tracking

## 📊 Analytics Dashboard Setup

### Google Analytics 4
1. **Audience**: Demographics, interests, geography
2. **Acquisition**: Traffic sources, campaigns
3. **Behavior**: Page views, user flow, events
4. **Conversions**: Goal completions, conversion rates

### Google Tag Manager
1. **Triggers**: Page views, clicks, form submissions
2. **Tags**: Analytics, conversion tracking, remarketing
3. **Variables**: Dynamic values, UTM parameters
4. **Preview Mode**: Test tracking before publishing

## 🔍 Call Tracking Setup

### Recommended Services
1. **CallRail**: Dynamic number insertion
2. **CallTrackingMetrics**: Advanced attribution
3. **Marchex**: Enterprise call tracking

### Implementation
```javascript
// Dynamic phone number based on source
const getPhoneNumber = (source) => {
  const phoneNumbers = {
    'google_ads': '(888) 888-8889',
    'facebook_ads': '(888) 888-8890',
    'default': '(888) 888-8888'
  }
  return phoneNumbers[source] || phoneNumbers.default
}
```

## 📱 Mobile Tracking

### Mobile-Specific Events
- Touch interactions
- Mobile-specific user journeys
- App store attribution (if applicable)

### Responsive Tracking
- Device type detection
- Screen size tracking
- Mobile conversion optimization

## 🚀 Advanced Tracking

### Custom Dimensions
- Income range
- ZIP code
- Service type
- Traffic source

### Enhanced Ecommerce (if applicable)
- Service selection
- Quote requests
- Booking completions

### User ID Tracking
- Cross-device attribution
- User journey mapping
- Lifetime value tracking

## 🔒 Privacy & Compliance

### GDPR Compliance
- Cookie consent management
- Data retention policies
- User opt-out mechanisms

### CCPA Compliance
- California privacy rights
- Data disclosure requirements
- Opt-out mechanisms

### Cookie Policy
- Essential cookies
- Analytics cookies
- Marketing cookies

## 📋 Testing Checklist

### Pre-Launch Testing
- [ ] GA4 tracking verified
- [ ] GTM container published
- [ ] Call tracking functional
- [ ] Quiz events firing
- [ ] Conversion goals set
- [ ] UTM parameters working
- [ ] Mobile tracking tested
- [ ] Privacy compliance verified

### Post-Launch Monitoring
- [ ] Real-time data flowing
- [ ] Conversion rates tracked
- [ ] User journey analysis
- [ ] Source attribution working
- [ ] Call tracking reporting
- [ ] Performance monitoring

## 🛠️ Troubleshooting

### Common Issues
1. **No data in GA4**: Check Measurement ID
2. **GTM not loading**: Verify Container ID
3. **Events not firing**: Check browser console
4. **Call tracking issues**: Verify phone number format

### Debug Tools
- Google Tag Assistant
- GA4 DebugView
- GTM Preview Mode
- Browser Developer Tools

## 📞 Support

For tracking setup assistance:
- Review Google Analytics documentation
- Check Google Tag Manager help center
- Test with browser developer tools
- Verify all tracking IDs are correct

---

**Note**: Replace all placeholder IDs (`G-XXXXXXXXXX`, `GTM-XXXXXXX`, etc.) with your actual tracking IDs before deploying to production. 