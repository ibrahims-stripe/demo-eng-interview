'use client'

import React, { useEffect, useState } from 'react';
import { useCartContext } from '@/app/context';

const CartList = () => {
  const { cart, incrementProduct, decrementProduct, removeFromCart } = useCartContext()
  const [cartItems, setCartItems] = useState({})

  useEffect(() => {
    setCartItems(cart)
  }, [cart])

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cartItems).map(([key, item]) => (
            <tr key={key}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.product.image} alt={item.product.title} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.product.title}</div>
                  </div>
                </div>
              </td>
              <td>${(item.product.price / 100).toFixed(2)}</td>
              <td>
                <div className="btn-group join">
                  <button
                    onClick={() => decrementProduct(item.product.id)}
                    className="btn btn-sm join-item">-</button>
                  <button className="btn btn-sm join-item">{item.quantity}</button>
                  <button
                    onClick={() => incrementProduct(item.product.id, item.product)}
                    className="btn btn-sm join-item">+</button>
                </div>
              </td>
              <td>${(item.product.price * item.quantity / 100).toFixed(2)}</td>
              <th>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="btn btn-ghost btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartList;