// import { Search } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();

//   return (
//     // Fixed top and z-50 to float above all other content
//     <div className="w-full shadow-sm fixed top-0 z-50">
//       <div className="flex items-center justify-between px-6 py-3 bg-white">
//         <button
//           onClick={() => navigate("/")}
//           className="text-xl font-bold tracking-widest text-gray-800"
//         >
//           Blogs
//         </button>
//         <div className="flex items-center space-x-4 pr-10">
          
//           {/* Search Bar */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search for a company, sector or brand"
//               className="pl-9 pr-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 w-72"
//             />
//             <Search
//               size={16}
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
//             />
//           </div>
          
//           {/* Sign In Button */}
//           <Link to="/signin">
//             <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-md shadow-md hover:bg-blue-700 transition">
//               Sign In
//             </button>
//           </Link>
//         </div>
//       </div>
      
//       {/* Exchange Filing Banner (Part of the fixed header height) */}
//       <div className="bg-gradient-to-r from-green-600 via-yellow-500 to-yellow-400 px-6 py-1.5">
//         <span className="text-white font-semibold text-sm flex items-center justify-center">
//           <span className="tracking-widest mr-2">✦✦✦</span> Exchange Filing <span className="tracking-widest ml-2">✦✦✦</span>
//         </span>
//       </div>
//     </div>
//   );
// }

import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    // Fixed top and z-50 to float above all other content
    <div className="w-full shadow-sm fixed top-0 z-50">
      
      {/* Main Navbar Row */}
      {/* Adjusted padding for all devices: px-4 on mobile, px-6 on medium+ screens */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 bg-white">
        
        {/* Logo/Brand */}
        <button
          onClick={() => navigate("/")}
          className="text-xl font-bold tracking-widest text-gray-800 flex-shrink-0" // flex-shrink-0 prevents it from shrinking
        >
          Blogs
        </button>

        {/* Right Side: Search and Sign In */}
        {/* Reduced space-x-4 to space-x-3 for mobile, then back to space-x-4 on md+ */}
        <div className="flex items-center space-x-3 md:space-x-4">
          
          {/* Search Bar (Responsive) */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..." // Simplified placeholder for mobile
              // The key responsiveness change:
              // Mobile: w-32 (small width) or hidden entirely if preferred.
              // sm: w-40
              // md+: w-72 (original desktop width)
              className="pl-9 pr-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-200 
                         w-32 sm:w-40 md:w-72 
                         placeholder:text-gray-400 placeholder:text-xs md:placeholder:text-sm"
            />
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
          
          {/* Sign In Button (Responsive Text) */}
          <Link to="/signin" className="flex-shrink-0">
            <button className="bg-blue-600 text-white px-3 md:px-4 py-2 text-sm rounded-md shadow-md hover:bg-blue-700 transition">
              {/* Responsive button text: "Sign In" on small screens, "Sign In/Up" or similar if needed. 
                 Keeping it simple for now, but adding flex-shrink-0 to prevent text wrap. */}
              Sign In
            </button>
          </Link>
        </div>
      </div>
      
      {/* Exchange Filing Banner (Kept as is, as it's already full-width and centered) */}
      <div className="bg-gradient-to-r from-green-600 via-yellow-500 to-yellow-400 px-4 md:px-6 py-1.5">
        <span className="text-white font-semibold text-sm flex items-center justify-center">
          <span className="tracking-widest mr-2">✦✦✦</span> 
          {/* Use 'Exchange Filing' on desktop, 'Filing' on mobile for brevity */}
          <span className="hidden sm:inline">Exchange Filing</span>
          <span className="sm:hidden">Filing</span>
          <span className="tracking-widest ml-2">✦✦✦</span>
        </span>
      </div>
    </div>
  );
}