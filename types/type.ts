export type CartItem = {
  id: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  href: string;
  currency: string;
  imageSrc: string;
  imageAlt: string;
};
