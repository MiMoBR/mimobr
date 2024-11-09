import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import ComponentCompanies from '@/components/component_companies/component_companies';
import { handleClick, handleViewPromotion } from '@/utils/gtag';
import { useEffect } from 'react';

export default function Home() {

  // const handlePurchase = () => {
  //   // Send Purchase event to GA4
  //   gtag('event', 'purchase', {
  //     transaction_id: purchaseData.id, // Unique transaction ID
  //     affiliation: 'Online Store',      // Store name
  //     value: purchaseData.amount,        // Total value
  //     currency: 'USD',                   // Currency (change as needed)
  //     items: purchaseData.items.map(item => ({
  //       item_name: item.name,
  //       item_id: item.id,
  //       price: item.price,
  //       quantity: item.quantity,
  //     })),
  //   });

  //   // Perform additional purchase logic here (e.g., API call)
  //   console.log('Purchase event sent to GA4:', purchaseData);
  // };

  // const handleViewPromotion = () => {
  //   if (window.gtag) {
  //     window.gtag('event', 'view_promotion', {
  //       creative_name: 'top',
  //       etapa_jornada: 'busca_exploracao',
  //       // Other parameters...
  //     });
  //   } else {
  //     console.error('gtag is not available');
  //   }
  // };
  
  // useEffect(() => {
  //   // This ensures that `gtag` is available when the component mounts
  //   if (!window.gtag) {
  //     console.error('Google Analytics script not loaded');
  //   }
  // }, []);

    
  // const handleViewPromotion = () => {
  //   // Send Purchase event to GA4
  //   window.gtag('event', '"view_promotion"', {
  //     creative_name: "top",
  //     etapa_jornada: "busca_exploracao",                 
  //     items: ({
  //       item_category: "feminino",
  //       item_id: "1142914",
  //       item_name: "blusa mini tee estampa georgia",
  //       price: 69.9,
  //       quantity: 1
  //     }),
  //     page_type: "home",
  //     section_name: "banner"
  //   });

  //   // Perform additional purchase logic here (e.g., API call)
  //   console.log('Purchase event sent to GA4 -  view promotion');
  // };

  return (
    <>
      <NavBar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ComponentCompanies/>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <br/>
          <h1>Event</h1>
          <a href='#' 
            onClick={() => handleClick(
              'click v3', 
              'ahref v3', 
              'link v3', 
              'CLICK v3', 
              1978
            )}
          >
            Click Event
          </a>
          <br/>
          <a href='#' 
            onClick={() => handleViewPromotion(
              'view_promotion',
              'top',
              'busca_exploracao',
              'home',
              'banner',
              'feminino',
              '1142914',
              69.9
            )}
          >
            Click View Promotion
          </a>
        </div>
      </main>
      <Footer/>
    </>
  )
}
