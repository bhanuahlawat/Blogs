import { useState } from "react";
import Sidebar from "./AdminSideBar";
import ManagePosts from "./AdminManagePosts";
import { posts as initialPosts } from "../../data/posts";
import AdminLogin from "./AdminLogin"; // import login component

export default function AdminDashboard() {
  const [active, setActive] = useState("Dashboard");
  const [posts, setPosts] = useState(initialPosts);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // login state

  if (!isLoggedIn) {
    // ✅ Show login if not logged in
    return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar active={active} setActive={setActive} />

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
          <ManagePosts posts={posts} setPosts={setPosts} />
        )}
      </div>
    </div>
  );
}


