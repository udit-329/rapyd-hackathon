export type ProductResponse = {
  success: boolean;
  product: Product;
};

type Product = {
  _id: string;
  images?: string[] | null;
  name: string;
  description: string;
  price: number;
};
