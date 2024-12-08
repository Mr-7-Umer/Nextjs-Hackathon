import Image from "next/image";
import Dining from "@/Pictures/dining.png";
import Living from "@/Pictures/living.png";
import Bedroom from "@/Pictures/bedroom.png";

export default function SubHero() {
  return (
    <div className="flex flex-col items-center space-y-8 py-12">
      {/* Header Text */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">Browse The Range</h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Image Area */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Dining Section */}
        <div className="flex flex-col items-center">
          <Image
            src={Dining}
            alt="Dining"
            width={282}
            height={300}
            className="rounded-lg shadow-md"
          />
          <h6 className="mt-4 text-lg font-semibold text-gray-900">Dining</h6>
        </div>

        {/* Living Section */}
        <div className="flex flex-col items-center">
          <Image
            src={Living}
            alt="Living"
            width={282}
            height={300}
            className="rounded-lg shadow-md"
          />
          <h6 className="mt-4 text-lg font-semibold text-gray-900">Living</h6>
        </div>

        {/* Bedroom Section */}
        <div className="flex flex-col items-center">
          <Image
            src={Bedroom}
            alt="Bedroom"
            width={282}
            height={300}
            className="rounded-lg shadow-md"
          />
          <h6 className="mt-4 text-lg font-semibold text-gray-900">Bedroom</h6>
        </div>
      </div>
    </div>
  );
}
