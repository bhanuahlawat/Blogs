export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-xl font-bold mb-4">Sign In</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Email" className="border p-2 w-full rounded" />
          <input type="password" placeholder="Password" className="border p-2 w-full rounded" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Sign In</button>
        </form>
      </div>
    </div>
  );
}
