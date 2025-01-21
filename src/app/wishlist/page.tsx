"use client";

import { useWishlist } from "../contexts/WishlistContext";
import { useCounter } from "../contexts/CartCounter";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, X } from "lucide-react";
import toast from "react-hot-toast";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCounter();

  const handleAddToCart = (item: {
    id: string;
    name: string;
    price: number;
    image: string;
  }) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      image: item.image,
    });
    toast.success(`${item.name} added to cart`, {
      style: {
        background: "#B88E2F",
        color: "#fff",
      },
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">My Wishlist</h1>
        <div className="flex items-center text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="mx-2 w-4 h-4 text-gray-500" />
          <span className="text-gray-900">Wishlist</span>
        </div>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl mb-4">Your wishlist is empty.</p>
          <Link href="/shop" className="text-[#B88E2F] hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-[#B88E2F] font-medium mb-4">
                  Rs. {item.price.toLocaleString()}
                </p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-[#B88E2F] text-white py-2 rounded hover:bg-[#A67E2B] transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}