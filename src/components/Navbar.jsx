import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    // Fixed top and z-50 to float above all other content
    <div className="w-full shadow-sm fixed top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3 bg-white">
        <button
          onClick={() => navigate("/")}
          className="text-xl font-bold tracking-widest text-gray-800"
        >
          Blogs
        </button>
        <div className="flex items-center space-x-4 pr-10">
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a company, sector or brand"
              className="pl-9 pr-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 w-72"
            />
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
          
          {/* Sign In Button */}
          <Link to="/signin">
            <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md shadow-md hover:bg-blue-700 transition">
              Sign In
            </button>
          </Link>
        </div>
      </div>
      
      {/* Exchange Filing Banner (Part of the fixed header height) */}
      <div className="bg-gradient-to-r from-green-600 via-yellow-500 to-yellow-400 px-6 py-1.5">
        <span className="text-white font-semibold text-sm flex items-center justify-center">
          <span className="tracking-widest mr-2">✦✦✦</span> Exchange Filing <span className="tracking-widest ml-2">✦✦✦</span>
        </span>
      </div>
    </div>
  );
}