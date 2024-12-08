import Image from "next/image";
import Logo from "@/Pictures/Logo.png"; // Ensure the logo path is correct
import Link from "next/link"; // Link is already imported for navigation
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <>
      <div className="navbar flex justify-between items-center p-4 shadow-md bg-white">
        {/* Logo Section */}
        <div className="logo">
          <Image src={Logo} width={185} height={41} alt="Furniro Logo" />
        </div>

        {/* Navigation Links Section */}
        <div className="navbtns">
          <ul className="head flex space-x-8 text-lg font-medium">
            <Link href={"/"} passHref>
              <li className="hover:text-[#B88E2F] cursor-pointer">Home</li>
            </Link>
            <Link href={"/shop"} passHref>
              <li className="hover:text-[#B88E2F] cursor-pointer">Shop</li>
            </Link>
            <Link href={"/blog"} passHref>
              <li className="hover:text-[#B88E2F] cursor-pointer">Blog</li>
            </Link>
            <Link href={"/contact"} passHref>
              <li className="hover:text-[#B88E2F] cursor-pointer">Contact</li>
            </Link>
          </ul>
        </div>

        {/* Action Icons Section */}
        <div className="icons flex space-x-6 text-2xl text-gray-600">
          <MdPersonOutline className="hover:text-[#B88E2F] cursor-pointer" />
          <CiSearch className="hover:text-[#B88E2F] cursor-pointer" />
          <GoHeart className="hover:text-[#B88E2F] cursor-pointer" />
          <AiOutlineShoppingCart className="hover:text-[#B88E2F] cursor-pointer" />
        </div>
      </div>
    </>
  );
}
