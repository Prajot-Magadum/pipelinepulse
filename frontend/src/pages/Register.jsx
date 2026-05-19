import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Register
  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");

    try {

      await API.post(
        "/auth/register",
        formData
      );

      // Redirect to login
      navigate("/");

    } catch (error) {

      console.log(error);

      setError(
        error.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-gray-800">
            PipelinePulse
          </h1>

          <p className="text-gray-500 mt-2">
            Create your DevOps account
          </p>

        </div>

        {/* Error */}
        {error && (

          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4">
            {error}
          </div>

        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Name */}
          <div>

            <label className="block text-gray-700 mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* Email */}
          <div>

            <label className="block text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* Password */}
          <div>

            <label className="block text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-lg font-semibold transition"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">

          Already have an account?{" "}

          <Link
            to="/"
            className="text-blue-600 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;