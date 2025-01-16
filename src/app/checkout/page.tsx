'use client'

import { ChevronDown, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCounter } from '../contexts/CartCounter'
import { useState } from 'react'

const features = [
  {
    icon: '/images/trophy.png',
    title: 'High Quality',
    description: 'crafted from top materials'
  },
  {
    icon: '/images/tick.png',
    title: 'Warranty Protection',
    description: 'Over 2 years'
  },
  {
    icon: '/images/gift.png',
    title: 'Free Shipping',
    description: 'Order over 150 $'
  },
  {
    icon: '/images/support.png',
    title: '24 / 7 Support',
    description: 'Dedicated support'
  }
]

export default function Checkout() {
  const { cartItems } = useCounter()
  const [paymentMethod, setPaymentMethod] = useState('bank-transfer')

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div className="relative h-[300px] w-full mb-10">
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
          <h1 className="text-4xl font-semibold mb-4">Checkout</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span>Checkout</span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8 font-poppins">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Billing Details Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-medium mb-8">Billing details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm">First Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm">Last Name</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Company Name (Optional)</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Country / Region</label>
              <div className="relative">
                <select className="w-full p-3 border rounded-lg appearance-none bg-white">
                  <option>Sri Lanka</option>
                  <option>Pakistan</option>
                  <option>Bangladesh</option>
                  {/* Add other countries */}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">Street address</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Town / City</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Province</label>
              <div className="relative">
                <select className="w-full p-3 border rounded-lg appearance-none bg-white">
                  <option>Western Province</option>
                  <option>Easter Province</option>
                  <option>Southern Province</option>
                  {/* Add other provinces */}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm">ZIP code</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Phone</label>
              <input
                type="tel"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Email address</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm">Additional information</label>
              <textarea
                placeholder="Additional Information"
                className="w-full p-3 border rounded-lg resize-none"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between text-sm md:text-base">
                <span className='text-base lg:text-2xl font-poppinsSemiBold'>Product</span>
                <span className='text-base lg:text-2xl font-poppinsSemiBold'>Subtotal</span>
              </div>
              
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-4 text-sm md:text-base">
                  <div className="space-y-1">
                    <p className=''><span className='text-lightGray'>{item.name} </span> x {item.quantity}</p>
                  </div>
                  <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}

              <div className="flex justify-between text-sm md:text-base">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span className="text-brown lg:text-xl font-poppinsSemiBold">Rs. {subtotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="bank-transfer" 
                    name="payment" 
                    checked={paymentMethod === 'bank-transfer'}
                    onChange={() => setPaymentMethod('bank-transfer')}
                  />
                  <label htmlFor="bank-transfer" className="text-sm">Direct Bank Transfer</label>
                </div>
                <p className="text-sm text-gray-500 ml-6">
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>
                
                <div className="flex items-center space-x-2">
                  <input 
                    type="radio" 
                    id="cash" 
                    name="payment"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                  />
                  <label htmlFor="cash" className="text-sm">Cash On Delivery</label>
                </div>
              </div>

              <p className="text-sm">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
                <Link href="/privacy-policy" className="text-black underline">
                  privacy policy
                </Link>
                .
              </p>

              <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAF3EA] mx-auto px-4 py-16 mt-6 pl-6 lg:pl-0">
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
              <div className='flex flex-col'>
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
    </>
  )
}

