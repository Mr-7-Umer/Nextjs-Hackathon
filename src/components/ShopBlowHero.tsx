import { FiFilter, FiGrid, FiMenu } from "react-icons/fi";

export default function FilterSortBar() {
  return (
    <div className="filter-sort-bar w-full bg-[#F9F1E7] flex items-center justify-between px-8 py-4 text-sm lg:text-base">
      {/* Left Section: Filter and Results Info */}
      <div className="flex items-center space-x-4">
        {/* Filter Icon */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <FiFilter className="text-black text-xl" />
          <p className="font-medium text-black">Filter</p>
        </div>

        {/* View Icons */}
        <div className="flex items-center space-x-3">
          <FiGrid className="text-black text-lg cursor-pointer" />
          <FiMenu className="text-black text-lg cursor-pointer" />
        </div>

        {/* Divider */}
        <span className="text-gray-400">|</span>

        {/* Results Info */}
        <p className="text-black">
          Showing <span className="font-bold">1–16</span> of <span className="font-bold">32</span>{" "}
          results
        </p>
      </div>

      {/* Right Section: Show and Sort Options */}
      <div className="flex items-center space-x-6">
        {/* Show Option */}
        <div className="flex items-center space-x-2">
          <p className="text-black font-medium">Show</p>
          <input
            className="w-[3rem] h-[2rem] border border-gray-300 rounded-md text-center text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="text"
            placeholder="16"
          />
        </div>

        {/* Sort By Option */}
        <div className="flex items-center space-x-2">
          <p className="text-black font-medium">Sort by</p>
          <select
            className="w-[8rem] h-[2rem] border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="default">Default</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
