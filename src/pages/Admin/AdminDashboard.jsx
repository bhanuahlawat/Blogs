// // src/admin/AdminDashboard.jsx
// import { useState } from "react";
// import Sidebar from "./AdminSideBar";
// import ManagePosts from "./AdminManagePosts";
// import { posts } from "../../data/posts";


// export default function AdminDashboard() {
//   const [active, setActive] = useState("Dashboard");

//   // Import your posts array here

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar active={active} setActive={setActive} />

//       {/* Main Content */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         {active === "Dashboard" && (
//           <div>
//             <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>
//             <div className="p-4 grid grid-cols-3 gap-10">
//               <div className="bg-white p-4 rounded-lg shadow text-center">
//                 <h3 className="text-sm text-gray-500">Total Posts</h3>
//                 <p className="text-2xl font-bold">{posts.length}</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow text-center">
//                 <h3 className="text-sm text-gray-500">Total Likes</h3>
//                 <p className="text-2xl font-bold">
//                   {posts.reduce((sum, p) => sum + p.likes, 0)}
//                 </p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow text-center">
//                 <h3 className="text-sm text-gray-500">Comments</h3>
//                 <p className="text-2xl font-bold">
//                   {posts.reduce((sum, p) => sum + p.comments, 0)}
//                 </p>
//               </div>
//               {/* <div className="bg-white p-4 rounded-lg shadow text-center">
//                 <h3 className="text-sm text-gray-500">Retweets</h3>
//                 <p className="text-2xl font-bold">
//                   {posts.reduce((sum, p) => sum + p.retweets, 0)}
//                 </p>
//               </div> */}
//             </div>
//           </div>
//         )}

//         {active === "Manage Posts" && <ManagePosts posts={posts} />}
//       </div>
//     </div>
//   );
// }



// src/admin/AdminDashboard.jsx
import { useState } from "react";
import Sidebar from "./AdminSideBar";
import ManagePosts from "./AdminManagePosts";
import { posts as initialPosts } from "../../data/posts"; // rename to avoid conflict

export default function AdminDashboard() {
  const [active, setActive] = useState("Dashboard");

  // ✅ Use state to make posts dynamic
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar active={active} setActive={setActive} />

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {active === "Dashboard" && (
          <div>
            <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>
            <div className="p-4 grid grid-cols-3 gap-10">
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="text-sm text-gray-500">Total Posts</h3>
                <p className="text-2xl font-bold">{posts.length}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="text-sm text-gray-500">Total Likes</h3>
                <p className="text-2xl font-bold">
                  {posts.reduce((sum, p) => sum + p.likes, 0)}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow text-center">
                <h3 className="text-sm text-gray-500">Comments</h3>
                <p className="text-2xl font-bold">
                  {posts.reduce((sum, p) => sum + p.comments, 0)}
                </p>
              </div>
            </div>
          </div>
        )}

        {active === "Manage Posts" && (
          <ManagePosts posts={posts} setPosts={setPosts} /> // ✅ pass setPosts too
        )}
      </div>
    </div>
  );
}
