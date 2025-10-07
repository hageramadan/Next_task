import type { Metadata } from "next";
import Navbar from "./Navbar";
import "./globals.css";
/* globals.css */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Lato} from "next/font/google";
import { ShopProvider } from "./context/ShopContext";
const lato = Lato({
  weight: ["400" ,"700" , "900"],
   subsets: ["latin"]});
export const metadata: Metadata = {
  title: "Store",
  description: "you can buy anything you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
       
        <ShopProvider>
            <main>
              <Navbar/>
              <div className="pt-14">
                  {children}
              </div>
            </main>
        </ShopProvider>
  
      </body>
    </html>
  );
}
