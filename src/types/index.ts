import { LucideProps } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  coinPrice: number;
  ingredients: string;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type Ingredient = {
  name: string;
  percentage: number;
};

export type Feature = {
  name: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  description: string;
};

export type Testimonial = {
  content: string;
  name: string;
  role: string;
  profileImage: string;
};

export interface CartItem extends Product {
  quantity: number;
}
