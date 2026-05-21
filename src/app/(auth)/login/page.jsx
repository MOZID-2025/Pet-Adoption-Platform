"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Better Auth Client
import { signIn } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    toast("Google login coming soon");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const loginData = Object.fromEntries(formData.entries());

    const { error } = await signIn.email({
      ...loginData,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      toast.error("Login failed");
      return;
    }

    toast.success("Login successful");

    router.push("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-cyan-500 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">Login to continue</p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <label>Email :</label>
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            // value={form.email}
            // onChange={handleChange}
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none transition"
          />

          {/* Password */}
          <label>Password :</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              // value={form.password}
              // onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none transition"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-3 rounded-xl border border-gray-300 flex items-center justify-center gap-3 hover:bg-gray-100 transition disabled:opacity-50"
        >
          <FcGoogle />
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
