'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function DropDownMenu() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="cursor-pointer"
      >
        {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </button>

      {menuOpen && (
        <div className="absolute top-12 right-0 w-48 bg-white shadow-lg z-20 rounded-md">
          <ul className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="block hover:text-red-500" onClick={() => setMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
