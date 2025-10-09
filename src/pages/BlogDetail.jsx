// import { useParams } from "react-router-dom";
// import { blogs } from "../data/posts";

// export default function BlogDetail() {
//   const { id } = useParams();
//   const blog = blogs.find((b) => b.id === parseInt(id));

//   if (!blog) return <div className="p-6">Blog not found</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
//       <p className="text-gray-600 mb-2">By {blog.author} on {blog.date}</p>
//       <div className="mt-4 text-gray-800">{blog.content}</div>
//     </div>
//   );
// }
