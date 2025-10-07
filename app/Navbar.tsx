import Image from 'next/image'
import Link from 'next/link'
import NavList from './components/navList'
import DropDownMenu from './components/dropMenu'
import Icons from './components/Icons'
import { auth } from './services/auth'

type NavItem = {
  name: string
  href: string
}

const baseNavItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" }
]

export default async function Navbar() {
  const session = await auth()
  const nav: NavItem[] = [...baseNavItems]

  if (session?.user) {
    nav.push({ name: "signout", href: "/signout" })
  } 
  if(!session?.user){
    nav.push({ name: "signin", href: "/login" })
  }

  return (
    <nav className="flex justify-between items-center px-6 md:px-[10%] py-3 shadow text-[#333] fixed w-full z-10 bg-white">
      <div className="text-2xl flex items-center gap-2">
        <Link href="/">
          <Image src="/icon.png" alt="logo" width={30} height={30} />
        </Link>
        <h2>Store</h2>
      </div>

      <ul className="hidden md:flex gap-8">
        {nav.map((item) => (
          <NavList key={item.name} item={item} />
        ))}
       
          
      
      </ul>

      <div className="flex gap-4 items-center">

        <Icons />
        {session?.user &&
            <li className="flex gap-2 items-center cursor-pointer">
            <Image src={session.user.image as string} alt="avatar" width={30} height={30} className="rounded-full" />
          </li>
          
          
          }
        <DropDownMenu />
      </div>
    </nav>
  )
}
