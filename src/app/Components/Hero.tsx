import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div
      className="hero min-h-[33vh] bg-base-200 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)), url('https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Cozy Threads is an ecommerce brand that epitomizes comfort and style. Our sustainable, high-quality apparel is designed to provide a luxurious, cozy experience, whether you're relaxing at home or out and about. Embrace the warmth of Cozy Threads and indulge in fashionable functionality.</p>
          <Link className="btn btn-primary text-white" href="/product/prod_QHvKaEOiwFkZc4">View Our Top Seller</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero