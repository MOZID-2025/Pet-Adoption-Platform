"use client";

import Link from "next/link";

import { BiLogoFacebookCircle } from "react-icons/bi";

import { Mail, Phone, MapPin, PawPrint } from "lucide-react";
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <PawPrint className="text-white w-6 h-6" />
              </div>

              <h2 className="text-3xl font-black">
                <span className="text-pink-500">Pet</span>
                <span className="text-cyan-500">Nest</span>
              </h2>
            </Link>

            <p className="text-slate-300 leading-8">
              Helping pets find loving homes and connecting families with
              trusted adoption centers around the world.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-teal-500 transition-all duration-300 flex items-center justify-center"
              >
                <BiLogoFacebookCircle size={18} />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-pink-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagramSquare size={18} />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaTwitterSquare size={18} />
              </Link>

              <Link
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedin size={18} />
              </Link>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>

            <ul className="space-y-4 text-slate-300">
              <li>
                <Link href="/" className="hover:text-teal-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/all-pets"
                  className="hover:text-teal-400 transition"
                >
                  All Pets
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/add-pet"
                  className="hover:text-teal-400 transition"
                >
                  Add Pet
                </Link>
              </li>

              <li>
                <Link
                  href="/dashboard/my-requests"
                  className="hover:text-teal-400 transition"
                >
                  My Requests
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Resources</h3>

            <ul className="space-y-4 text-slate-300">
              <li>
                <Link href="#" className="hover:text-pink-400 transition">
                  Pet Care Tips
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-pink-400 transition">
                  Adoption Guide
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-pink-400 transition">
                  Success Stories
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-pink-400 transition">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>

            <div className="space-y-5 text-slate-300">
              <div className="flex items-start gap-4">
                <MapPin className="text-teal-400 mt-1" size={20} />

                <p>123 Pet Street, Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-pink-400" size={20} />

                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" size={20} />

                <p>support@petnest.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center md:text-left">
            © {new Date().getFullYear()} PetNest. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-slate-400">
            <Link href="#" className="hover:text-teal-400 transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-teal-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
