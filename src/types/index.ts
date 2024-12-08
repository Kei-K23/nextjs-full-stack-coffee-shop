import { LucideProps } from "lucide-react";

export type Product = {
  name: string;
  price: string;
  image: string;
  ingredients: {
    name: string;
    percentage: string;
  }[];
};

export type Feature = {
  name: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  description: string;
};
