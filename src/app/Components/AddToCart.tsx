'use client'

import React, { useEffect, useState } from 'react'
import { Product } from '../types'

type AddToCartProps = {
  product: Product
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [cart, setCart] = useState<Product[]>(() => {
    const storedCart = localStorage.getItem('cart')
    return storedCart ? JSON.parse(storedCart) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log("cart", cart)
  }, [cart])

  const handleAddToCart = () => {
    console.log("Clicked")
    console.log("product", product.title)
    setCart([...cart, product])
  }

  return (
    <button className="btn btn-primary"
      onClick={() => handleAddToCart}
    >Add to Cart</button>
  )
}

export default AddToCart