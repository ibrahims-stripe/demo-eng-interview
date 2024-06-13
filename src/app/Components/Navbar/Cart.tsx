'use client'

import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { Product } from '../../types'


const Cart = () => {


  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge bg-red-400 badge-sm indicator-item">5</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{} Items</span>
          <span className="text-info">Subtotal: ${5 / 100}</span>
          <div className="card-actions">
            <Link className="btn btn-primary btn-block" href="/cart">
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart