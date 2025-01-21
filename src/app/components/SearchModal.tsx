
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

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

interface SearchModalProps {
  onClose: () => void;
}

export default function SearchModal({ onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

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
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef} className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Search Products</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {isLoading && (
          <div className="mt-4 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          </div>
        )}
        {suggestions.length > 0 && (
          <div className="mt-4 max-h-60 overflow-y-auto">
            {suggestions.map((product) => (
              <Link
                key={product._id}
                href={`/product/${product._id}`}
                className="flex items-center p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
                onClick={() => handleSuggestionClick(product._id)}
              >
                <Image
                  src={urlFor(product.image).url() || "/placeholder.svg"}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="mr-3 rounded-md"
                />
                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
