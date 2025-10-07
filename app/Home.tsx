import Link from 'next/link'
import React from 'react'
import Slick from './components/Slider';
export default function HomePage() {


  return (
    
    <>
    <div className='bg-black flex  py-1 text-[1rem]  justify-center items-center px-[10%] text-white'>
       <p>free shipping on orders over $100</p>
       <Link href="/products" className='hover:underline ms-3 text-red-300'>ShopNow</Link>
    </div>
    <div className='h-[80vh]'>
      <Slick/>
    </div>
    </>
  )
}
