'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

// نوع بيانات العنصر
type NavItem = {
  name: string
  href: string
}

// Props للـ Component
interface NavListProps {
  item: NavItem
}

export default function NavList({ item }: NavListProps) {
  const pathName = usePathname()

  return (
    <li
      className={`hover:opacity-80 ${
        pathName === item.href ? 'text-red-600' : 'text-gray-800'
      }`}
    >
      <Link href={item.href}>{item.name}</Link>
    </li>
  )
}
