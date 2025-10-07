'use client'
import Image from 'next/image'
import React from 'react'

export default function SignInButton() {
  return (
    <>
     <button className='flex gap-4 justify-center items-center text-lg font-medium border border-gray-300 py-2 px-4 rounded shadow mt-20 mx-auto cursor-pointer'>
        <Image src="https://authjs.dev/img/providers/google.svg"
         alt='Google logo'
         width={30}
         height={30}
        />
        <span>Continue with Google</span>
     </button>
    </>
  )
}
