"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  const toggleCartMenu = () => {
    setIsCartMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-white shadow-md font-poppins relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={160}
                  height={50}
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
                "/images/account-icon.png",
                "/images/search-icon.png",
                "/images/heart-icon.png",
              ].map((icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-800 hover:text-gray-600"
                >
                  <Image
                    src={icon}
                    alt="Icon"
                    width={24}
                    height={24}
                    quality={100}
                  />
                </Link>
              ))}
              {/* Cart Icon */}
              <button
                className="text-gray-800 hover:text-gray-600 relative"
                onClick={toggleCartMenu}
              >
                <Image
                  src="/images/cart-icon.png"
                  alt="Cart"
                  width={24}
                  height={24}
                  quality={100}
                />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              >
                <span className="sr-only">Open main menu</span>
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
            isMenuOpen ? "absolute" : "hidden"
          } pt-14 md:hidden top-0 bg-white z-40 h-full w-[80%]`}
        >
          <div className="px-6 pt-4 pb-6 space-y-4 bg-white">
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
            <div className="flex gap-6 pt-4">
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                <Image
                  src="/images/heart-icon.png"
                  alt="Favorites"
                  width={24}
                  height={24}
                  quality={100}
                />
              </Link>
              <button
                className="text-gray-800 hover:text-gray-600 relative"
                onClick={toggleCartMenu}
              >
                <Image
                  src="/images/cart-icon.png"
                  alt="Cart"
                  width={24}
                  height={24}
                  quality={100}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
