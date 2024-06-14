'use client'

import React from 'react'
import CartList from '../Components/Cart/CartList'
import { useCartContext } from '../context'
import { loadStripe } from '@stripe/stripe-js'

const Page = () => {
  const { cart, totalPrice } = useCartContext()

  const handleCheckout = async () => {
    const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`);

    try {
      const stripe = await stripePromise;
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
    }
  }

  return (
    <>
      <div className='container mx-auto'>
        <CartList  />
        <div className='flex w-full justify-between'>
          <button
            className="btn btn-primary text-white justify-start"
            onClick={() => handleCheckout()}
          >
            Buy Now
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