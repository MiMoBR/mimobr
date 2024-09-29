import NavBar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import ComponentCompanies from '@/components/component_companies/component_companies';
import { handleClick } from '@/utils/gtag';

export default function Home() {

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
          
        </div>
      </main>
      <Footer/>
    </>
  )
}
