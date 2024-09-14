import NavBar from '@/common/components/Navbar/navbar';
import { eventTrack, initGTM } from '@/common/utils/gtag';
import { useEffect } from 'react';

export default function Home() {
  const test = (e: any) => {
    console.log('Clicked',e)
  }

  // Initialize GTM
  useEffect(() => {
    initGTM(process.env.GA_MEASUREMENT_ID as string); // Cast to string to avoid type errors
  }, []);
  
  // Handle event tracking
  const handleClick = () => {
    eventTrack({
      event_name: 'click',
      event_category: 'button',
      event_label: 'buy_now',
      event_value: 1,
    });
  };

  return (
    <>
      <NavBar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h1>Test</h1>
          <a href='#' onClick={ (event) => {
              test(event)
            } }>CLICK Test</a>
          <br/>
          <h1>Event</h1>
          <a href='#' onClick={handleClick}>CLICK Event</a>
        </div>
      </main>
    </>
  )
}
