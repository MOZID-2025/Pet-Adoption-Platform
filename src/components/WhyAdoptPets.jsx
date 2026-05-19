"use client";

import { HeartHandshake, Home, ShieldCheck, Smile } from "lucide-react";

const features = [
  {
    title: "Save Precious Lives",
    description: "Every adoption gives homeless pets a safe and loving future.",
    icon: <HeartHandshake className="w-8 h-8 text-pink-500" />,
  },

  {
    title: "Bring Happiness Home",
    description:
      "Pets create emotional bonds and unforgettable family moments.",
    icon: <Home className="w-8 h-8 text-cyan-500" />,
  },

  {
    title: "Trusted & Safe Adoption",
    description: "All listed pets are verified with proper health information.",
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
  },

  {
    title: "Improve Mental Wellness",
    description:
      "Pets reduce stress, loneliness, and improve emotional wellbeing.",
    icon: <Smile className="w-8 h-8 text-violet-500" />,
  },
];

const WhyAdoptPets = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#FFF1F3] via-[#FDFDFD] to-[#F3FCFF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-pink-100 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>

            <p className="text-sm font-semibold text-slate-700">
              Why Choose Adoption
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight text-[#07143B]">
            Why People
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Love Adopting Pets
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Adoption creates life-changing bonds while helping pets find caring
            forever families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-[30px] p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black text-[#07143B] mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-8">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdoptPets;
