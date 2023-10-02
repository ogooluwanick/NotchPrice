import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
                <Link href={"/"} className="flex items-center gap-1">
                        <Image src={"/assets/icons/logo.svg"} width={27} height={27} alt="Logo" />
                        <p className="nav-logo">
                                Notch<span className="text-primary">Price</span>
                        </p>
                </Link>

                <div className="flex items-center gap-5">
                        {
                                [ 
                                        { src: '/assets/icons/search.svg', alt: 'search' },
                                        { src: '/assets/icons/black-heart.svg', alt: 'heart' },
                                        { src: '/assets/icons/user.svg', alt: 'user' },
                                ].map((item,i) =>(
                                        <Image key={i} src={item.src} width={27} height={27} alt={item.alt} />
                                ))
                        }
                </div>
        </nav>
    </header>
  )
}

export default NavBar