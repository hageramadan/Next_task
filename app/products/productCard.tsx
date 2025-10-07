"use client";
import Image from "next/image";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { addItem } from "../utils/storage";
import { IProduct } from "../types/Iproduct";
import { useCounts } from "../hooks/useCount";
import Link from "next/link";

interface Props {
  product: IProduct;
  className?: string;
  imageWrapperClassName?: string;
  children?: React.ReactNode;
  contentWrapperClassName?: string;
}

export default function ProductCard({
  product,
  className,
  imageWrapperClassName,
  contentWrapperClassName,
  children,
}: Props) {
  const allowedDomains = process.env.NEXT_PUBLIC_ALLOWED_DOMAINS?.split(",") || [];
  const { updateCounts } = useCounts();

  const getSafeImage = (url?: string) => {
    if (!url) return "/fallback.jpg";
    try {
      const domain = url.startsWith("http") ? new URL(url).hostname : "";
      return allowedDomains.includes(domain) ? url : "/fallback.jpg";
    } catch {
      return "/fallback.jpg";
    }
  };

  const mainImage = getSafeImage(product.images?.[0]);
  const hoverImage = getSafeImage(product.images?.[1]);

  return (
    <div className={`relative flex flex-col group overflow-hidden shadow-md rounded-md ${className || ""}`}>
      {/* الصور */}
      
      <div className={`relative h-64 ${imageWrapperClassName || ""}`}>
        <Link href={`/products/${product.id}`}>
        <Image
          src={mainImage}
          alt={product.title}
          fill
          priority 
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={product.title + " alt"}
            priority
            fill
            className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        )}
       </Link>
      </div>
     
      <div className={`pt-4 ${contentWrapperClassName || ""}`}>
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <h3 className="text-gray-600">${product.price}</h3>
      
      </div>

      {children}

      <div className="absolute top-4 right-[-50px] flex flex-col gap-2 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-500">
        <button
          onClick={() => {
            addItem("cart", product);
            updateCounts();
          }}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ShoppingBagIcon className="h-6 w-6 cursor-pointer" />
        </button>
        <button
          onClick={() => {
            addItem("favorites", product);
            updateCounts();
          }}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <HeartIcon className="h-6 w-6 cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
