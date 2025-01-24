"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";

interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface Product {
  _id: string;
  name: string;
  image: SanityImage;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  tags: string[];
  badge?: {
    text: string;
    color: string;
  };
}

const categories = ["All", "Sofa", "Table", "Chair", "Lamp"];

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query =
          '*[_type == "product"]{_id, name, image, category, price, originalPrice, description, tags, badge}';
        const fetchedProducts = await client.fetch(query);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filterAndSortProducts = useCallback(() => {
    let filtered = [...products];

    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) =>
        product.tags.includes(selectedCategory.toLowerCase())
      );
    }

    switch (sortOrder) {
      case "price-low-to-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high-to-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, sortOrder]);

  useEffect(() => {
    filterAndSortProducts();
  }, [filterAndSortProducts]);

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
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Shop
            </h1>
            <div className="flex items-center gap-2 text-[#000000] text-base">
              <Link href="/" className="hover:text-[#B88E2F]">
                Home
              </Link>
              <span>&gt;</span>
              <span>Shop</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#F9F1E7] px-4 md:px-8 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="font-medium">Category:</span>
                <select
                  className="bg-transparent border border-[#9F9F9F] rounded px-4 py-1 focus:border-[#B88E2F]"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#9F9F9F]">Sort by</span>
              <select
                className="bg-transparent border border-[#9F9F9F] rounded px-4 py-1 focus:border-[#B88E2F]"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 font-poppins">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product._id} className="group">
                <div className="relative bg-[#F4F5F7] rounded-sm overflow-hidden">
                  <Image
                    src={urlFor(product.image).url() || "/placeholder.svg"}
                    alt={product.name}
                    width={285}
                    height={301}
                    className="w-full h-[301px] object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-[#3A3A3A] text-2xl font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-[#898989]">{product.category}</p>
                  <span className="text-[#B88E2F] font-semibold">
                    Rp {product.price.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
