"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Share2,
  Heart,
  BarChart2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  originalPrice?: number;
  badge?: {
    text: string;
    color: string;
  };
}

const baseProducts: Product[] = [
  {
    id: "1",
    name: "Syltherine",
    image: "/images/syltherine.png",
    category: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    badge: {
      text: "-30%",
      color: "bg-[#E97171]",
    },
  },
  {
    id: "2",
    name: "Leviosa",
    image: "/images/leviosa.png",
    category: "Stylish cafe chair",
    price: 2500000,
  },
  {
    id: "3",
    name: "Lolito",
    image: "/images/lolito.png",
    category: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    badge: {
      text: "-50%",
      color: "bg-[#E97171]",
    },
  },
  {
    id: "4",
    name: "Respira",
    image: "/images/respira.png",
    category: "Outdoor bar table and stool",
    price: 500000,
    badge: {
      text: "New",
      color: "bg-[#2EC1AC]",
    },
  },
];
const products: Product[] = Array(4)
  .fill(baseProducts)
  .flat()
  .map((product, index) => ({
    ...product,
    id: `${product.id}-${index}`, // Ensure unique keys
  }));

const features = [
  {
    icon: "/images/trophy.png",
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: "/images/tick.png",
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: "/images/gift.png",
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: "/images/support.png",
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const paginationItems = [
  { label: "1", active: true },
  { label: "2", active: false },
  { label: "3", active: false },
  { label: "Next", active: false },
];

export default function ShopHeader() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = 300; // Width of each card
      const containerWidth = container.offsetWidth;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      const newPosition = scrollPosition + scrollAmount;

      // Ensure the new position is within bounds
      const maxScroll = container.scrollWidth - containerWidth;
      const clampedPosition = Math.max(0, Math.min(newPosition, maxScroll));

      // Calculate the nearest card start position
      const nearestCardPosition =
        Math.round(clampedPosition / cardWidth) * cardWidth;

      container.scrollTo({
        left: nearestCardPosition,
        behavior: "smooth",
      });
      setScrollPosition(nearestCardPosition);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        setScrollPosition(container.scrollLeft);
      };
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <section className="font-poppins">
        {/* Hero Section */}

        <div className="relative h-[300px] w-full">
          <Image
            src="/images/shop-cover.png"
            alt="Shop Cover"
            fill
            quality={100}
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Shop
            </h1>
            <div className="flex items-center gap-2 text-[#000000] text-base">
              <Link href="/" className="hover:text-[#B88E2F] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span>Shop</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#F9F1E7] px-4 md:px-8 py-6">
          <div className=" max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left Side */}
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                <img className="w-5 h-5" src="/images/filter-icon.png" />
                <span className="font-medium">Filter</span>
              </button>
              <div className="flex items-center gap-2 border-l border-[#9F9F9F] pl-8">
                <button className="hover:text-[#B88E2F] transition-colors">
                  <img className="w-5 h-5" src="/images/dots-icon.png" />
                </button>
                <button className="hover:text-[#B88E2F] transition-colors">
                  <img className="w-5 h-5" src="/images/list-icon.png" />
                </button>
              </div>
              <p className="text-[#9F9F9F] hidden md:block">
                Showing 1-16 of 32 results
              </p>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 w-[95%] lg:w-full mx-auto">
              <div className="flex items-center gap-2">
                <span className="text-xs lg:text-base text-[#9F9F9F]">
                  Show
                </span>
                <select className="text-xs lg:text-base bg-transparent border border-[#9F9F9F] rounded px-4 py-1 focus:outline-none focus:border-[#B88E2F]">
                  <option>16</option>
                  <option>32</option>
                  <option>48</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#9F9F9F] text-xs lg:text-base">
                  Short by
                </span>
                <select className="text-xs lg:text-base bg-transparent border border-[#9F9F9F] rounded px-4 py-1 focus:outline-none focus:border-[#B88E2F]">
                  <option>Default</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-16 px-4 font-poppins">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div
              ref={containerRef}
              className="flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 px-[16px] sm:px-0"
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group flex-shrink-0 w-[280px] sm:w-auto"
                >
                  <div className="relative bg-[#F4F5F7] rounded-sm overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={285}
                      height={301}
                      quality={100}
                      className="w-full h-[301px] object-cover"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <button className="w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
                          Add to cart
                        </button>
                      </div>
                      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white">
                        <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                          <Share2 className="w-5 h-5" />
                          Share
                        </button>
                        <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                          <BarChart2 className="w-5 h-5" />
                          Compare
                        </button>
                        <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                          <Heart className="w-5 h-5" />
                          Like
                        </button>
                      </div>
                    </div>

                    {/* Badge */}
                    {product.badge && (
                      <div
                        className={`absolute top-5 right-5 ${product.badge.color} text-white text-sm font-bold px-4 py-1 rounded-sm`}
                      >
                        {product.badge.text}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-[#3A3A3A] text-2xl font-semibold mb-1">
                      {product.name}
                    </h3>
                    <p className="text-[#898989] mb-2">{product.category}</p>
                    <div className="flex justify-center items-center gap-3">
                      <span className="text-[#B88E2F] font-semibold">
                        Rp {product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[#B0B0B0] line-through">
                          Rp {product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chevron buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md sm:hidden"
              style={{ left: "-16px" }}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md sm:hidden"
              style={{ right: "-16px" }}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>
      <section className="w-full  font-poppins">
        {/* Pagination */}
        <div className="flex justify-center items-center gap-8 py-8">
          {paginationItems.map((item) => (
            <button
              key={item.label}
              className={`min-w-[48px] h-12 flex items-center justify-center rounded-lg text-base transition-colors
              ${
                item.active
                  ? "bg-[#B88E2F] text-white"
                  : "bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white"
              }`}
            >
              <Link href="/product-details">{item.label}</Link>
            </button>
          ))}
        </div>

        {/* Features */}
        <div className="w-full bg-[#FAF3EA] mx-auto px-4 py-16 my-6 pl-6 lg:pl-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 pl-8 md:pl-0"
              >
                <div className="mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={60}
                    height={60}
                    quality={100}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[#333333] text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#666666] text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
