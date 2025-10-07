// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   LayoutDashboard, Rss, Users, Settings, LogOut, PlusCircle, HomeIcon,
// } from "lucide-react";

// // --- DUMMY DATA ---
// const adminPosts = [
//   { id: 1, title: "V2 RETAIL: Target 50% revenue growth", category: "Finance", author: "Mangalam Maloo", date: "29 Sept 2025", status: "Published" },
//   { id: 2, title: "Near Term & Long Term Earning Triggers for Stallion India", category: "Analysis", author: "Tar ⚡", date: "15 Aug 2025", status: "Draft" },
//   { id: 3, title: "Why EMS Stocks Are Down", category: "Markets", author: "Soumeet Sarkar", date: "26 Sept 2025", status: "Published" },
//   { id: 4, title: "Elon Musk announces Tesla entering India", category: "Tech", author: "Tech Insider", date: "27 Sept 2025", status: "Published" },
//   { id: 5, title: "Money Heist Season 6 confirmed.", category: "Entertainment", author: "Netflix", date: "28 Sept 2025", status: "Archived" },
// ];

// const adminUsers = [
//   { id: 101, name: "Alice Johnson", email: "alice@blog.com", role: "Admin", status: "Active" },
//   { id: 102, name: "Bob Smith", email: "bob@blog.com", role: "Author", status: "Active" },
//   { id: 103, name: "Charlie Day", email: "charlie@blog.com", role: "Subscriber", status: "Pending" },
// ];

// // --- SUB COMPONENTS (Views) ---

// const StatCard = ({ title, value, icon, color, bg }) => (
//   <div className="bg-white p-5 rounded-xl shadow-lg flex items-center justify-between transition hover:shadow-xl border-t-4 border-blue-500">
//     <div>
//       <p className="text-sm font-medium text-gray-500">{title}</p>
//       <p className="text-3xl font-extrabold text-gray-900 mt-1">{value}</p>
//     </div>
//     <div className={`p-3 rounded-full ${bg} ${color}`}>
//       {icon}
//     </div>
//   </div>
// );

// const DashboardView = () => (
//   <div className="p-4 sm:p-6">
//     <h3 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h3>
    
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <StatCard title="Total Posts" value="452" icon={<Rss size={24} />} color="text-blue-500" bg="bg-blue-100" />
//       <StatCard title="New Users" value="24" icon={<Users size={24} />} color="text-green-500" bg="bg-green-100" />
//       <StatCard title="Drafts" value="12" icon={<Settings size={24} />} color="text-yellow-500" bg="bg-yellow-100" />
//     </div>

//     <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-100">
//       <h4 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h4>
//       <div className="flex flex-col sm:flex-row gap-4">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//           <div className="flex items-center space-x-2"><PlusCircle size={18} /><span>New Post</span></div>
//         </button>
//         <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
//           Manage Comments
//         </button>
//       </div>
//     </div>
//   </div>
// );

// const PostManager = () => (
//   <div className="p-4 sm:p-6">
//     <h3 className="text-2xl font-bold mb-6 text-gray-800">Manage Posts</h3>
//     <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             {["Title", "Author", "Category", "Status", "Actions"].map(header => (
//               <th key={header} className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 {header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {adminPosts.map(post => (
//             <tr key={post.id} className="hover:bg-gray-50 transition duration-150">
//               <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-w-xs truncate">{post.title}</td>
//               <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.author}</td>
//               <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">{post.category}</td>
//               <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
//                 <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                   post.status === 'Published' ? 'bg-green-100 text-green-800' : 
//                   post.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
//                 }`}>
//                   {post.status}
//                 </span>
//               </td>
//               <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
//                 <button className="text-blue-600 hover:text-blue-900 text-xs sm:text-sm mr-2">Edit</button>
//                 <button className="text-red-600 hover:text-red-900 text-xs sm:text-sm">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );

// const UserManager = () => (
//   <div className="p-4 sm:p-6">
//     <h3 className="text-2xl font-bold mb-6 text-gray-800">Manage Users</h3>
//     <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             {["Name", "Email", "Role", "Status", "Actions"].map(header => (
//               <th key={header} className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 {header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-200">
//           {adminUsers.map(user => (
//             <tr key={user.id} className="hover:bg-gray-50 transition duration-150">
//               <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
//               <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{user.email}</td>
//               <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
//               <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
//                 <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                   user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
//                 }`}>
//                   {user.status}
//                 </span>
//               </td>
//               <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
//                 <button className="text-blue-600 hover:text-blue-900 text-xs sm:text-sm mr-2">Edit</button>
//                 <button className="text-red-600 hover:text-red-900 text-xs sm:text-sm">Ban</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );

// // --- MAIN ADMIN PANEL COMPONENT ---

// export default function AdminPanel() {
//   const navigate = useNavigate();
//   const [currentView, setCurrentView] = useState("Dashboard");
  
//   const menu = [
//     { name: "Dashboard", icon: LayoutDashboard, component: DashboardView },
//     { name: "Posts", icon: Rss, component: PostManager },
//     { name: "Users", icon: Users, component: UserManager },
//     { name: "Settings", icon: Settings, component: () => <div className="p-8 text-gray-700">Settings Page Content...</div> },
//   ];

