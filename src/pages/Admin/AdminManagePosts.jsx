import { useState } from "react";
import { X } from "lucide-react";

export default function ManagePosts({ posts, setPosts }) {
  const [showModal, setShowModal] = useState(false);
  const [newPost, setNewPost] = useState({
    user: "",
    handle: "",
    text: "",
    caption: "",
    category: "",
    tag: "",
    date: "",
    likes: 0,
    comments: 0,
    retweets: 0,
    image: "",
  });
  const [editPostId, setEditPostId] = useState(null);

  const [categories, setCategories] = useState([
    "Sports",
    "Tech",
    "Entertainment",
    "Lifestyle",
    "News",
    "Education",
    "Art",
  ]);
  const [newCategory, setNewCategory] = useState("");

  // Add or Update Post
  const handleAddOrEditPost = (e) => {
    e.preventDefault();
    if (!newPost.text || !newPost.category) {
      alert("Please fill post text and select category");
      return;
    }

    if (editPostId) {
      setPosts(posts.map(p => p.id === editPostId ? { ...p, ...newPost } : p));
      setEditPostId(null);
    } else {
      const newPostData = { id: Date.now(), ...newPost };
      setPosts([...posts, newPostData]);
    }

    setShowModal(false);
    setNewPost({
      user: "",
      handle: "",
      text: "",
      caption: "",
      category: "",
      tag: "",
      date: "",
      likes: 0,
      comments: 0,
      retweets: 0,
      image: "",
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const handleEdit = (post) => {
    setNewPost(post);
    setEditPostId(post.id);
    setShowModal(true);
  };

  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    if (trimmed && !categories.includes(trimmed)) {
      setCategories([...categories, trimmed]);
      setNewCategory("");
      alert(`Category "${trimmed}" added!`);
    }
  };

  return (
    <div className="p-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Manage Posts</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            + New Post
          </button>

          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="New category"
              className="border p-2 rounded"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            />
            <button
              onClick={handleAddCategory}
              className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition"
            >
              + New Category
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left py-2 px-4">Title</th>
            <th className="text-left py-2 px-4">Category</th>
            <th className="text-left py-2 px-4">Date</th>
            <th className="text-left py-2 px-4">Likes</th>
            <th className="text-left py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-t hover:bg-gray-50 transition text-sm">
              <td className="py-2 px-4 font-medium">{post.text.slice(0, 40)}...</td>
              <td className="py-2 px-4">{post.category}</td>
              <td className="py-2 px-4">{post.date}</td>
              <td className="py-2 px-4">{post.likes}</td>
              <td className="py-2 px-4 space-x-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6 relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-lg font-semibold mb-4 text-center">
              {editPostId ? "Edit Post" : "Add New Post"}
            </h3>

            <form onSubmit={handleAddOrEditPost} className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
              {/* User & Handle */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="User"
                  className="border p-2 rounded"
                  value={newPost.user}
                  onChange={(e) => setNewPost({ ...newPost, user: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Handle (e.g. @user)"
                  className="border p-2 rounded"
                  value={newPost.handle}
                  onChange={(e) => setNewPost({ ...newPost, handle: e.target.value })}
                />
              </div>

              {/* Text & Caption */}
              <textarea
                placeholder="Post text..."
                className="w-full border p-2 rounded min-h-[80px]"
                value={newPost.text}
                onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
              />
              <input
                type="text"
                placeholder="Caption"
                className="w-full border p-2 rounded"
                value={newPost.caption}
                onChange={(e) => setNewPost({ ...newPost, caption: e.target.value })}
              />

              {/* Category Dropdown */}
              <select
                className="border p-2 rounded w-full"
                value={newPost.category}
                onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              {/* Tag */}
              <input
                type="text"
                placeholder="Tag"
                className="border p-2 rounded w-full"
                value={newPost.tag}
                onChange={(e) => setNewPost({ ...newPost, tag: e.target.value })}
              />

              {/* Date Picker */}
              <input
                type="date"
                className="w-full border p-2 rounded"
                value={newPost.date}
                onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
              />

              {/* Numbers */}
              <div className="grid grid-cols-3 gap-3">
                <input
                  type="number"
                  placeholder="Likes"
                  className="border p-2 rounded"
                  value={newPost.likes}
                  onChange={(e) => setNewPost({ ...newPost, likes: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Comments"
                  className="border p-2 rounded"
                  value={newPost.comments}
                  onChange={(e) => setNewPost({ ...newPost, comments: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Retweets"
                  className="border p-2 rounded"
                  value={newPost.retweets}
                  onChange={(e) => setNewPost({ ...newPost, retweets: e.target.value })}
                />
              </div>

              {/* Image URL */}
              <input
                type="text"
                placeholder="Image URL"
                className="w-full border p-2 rounded"
                value={newPost.image}
                onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
              />

              {/* Buttons */}
              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                  {editPostId ? "Update Post" : "Add Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

