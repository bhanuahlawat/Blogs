import { useState } from "react"; // 1. Import useState
import { Search, X } from "lucide-react"; // Import X for the close button
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  // 2. State to manage the visibility of the search input overlay
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Function to toggle the search input
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    // Fixed top and z-50 to float above all other content
    <div className="w-full shadow-sm fixed top-0 z-50">
      
      {/* Main Navbar Row */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-white relative">
        
        {/* LEFT SIDE: Placeholder (for flex-balance or other icons) */}
        {/* We use 'flex-1' to ensure the space is taken up on the left */}
        <div className="flex-1">
        </div>

        <button
          onClick={() => navigate("/")}
          className="text-2xl font-extrabold tracking-widest text-black hover:text-pink-500 transform transition duration-300 hover:scale-105 flex-shrink-0 absolute left-1/2 -translate-x-1/2 drop-shadow-sm "
        >
          BLOGS
        </button>

        {/* RIGHT SIDE: Search Toggle Icon */}
        {/* Use 'flex-1 justify-end' to push the icon to the far right */}
        <div className="flex-1 flex justify-end items-center">
          
          {/* Search Toggle Icon Button */}
          {/* This button toggles the search overlay open/closed */}
          <button
            onClick={toggleSearch}
            className="p-2 text-gray-600 hover:text-blue-600 transition"
            aria-label={isSearchOpen ? "Close search" : "Open search"}
          >
            <Search size={20} />
          </button>
        </div>

        {/* FULL-WIDTH SEARCH INPUT OVERLAY (CONDITIONAL) */}
        {/* This div covers the entire navbar row when open */}
        {isSearchOpen && (
            <div className="absolute inset-0 bg-white p-3 flex items-center shadow-md">
                <div className="w-full flex items-center space-x-3 justify-end">
                    <input
                        type="text"
                        placeholder="Type to search for articles..."
       
                        className="w-full max-w-sm sm:max-w-md pl-4 pr-10 py-2 text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

                        autoFocus // Focus the input when it appears
                    />
                    {/* Close Button inside the overlay */}
                    <button
                        onClick={toggleSearch}
                        className="p-1 text-gray-600 hover:text-red-600 transition flex-shrink-0"
                        aria-label="Close search"
                    >
                        <X size={24} />
                    </button>
                </div>
            </div>
        )}
      </div>
      
     <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-4 md:px-6 py-2 shadow-lg">
        <span className="text-white font-extrabold text-base flex items-center justify-center text-shadow-md">
          <span className="mr-3 text-lg">✨</span> 
          <span className="hidden sm:inline uppercase tracking-widest">
            Latest Exchange Filing Alert
          </span>
          <span className="sm:hidden uppercase tracking-wider">
            Filing Alert
          </span>
          <span className="ml-3 text-lg">✨</span>
        </span>
      </div>
    </div>
  );
}
