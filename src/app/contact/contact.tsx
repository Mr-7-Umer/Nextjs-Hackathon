import Image from "next/image";
import { MdLocationOn, MdAccessTime, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Banner */}
      <div className="contact-banner py-10 text-center bg-[#F9F1E7]">
        <div className="text-center">
          <Image
            src="/Pictures/logo.png" // Add your logo image path
            alt="Contact Logo"
            width={50}
            height={50}
            className="mx-auto"
          />
          <h1 className="font-bold text-4xl">Contact</h1>
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-semibold">Home</span> &gt; Contact
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="py-10 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
          <p className="text-gray-600">
            For More Information About Our Product & Services, Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <MdLocationOn className="text-2xl text-[#B88E2F]" />
              <div className="ml-4">
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <MdPhone className="text-2xl text-[#B88E2F]" />
              <div className="ml-4">
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">
                  Mobile: +84 (546) 546-6789
                  <br />
                  Hotline: +84 (546) 546-6789
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <MdAccessTime className="text-2xl text-[#B88E2F]" />
              <div className="ml-4">
                <p className="font-semibold">Working Time</p>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div>
          <form className="bg-[#F9F1E7] p-8 rounded-md shadow-md space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold">Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                placeholder="Write your message here"
                rows={4}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#B88E2F] text-white py-2 rounded-md font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#F9F1E7] py-8 mt-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="feature-item">
            <MdLocationOn className="text-4xl text-[#B88E2F] mx-auto" />
            <h4 className="font-bold text-lg mt-4">High Quality</h4>
            <p className="text-gray-600 text-sm">Crafted from top materials</p>
          </div>
          <div className="feature-item">
            <MdPhone className="text-4xl text-[#B88E2F] mx-auto" />
            <h4 className="font-bold text-lg mt-4">Warranty Protection</h4>
            <p className="text-gray-600 text-sm">Over 2 years</p>
          </div>
          <div className="feature-item">
            <MdAccessTime className="text-4xl text-[#B88E2F] mx-auto" />
            <h4 className="font-bold text-lg mt-4">Free Shipping</h4>
            <p className="text-gray-600 text-sm">Order over 150 $</p>
          </div>
          <div className="feature-item">
            <MdLocationOn className="text-4xl text-[#B88E2F] mx-auto" />
            <h4 className="font-bold text-lg mt-4">24 / 7 Support</h4>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
