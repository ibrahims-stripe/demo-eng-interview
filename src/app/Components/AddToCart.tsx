'use client'

import React from 'react'
import { Product } from '../types'
import { useCartContext } from '../context'

type AddToCartProps = {
  product: Product
}

const AddToCart = ({ product }: AddToCartProps) => {

  const { addToCart } = useCartContext()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <button className="btn btn-primary text-white"
      onClick={() => handleAddToCart()}
    >Add to Cart
    </button>
  )
}

export default AddToCart