// import { BarChart3, FileText, Settings, Users, LogOut } from "lucide-react";
// import { useState } from "react";
// import { Navigate } from "react-router-dom";

// export default function Sidebar({ active, setActive }) {
//   //  List of menu options (each has a name and an icon)
//   const menuItems = [
//     { name: "Dashboard", icon: BarChart3 },
//     { name: "Manage Posts", icon: FileText },
//     // { name: "Users", icon: Users },
//     // { name: "Settings", icon: Settings },
//   ];

//   return (
//     <div className="h-screen w-60 bg-gray-900 text-gray-200 flex flex-col p-4 ">
//       {/*  Sidebar Title */}
//       <h1 className="text-2xl font-bold text-white mb-8 pt-5">Admin Panel</h1>

//       {/*  Menu List */}
//       <ul className="flex-1 space-y-2">
//         {menuItems.map((item) => {
//           // Extract icon component for each item
//           const Icon = item.icon;

//           return (
//             <li
//               key={item.name} // unique key
//               onClick={() => setActive(item.name)}
//               className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition 
//                 hover:bg-gray-800 
//                 ${active === item.name ? "bg-gray-800 text-white" : "text-gray-400"}
//               `}
//             >
//               <Icon className="w-5 h-5" />
//               <span>{item.name}</span>
//             </li>
//           );
//         })}
//       </ul>

//       {/* Logout Button */}
//       <button 
//       onClick={()=>navigate('/')}
//       className="flex items-center space-x-2 p-2  text-red-400 hover:text-red-500">
//         <LogOut className="w-5 h-5" />
//         <span>Logout</span>
//       </button>
//     </div>
//   );
// }



import { BarChart3, FileText, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Import hook
import { useState } from "react";

export default function Sidebar({ active, setActive }) {
  const navigate = useNavigate(); // ✅ Initialize inside component

  const menuItems = [
    { name: "Dashboard", icon: BarChart3 },
    { name: "Manage Posts", icon: FileText },
  ];

  const handleLogout = () => {
    // Here you can also clear any auth tokens if needed
    navigate("/"); // ✅ Navigate to home page
  };

  return (
    <div className="h-screen w-60 bg-gray-900 text-gray-200 flex flex-col p-4">
      <h1 className="text-2xl font-bold text-white mb-8 pt-5">Admin Panel</h1>

      <ul className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition 
                hover:bg-gray-800 
                ${active === item.name ? "bg-gray-800 text-white" : "text-gray-400"}
              `}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>

      <button
        onClick={handleLogout} // ✅ Correctly defined
        className="flex items-center space-x-2 p-2 text-red-400 hover:text-red-500"
      >
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}
