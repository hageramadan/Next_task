"use client";
import React from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { HeartIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useCounts } from "../hooks/useCount";

export default function Icons() {
  const pathName = usePathname();
  const { cartCount, favCount } = useCounts();

  return (
    <div className="flex gap-4 items-center">
      {/* Search */}
      <Link
        href="/category"
        className={`hover:opacity-80 ${pathName === "/category" ? "text-red-600" : "text-gray-800"}`}
      >
        <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
      </Link>

      {/* User */}
      <Link
        href="/login"
        className={`hover:opacity-80 ${pathName === "/login" ? "text-red-600" : "text-gray-800"}`}
      >
        <UserIcon className="h-6 w-6 cursor-pointer" />
      </Link>

      {/* Wishlist */}
      <Link
        href="/wishlist"
        className={`hover:opacity-80 ${pathName === "/wishlist" ? "text-red-600" : "text-gray-800"}`}
      >
        <div className="relative flex">
          <HeartIcon className="h-6 w-6 cursor-pointer" />
          <p className="absolute bottom-3 left-[1rem] rounded-full bg-red-500 h-4 w-4 text-[13px] flex justify-center items-center text-white">
            {favCount}
          </p>
        </div>
      </Link>

      {/* Cart */}
      <Link
        href="/cart"
        className={`hover:opacity-80 ${pathName === "/cart" ? "text-red-600" : "text-gray-800"}`}
      >
        <div className="relative flex">
          <ShoppingBagIcon className="h-6 w-6 cursor-pointer" />
          <p className="absolute bottom-3 left-[1rem] rounded-full bg-red-500 h-4 w-4 text-[13px] flex justify-center items-center text-white">
            {cartCount}
          </p>
        </div>
      </Link>
    </div>
  );
}
