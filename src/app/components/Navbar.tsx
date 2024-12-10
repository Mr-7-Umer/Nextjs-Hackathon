"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md font-poppins relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Furniro Logo"
                width={160}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center sm:space-x-10">
            {["Home", "Shop", "Blog", "Contact"].map((item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="text-gray-800 hover:text-gray-600 px-4 py-2 text-base font-poppinsSemiBold transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex md:items-center gap-6">
            {[
              { src: "/images/account-icon.png", alt: "Account Icon" },
              { src: "/images/search-icon.png", alt: "Search Icon" },
              { src: "/images/heart-icon.png", alt: "Favorites Icon" },
            ].map((icon, index) => (
              <Link
                key={index}
                href="#"
                className="text-gray-800 hover:text-gray-600"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                  quality={100}
                  loading="lazy"
                />
              </Link>
            ))}
            {/* Cart Icon */}
            <Link href="/cart" className="text-gray-800 hover:text-gray-600">
              <Image
                src="/images/cart-icon.png"
                alt="Cart Icon"
                width={24}
                height={24}
                quality={100}
                loading="lazy"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-label="Toggle navigation menu"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed z-50 top-0 left-0 w-[80%] h-full bg-white shadow-md transition-transform duration-300 ease-in-out`}
      >
        <div className="px-6 pt-4 pb-6 space-y-4">
          {["Home", "Shop", "Blog", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase()}`}
              className="block px-4 py-2 text-lg font-medium text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
