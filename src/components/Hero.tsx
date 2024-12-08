import Image from "next/image";
import HeroImage from "@/Pictures/banner.png";

export default function Hero() {
  return (
    <div className="relative w-full h-[30rem] lg:h-[40rem] overflow-hidden">
      {/* Background Image */}
      <Image
        src={HeroImage}
        layout="fill"
        objectFit="cover"
        alt="Hero Background"
        priority
      />

      {/* Text Overlay */}
      <div className="absolute top-1/4 right-12 bg-[#FFF3E3] p-6 rounded-md shadow-md max-w-[24rem] lg:max-w-[30rem]">
        <h6 className="text-sm font-medium text-gray-700 uppercase tracking-widest">
          New Arrival
        </h6>
        <h3 className="text-3xl lg:text-5xl font-bold text-[#B88E2F] leading-tight mt-2">
          Discover Our <br /> New Collection
        </h3>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 bg-[#B88E2F] text-white px-6 py-2 text-lg font-medium rounded-md hover:bg-[#9c7425] transition">
          BUY NOW
        </button>
      </div>
    </div>
  );
}
