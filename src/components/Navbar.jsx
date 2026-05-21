"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

import {
  Moon,
  LogIn,
  Menu,
  PawPrint,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Better Auth Session
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Pets", path: "/pets" },
  ];

  // Logout
  const handleLogout = async () => {
    try {
      await authClient.signOut();

      toast.success("Logged out successfully");

      router.push("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LEFT */}
          <div className="flex items-center gap-10">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center shadow-md">
                <PawPrint className="text-white w-5 h-5" />
              </div>

              <h1 className="text-3xl font-extrabold">
                <span className="text-pink-500">Pet</span>
                <span className="text-cyan-500">Nest</span>
              </h1>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    pathname === item.path
                      ? "bg-pink-50 text-pink-700"
                      : "text-slate-600 hover:bg-gray-100 hover:text-cyan-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* ICONS */}
            <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-gray-100 transition">
              <Moon size={20} />
            </button>

            {/* CONDITIONAL AUTH */}
            {user ? (
              <div className="dropdown dropdown-end">
                {/* PROFILE BUTTON */}
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-cyan-500 border-2 border-black rounded-full px-3 py-1.5 cursor-pointer transition-all duration-300"
                >
                  {/* IMAGE */}
                  <img
                    src={user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                    alt="user"
                    className="w-9 h-9 rounded-full object-cover border-2 border-white"
                  />

                  {/* NAME */}
                  <span className="font-bold text-sm text-black uppercase">
                    {user.name}
                  </span>

                  {/* ARROW */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* DROPDOWN */}
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[999] mt-3 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-0"
                >
                  {/* USER INFO */}
                  <div className="px-5 py-4 border-b bg-gray-50">
                    <h2 className="font-bold text-gray-800 uppercase">
                      {user.name}
                    </h2>

                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>

                  {/* DASHBOARD */}
                  <li>
                    <Link
                      href="/dashboard/my-request"
                      className="flex items-center gap-3 px-5 py-4 hover:bg-gray-100 text-gray-700"
                    >
                      <LayoutDashboard size={18} />
                      Dashboard
                    </Link>
                  </li>

                  {/* LOGOUT */}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-5 py-4 hover:bg-red-50 text-red-500"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                {/* LOGIN */}
                <Link
                  href="/login"
                  className="hidden md:flex items-center gap-2 font-semibold text-slate-800 hover:text-pink-600 transition"
                >
                  <LogIn size={18} />
                  Login
                </Link>

                {/* REGISTER */}
                <Link
                  href="/register"
                  className="hidden md:flex items-center justify-center px-6 h-11 rounded-full bg-gradient-to-r from-pink-500 to-cyan-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-md"
                >
                  Get Started
                </Link>
              </>
            )}

            {/* MOBILE MENU */}
            <div className="dropdown dropdown-end lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <Menu />
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow-xl bg-white rounded-2xl w-56 space-y-2"
              >
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`rounded-xl ${
                        pathname === item.path ? "bg-pink-50 text-pink-700" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                <div className="border-t my-2"></div>

                {user ? (
                  <>
                    <li>
                      <Link href="/dashboard">Dashboard</Link>
                    </li>

                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/login">Login</Link>
                    </li>

                    <li className="mt-2">
                      <Link
                        href="/register"
                        className="bg-gradient-to-r from-pink-500 to-cyan-700 text-white rounded-xl text-center"
                      >
                        Get Started
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
