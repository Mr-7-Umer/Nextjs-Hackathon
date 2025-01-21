
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface SanityImage {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string; // The reference to the image asset
  };
  hotspot?: {
    x: number; // X-coordinate for the hotspot center
    y: number; // Y-coordinate for the hotspot center
    height: number; // Height of the hotspot
    width: number; // Width of the hotspot
  };
  crop?: {
    top: number; // Top cropping percentage
    bottom: number; // Bottom cropping percentage
    left: number; // Left cropping percentage
    right: number; // Right cropping percentage
  };
}

interface Product {
  _id: string;
  name: string;
  image: SanityImage;
}

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        setIsLoading(true);
        const query = `*[_type == "product" && name match "${searchTerm}*"]{
          _id,
          name,
          image
        }`;
        client.fetch(query).then((results: Product[]) => {
          setSuggestions(results);
          setIsLoading(false);
        });
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSuggestionClick = (productId: string) => {
    router.push(`/product/${productId}`);
    setSearchTerm("");
    setSuggestions([]);
  };

  return (
    <div className="relative" ref={searchRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {isLoading && (
        <div className="absolute right-3 top-3">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
        </div>
      )}
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {suggestions.map((product) => (
            <div
              key={product._id}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(product._id)}
            >
              <Image
                src={urlFor(product.image).url() || "/placeholder.svg"}
                alt={product.name}
                width={40}
                height={40}
                className="mr-3"
              />
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
