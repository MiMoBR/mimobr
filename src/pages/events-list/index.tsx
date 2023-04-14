import NavBar from '@/common/components/Navbar/navbar'
import { windowGlobal } from '@/common/utils/windowGlobal';
import { useEffect } from 'react';

const EventsList = () => {

  const isDLInstalled = (): boolean => windowGlobal() && Boolean(window.dataLayer)

  const sampleHandleClick = () => {
    if(isDLInstalled()){
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        "event": "purchase",
        "ecommerce": {
          "transaction_id": "T_12345",
          "value": 25.42,
          "tax": 4.90,
          "shipping": 5.99,
          "currency": "USD",
          "coupon": "SUMMER_SALE_2",
          "items": [
             {
              "item_id": "SKU_12345",
              "item_name": "Stan and Friends Tee",
              "affiliation": "Google Merchandise Store",
              "coupon": "SUMMER_FUN",
              "discount": 2.22,
              "index": 0,
              "item_brand": "Google",
              "item_category": "Apparel",
              "item_category2": "Adult",
              "item_category3": "Shirts",
              "item_category4": "Crew",
              "item_category5": "Short sleeve",
              "item_list_id": "related_products",
              "item_list_name": "Related Products",
              "item_variant": "green",
              "location_id": "ChIJIQBpAG2ahYAR_6128GcTUEo",
              "price": 9.99,
              "quantity": 1
            },
            {
              "item_id": "SKU_12346",
              "item_name": "Google Grey Women's Tee",
              "affiliation": "Google Merchandise Store",
              "coupon": "SUMMER_FUN",
              "discount": 3.33,
              "index": 1,
              "item_brand": "Google",
              "item_category": "Apparel",
              "item_category2": "Adult",
              "item_category3": "Shirts",
              "item_category4": "Crew",
              "item_category5": "Short sleeve",
              "item_list_id": "related_products",
              "item_list_name": "Related Products",
              "item_variant": "gray",
              "location_id": "ChIJIQBpAG2ahYAR_6128GcTUEo",
              "price": 20.99,
              "promotion_id": "P_12345",
              "promotion_name": "Summer Sale",
              "quantity": 1
            }]
        }
      });
    }


  }
  useEffect(() => {
    // sampleHandleClick()
  }, [])

      return (
        <>
          <NavBar/>
          <main >

            <div>
              <h2>E-commerce - Purchase by DL -- {process.env.gtmID}</h2>
              <a href='#' onClick={ () => sampleHandleClick()}
              >CTA DL Purchase</a>
            </div>
            <div>
              <h2>DL by GTM event Test</h2>
              <a href='#' onClick={ () => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                "event": "my_action_name_1",
                "event_action": "the action",
                "event_category": "the category",
                "event_label": "the label",
                "event_value": "the valeu"
                // 'event_params': {
                //      'param1': 'value1',
                //      'param2': 'value2'
                // },
                // 'user_properties': {
                //      'prop1': 'value1',
                //      'prop2': 'value2'
                // }
             })
              }}
              >CTA DL Test</a>
            </div>
          </main>
        </>
      );
}

export default EventsList