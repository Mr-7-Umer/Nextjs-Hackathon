import Image from "next/image";
import ShopImage from "@/Pictures/shophero.png";
import BlowHero from "@/components/ShopBlowHero";
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from "react-icons/fa";

export default function ShopHero() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "./syltherine.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      age: 25,
      image: "./leviosa.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      age: 28,
      image: "./lolito.png",
      description: "Luxury big sofa",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      age: 38,
      image: "./respira.png",
      description: "Outdoor bar table and stool",
    },
  ];

  return (
    <>
      <div className="shopsect">
        <Image src={ShopImage} alt="Shop Banner" />
        <h3 className="font-bold text-[1.5rem]">Shop</h3>
        <h5 className="shopPara">
          <span className="font-bold">Home</span> Shop
        </h5>
      </div>

      <BlowHero />

      <div className="cardsContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {data.map((card, index) => (
          <div
            className="card border border-gray-200 rounded-md overflow-hidden shadow-md"
            key={index}
          >
            <img
              src={card.image}
              style={{ width: "100%", height: "15rem", objectFit: "cover" }}
              className="card-img-top"
              alt={card.name}
            />
            <div className="p-4">
              <h5 className="card-title font-bold text-lg">{card.name}</h5>
              <p className="card-text text-gray-600 text-sm">{card.description}</p>
              <h5 className="card-title font-bold text-lg mt-2">{card.price}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination flex items-center justify-center mt-8 space-x-4">
        <button className="px-4 py-2 bg-[#B88E2F] text-white rounded-md font-bold">1</button>
        <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded-md">2</button>
        <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded-md">3</button>
        <button className="px-4 py-2 bg-[#F9F1E7] text-black rounded-md">Next</button>
      </div>

      {/* Features Section */}
      <div className="features-section bg-[#F9F1E7] py-8 mt-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="feature-item">
            <FaTrophy className="text-4xl text-[#1e1c1c] mx-auto" />
            <h4 className="font-bold text-lg mt-4">High Quality</h4>
            <p className="text-gray-600 text-sm">Crafted from top materials</p>
          </div>
          <div className="feature-item">
            <FaShieldAlt className="text-4xl text-[#171716] mx-auto" />
            <h4 className="font-bold text-lg mt-4">Warranty Protection</h4>
            <p className="text-gray-600 text-sm">Over 2 years</p>
          </div>
          <div className="feature-item">
            <FaShippingFast className="text-4xl text-[#212020] mx-auto" />
            <h4 className="font-bold text-lg mt-4">Free Shipping</h4>
            <p className="text-gray-600 text-sm">Order over 150 $</p>
          </div>
          <div className="feature-item">
            <FaHeadset className="text-4xl text-[#1d1d1b] mx-auto" />
            <h4 className="font-bold text-lg mt-4">24 / 7 Support</h4>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  );
}
