import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronDown, Star } from "lucide-react";
import ComparisonSpecs from "./comparison-specs";
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

export default function ComparisonPage() {
  return (
    <div className="font-poppins">
      {/* Hero Banner */}
      <div className="relative h-[300px] w-full">
        <Image
          src="/images/comparison-bg.png"
          alt="Comparison background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/images/logo-short.png"
            alt="Logo"
            width={70}
            height={70}
            quality={100}
            className="mb-0"
          />
          <h1 className="text-4xl font-semibold mb-4">Product Comparison</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Comparison</span>
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="w-[96%] lg:w-full max-w-6xl mx-auto px-4 py-16 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {/* Left Column */}
          <div className="flex flex-col p-8 rounded-lg col-span-2 lg:col-span-1">
            <h2 className="text-xl lg:text-2xl font-poppins mb-4 max-w-[200px]">
              Go to Product page for more Products
            </h2>
            <Link
              href="/products"
              className="text-black underline underline-offset-4 hover:text-gray-600"
            >
              View More
            </Link>
          </div>

          {/* Middle Column - Product Cards */}
          <div className="flex justify-center lg:gap-8 col-span-2">
            {/* Product Card 1 */}
            <div className="flex flex-col p-6 rounded-lg ">
              <div className="relative h-[160px] mb-4">
                <Image
                  src="/images/sofa-white.png"
                  alt="Asgaard Sofa"
                  height={400}
                  width={400}
                  quality={100}
                  className="object-contain w-[220px] py-3 rounded-lg bg-cream"
                />
              </div>
              <h3 className="text-base lg:text-xl font-medium mb-2">
                Asgaard Sofa
              </h3>
              <p className="text-[#B88E2F] font-medium mb-2">Rs. 250,000.00</p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <Star
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    strokeWidth={1}
                  />
                </div>
                <span className="text-sm text-gray-500">4.7</span>
                <span className="text-xs text-lightGray">204 Review</span>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="flex flex-col p-6 rounded-lg ">
              <div className="relative h-[160px] mb-4">
                <Image
                  src="/images/sofa-black.png"
                  alt="Asgaard Sofa"
                  height={400}
                  width={400}
                  quality={100}
                  className="object-contain w-[220px] rounded-lg bg-cream"
                />
              </div>
              <h3 className="text-base lg:text-xl font-medium mb-2">
                Outdoor Sofa Set
              </h3>
              <p className="text-[#B88E2F] font-medium mb-2">Rs. 224,000.00</p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <Star
                    className="w-4 h-4 fill-yellow-400/50 text-yellow-400"
                    strokeWidth={1}
                  />
                </div>
                <span className="text-sm text-gray-500">4.2</span>
                <span className="text-xs text-lightGray">145 Review</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col p-8 rounded-lg col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-poppinsSemiBold mb-4">
              Add A Product
            </h2>
            <button className="bg-brown w-60 lg:w-auto hover:bg-[#9d7829] text-white flex items-center gap-2 px-2 lg:px-3 py-2 rounded-md text-sm">
              Choose a Product
              <ChevronDown className="ml-5 w-5 h-5" />
            </button>
          </div>
          <div className="col-span-1 lg:col-span-3">
            <ComparisonSpecs />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAF3EA] mx-auto px-4 py-16 my-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 pl-8 md:pl-0"
            >
              <div className="mb-4">
                <Image
                  src={feature.icon}
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
    </div>
  );
}
