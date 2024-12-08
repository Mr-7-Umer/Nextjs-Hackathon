import Image from "next/image";

export default function Products() {
  interface Card {
    name: string;
    description: string;
    image: string;
    price: string;
    discountPrice?: string;
    isNew?: boolean;
    discount?: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      discountPrice: "Rp 3.500.000",
      image: "/syltherine.png",
      description: "Stylish cafe chair",
      discount: "-30%",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      image: "/leviosa.png",
      description: "Stylish cafe chair.",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      discountPrice: "Rp 14.000.000",
      image: "/lolito.png",
      description: "Luxury big sofa",
      discount: "-50%",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      image: "/respira.png",
      description: "Outdoor bar table and stool",
      isNew: true,
    },
    {
      name: "Grifo",
      price: "Rp 1.500.000",
      image: "/grifo.png",
      description: "Night lamp",
    },
    {
      name: "Muggo",
      price: "Rp 150.000",
      image: "/muggo.png",
      description: "Small mug",
      isNew: true,
    },
    {
      name: "Pingky",
      price: "Rp 7.000.000",
      discountPrice: "Rp 14.000.000",
      image: "/pingky.png",
      description: "Cute bed set",
      discount: "-50%",
    },
    {
      name: "Potty",
      price: "Rp 500.000",
      image: "/potty.png",
      description: "Minimalist flower pot",
      isNew: true,
    },
  ];

  return (
    <div className="products-section px-8 py-16 bg-white text-gray-900">
      {/* Header */}
      <h2 className="text-center text-4xl font-bold mb-8">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((card, index) => (
          <div
            key={index}
            className="relative border rounded-lg overflow-hidden bg-white text-black hover:shadow-lg transition-shadow"
          >
            {/* Product Image */}
            <div className="relative">
              <Image
                src={card.image}
                alt={card.name}
                width={300}
                height={200}
                className="object-cover w-full h-[200px]"
              />
              {card.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {card.discount}
                </span>
              )}
              {card.isNew && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  New
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h5 className="font-bold text-lg">{card.name}</h5>
              <p className="text-gray-500 text-sm">{card.description}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="font-bold text-gray-900">{card.price}</span>
                {card.discountPrice && (
                  <span className="line-through text-gray-400 text-sm">
                    {card.discountPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-[#B88E2F] text-white rounded-lg font-bold shadow-md hover:bg-[#9b7c22]">
          Show More
        </button>
      </div>
    </div>
  );
}
