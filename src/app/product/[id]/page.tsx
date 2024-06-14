import Count from '@/app/Components/Product/Count';
import React from 'react'
import { Stripe } from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const getProductWithPrice = async (productId: string) => {
  const product = await stripe.products.retrieve(productId);
  const prices = await stripe.prices.list({ product: product.id });
  const price = prices.data[0];

  return { product, price };
}

/* eslint-disable-next-line */
export default async function Page({ params }: any) {
  const { product, price } = await getProductWithPrice(params.id);
  const baseProduct = {
    id: product.id,
    title: product.name,
    description: product.description as string,
    image: product.images[0],
    price: price.unit_amount as number,
  }

  const productImageUrl = product.images[0];
  return (
    <div className="container mx-auto py-12">
      <div className="card lg:card-side bg-base-100 border">
        <figure className="lg:w-1/2">
          {productImageUrl && (
            <img
              src={productImageUrl}
              alt={product.name}
              className="w-full object-cover rounded-lg"
            />
          )}
        </figure>
        <div className="card-body bg-slate-100 lg:w-1/2">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <div className="card-actions justify-between items-center mt-4">
            {price.unit_amount && <div className="font-bold text-2xl">${(price.unit_amount / 100).toFixed(2)}</div>}
            <Count productId={params.id} product={baseProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}