//   // Get the current component to render
//   const CurrentComponent = menu.find(item => item.name === currentView)?.component || DashboardView;

//   // 🛑 NOTE: In a real application, this should be handled by your global authentication state.
//   const isAdmin = true; 
//   if (!isAdmin) {
//     // If user is not admin, redirect them away (e.g., to sign in)
//     navigate('/signin');
//     return null;
//   }

//   return (
//     <div className="flex h-screen bg-gray-100">
      
//       {/* 1. Admin Sidebar */}
//       {/* The sidebar is fixed and full height on desktop */}
//       <aside 
//         className="hidden md:flex flex-col flex-shrink-0 w-64 bg-gray-800 text-white shadow-xl"
//       >
//         <div className="p-4 border-b border-gray-700">
//           <h2 className="text-2xl font-bold">Admin Portal</h2>
//         </div>
        
//         <nav className="flex flex-col p-4 space-y-2 flex-grow overflow-y-auto">
//           {menu.map(item => (
//             <button
//               key={item.name}
//               onClick={() => setCurrentView(item.name)}
//               className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition duration-150 
//                 ${currentView === item.name ? 'bg-blue-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
//               }
//             >
//               <item.icon size={20} />
//               <span className="font-medium">{item.name}</span>
//             </button>
//           ))}
          
//           <div className="mt-auto pt-2 border-t border-gray-700">
//              {/* Link back to the main site */}
//             <Link 
//               to="/" 
//               className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150"
//             >
//               <HomeIcon size={20} />
//               <span className="font-medium">Back to Site</span>
//             </Link>
            
//              {/* Simulated Log Out */}
//             <button 
//               onClick={() => navigate('/')} 
//               className="flex items-center space-x-3 px-4 py-2 rounded-lg text-red-400 hover:bg-gray-700 transition duration-150 w-full text-left"
//             >
//               <LogOut size={20} />
//               <span className="font-medium">Log Out</span>
//             </button>
//           </div>
//         </nav>
//       </aside>

//       {/* 2. Main Content Area */}
//       <main className="flex-1 overflow-y-auto overflow-x-hidden">
//         {/* Header with Title */}
//         <header className="p-4 sm:p-6 bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
//             <h1 className="text-3xl font-bold text-gray-800">{currentView}</h1>
//         </header>

//         {/* Render the current view component */}
//         <CurrentComponent />
//       </main>
      
//       {/* 3. Mobile Navigation (Hidden on MD+) */}
//       {/* A simple bar at the bottom for navigation on phones */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 flex justify-around md:hidden">
//           {menu.map(item => (
//             <button
//               key={item.name}
//               onClick={() => setCurrentView(item.name)}
//               className={`flex flex-col items-center p-2 text-xs transition duration-150 
//                 ${currentView === item.name ? 'text-blue-600 border-t-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`
//               }
//             >
//               <item.icon size={18} />
//               <span className="mt-1">{item.name.split(" ")[0]}</span>
//             </button>
//           ))}
//           <button 
//               onClick={() => navigate('/Home')} 
//               className="flex flex-col items-center p-2 text-xs text-red-500 hover:text-red-700 transition duration-150"
//           >
//               <LogOut size={18} />
//               <span className="mt-1">Logout</span>
//           </button>
//       </div>

//     </div>
//   );
// }




import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Rss, Users, Settings, LogOut, PlusCircle, HomeIcon,
} from "lucide-react";

// --- DUMMY DATA ---
const adminPosts = [
  { id: 1, title: "V2 RETAIL: Target 50% revenue growth", category: "Finance", author: "Mangalam Maloo", date: "29 Sept 2025", status: "Published" },
  { id: 2, title: "Near Term & Long Term Earning Triggers for Stallion India", category: "Analysis", author: "Tar ⚡", date: "15 Aug 2025", status: "Draft" },
  { id: 3, title: "Why EMS Stocks Are Down", category: "Markets", author: "Soumeet Sarkar", date: "26 Sept 2025", status: "Published" },
  { id: 4, title: "Elon Musk announces Tesla entering India", category: "Tech", author: "Tech Insider", date: "27 Sept 2025", status: "Published" },
  { id: 5, title: "Money Heist Season 6 confirmed.", category: "Entertainment", author: "Netflix", date: "28 Sept 2025", status: "Archived" },
];

const adminUsers = [
  { id: 101, name: "Alice Johnson", email: "alice@blog.com", role: "Admin", status: "Active" },
  { id: 102, name: "Bob Smith", email: "bob@blog.com", role: "Author", status: "Active" },
  { id: 103, name: "Charlie Day", email: "charlie@blog.com", role: "Subscriber", status: "Pending" },
];

// --- SUB COMPONENTS (Views) ---

const StatCard = ({ title, value, icon, color, bg }) => (
  <div className="bg-white p-5 rounded-xl shadow-lg flex items-center justify-between transition hover:shadow-xl border-t-4 border-blue-500">
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-3xl font-extrabold text-gray-900 mt-1">{value}</p>
    </div>
    <div className={`p-3 rounded-full ${bg} ${color}`}>
      {icon}
    </div>
  </div>
);

