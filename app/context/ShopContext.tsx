"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { IProduct } from "../types/Iproduct";

interface ShopContextType {
  favorites: IProduct[];
  cart: IProduct[];
  addToFavorites: (product: IProduct) => void;
  removeFromFavorites: (id: number) => void;
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  // ✅ تحميل البيانات من localStorage عند أول تشغيل
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    const storedCart = localStorage.getItem("cart");

    if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  // ✅ تحديث localStorage كل ما favorites أو cart يتغيروا
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ---------------- Functions ----------------
  const addToFavorites = (product: IProduct) => {
    if (!favorites.find((p) => p.id === product.id)) {
      setFavorites((prev) => [...prev, product]);
    }
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  };

  const addToCart = (product: IProduct) => {
    if (!cart.find((p) => p.id === product.id)) {
      setCart((prev) => [...prev, product]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ShopContext.Provider
      value={{ favorites, cart, addToFavorites, removeFromFavorites, addToCart, removeFromCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
