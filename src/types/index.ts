import { LucideProps } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  coinPrice: number;
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
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
