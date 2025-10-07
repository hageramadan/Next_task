import { getProductById } from '@/app/services/products'
import React from 'react'
import ProductCard from '../productCard'

interface Props {
  params:Promise< { productid: string }>
}
export async function generateMetadata({ params }: Props) {
    const { productid}=  await params;
  const product = await getProductById(parseInt(productid))

  return {
    title: product.title,
  }
}
export default async function page({ params }: Props) {
  const { productid}=  await params
  const product = await getProductById(parseInt(productid))

  return (
    <div className="mx-10 md:mx-20 lg:mx-35 xl:mx-44 mt-6">
      <ProductCard
        product={product}
        className="flex flex-row gap-6 items-start"
        imageWrapperClassName="w-1/3 h-[30rem] relative"
        contentWrapperClassName="hidden"
      >
        <div className="flex-1 flex flex-col justify-start">
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          <h3 className="text-xl text-gray-700 mb-4">${product.price}</h3>
          <p className="text-gray-500">{product.description}</p>
        </div>
      </ProductCard>
    </div>
  )
}
