// Define a type for event parameters
type EventTrackParams = {
  event: string;
  category: string;
  action: string;
  label: string;
  value: number;
}

// Export a function for tracking events 
export const handleClick = (
  event: string,
  category: string,
  action: string,
  label: string,
  value: number
) => {
  const params: EventTrackParams = {
    event,
    category,
    action,
    label,
    value
  };

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(params);
  } else {
    console.warn('dataLayer is not defined');
  }
}

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