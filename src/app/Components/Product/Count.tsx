'use client'

import { useCartContext } from '@/app/context'
import React, { useEffect, useState } from 'react'
import { Product } from '@/app/types'


const Count = ({ productId, product }: { productId: string, product: Product }) => {
  const { cart, getProductQuantity, decrementProduct, incrementProduct } = useCartContext()
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setQuantity(getProductQuantity(productId))
    }
  }, [cart])

  return (
    <div className='flex justify-center items-center join'>
      <button
        onClick={() => decrementProduct(productId)
        }
        className="btn btn-primary join-item">-</button>
      <button
        readOnly
        className="btn join-item text-xl">
        {quantity}
      </button>
      <button
        onClick={() => incrementProduct(productId, product)}
        className="btn btn-primary join-item">
        +
      </button>
    </div>
  )
}

export default Count