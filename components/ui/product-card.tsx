"use client";

import { Product } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images[0].url}
          alt="image"
          fill
          className="aspect-square oject-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100">

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
