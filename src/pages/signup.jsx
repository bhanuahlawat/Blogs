import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 

export default function SignUp() {
  const navigate = useNavigate();
  
  // State to manage form data for all inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  const [error, setError] = useState(null);

  // Handles changes to update state for any input field
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
    setError(null); 
  };

  // Handles form submission and simulates user registration
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Basic Validation Check (Ensure fields are not empty)
    if (!formData.username || !formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    // SIMULATED REGISTRATION SUCCESS
    // console.log("User Registration Successful!", formData);
    
    // In a real application, you would make an API call here.
    // Assuming the API call was successful:
    
    // Redirect the user to the home page after successful sign-up
    navigate('/'); 
    
    // You might also log the user in automatically here.
  };

  return (
    // Outer container: Full screen height, centered, with mobile padding
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 sm:p-8">
      
      {/* Sign Up Card (Responsive width) */}
      <div 
        className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-md border border-gray-100"
      >
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Create Your Account
        </h1>
        <p className="text-center text-gray-500 mb-8">
            Join the community and start blogging today!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Display Error Message */}
          {error && (
            <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg border border-red-300">
              {error}
            </div>
          )}

          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input 
              id="username"
              type="text" 
              placeholder="choose a username" 
              value={formData.username} 
              onChange={handleChange} 
              className="border border-gray-300 p-3 w-full rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out" 
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="your@email.com" 
              value={formData.email} 
              onChange={handleChange} 
              className="border border-gray-300 p-3 w-full rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out" 
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input 
              id="password"
              type="password" 
              placeholder="•••••••• (min 6 characters)" 
              value={formData.password} 
              onChange={handleChange} 
              className="border border-gray-300 p-3 w-full rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out" 
              required
              minLength={6}
            />
          </div>
          
          {/* Sign Up Button */}
          <button 
            type="submit"
            className="bg-green-600 text-white font-semibold tracking-wide px-4 py-3 rounded-lg w-full 
                       shadow-lg hover:bg-green-700 transition duration-200 ease-in-out transform hover:scale-[1.01]"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account? 
            <Link to="/signin" className="text-blue-600 hover:text-blue-800 font-medium ml-1 transition">
                Sign In
            </Link>
        </p>
      </div>
    </div>
  );
}