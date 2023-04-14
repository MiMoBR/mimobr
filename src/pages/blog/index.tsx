import NavBar from '@/common/components/Navbar/navbar';

const Blog = () => {
    const test = (e: any) => {
        console.log('Clicked',e)
      }

      return (
        <>
          <NavBar/>
          <main >
            <div >
              <h1>
              Blog Section
              </h1>
              <a href='#' onClick={ (event) => test(event) }>CLICK Blogs</a>
            </div>

          </main>
        </>
      );
}

export default Blog