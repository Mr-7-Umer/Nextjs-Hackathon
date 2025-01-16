import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] font-poppins">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/hero.png"
          alt="Modern furniture showcase"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[600px] flex items-center justify-center md:justify-end md:w-full w-[95%]">
        <div className="bg-cream bg-opacity-90 p-8 md:p-12 lg:p-16 max-w-2xl ">
          <span className="text-gray-900 text-sm lg:text-base tracking-widest mb-4 block font-semibold ">
            New Arrival
          </span>
          <h1 className="text-brown text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 leading-tight font-poppinsSemiBold">
            Discover Our<br />New Collection
          </h1>
          <p className="text-gray-700 text-base lg:text-lg mb-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div>
            <Link 
              href="/shop"
              className="inline-block bg-[#B88A44] text-white px-12 py-4 text-sm lg:text-base font-poppinsSemiBold hover:bg-[#A67934] transition-colors duration-300 "
            >
              BUY NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

