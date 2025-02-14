"use client";

import { useState } from "react";

interface CarouselProps {
  images: { src: string; alt: string }[]; // Array of image objects
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Set a specific slide based on the indicator
  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div id="carousel" className="relative w-full h-full">
      {/* Carousel Images */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => (
          <div key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button key={index} type="button" aria-current={currentIndex === index}
            aria-label={`Slide ${index + 1}`}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-600"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>

      {/* Slider Controls */}
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center 
        justify-center h-full px-4 cursor-pointer group focus:outline-none" 
        onClick={handlePrev}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 
          group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
              strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full 
          px-4 cursor-pointer group focus:outline-none" onClick={handleNext}>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full 
          bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
              strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
