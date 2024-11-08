import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import ComponentCompanies from '@/components/component_companies/component_companies';
import { handleClick } from '@/utils/gtag';

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

  const handleViewPromotion = () => {
    // Send Purchase event to GA4
    gtag('event', '"view_promotion"', {
      transaction_id: purchaseData.id, // Unique transaction ID
      affiliation: 'Online Store',      // Store name
      value: purchaseData.amount,        // Total value
      currency: 'USD',                   // Currency (change as needed)
      items: purchaseData.items.map(item => ({
        item_name: item.name,
        item_id: item.id,
        price: item.price,
        quantity: item.quantity,
      })),
    });

    // Perform additional purchase logic here (e.g., API call)
    console.log('Purchase event sent to GA4:', purchaseData);
  };

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
              'click v3', 
              'ahref v3', 
              'link v3', 
              'CLICK v3', 
              1978
            )}
          >
            Click Event
          </a>
        </div>
      </main>
      <Footer/>
    </>
  )
}
