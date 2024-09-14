import NavBar from '@/common/components/Navbar/navbar';
import { handleClick } from '@/common/utils/gtag';

export default function Home() {

  return (
    <>
      <NavBar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
    </>
  )
}
