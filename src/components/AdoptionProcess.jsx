"use client";

import { Search, FileCheck, HeartHandshake, Home } from "lucide-react";

const steps = [
  {
    title: "Browse Pets",
    description:
      "Explore verified pets available for adoption near your location.",
    icon: <Search className="w-8 h-8 text-cyan-500" />,
  },

  {
    title: "Submit Request",
    description:
      "Send adoption requests easily with your preferred pickup date.",
    icon: <FileCheck className="w-8 h-8 text-violet-500" />,
  },

  {
    title: "Get Approved",
    description:
      "Pet owners review requests and approve the best match carefully.",
    icon: <HeartHandshake className="w-8 h-8 text-pink-500" />,
  },

  {
    title: "Take Home",
    description: "Welcome your new furry companion into your loving family.",
    icon: <Home className="w-8 h-8 text-emerald-500" />,
  },
];

const AdoptionProcess = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#FFF1F3] via-[#FDFDFD] to-[#F3FCFF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-pink-100 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>

            <p className="text-sm font-semibold text-slate-700">Simple Steps</p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight text-[#07143B]">
            Easy
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Adoption Process
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Adopting your dream pet is simple, safe, and takes only a few steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-[30px] p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400">
                {index + 1}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-black text-[#07143B] mb-4">
                {step.title}
              </h3>

              <p className="text-slate-600 leading-8">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdoptionProcess;
