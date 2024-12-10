import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function RoomInspiration() {
  return (
    <section className="bg-[#FDFBF8] px-4 py-14 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-poppinsBold leading-snug text-gray-900 md:text-5xl">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="mt-5 font-poppins text-base text-gray-700 md:text-lg">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you.
            </p>
            <button className="mt-8 w-fit rounded-md bg-[#B8884B] px-10 py-3 font-poppins text-sm text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#A67A43]">
              Explore More
            </button>
          </div>

          {/* Middle Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/middle.png"
                alt="Beautiful bedroom"
                fill
                priority
                quality={100}
                className="object-cover"
              />
              {/* Room Info Overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 font-poppins text-sm text-gray-600">
                  <span>01</span>
                  <span className="h-px w-10 bg-gray-300"></span>
                  <span>Bed Room</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="font-poppins text-xl font-medium text-gray-900">
                    Inner Peace
                  </h3>
                  <button className="rounded-full bg-[#B8884B] p-3 shadow-md text-white transition-transform hover:scale-110 hover:bg-[#A67A43]">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute -bottom-10 left-0 flex gap-3">
              <div className="h-3 w-6 rounded-full bg-[#B8884B]"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
              <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/right.png"
                alt="Modern dining room"
                fill
                priority
                quality={100}
                className="object-cover"
              />
            </div>
            {/* Right Arrow Navigation */}
            <button className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-transform hover:scale-110">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
