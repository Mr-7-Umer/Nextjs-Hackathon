"use client";

import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";
import { useWishlist } from "../contexts/WishlistContext";

interface WishlistMenuProps {
  onClose: () => void;
}

export default function WishlistMenu({ onClose }: WishlistMenuProps) {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Wishlist</h2>
          <div className="relative">
            <img
              src="/images/close-cart.png"
              className="w-5 h-5 cursor-pointer"
              alt="Close wishlist"
              onClick={onClose}
            />
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="space-y-4">
          {wishlistItems.length === 0 ? (
            <p>Your wishlist is empty.</p>
          ) : (
            wishlistItems.map((item) => (
              <div key={item.id} className="flex gap-4 py-4 border-t">
                <div className="relative w-24 h-24 bg-[#FFF9F3] rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 96px) 100vw, 96px"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">{item.name}</h3>
                    <button
                      className="text-gray-400 hover:text-gray-600"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mt-2">
                    <span className="text-[#B88E2F]">
                      Rs.{" "}
                      {item.price.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Action buttons */}
        <div className="mt-6">
          <Link href="/wishlist">
            <button
              className="w-full text-sm py-2 px-4 bg-[#B88E2F] text-white rounded-md hover:bg-[#A67E2B] transition-colors"
              onClick={onClose}
            >
              View Wishlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}