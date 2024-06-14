'use client'

import { createContext, use, useState, useEffect } from 'react';

const CartContext = createContext<any>(undefined);

export function CartWrapper({ children }: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<{ [id: string]: { product: any, quantity: number } }>(() => {
    if (typeof window !== 'undefined') {
      const storedCart = window.localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : {};
    }
    return {};
  });

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('cart', JSON.stringify(cart));
    }

    const quantity = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
    const price = Object.values(cart).reduce((total, item) => total + item.product.price * item.quantity, 0);

    setTotalQuantity(quantity);
    setTotalPrice(price);

  }, [cart]);

  const addToCart = (product: any) => {
    const productId = product.id;
    const existingItem = cart[productId];

    if (existingItem) {
      setCart({
        ...cart,
        [productId]: {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        },
      });
    } else {
      setCart({
        ...cart,
        [productId]: {
          product,
          quantity: 1,
        },
      });
    }
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = { ...cart };
    delete updatedCart[productId];
    setCart(updatedCart);
  };

  const decrementProduct = (productId: string) => {
    const existingItem = cart[productId];

    if (!existingItem) {
      console.error(`Product with id ${productId} not found in the cart.`);
      return;
    }

    if (existingItem.quantity === 1) {
      removeFromCart(productId);
    } else {
      setCart({
        ...cart,
        [productId]: {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        },
      });
    }
  };

  const incrementProduct = (productId: string, product: any) => {
    const existingItem = cart[productId];

    if (!existingItem) {
      addToCart(product);
    }

    if (existingItem) {
      setCart({
        ...cart,
        [productId]: {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        },
      });
    }
  };

  const getProductQuantity = (productId: string) => {
    const existingItem = cart[productId];
    return existingItem ? existingItem.quantity : 0;
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      decrementProduct,
      incrementProduct,
      getProductQuantity,
      totalQuantity,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return use(CartContext);
}