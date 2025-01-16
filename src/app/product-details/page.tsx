'use client'

import Image from 'next/image'
import Link from 'next/link'
import {  Minus, Plus} from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

import { Share2, Heart, BarChart2, ChevronLeft, ChevronRight } from 'lucide-react'

interface Product {
  id: string
  name: string
  image: string
  category: string
  price: number
  originalPrice?: number
  badge?: {
    text: string
    color: string
  }
}

const products: Product[] = [
  {
    id: '1',
    name: 'Syltherine',
    image: '/images/syltherine.png',
    category: 'Stylish cafe chair',
    price: 2500000,
    originalPrice: 3500000,
    badge: {
      text: '-30%',
      color: 'bg-[#E97171]'
    }
  },
  {
    id: '2',
    name: 'Leviosa',
    image: '/images/respira.png',
    category: 'Stylish cafe chair',
    price: 2500000
  },
  {
    id: '3',
    name: 'Lolito',
    image: '/images/lolito.png',
    category: 'Luxury big sofa',
    price: 7000000,
    originalPrice: 14000000,
    badge: {
      text: '-50%',
      color: 'bg-[#E97171]'
    }
  },
  {
    id: '4',
    name: 'Respira',
    image: '/images/respira.png',
    category: 'Outdoor bar table and stool',
    price: 500000,
    badge: {
      text: 'New',
      color: 'bg-[#2EC1AC]'
    }
  },

]

