"use client";
import React, { useState } from "react";
import { ProductCard2 } from "./ProductCard2";
const sampleData = [
  {
    title: "Tree Runner",
    description: "Breezy, Everyday Sneaker",
    mainImage: "/shoe-image-1.jpeg",
  },
  {
    title: "Wool Runner 2",
    description: "Step Into Next-Gen Comfort",
    mainImage: "/shoe-image-2.jpeg",
  },
  {
    title: "Wool Lounger",
    description: "Cozy Slip-On",
    mainImage: "/banner-1.jpg",
  },
  {
    title: "Tree Runner",
    description: "Breezy, Everyday Sneaker",
    mainImage: "/shoe-image-1.jpeg",
  },
  {
    title: "Wool Runner 2",
    description: "Step Into Next-Gen Comfort",
    mainImage: "/shoe-image-2.jpeg",
  },
];

let images = [
  "/banner-1.jpg",
  "/banner-2.jpg",
  "/banner-1.jpg",
  "/banner-2.jpg",
  "/banner-1.jpg",
];

export const NewArrivals = () => {
  const [position, setPosition] = useState(0);

  const nextSlide = () => {
    const maxWith = images.length * 390;
    const container: any = document.getElementById("carouselContainer");
    const containerWidth = container.offsetWidth;
    const newPosition =
      position -
      (maxWith - (containerWidth - position) > 390
        ? 390
        : maxWith - (containerWidth - position));

    setPosition(newPosition);
  };

  const prevSlide = () => {
    const newPosition = position + 390 < 0 ? position + 390 : 0;
    setPosition(newPosition);
  };

  const containerStyles = {
    transition: "transform 0.8s ease-in-out",
    transform: `translateX(${position}px)`,
  };

  return (
    <>
      <div className="w-[80%] mx-auto text-[32px] font-[700] leading-5 tracking-[.5px]">
        New Arrivals
      </div>
      <div className="relative overflow-hidden w-full">
        <div style={containerStyles} id={"carouselContainer"} className="flex">
          <div className="flex">
            {sampleData.map((item, index) => (
              <ProductCard2 key={index} {...item} />
            ))}
          </div>
        </div>
        <div
          onClick={prevSlide}
          className={`absolute top-1/2 text-[35px] hover:text-[40px] hover:text-blue-390 left-0 cursor-pointer`}
        >
          pre
        </div>
        <div
          onClick={nextSlide}
          className={`absolute top-1/2 text-[35px] hover:text-[40px] hover:text-blue-390 right-0 cursor-pointer`}
        >
          Next
        </div>
      </div>
    </>
  );
};
