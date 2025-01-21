
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BarChart2, ChevronRight, Heart } from "lucide-react";
import { useCounter } from "../contexts/CartCounter";
import toast from "react-hot-toast";
import { urlFor } from "../../sanity/lib/image";
import { client } from "../../sanity/lib/client";
import { useWishlist } from "../contexts/WishlistContext";

interface SanityImage {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
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

const categories = ["All", "Sofa", "Table", "Chair", "Lamp"];

export default function ShopPage() {
  const { addToCart, getCartCount } = useCounter();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
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

  useEffect(() => {
    filterAndSortProducts();
  }, [selectedCategory, sortOrder, products]);

  const filterAndSortProducts = () => {
    let filtered = [...products];

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) =>
        product.tags.includes(selectedCategory.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortOrder) {
      case "price-low-to-high":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high-to-low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        // Keep original order
        break;
    }

    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: urlFor(product.image).url(),
    });
    getCartCount();
    toast.success(`${product.name} added to cart`, {
      style: {
        background: "#B88E2F",
        color: "#fff",
      },
    });
  };

  const handleWishlistToggle = (product: Product) => {
    if (isInWishlist(product._id)) {
      removeFromWishlist(product._id);
      toast.success(`${product.name} removed from wishlist`, {
        style: {
          background: "#B88E2F",
          color: "#fff",
        },
      });
    } else {
      addToWishlist({
        id: product._id,
        name: product.name,
        price: product.price,
        image: urlFor(product.image).url(),
      });
      toast.success(`${product.name} added to wishlist`, {
        style: {
          background: "#B88E2F",
          color: "#fff",
        },
      });
    }
  };

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
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left Side */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="font-medium">Category:</span>
                <select
                  className="bg-transparent border border-[#9F9F9F] rounded px-4 py-1 focus:outline-none focus:border-[#B88E2F]"
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

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-[#9F9F9F]">Sort by</span>
                <select
                  className="bg-transparent border border-[#9F9F9F] rounded px-4 py-1 focus:outline-none focus:border-[#B88E2F]"
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
        </div>
      </section>

      <section className="py-16 md:py-16 px-4 font-poppins">
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
                    quality={100}
                    className="w-full h-[301px] object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-4">
                    <button
                      className="w-48 bg-white text-[#B88E2F] px-6 py-2 rounded-md hover:bg-[#B88E2F] hover:text-white transition-colors duration-300"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <Link
                      href={`/product/${product._id}`}
                      className="w-48 bg-[#B88E2F] text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#B88E2F] transition-colors duration-300 text-center"
                    >
                      View Product
                    </Link>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="flex items-center gap-2 text-white hover:text-[#B88E2F] transition-colors">
                        <BarChart2 className="w-5 h-5" />
                        <Link href={"/compare"}>
                          <span>Compare</span>
                        </Link>
                      </button>
                      <button
                        onClick={() => handleWishlistToggle(product)}
                        className="flex items-center gap-2 text-white hover:text-[#B88E2F] transition-colors"
                      >
                        <Heart
                          className={`w-5 h-5 ${isInWishlist(product._id) ? "fill-current" : ""}`}
                        />
                        <span>Like</span>
                      </button>
                    </div>
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div
                      style={{
                        backgroundColor: product.badge.color,
                        borderRadius: "50%",
                      }}
                      className={`absolute top-5 right-5 text-white text-sm font-medium px-1 py-2 rounded-sm`}
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
        </div>
      </section>

      <section className="w-full font-poppins">
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
                    src={feature.icon || "/placeholder.svg"}
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
