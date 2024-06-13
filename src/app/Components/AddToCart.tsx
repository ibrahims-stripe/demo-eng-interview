'use client'

import React, { useEffect, useState } from 'react'
import { Product } from '../types'

type AddToCartProps = {
  product: Product
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [cart, setCart] = useState<{ [id: string]: { product: Product, quantity: number } }[]>(() => {
    if (typeof window !== 'undefined') {
      const localCart = window.localStorage.getItem("cart")
      return localCart ? JSON.parse(localCart) : []
    }
    return []
  })

  const getCartFromLocalStorage = () => {
    const localCart = localStorage.getItem("cart") || "[]"
    return JSON.parse(localCart)
  }

  useEffect(() => {
    const initialCart = getCartFromLocalStorage()
    setCart(initialCart)
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const handleAddToCart = () => {
    const localCart = getCartFromLocalStorage()
    const productId = product.id;
    const existingItem = localCart.find((item: { [id: string]: { quantity: number } }) => Object.keys(item)[0] === productId)

    if (existingItem) {
      const updatedCart = localCart.map((item: { [id: string]: { quantity: number } }) => {
        if (Object.keys(item)[0] === productId) {
          return { ...item, [productId]: { ...item[productId], quantity: item[productId].quantity + 1 } }
        }
        return item
      })
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      setCart(updatedCart)
    } else {
      const updatedCart = [...localCart, { [productId]: { product, quantity: 1 } }]
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      setCart(updatedCart)
    }
  }

  return (
    <button className="btn btn-primary"
      onClick={() => handleAddToCart()}
    >Add to Cart</button>
  )
}

export default AddToCart