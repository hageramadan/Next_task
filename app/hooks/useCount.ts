"use client";
import { useState, useEffect } from "react";
import { getLocalData } from "../utils/storage";

export function useCounts() {
  const [cartCount, setCartCount] = useState(0);
  const [favCount, setFavCount] = useState(0);

  const updateCounts = () => {
    setCartCount(getLocalData("cart").length);
    setFavCount(getLocalData("favorites").length);
  };

  useEffect(() => {
    updateCounts();
  }, []);

  return { cartCount, favCount, updateCounts };
}
