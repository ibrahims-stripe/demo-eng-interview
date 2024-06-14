import Link from 'next/link'
import React from 'react'
import Cart from './Cart'

const Navbar = () => {
  return (
    <div className='container mx-auto'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link className="btn btn-primary text-xl text-white" href="/">
            CozyThreads
          </Link>
        </div>
        <Cart />
      </div>
    </div>
  )
}

export default Navbar