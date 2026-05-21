"use client";

import Link from "next/link";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  PawPrint,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF6F3] via-[#FDFCFB] to-[#EEF9F8]">
      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/40 blur-3xl rounded-full"></div>

      {/* FLOATING ICONS */}
      <PawPrint className="absolute top-24 left-10 text-pink-200 w-16 h-16 rotate-12 hidden lg:block" />
      <Heart className="absolute bottom-24 left-1/4 text-pink-200 w-10 h-10 hidden lg:block" />
      <Sparkles className="absolute top-28 right-20 text-cyan-200 w-14 h-14 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-md border border-pink-100">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>

              <p className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                Trusted by 5,000+ pet lovers
              </p>
            </div>

            {/* TITLE */}
            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-slate-900">
                Find Your
                <br />
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Perfect Pet
                </span>
                <br />
                Best Friend
              </h1>

              <p className="text-lg md:text-xl leading-9 text-slate-600 max-w-xl">
                Discover adorable pets waiting for a loving home. Connect with
                trusted shelters and bring happiness into your life with a
                forever companion.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href={"/pets"}
                className="group inline-flex items-center gap-3 px-8 h-14 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
              >
                Adopt Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center gap-3 px-8 h-14 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition shadow-sm"
              >
                List a Pet
              </Link>
            </div>

            {/* FEATURES */}
            <div className="flex flex-wrap items-center gap-8 pt-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-emerald-500 w-5 h-5" />

                <span className="font-medium text-slate-600">
                  Verified Adoption
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Heart className="text-pink-500 w-5 h-5" />

                <span className="font-medium text-slate-600">Save a Life</span>
              </div>

              <div className="flex items-center gap-2">
                <PawPrint className="text-cyan-500 w-5 h-5" />

                <span className="font-medium text-slate-600">
                  Trusted Shelters
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center lg:justify-end">
            {/* MAIN CARD */}
            <div className="relative">
              {/* OUTER GLOW */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-cyan-400 blur-3xl opacity-20 rounded-[40px]"></div>

              {/* IMAGE CARD */}
              <div className="relative bg-white/70 backdrop-blur-xl p-5 rounded-[40px] shadow-2xl border border-white/50">
                <img
                  src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop"
                  alt="pet"
                  className="w-full max-w-md h-[500px] object-cover rounded-[30px]"
                />

                {/* TOP CARD */}
                <div className="absolute -top-6 -left-8 bg-white shadow-xl rounded-2xl px-5 py-4 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center">
                    <PawPrint className="text-white w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800">Bella</h4>

                    <p className="text-sm text-slate-500">Looking for a home</p>
                  </div>
                </div>

                {/* BOTTOM CARD */}
                <div className="absolute -bottom-6 -right-8 bg-white shadow-xl rounded-2xl px-5 py-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                      ❤️
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-800">2,500+</h4>

                      <p className="text-sm text-slate-500">
                        Successful Adoptions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