export default function ProductDetails() {

    const [scrollPosition, setScrollPosition] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
  
    const scroll = (direction: 'left' | 'right') => {
      const container = containerRef.current
      if (container) {
        const cardWidth = 300 // Width of each card
        const containerWidth = container.offsetWidth
        const scrollAmount = direction === 'left' 
          ? -cardWidth 
          : cardWidth
        const newPosition = scrollPosition + scrollAmount
  
        // Ensure the new position is within bounds
        const maxScroll = container.scrollWidth - containerWidth
        const clampedPosition = Math.max(0, Math.min(newPosition, maxScroll))
  
        // Calculate the nearest card start position
        const nearestCardPosition = Math.round(clampedPosition / cardWidth) * cardWidth
  
        container.scrollTo({
          left: nearestCardPosition,
          behavior: 'smooth'
        })
        setScrollPosition(nearestCardPosition)
      }
    }
  
    useEffect(() => {
      const container = containerRef.current
      if (container) {
        const handleScroll = () => {
          setScrollPosition(container.scrollLeft)
        }
        container.addEventListener('scroll', handleScroll)
        return () => container.removeEventListener('scroll', handleScroll)
      }
    }, [])
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState('L')
  const [selectedColor, setSelectedColor] = useState('purple')

  const thumbnails = [
    '/images/sofa1.png',
    '/images/sofa2.png',
    '/images/sofa3.png',
    '/images/sofa4.png',
  ]
  const [activeTab, setActiveTab] = useState('description')
  return (
    <>
    <div className="min-h-screen w-[95%] mx-auto lg:w-full font-poppins">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-4 text-sm">
        <div className="flex items-center gap-2 text-gray-500">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/shop" className="hover:text-gray-700">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Asgaard sofa</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-4">
              {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(thumb)}
                  className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-gray-300 transition-all"
                >
                  <Image
                    src={thumb}
                    alt={`Product thumbnail ${index + 1}`}
                    width={50}
                    height={50}
                    quality={100}
                    className="object-cover bg-cream"
                  />
                </button>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="relative flex-1 aspect-square ">
              <Image
                src='/images/sofa-main.png'
                alt="Product main image"
                width={500}
                height={500}
                quality={100}
                className="object-contain bg-cream"
                priority
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-medium">Asgaard sofa</h1>
            <div className="text-2xl">Rs. 250,000.00</div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20">
                  <defs>
                    <linearGradient id="half">
                      <stop offset="50%" stopColor="currentColor" />
                      <stop offset="50%" stopColor="transparent" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
              <span className="text-sm text-gray-500">5 Customer Review</span>
            </div>

            {/* Description */}
            <p className="text-xs lg:text-base text-gray-600">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            {/* Size Selection */}
            <div className="space-y-2">
              <label className="block text-sm">Size</label>
              <div className="flex gap-2">
                {['L', 'XL', 'XS'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 flex items-center justify-center border rounded ${
                      selectedSize === size
                        ? ' bg-brown text-white'
                        : ' bg-cream border-none'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-2">
              <label className="block text-sm">Color</label>
              <div className="flex gap-2">
                {[
                  { name: 'purple', class: 'bg-purple-500' },
                  { name: 'black', class: 'bg-black' },
                  { name: 'gold', class: 'bg-yellow-700' },
                ].map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full ${color.class} ${
                      selectedColor === color.name
                        ? 'ring-2 ring-offset-2 ring-gray-400'
                        : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray rounded py-1 lg:py-2 text-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className=" px-2 hover:bg-gray-100 lg:text-base text-xs"
                >
                  <Minus className="w-3 h-3 lg:w-4 lg:h-4" />
                </button>
                <span className="w-6 lg:w-12 text-center lg:text-base text-xs">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 lg:text-base text-xs"
                >
                  <Plus className="w-3 h-3 lg:w-4 lg:h-4" />
                </button>
              </div>
              <button className=" px-4 lg:px-8  text-[0.6rem] lg:text-base border border-gray rounded py-3">Add To Cart</button>
              <button  className="px-4 lg:px-8 text-[0.6rem] lg:text-base border border-gray rounded py-3">+ Compare</button>
            </div>

            {/* Product Meta */}
            <div className="space-y-4 pt-6 border-t text-sm text-gray-700">
  <div className="flex">
    <span className="w-24 text-[#9F9F9F]">SKU</span>
    <span className='text-[#9F9F9F]'>: SS001</span>
  </div>
  <div className="flex">
    <span className="w-24 text-[#9F9F9F]">Category</span>
    <span className='text-[#9F9F9F]'>: Sofas</span>
  </div>
  <div className="flex">
    <span className="w-24 text-[#9F9F9F]">Tags</span>
    <span className='text-[#9F9F9F]'>: Sofa, Chair, Home, Shop</span>
  </div>
  <div className="flex items-center">
    <span className="w-24 text-[#9F9F9F]">Share</span>
    <div className="flex gap-4">
      <button className="hover:text-gray-600">
        <img src="/images/facebook.png" alt="Facebook" className="w-5 h-5" />
      </button>
      <button className="hover:text-gray-600">
        <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
      </button>
      <button className="hover:text-gray-600">
        <img src="/images/twitter.png" alt="Twitter" className="w-5 h-5" />
      </button>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
    <div className="w-[95%] lg:w-full max-w-6xl mx-auto px-4 py-16 font-poppins">
      {/* Tabs */}
      <div className="flex flex-wrap gap-8 border-t  border-lightGray mb-8 pt-20 justify-center">
        <button
          onClick={() => setActiveTab('description')}
          className={`text-xl pb-4 border-b-2 -mb-[1px] transition-colors ${
            activeTab === 'description'
             ? 'border-black text-gray'
              : 'border-transparent text-lightGray hover:text-gray-600'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('additional')}
          className={`text-xl pb-4 border-b-2 -mb-[1px]  ${
            activeTab === 'additional'
              ? 'border-black text-gray'
              : 'border-transparent text-lightGray hover:text-gray-600'
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`text-xl pb-4 border-b-2 -mb-[1px] transition-colors ${
            activeTab === 'reviews'
             ? 'border-black text-gray'
              : 'border-transparent text-lightGray hover:text-gray-600'
          }`}
        >
          Reviews [5]
        </button>
      </div>

      {/* Description Content */}
      <div className="space-y-8">
        <p className="text-lightGray leading-relaxed">
     {"     Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road."}
        </p>
        <p className="text-lightGray leading-relaxed">
         {' Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.'}
        </p>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6 pt-8 border-b border-lightGray pb-20">
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/sofa-left.png"
              alt="Sofa straight configuration"
              fill
              className="object-cover rounded-lg bg-cream"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/sofa-right.png"
              alt="Sofa L-shaped configuration"
              fill
              className="object-cover rounded-lg bg-cream"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    <section className="py-16 md:py-24 px-4 font-poppins">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#3A3A3A] text-3xl md:text-4xl font-bold mb-4">
            Related Products
          </h2>
        </div>

        <div className="relative">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4 px-[16px] sm:px-0"
          >
            {products.map((product) => (
              <div key={product.id} className="group flex-shrink-0 w-[280px] sm:w-auto">
                <div className="relative bg-[#F4F5F7] rounded-sm overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={285}
                    height={301}
                    quality={100}
                    className="w-full h-[301px] object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <button className="w-52 bg-white text-[#B88E2F] px-10 py-3 rounded-sm hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
                        Add to cart
                      </button>
                    </div>
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white">
                      <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                        <Share2 className="w-5 h-5" />
                        Share
                      </button>
                      <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                        <BarChart2 className="w-5 h-5" />
                        Compare
                      </button>
                      <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
                        <Heart className="w-5 h-5" />
                        Like
                      </button>
                    </div>
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div className={`absolute top-5 right-5 ${product.badge.color} text-white text-sm font-bold px-4 py-1 rounded-sm`}>
                      {product.badge.text}
                    </div>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-[#3A3A3A] text-2xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-[#898989] mb-2">{product.category}</p>
                  <div className="flex justify-center items-center gap-3">
                    <span className="text-[#B88E2F] font-semibold">Rp {product.price.toLocaleString()}</span>
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
          
          {/* Chevron buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md sm:hidden"
            style={{ left: '-16px' }}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md sm:hidden"
            style={{ right: '-16px' }}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="mt-16 text-center">
          <button className="border-2 border-[#B88E2F] text-[#B88E2F] px-8 py-3 hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
            Show More
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

