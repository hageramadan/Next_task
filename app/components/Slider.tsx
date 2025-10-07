"use client";

import { useState } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function NextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="group-hover:flex hidden absolute right-0 top-0 h-full w-16 items-center justify-center cursor-pointer z-10 transition"
      onClick={onClick}
    >
      <ChevronRightIcon className="h-11 w-11 text-black" />
    </div>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  return (
    <div
      className="group-hover:flex hidden absolute left-0 top-0 h-full w-16 items-center justify-center cursor-pointer z-10 transition"
      onClick={onClick}
    >
      <ChevronLeftIcon className="h-11 w-11 text-black" />
    </div>
  );
}

export default function Slick() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      src: "/images/b1.jpg",
      title: "Discover the Latest Trends",
      desc: "Explore our new collection of fashion and accessories designed for every style.",
      btn: "Shop Now",
    },
    {
      src: "/images/b2.png",
      title: "Upgrade Your Lifestyle",
      desc: "Find premium products that combine comfort, quality, and modern design.",
      btn: "Shop Now",
    },
    {
      src: "/images/b3.png",
      title: "Exclusive Deals Await",
      desc: "Don’t miss out on limited-time offers crafted just for you.",
      btn: "Shop Now",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_: number, next: number) => setActiveSlide(next), 
  };

  return (
    <div className="relative group w-full mx-auto">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative h-[90vh] w-[90%] mx-auto">
            {/* الخلفية */}
            <Image
              src={slide.src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-start pl-5 md:pl-56 justify-center bg-black/15 text-white">
              <motion.h2
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-4 w-1/2"
              >
                {slide.title}
              </motion.h2>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-lg mb-6 w-1/2"
              >
                {slide.desc}
              </motion.p>

              <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link
                  href="/products"
                  tabIndex={activeSlide === idx ? 0 : -1} 
                  className="px-6 py-2 bg-white hover:bg-white/80 rounded-lg transition cursor-pointer text-gray-900"
                >
                  {slide.btn}
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
