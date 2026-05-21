import Link from "next/link";
import { Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-cyan-500 px-4">
      <div className="max-w-xl w-full bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 text-center border border-white/20">
        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center shadow-lg">
            <SearchX className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
          404
        </h1>

        {/* TITLE */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white">
          Oops! Page Not Found
        </h2>

        {/* MESSAGE */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* BUTTON */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-cyan-600 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
