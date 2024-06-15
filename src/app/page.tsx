import React from 'react'
import Hero from './Components/Hero'
import ProductList from './Components/ProductList'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const getProductWithPrice = async (productId: string) => {
  try {
    const product = await stripe.products.retrieve(productId);
    const prices = await stripe.prices.list({ product: product.id });
    const price = prices.data[0];

    return { product, price };
  }
  catch (error) {
    console.error('Error:', error);
    return {
      product: {
        "id": '',
        "images": [
          'https://via.placeholder.com/300x300'
        ],
        "name": 'Product Not Found',
        "description": 'This product is not available at the moment. Please check back later.',
      },
      price: {
        "unit_amount": 0
      }, 
    }
  }
}

const productIdList: string[] = [
  "prod_QHvHGcuVXUln7M",
  "prod_QHvIxJ3XJrBIhe",
  "prod_QHvKaEOiwFkZc4",
]

const Page = async () => {
  const productsWithPrices = await Promise.all(
    productIdList.map(async (productId) => {
      const { product, price } = await getProductWithPrice(productId)
      return {
        "id": product.id,
        "image": product.images[0], 
        "title": product.name,
        "description": product.description || '',
        "price": price.unit_amount || 0,
      }
    })
  )

  return (
    <div>
      <Hero />
      <div className='container mx-auto pb-12'>
        <h1 className='flex py-6 text-lg font-bold text-gray-800 justify-center'>Trending @ Galtee Hygge </h1>
        <ProductList products={productsWithPrices} />
      </div>
    </div>
  )
}

export default Page