import React from 'react'
import Hero from './Components/Hero'
import ProductList from './Components/ProductList'
import { Product } from './types'

const products: Product[] = [
  {
    "id": "1",
    "image": "https://via.placeholder.com/300x200?text=Organic+Cotton+Hoodie",
    "title": "Organic Cotton Hoodie",
    "description": "A super soft and sustainably made hoodie, perfect for cozy days. Made from 100% organic cotton, this hoodie is both comfortable and eco-friendly.",
    "price": 4999
  },
  {
    "id": "2",
    "image": "https://via.placeholder.com/300x200?text=Recycled+Polyester+Backpack",
    "title": "Recycled Polyester Backpack",
    "description": "A stylish and durable backpack made from recycled polyester materials. Perfect for everyday use or outdoor adventures, with plenty of compartments to keep you organized.",
    "price": 3999
  },
  {
    "id": "3",
    "image": "https://via.placeholder.com/300x200?text=Bamboo+Socks+(3-Pack)",
    "title": "Bamboo Socks (3-Pack)",
    "description": "A pack of three ultra-soft and breathable socks made from sustainable bamboo fibers. Available in a variety of colors, these socks are perfect for everyday wear.",
    "price": 1499
  },
  {
    "id": "4",
    "image": "https://via.placeholder.com/300x200?text=Fair+Trade+Scarf",
    "title": "Fair Trade Scarf",
    "description": "A cozy and stylish scarf made from ethically sourced materials and produced under fair trade practices. This versatile accessory can be worn in multiple ways and adds a touch of warmth to any outfit.",
    "price": 2499
  }
]

const Page = () => {
  return (
    <div>
      <Hero />
      <div className='container mx-auto'>
        <h1 className='flex py-4 text-gray-800 justify-center'>Same say Coziest, we say Trending</h1>
        <ProductList products={products} />
      </div>
    </div>
  )
}

export default Page