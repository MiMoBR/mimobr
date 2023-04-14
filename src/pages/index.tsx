
import NavBar from '@/common/components/Navbar/navbar';

export default function Home() {
  const test = (e: any) => {
    console.log('Clicked',e)
  }

  return (
    <>
      <NavBar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h1>Test GA4 NEW!!!!</h1>
          <a href='#' onClick={ (event) => {
            test(event)
            } }>CLICK home</a>
        </div>
      </main>
    </>
  )
}
