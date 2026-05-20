"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

// Better Auth Client
import { authClient } from "@/lib/auth-client";

export default function Register() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // Password Validation
  const validatePassword = (password) => {
    const minLength = password.length >= 6;
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);

    return minLength && upper && lower;
  };

  // Handle Input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Register Submit
  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    // Validation
    if (!validatePassword(form.password)) {
      setError(
        "Password must be at least 6 characters and include uppercase & lowercase letters.",
      );

      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Password and Confirm Password do not match.");

      return;
    }

    try {
      setLoading(true);

      const { error } = await authClient.signUp.email({
        email: form.email,
        password: form.password,
        name: form.name,
        image: form.photo,
      });

      if (error) {
        toast.error(error.message || "Registration failed");
        setError(error.message);

        return;
      }

      toast.success("Account created successfully!");

      router.push("/login");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-cyan-500 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/30">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Welcome! Please create your account
        </p>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <label>Name :</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          {/* Email */}
          <label>Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* Photo URL */}
          <label>Photo URL :</label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={form.photo}
            onChange={handleChange}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
          />

          {/* Password */}
          <label>Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          {/* Confirm Password */}
          <label>Confirm Password :</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-purple-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
