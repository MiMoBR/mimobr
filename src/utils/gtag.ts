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
    console.warn('dataLayer is not defined - handleClick');
  }
}

 // 

 type EventTrackParamsViewPromotion = {
  event: string;
  ecommerce: {
    creative_name: string;
    etapa_jornada: string;
    page_type: string;
    section_name: string;
    items: {
      item_category: string;
      item_id: string;
      price: number
    }[];
  }

}

// Export a function for tracking events 
export const handleViewPromotion = (
  event: string,
  creative_name: string,
  etapa_jornada: string,
  page_type: string,
  section_name: string,
  item_category: string,
  item_id: string,
  price: number
) => {
  const params: EventTrackParamsViewPromotion = {
    event,
    ecommerce: {
      creative_name,
      etapa_jornada,
      page_type,
      section_name,
      items: [{
        item_category,
        item_id,
        price
      }]
    }
  };

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(params);
  } else {
    console.warn('dataLayer is not defined - handleViewPromotion');
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

// Define a type for event parameters

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