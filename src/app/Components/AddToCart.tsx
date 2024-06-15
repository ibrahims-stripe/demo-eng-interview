'use client'

import React, { useEffect, useState } from 'react'
import { useCartContext } from '@/app/context'
import { AddToCartProps } from '@/app/types'


const AddToCart = ({ product }: AddToCartProps) => {
  const [clicked, setClicked] = useState(false)
  const { addToCart } = useCartContext()

  useEffect(() => {
    setTimeout(() => {
      setClicked(false)
    }, 800)
  }, [clicked])

  const handleAddToCart = () => {
    setClicked(true)
    addToCart(product)
  }

  return (
    <button
      className={`btn btn-primary text-white ${clicked && 'btn-success'}`}
      onClick={() => handleAddToCart()}
    >
      {clicked ? 'Added To Cart' : 'Add to Cart'}
    </button>
  )
}

export default AddToCart