"use client";
import React, { useState } from "react";
// import { GrNext, GrPrevious } from "react-icons/gr";

let images = [
  "/banner-1.jpg",
  "/banner-2.jpg",
  "/banner-1.jpg",
  "/banner-2.jpg",
  "/banner-1.jpg",
];

const Carousel = ({}) => {
  const [position, setPosition] = useState(0);

  const nextSlide = () => {
    const maxWith = images.length * 500;
    const container: any = document.getElementById("carouselContainer");
    const containerWidth = container.offsetWidth;
    const newPosition =
      position -
      (maxWith - (containerWidth - position) > 500
        ? 500
        : maxWith - (containerWidth - position));
    console.log(newPosition);

    setPosition((prevPosition) =>
      prevPosition === newPosition ? 0 : newPosition
    );
  };

  const prevSlide = () => {
    const newPosition = position + 500 < 0 ? position + 500 : 0;
    setPosition(newPosition);
  };

  const containerStyles = {
    transition: "transform 0.8s ease-in-out",
    transform: `translateX(${position}px)`,
  };

  return (
    <div className="relative overflow-hidden w-full group">
      <div style={containerStyles} id={"carouselContainer"} className="flex">
        {images.map((file, index) => (
          <img
            className="w-[500px]"
            key={index}
            src={file}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <div
        onClick={prevSlide}
        className={`absolute top-1/2 group-hover:block  hidden text-[35px] hover:text-[40px] hover:text-blue-500 left-0 cursor-pointer`}
      >
        pre
      </div>
      <div
        onClick={nextSlide}
        className={`absolute top-1/2 text-[35px] hover:text-[40px] hover:text-blue-500 group-hover:block  hidden right-0 cursor-pointer`}
      >
        Next
      </div>
    </div>
  );
};

export default Carousel;
