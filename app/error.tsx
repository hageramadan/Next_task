'use client'
import React from 'react'

interface Props {
    error: Error
}
export default function error({error}: Props) {
  return (
    <>
    <h3>Something went wrong</h3>
    <h1 className='text-red-500'>{error.message}</h1>
    </>
  )
}
