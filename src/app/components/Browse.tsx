"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the structure of each category card
interface CategoryCard {
  title: string;
  image: string;
  href: string;
}

// List of categories to display
const categories: CategoryCard[] = [
  { title: "Dining", image: "/images/dining.png", href: "/" },
  { title: "Living", image: "/images/living.png", href: "/" },
  { title: "Bedroom", image: "/images/bedroom.png", href: "/" },
];

export default function Browse() {
  const [scrollPosition, setScrollPosition] = useState(0); // Track the current scroll position
  const containerRef = useRef<HTMLDivElement>(null); // Reference to the scrollable container

  // Scroll function to handle left and right scrolling
  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth; // Amount to scroll based on container width
      const maxScrollLeft = container.scrollWidth - container.offsetWidth; // Max scrollable distance

      // Calculate the new scroll position
      const newPosition =
        direction === "left"
          ? Math.max(scrollPosition - scrollAmount, 0) // Ensure we don't scroll past the start
          : Math.min(scrollPosition + scrollAmount, maxScrollLeft); // Ensure we don't scroll past the end

      // Smoothly scroll to the new position
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition); // Update the scroll position state
    }
  };

  // Update scroll position whenever the container is scrolled
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        setScrollPosition(container.scrollLeft); // Update the scroll position state
      };

      container.addEventListener("scroll", handleScroll); // Add scroll listener
      return () => container.removeEventListener("scroll", handleScroll); // Clean up listener
    }
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 font-poppins">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Browse The Range
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a variety of furniture for every room.
          </p>
        </div>

        <div className="relative">
          {/* Scrollable container for non-mobile */}
          <div
            ref={containerRef}
            className="overflow-x-hidden md:overflow-x-auto md:scrollbar-hide"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Map over categories and render each card */}
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group flex-shrink-0 w-full"
                >
                  <div className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Category image */}
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={category.image}
                        alt={`${category.title} category`}
                        height={500}
                        width={500}
                        quality={100}
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Category title */}
                    <div className="p-4 text-center">
                      <h3 className="text-xl md:text-2xl text-gray-900 font-medium">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Scroll buttons for larger screens only */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
