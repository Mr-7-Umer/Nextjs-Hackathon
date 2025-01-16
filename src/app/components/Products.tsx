'use client'

import { useState, useRef, useEffect } from 'react'
import { useCounter } from '../contexts/CartCounter'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import toast from 'react-hot-toast'
import Link from 'next/link'

import { urlFor } from '@/sanity/lib/image'
import { client } from "@/sanity/lib/client"

interface Product {
  _id: string;
  name: string;
  image: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  badge?: {
    text: string;
    color: string;
  }
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [scrollPosition, setScrollPosition] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { addToCart, getCartCount } = useCounter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...')
        const query = '*[_type == "product"]'
        const fetchedProducts = await client.fetch(query)
        console.log('Fetched products:', fetchedProducts)
        setProducts(fetchedProducts)
      } catch (error) {
        console.error('Error fetching products:', error)
        setError('Failed to fetch products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const container = containerRef.current
    if (container) {
      const cardWidth = 300
      const containerWidth = container.offsetWidth
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      const newPosition = scrollPosition + scrollAmount
      const maxScroll = container.scrollWidth - containerWidth
      const clampedPosition = Math.max(0, Math.min(newPosition, maxScroll))
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

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: urlFor(product.image).url()  // Convert Sanity image to URL
    })
    getCartCount()
    toast.success(`${product.name} added to cart`, {
      style: {
        background: '#B88E2F',
        color: '#fff',
      },
    })
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading products...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  if (products.length === 0) {
    return <div className="flex justify-center items-center h-screen">No products found.</div>
  }

  return (
    <section className="py-16 md:py-24 px-4 font-poppins">
      <div className="max-w-[85%] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[#3A3A3A] text-3xl md:text-4xl font-bold mb-4">
            Our Products
          </h2>
        </div>

        <div className="relative">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-4"
          >
            {products.map((product) => (
              <div key={product._id} className="group flex-shrink-0 w-full sm:w-auto">
                <div className="relative bg-[#F4F5F7] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name || ''}
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
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div className={`absolute top-4 right-4 ${product.badge.color} text-white text-sm font-bold px-4 py-1 rounded-full`}>
                      {product.badge.text}
                    </div>
                  )}
                </div>

                <div className="mt-4 text-center">
                  <h3 className="text-[#3A3A3A] text-xl font-semibold mb-1">{product.name || ''}</h3>
                  <p className="text-[#898989] text-sm mb-2">{product.category || ''}</p>
                  <div className="flex justify-center items-center gap-3">
                    <span className="text-[#B88E2F] font-semibold">Rp {(product.price || 0).toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-[#B0B0B0] line-through text-sm">
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
          <button className="border-2 border-[#B88E2F] text-[#B88E2F] px-8 py-3 rounded-md hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
            Show More
          </button>
        </div>
      </div>
    </section>
  )
}

