'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('categorySlug', filter); 
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <>
    <div className='flex gap-4 justify-center items-center mx-30 my-10'>
      <button onClick={() => handleFilter('all')} className="shadow rounded  hover:bg-red-200 hover:animate-bounce cursor-pointer p-2 text-[1.1rem]">All</button>
      <button onClick={() => handleFilter('clothes')} className="shadow rounded  hover:bg-red-200  cursor-pointer p-2 text-[1.1rem]">Clothes</button>
      <button onClick={() => handleFilter('electronics')} className="shadow rounded  hover:bg-red-200  cursor-pointer p-2 text-[1.1rem]">Electronics</button>
      <button onClick={() => handleFilter('furniture')} className="shadow rounded  hover:bg-red-200  cursor-pointer p-2 text-[1.1rem]">Furniture</button>
      <button onClick={() => handleFilter('shoes')} className="shadow rounded  hover:bg-red-200  cursor-pointer p-2 text-[1.1rem]">Shoes</button>
    
      <button onClick={() => handleFilter('miscellaneous')} className="shadow  hover:bg-red-200  rounded cursor-pointer p-2 text-[1.1rem]">Miscellaneous</button>
    
    </div>
    
    </>
  );
}
