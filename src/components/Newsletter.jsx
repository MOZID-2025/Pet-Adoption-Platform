"use client";

import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#07143B] via-[#0B1E56] to-[#102A72] overflow-hidden relative">
      {/* BLUR EFFECT */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 md:p-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-pink-400"></span>

            <p className="text-sm font-semibold text-white">Stay Connected</p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight text-white">
            Join Our Pet
            <span className="bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Loving Community
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            Get adoption updates, pet care tips, success stories, and latest
            pets directly to your inbox.
          </p>

          {/* INPUT */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-[420px] h-16 rounded-2xl px-6 bg-white text-slate-900 outline-none"
            />

            <button className="h-16 px-8 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-xl">
              Subscribe
              <Send className="w-5 h-5" />
            </button>
          </div>

          {/* BOTTOM TEXT */}
          <p className="mt-6 text-sm text-slate-400">
            No spam. Only pet adoption updates and useful resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
