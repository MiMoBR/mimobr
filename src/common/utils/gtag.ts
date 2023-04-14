export const GA_TRACKING_ID = `${process.env.GA_MEASUREMENT_ID}`;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type GTagEvent = {
  event_name: string;
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({ event_name, action, category, label, value }: GTagEvent) => {
  window.gtag("event", event_name, {
    event_action: action,
    event_category: category,
    event_label: label,
    value: value
  });
};

// E-commerce Refound
type GTagEventRefound = {
  currency: string;
  transaction_id: string;
  affiliation: string;
  coupon: string;
  value: number;
  shipping: number;
  tax: number;
};

export const eventRefound = ({
  currency, transaction_id, affiliation, coupon, value, shipping, tax
}: GTagEventRefound) => {
  window.gtag("event", "refound", {
    currency: currency,
    transaction_id: transaction_id,
    affiliation: affiliation,
    coupon: coupon,
    value: value,
    shipping: shipping,
    tax: tax,
  });
};

// E-commerce Purchase
type GTagEventPurchase = {
  currency: string;
  transaction_id: string;
  affiliation: string;
  coupon: string;
  value: number;
  shipping: number;
  tax: number
};

export const eventPurchase = ({
  currency, transaction_id, affiliation, coupon, value, shipping, tax
}: GTagEventPurchase) => {
  window.gtag("event", "purchase", {
    currency: currency,
    transaction_id: transaction_id,
    affiliation: affiliation,
    coupon: coupon,
    value: value,
    shipping: shipping,
    tax: tax
  });
};