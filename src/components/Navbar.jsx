"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Search, LogIn, Menu, PawPrint } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Pets", path: "/pets" },
  ];

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
                      ? "bg-teal-50 text-pink-700"
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

            <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full hover:bg-gray-100 transition">
              <Search size={20} />
            </button>

            {/* LOGIN */}
            <Link
              href="/login"
              className="hidden md:flex items-center gap-2 font-semibold text-slate-800 hover:text-pink-600 transition"
            >
              <LogIn size={18} />
              Login
            </Link>

            {/* BUTTON */}
            <Link
              href="/register"
              className="hidden md:flex items-center justify-center px-6 h-11 rounded-full bg-gradient-to-r from-pink-500 to-cyan-700 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-md"
            >
              Get Started
            </Link>

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
                        pathname === item.path ? "bg-teal-50 text-teal-700" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                <div className="border-t my-2"></div>

                <li>
                  <Link href="/login">Login</Link>
                </li>

                <li className="mt-2">
                  <Link
                    href="/register"
                    className="bg-gradient-to-r from-teal-500 to-emerald-700 text-white rounded-xl text-center"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
