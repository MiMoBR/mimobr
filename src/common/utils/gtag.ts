export const GA_TRACKING_ID = `${process.env.GA_MEASUREMENT_ID}`;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// https://developers.google.com/analytics/devguides/collection/gtagjs/events

// Export Page View
export const pageview = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
}

// Define a type for event parameters
interface EventTrackParams {
  event_name: string;
  event_category: string;
  event_label?: string;
  event_value?: number;
}

// Export a function for tracking events
export const eventTrack = ({ event_name, event_category, event_label, event_value }: EventTrackParams): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event_name, {
      event_category: event_category,
      event_label: event_label,
      event_value: event_value,
    });
  }
}

// Initialize Google Tag Manager (GTM)
export const initGTM = (gtmId: string): void => {
  if (typeof window !== 'undefined' && !window.gtag) {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gtmId);
  }
};

//////////////////////////////////


// E-commerce Refound
// type GTagEventRefound = {
//   currency: string;
//   transaction_id: string;
//   affiliation: string;
//   coupon: string;
//   value: number;
//   shipping: number;
//   tax: number;
// };

// export const eventRefound = ({
//   currency, transaction_id, affiliation, coupon, value, shipping, tax
// }: GTagEventRefound) => {
//   window.gtag("event", "refound", {
//     currency: currency,
//     transaction_id: transaction_id,
//     affiliation: affiliation,
//     coupon: coupon,
//     value: value,
//     shipping: shipping,
//     tax: tax,
//   });
// };

// E-commerce Purchase
// type GTagEventPurchase = {
//   currency: string;
//   transaction_id: string;
//   affiliation: string;
//   coupon: string;
//   value: number;
//   shipping: number;
//   tax: number
// };

// export const eventPurchase = ({
//   currency, transaction_id, affiliation, coupon, value, shipping, tax
// }: GTagEventPurchase) => {
//   window.gtag("event", "purchase", {
//     currency: currency,
//     transaction_id: transaction_id,
//     affiliation: affiliation,
//     coupon: coupon,
//     value: value,
//     shipping: shipping,
//     tax: tax
//   });
// };