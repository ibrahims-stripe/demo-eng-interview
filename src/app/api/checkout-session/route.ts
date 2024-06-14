import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const lineItems = Object.values(body).map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.product.title,
          images: [item.product.image],
          description: item.product.description,
        },
        unit_amount: item.product.price,
      },
      quantity: item.quantity,
    }));

    const origin = req.headers.get('Origin') || `https://${req.headers.get('Host')}`;
    const successUrl = `${origin}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/cart`;

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return NextResponse.json(
      {
        url: session.url
      },
      {
        status: 200,
      },

    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    )
  }
}