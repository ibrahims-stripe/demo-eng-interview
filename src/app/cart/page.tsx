'use client'

import React, { useState } from 'react'
import CartList from '../Components/Cart/CartList'
import { useCartContext } from '../context'
import { loadStripe } from '@stripe/stripe-js';

const Page = () => {
  const [loading, setLoading] = useState(false)
  const { cart, totalPrice } = useCartContext()

  const handleCheckout = async () => {
    try {
      setLoading(true)
      loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`);
      const response = await fetch('/api/checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
      })

      const session = await response.json();
      window.location.href = session.url;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='container mx-auto'>
        <CartList  />
        <div className='flex w-full justify-between py-12'>
          <button
            className="btn btn-primary text-white justify-start"
            onClick={() => handleCheckout()}
          >
            { loading ? 'Loading' : 'Buy Now' }
          </button>
          <div className='justify-end'>
            <span className="font-bold">Total Price:</span> ${totalPrice / 100}
          </div>
        </div>
      </div>
    </>
  )
}

export default Page