import Link from 'next/link'

export default function NavBar() {

    return (
        <>
            <nav style={{padding:"10px 0 10px 0"}}>
                <Link href='/'  style={{padding:"10px 10px 10px 0"}} >Home</Link>
                <Link href='/events-list'  style={{padding:"10px 10px 10px 0"}} >Events Tests</Link>
                <Link href='/blog'  style={{padding:"10px 10px 10px 0"}} >Blog</Link>
            </nav>
        </>
    )
}
