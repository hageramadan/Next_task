"use client";
import React, { useEffect, useState } from "react";
import { getLocalData, removeItem } from "../utils/storage";
import { IProduct } from "../types/Iproduct";
import Image from "next/image";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  // تحميل البيانات من localStorage أول ما الصفحة تفتح
  useEffect(() => {
    const items = getLocalData("cart");
    setCartItems(items);
  }, []);

  // دالة لحذف عنصر
  const handleRemove = (id: string | number) => {
    removeItem("cart", id);
    setCartItems(getLocalData("cart")); // تحديث القائمة
  };

  // حساب الإجمالي
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mt-5 mx-10 md:mx-30 lg:mx-65">
      <div className="flex justify-between flex-wrap md:flex-nowrap gap-2 cart-cont">
        {/* الكارت */}
        <section className="shadow p-5 col-span-1 w-full md:w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 id="cart-heading" className="text-lg font-semibold">
              Shopping Cart
            </h2>
            <small className="bg-gray-100 text-gray-500 text-xs rounded-full px-3 py-1">
              {cartItems.length} items
            </small>
          </div>

          {/* العناصر */}
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <article
                key={item.id}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl"
              >
                {/* الصورة */}
                <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
                  {item.images?.[0] ? (
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="object-cover rounded-lg"
                    />
                  ) : (
                    "IMG"
                  )}
                </div>

                {/* بيانات المنتج */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium truncate">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.description?.slice(0, 30)}...
                  </p>
                </div>

                {/* السعر + زرار الحذف */}
                <div className="flex flex-col items-end gap-2">
                  <div className="text-right">
                    <div className="font-semibold">${item.price}</div>
                    <div className="text-xs text-gray-500">Free shipping</div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 border border-red-100 rounded-lg px-2 py-1 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))
          )}
        </section>

        {/* ملخص الطلب */}
        <aside className="shadow p-5 h-fit w-full md:w-96">
          <h3 id="summary-heading" className="font-semibold mb-3">
            Order Summary
          </h3>
          <div className="flex justify-between text-gray-500 text-sm my-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-500 text-sm my-2">
            <span>Tax</span>
            <span>$0</span>
          </div>
          <div className="flex justify-between border-t border-dashed pt-3 mt-3 font-bold text-lg">
            <span>Total</span>
            <span>${subtotal}</span>
          </div>
          <button className="mt-4 bg-red-700 cursor-pointer text-white w-full py-3 rounded font-semibold shadow hover:bg-red-600">
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </div>
  );
}
