'use client'
import React, { useState } from 'react'

export default function Counter() {
    const[count , setCount] = useState(1);
  return (
    <div className='flex gap-2 '>
    <button className='bg-black cursor-pointer text-white p-2 text-3xl' onClick={()=>setCount(count+1)}>
       +
    </button>
    <p className='text-3xl'>{count}</p>
    <button className='bg-black cursor-pointer text-white p-2 text-3xl' onClick={()=>setCount(count-1)}> - </button>
    </div>
  )
}
