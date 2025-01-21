import Image from "next/image";

const galleryImages = [
  {
    id: "1",
    src: "/images/left-cutted.png",
    alt: "Modern shelf setup with plants",
    width: 280,
    height: 500,
    className:
      "lg:block hidden  lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    id: "2",
    src: "/images/laptop.png",
    alt: "Minimalist workspace setup",
    width: 450,
    height: 300,
    className: " lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-2",
  },
  {
    id: "3",
    src: "/images/chair.png",
    alt: "Vintage brown chair",
    width: 280,
    height: 400,
    className: " lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3",
  },
  {
    id: "4",
    src: "/images/showpiece.png",
    alt: "Small table with vase",
    width: 280,
    height: 280,
    className: " lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3",
  },
  {
    id: "5",
    src: "/images/table1.png",
    alt: "Modern dining room",
    width: 400,
    height: 600,
    className: " lg:col-start-6 lg:col-end-9 lg:row-start-1 lg:row-end-3",
  },
  {
    id: "6",
    src: "/images/bed.png",
    alt: "Contemporary bedroom setup",
    width: 450,
    height: 350,
    className: " lg:col-start-9 lg:col-end-12 lg:row-start-1 lg:row-end-2",
  },
  {
    id: "7",
    src: "/images/kitchen.png",
    alt: "Modern kitchen counter",
    width: 280,
    height: 280,
    className: " lg:col-start-12 lg:col-end-15 lg:row-start-1 lg:row-end-2",
  },
  {
    id: "8",
    src: "/images/artwall.png",
    alt: "Decorative wall art",
    width: 280,
    height: 280,
    className: " lg:col-start-9 lg:col-end-12 lg:row-start-2 lg:row-end-3",
  },
  {
    id: "9",
    src: "/images/table2.png",
    alt: "Wall mounted shelf",
    width: 280,
    height: 280,
    className: " lg:col-start-12 lg:col-end-14 lg:row-start-2 lg:row-end-3",
  },
];

export default function Furniture() {
  return (
    <section className="w-full py-16 sm:py-0 sm:pt-18 px-4 font-poppins overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[#3A3A3A] text-2xl md:text-3xl font-medium mb-2">
            Share your setup with
          </h2>
          <p className="text-[#616161] text-3xl md:text-4xl font-bold">
            #FuniroFurniture
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-13 grid-rows-3 gap-4 h-[800px]">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`${image.className} overflow-hidden`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={100}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="flex justify-center items-center">
          <div className="">
            <div className="lg:hidden  space-y-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {galleryImages.map((image) => (
                <div key={image.id} className={`${image.className}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={150}
                    height={150}
                    quality={100}
                    className="rounded-lg hover:scale-105 transition-transform duration-3001"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}