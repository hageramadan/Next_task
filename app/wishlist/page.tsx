"use client";
import { useEffect, useState } from "react";
import { getLocalData, removeItem } from "../utils/storage";
import ProductCard from "../products/productCard";
import { IProduct } from "../types/Iproduct";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<IProduct[]>([]);

  useEffect(() => {
    setFavorites(getLocalData("favorites"));
  }, []);

  const handleRemove = (id: number) => {
    removeItem("favorites", id);
    setFavorites(getLocalData("favorites"));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} />
              <button
                onClick={() => handleRemove(product.id)}
                className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
