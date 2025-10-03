// import { useState } from "react";
// import {
//   BarChart3, FileText, Clock, Bookmark, Briefcase, Bell, 
//   Sliders, Dices, Package, DollarSign
// } from "lucide-react";
// import { Link } from "react-router-dom"; 

// export default function Sidebar() {
//   const [active, setActive] = useState("Ideas Dashboard");

//   const menuItems = [
//     { name: "Ideas Dashboard", icon: BarChart3 },
//     { name: "Results", icon: FileText },
//     { name: "Timeline", icon: Clock },
//     { name: "Watchlist", icon: Bookmark },
//     { name: "Portfolio", icon: Briefcase },
//     { name: "Alerts", icon: Bell },
//   ];

//   const tools = [
//     { name: "Stock Screener", icon: Sliders },
//     { name: "Market", icon: Dices },
//     { name: "Raw Material", icon: Package },
//   ];

//   return (
//     // Fixed right-0, bottom-0, and top-[88px] to clear the Navbar
//     <div className="fixed right-0 top-[88px] bottom-0 w-20 bg-white border-l shadow-sm flex flex-col justify-between z-40"> 
      
//       <div className="flex flex-col items-center pt-2"> 

//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = active.startsWith(item.name.split(" ")[0]); 
          
//           return (
//             <button
//               key={item.name}
//               onClick={() => setActive(item.name)}
//               className={`flex flex-col items-center w-full py-1.5 hover:bg-gray-100 text-[10px] ${
//                 isActive ? "text-yellow-600 font-semibold" : "text-gray-600"
//               }`}
//             >
//               <div
//                 className={`flex items-center justify-center w-10 h-6 rounded-full mb-1 ${
//                   isActive ? "bg-yellow-100" : ""
//                 }`}
//               >
//                 <Icon size={20} />
//               </div>
//               {item.name.split(" ")[0]} 
//             </button>
//           );
//         })}
//       </div>

//       {/* Tools Section */}
//       <div className="flex flex-col items-center pb-3">
//         <div className="border-t w-full mb-1" />
//         {tools.map((item) => {
//           const Icon = item.icon;
//           const isActive = active === item.name;
//           return (
//             <button
//               key={item.name}
//               onClick={() => setActive(item.name)}
//               className={`flex flex-col items-center w-full py-1.5 hover:bg-gray-100 text-[10px] ${
//                 isActive ? "text-yellow-600 font-semibold" : "text-gray-600"
//               }`}
//             >
//               <div
//                 className={`flex items-center justify-center w-10 h-10 rounded-full mb-0.5 ${
//                   isActive ? "bg-yellow-100" : ""
//                 }`}
//               >
//                 <Icon size={20} />
//               </div>
//               {item.name.split(" ")[0]}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import {
  BarChart3, FileText, Clock, Bookmark, Briefcase, Bell,
  Sliders, Dices, Package, DollarSign,
  HomeIcon
} from "lucide-react";
import { Link } from "react-router-dom"; 

// Helper function to generate the correct URL path
const getPath = (name) => {
    if (name === "Home") return "/";
    return `/${name.toLowerCase().replace(/\s/g, '-')}`;
};

export default function Sidebar() {
  const [active, setActive] = useState("Ideas Dashboard");

  const menuItems = [
    { name: "Home", icon: HomeIcon },
    { name: "Ideas Dashboard", icon: BarChart3 },
    { name: "Results", icon: FileText },
    { name: "Timeline", icon: Clock },
    { name: "Watchlist", icon: Bookmark },
    { name: "Portfolio", icon: Briefcase },
    { name: "Alerts", icon: Bell },
  ];

  const tools = [
    { name: "Stock Screener", icon: Sliders },
    { name: "Market", icon: Dices },
    { name: "Raw Material", icon: Package },
  ];

  return (
    // Responsive width: w-16 (mobile), md:w-20 (desktop)
    <div 
      className="fixed right-0 top-[88px] bottom-0 w-16 md:w-20 bg-white border-l shadow-sm flex flex-col justify-between z-40"
    > 
      
      <div className="flex flex-col items-center pt-5"> 
        {menuItems.map((item) => {
          const Icon = item.icon;
          
          // 🎯 FIX 1: Corrected logic to handle the 'Home' link at the root path ('/')
          // Also made the general comparison cleaner
          const isHomeActive = item.name === "Home" && active === "Home";
          const isOtherActive = item.name !== "Home" && (active === item.name || active.startsWith(item.name.split(" ")[0]));
          const isActive = isHomeActive || isOtherActive;
          
          return (
            <Link 
              to={getPath(item.name)}
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex flex-col items-center w-full py-1.5 hover:bg-gray-100 text-[10px] transition-colors ${
                isActive ? "text-yellow-600 font-semibold" : "text-gray-600"
              }`}
            >
              {/* 🎯 FIX 2: Fixed Icon size/container dimensions */}
              <div
                className={`flex items-center justify-center w-10 h-8 rounded-full mb-0.5 ${ // Larger container for better icon spacing
                  isActive ? "bg-yellow-100" : ""
                }`}
              >
                {/* Icon size is consistently 18 or 20 for better visibility */}
                <Icon size={20} /> 
              </div>
              {/* Displaying only the first word for multi-word names for brevity */}
              {item.name.split(" ")[0]} 
            </Link>
          );
        })}
      </div>

      {/* Tools Section */}
      <div className="flex flex-col items-center pb-3">
        <div className="border-t w-full mb-1" />
        {tools.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;
          return (
            <Link 
              to={getPath(item.name)}
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex flex-col items-center w-full py-1.5 hover:bg-gray-100 text-[10px] transition-colors ${
                isActive ? "text-yellow-600 font-semibold" : "text-gray-600"
              }`}
            >
              {/* 🎯 FIX 2: Fixed Icon size/container dimensions */}
              <div
                className={`flex items-center justify-center w-10 h-8 rounded-full mb-0.5 ${
                  isActive ? "bg-yellow-100" : ""
                }`}
              >
                <Icon size={20} /> 
              </div>
              {item.name.split(" ")[0]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}