const DashboardView = () => (
  <div className="p-4 sm:p-6">
    <h3 className="text-2xl font-bold mb-6 text-gray-800">Admin Dashboard</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard title="Total Posts" value="452" icon={<Rss size={24} />} color="text-blue-500" bg="bg-blue-100" />
      <StatCard title="New Users" value="24" icon={<Users size={24} />} color="text-green-500" bg="bg-green-100" />
      <StatCard title="Drafts" value="12" icon={<Settings size={24} />} color="text-yellow-500" bg="bg-yellow-100" />
    </div>

    <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h4 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h4>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <div className="flex items-center space-x-2"><PlusCircle size={18} /><span>New Post</span></div>
        </button>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
          Manage Comments
        </button>
      </div>
    </div>
  </div>
);

const PostManager = () => (
  <div className="p-4 sm:p-6">
    <h3 className="text-2xl font-bold mb-6 text-gray-800">Manage Posts</h3>
    <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {["Title", "Author", "Category", "Status", "Actions"].map(header => (
              <th key={header} className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {adminPosts.map(post => (
            <tr key={post.id} className="hover:bg-gray-50 transition duration-150">
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 max-w-xs truncate">{post.title}</td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{post.author}</td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">{post.category}</td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  post.status === 'Published' ? 'bg-green-100 text-green-800' : 
                  post.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {post.status}
                </span>
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900 text-xs sm:text-sm mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900 text-xs sm:text-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const UserManager = () => (
  <div className="p-4 sm:p-6">
    <h3 className="text-2xl font-bold mb-6 text-gray-800">Manage Users</h3>
    <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {["Name", "Email", "Role", "Status", "Actions"].map(header => (
              <th key={header} className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {adminUsers.map(user => (
            <tr key={user.id} className="hover:bg-gray-50 transition duration-150">
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{user.email}</td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {user.status}
                </span>
              </td>
              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900 text-xs sm:text-sm mr-2">Edit</button>
                <button className="text-red-600 hover:text-red-900 text-xs sm:text-sm">Ban</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- MAIN ADMIN PANEL COMPONENT ---

export default function AdminPanel() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("Dashboard");
  
  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, component: DashboardView },
    { name: "Posts", icon: Rss, component: PostManager },
    { name: "Users", icon: Users, component: UserManager },
    { name: "Settings", icon: Settings, component: () => <div className="p-8 text-gray-700">Settings Page Content...</div> },
  ];

  // Get the current component to render
  const CurrentComponent = menu.find(item => item.name === currentView)?.component || DashboardView;

  // 🛑 NOTE: In a real application, this should be handled by your global authentication state.
  const isAdmin = true; 
  if (!isAdmin) {
    // If user is not admin, redirect them away (e.g., to sign in)
    navigate('/signin');
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* 1. Admin Sidebar (Desktop) */}
      <aside 
        className="hidden md:flex flex-col flex-shrink-0 w-64 bg-gray-800 text-white shadow-xl"
      >
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-2xl font-bold">Admin Portal</h2>
        </div>
        
        <nav className="flex flex-col p-4 space-y-2 flex-grow overflow-y-auto">
          {menu.map(item => (
            <button
              key={item.name}
              onClick={() => setCurrentView(item.name)}
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition duration-150 
                ${currentView === item.name ? 'bg-blue-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
              }
            >
              <item.icon size={20} />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
          
          <div className="mt-auto pt-2 border-t border-gray-700">
             {/* Link back to the main site */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition duration-150"
            >
              <HomeIcon size={20} />
              <span className="font-medium">Back to Site</span>
            </Link>
            
             {/* Simulated Log Out - Redirects to /signin */}
            <button 
              onClick={() => navigate('/signin')} 
              className="flex items-center space-x-3 px-4 py-2 rounded-lg text-red-400 hover:bg-gray-700 transition duration-150 w-full text-left"
            >
              <LogOut size={20} />
              <span className="font-medium">Log Out</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        {/* Header with Title */}
        <header className="p-4 sm:p-6 bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
            <h1 className="text-3xl font-bold text-gray-800">{currentView}</h1>
        </header>

        {/* Render the current view component */}
        <CurrentComponent />
      </main>
      
      {/* 3. Mobile Navigation (Bottom Bar) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 flex justify-around md:hidden">
          {menu.map(item => (
            <button
              key={item.name}
              onClick={() => setCurrentView(item.name)}
              className={`flex flex-col items-center p-2 text-xs transition duration-150 
                ${currentView === item.name ? 'text-blue-600 border-t-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`
              }
            >
              <item.icon size={18} />
              <span className="mt-1">{item.name.split(" ")[0]}</span>
            </button>
          ))}
          <button 
              // Mobile logout redirects to /signin
              onClick={() => navigate('/signin')} 
              className="flex flex-col items-center p-2 text-xs text-red-500 hover:text-red-700 transition duration-150"
          >
              <LogOut size={18} />
              <span className="mt-1">Logout</span>
          </button>
      </div>

    </div>
  );
}
