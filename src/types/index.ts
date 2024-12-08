export type Product = {
  name: string;
  price: string;
  image: string;
  ingredients: {
    name: string;
    percentage: string;
  }[];
};
