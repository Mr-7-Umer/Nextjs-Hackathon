"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartMenu from "./CartMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  const toggleCartMenu = () => {
    setIsCartMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-white shadow-md font-poppins relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={150}
                  height={40}
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex md:items-center sm:space-x-8">
              <Link
                href="/"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-poppinsSemiBold"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-poppinsSemiBold"
              >
                Shop
              </Link>
              <Link
                href="/blog"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-poppinsSemiBold"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 text-base font-poppinsSemiBold"
              >
                Contact
              </Link>
            </div>

            {/* Icons */}
            <div className="hidden md:flex md:items-center sm:space-x-9">
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                <Image
                  src="/images/account-icon.png"
                  alt="Account"
                  width={22}
                  height={22}
                  quality={100}
                />
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                <Image
                  src="/images/search-icon.png"
                  alt="Search"
                  width={22}
                  height={22}
                  quality={100}
                />
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                <Image
                  src="/images/heart-icon.png"
                  alt="Favorites"
                  width={22}
                  height={22}
                  quality={100}
                />
              </Link>
              {/* Cart Icon */}
              <button
                className="text-gray-800 hover:text-gray-600 relative"
                onClick={toggleCartMenu}
              >
                <Image
                  src="/images/cart-icon.png"
                  alt="Favorites"
                  width={22}
                  height={22}
                  quality={100}
                />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  2{" "}
                </span>
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
            isMenuOpen ? "absolute " : "hidden"
          } pt-12 md:hidden top-0 bg-white z-40 h-[100vh] w-[80%]`}
        >
          <div
            className="px-2 pt-2 pb-3 space-y-1 bg-white "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pl-2 pt-3 flex gap-4">
              <Link href="#" className="text-gray-800 hover:text-gray-600">
                <Image
                  src="/images/heart-icon.png"
                  alt="Favorites"
                  width={22}
                  height={22}
                  quality={100}
                />
              </Link>
              {/* Cart Icon */}
              <button
                className="text-gray-800 hover:text-gray-600 relative"
                onClick={toggleCartMenu}
              >
                <Image
                  src="/images/cart-icon.png"
                  alt="Favorites"
                  width={22}
                  height={22}
                  quality={100}
                />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  2{" "}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Cart Menu */}
        {isCartMenuOpen && (
          <div className="absolute top-0 right-0 z-50">
            <CartMenu onClose={() => setIsCartMenuOpen(false)} />
          </div>
        )}
      </nav>
    </>
  );
}
