export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

export type AddToCartProps = {
  product: Product
}

export type CartItem  = {
  product: {
    id: string;
    title: string;
    image: string;
    price: number;
  };
  quantity: number;
}
