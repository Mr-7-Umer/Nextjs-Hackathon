"use client";

import Image from "next/image";
import { X } from "lucide-react";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartMenuProps {
  onClose: () => void;
}

export default function CartMenu({ onClose }: CartMenuProps) {
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000.0,
      quantity: 1,
      image: "/images/sofa-bg.png",
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: 270000.0,
      quantity: 1,
      image: "/images/sofa-bg2.png",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg font-poppins">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <div className="relative">
            <img
              src="/images/close-cart.png"
              className="w-5 h-5 cursor-pointer"
              alt="Close cart"
              onClick={onClose} // Trigger the onClose callback
            />
          </div>
        </div>

        {/* Cart Items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 py-4 border-t">
              <div className="relative w-24 h-24 bg-[#FFF9F3] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 96px) 100vw, 96px"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{item.name}</h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm">{item.quantity}</span>
                  <span className="text-sm mx-2">x</span>
                  <span className="text-[#B88E2F]">
                    Rs.{" "}
                    {item.price.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtotal */}
        <div className="flex justify-between items-center py-4 border-t mt-4">
          <span className="font-medium">Subtotal</span>
          <span className="text-[#B88E2F] font-medium">
            Rs. {subtotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </span>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <Link href="/cart">
            <button className="w-full text-sm py-2 px-4" onClick={onClose}>
              Cart
            </button>
          </Link>
          <Link href="/checkout">
            <button className="w-full text-sm py-2 px-4" onClick={onClose}>
              Checkout
            </button>
          </Link>
          <Link href="/comparison">
            <button className="w-full text-sm py-2 px-4" onClick={onClose}>
              Comparison
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
