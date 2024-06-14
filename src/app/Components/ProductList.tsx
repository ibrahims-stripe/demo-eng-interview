import React from 'react'
import { Product } from '../types';
import AddToCart from './AddToCart';
import Link from 'next/link';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-12">
      {products.map((product, index) => (
        <div key={index} className="card bordered shadow-lg w-96 h-full">
          <Link href={`product/${product.id}`}>
            <figure className="h-96 rounded-t-lg">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover object-center" />
            </figure>
          </Link>
          <div className="card-body flex-grow">
            <h2 className="card-title">{product.title}</h2>
            <p className="description h-32 overflow-auto">{product.description}</p>
            <p className="text-2xl font-bold">${product.price / 100}</p>
            <AddToCart product={product} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList