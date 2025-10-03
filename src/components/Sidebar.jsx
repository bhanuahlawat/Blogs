// import { useState } from "react";
// import { Home, FileText, Info, Phone, LogIn } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   const [active, setActive] = useState("Home");

//   const menuItems = [
//     { name: "Home", path: "/", icon: Home },
//     { name: "About", path: "/about", icon: Info },
//     { name: "Contact", path: "/contact", icon: Phone },
//     { name: "Sign In", path: "/signin", icon: LogIn },
//   ];

//   return (
//     <div className="fixed right-0 top-[61.5px] bottom-0 w-20 bg-white border-l shadow-sm flex flex-col justify-between">
//       <div className="flex flex-col items-center pt-3">
//         {menuItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = active === item.name;
//           return (
//             <Link
//               key={item.name}
//               to={item.path}
//               onClick={() => setActive(item.name)}
//               className={`flex flex-col items-center w-full py-2 hover:bg-gray-100 text-[10px] ${
//                 isActive ? "text-blue-600 font-semibold" : "text-gray-600"
//               }`}
//             >
//               <div
//                 className={`flex items-center justify-center w-10 h-10 rounded-full mb-1 ${
//                   isActive ? "bg-blue-100" : ""
//                 }`}
//               >
//                 <Icon size={20} />
//               </div>
//               {item.name}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
 

import { useState } from "react";
import {
  BarChart3, FileText, Clock, Bookmark, Briefcase, Bell, 
  Sliders, Dices, Package, DollarSign
} from "lucide-react";
import { Link } from "react-router-dom"; 

export default function Sidebar() {
  const [active, setActive] = useState("Ideas Dashboard");

  const menuItems = [
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
    // Fixed right-0, bottom-0, and top-[88px] to clear the Navbar
    <div className="fixed right-0 top-[88px] bottom-0 w-20 bg-white border-l shadow-sm flex flex-col justify-between z-40"> 
      
      <div className="flex flex-col items-center pt-2"> 
        {/* Sign In Button */}
        {/* <Link to="/signin" className="w-full">
            <button className="flex flex-col items-center w-full py-1.5 text-blue-600 font-semibold text-[10px] hover:bg-gray-100">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full mb-0.5 bg-blue-100`}>
                    <DollarSign size={20} />
                </div>
                Sign In
            </button>
        </Link> */}

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active.startsWith(item.name.split(" ")[0]); 
          
          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex flex-col items-center w-full py-1.5 hover:bg-gray-100 text-[10px] ${
                isActive ? "text-yellow-600 font-semibold" : "text-gray-600"
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-6 rounded-full mb-1 ${
                  isActive ? "bg-yellow-100" : ""
                }`}
              >
                <Icon size={20} />
              </div>
              {item.name.split(" ")[0]} 
            </button>
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
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex flex-col items-center w-full py-1.5 hover:bg-gray-100 text-[10px] ${
                isActive ? "text-yellow-600 font-semibold" : "text-gray-600"
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full mb-0.5 ${
                  isActive ? "bg-yellow-100" : ""
                }`}
              >
                <Icon size={20} />
              </div>
              {item.name.split(" ")[0]}
            </button>
          );
        })}
      </div>
    </div>
  );
}