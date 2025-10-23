"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/features/gr.jpg",
  "/images/features/g1.jpg",
  "/images/features/r3.jpg",
  "/images/features/r2.jpg",
  "/images/features/r6.jpg",
  "/images/features/m1.jpg",
  "/images/features/m2.jpg",
  "/images/features/m3.jpg",
  "/images/features/m4.jpg",
];

export function Services() {
  const [index, setIndex] = useState(0);
  const visibleCount = 2; // how many images to show at once

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - visibleCount : prev - 1));
  };

  const next = () => {
    setIndex((prev) =>
      prev >= images.length - visibleCount ? 0 : prev + 1
    );
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-white dark:bg-neutral-900 w-full flex flex-col items-center justify-center py-14">
      <h2 className="text-4xl font-bold text-center mb-8">Events</h2>

      {/* Carousel container */}
      <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl shadow-2xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(index * 100) / visibleCount}%)`,
            width: `${(images.length * 100) / visibleCount}%`,
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 px-2"
              style={{ width: `${100 / images.length}%` }}
            >
              <Image
                src={src}
                alt={`Event ${i}`}
                width={800}
                height={500}
                className="w-full h-[280px] md:h-[360px] object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/60 hover:bg-white/90 dark:hover:bg-black/80 text-gray-800 dark:text-white p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm transition z-10"
        >
          <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-black/60 hover:bg-white/90 dark:hover:bg-black/80 text-gray-800 dark:text-white p-2 md:p-3 rounded-full shadow-lg backdrop-blur-sm transition z-10"
        >
          <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex mt-5 gap-2.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-blue-600 scale-125 shadow-[0_0_6px_2px_rgba(37,99,235,0.6)]"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
