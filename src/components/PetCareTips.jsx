"use client";

import { HeartPulse, Activity, Utensils, ShieldPlus } from "lucide-react";

const tips = [
  {
    title: "Healthy Nutrition",
    desc: "Balanced meals and clean water help pets stay active and healthy.",
    icon: <Utensils className="w-8 h-8 text-orange-500" />,
  },

  {
    title: "Daily Exercise",
    desc: "Regular walks and activities improve physical and mental health.",
    icon: <Activity className="w-8 h-8 text-cyan-500" />,
  },

  {
    title: "Routine Vet Care",
    desc: "Vaccinations and regular checkups ensure long-term wellbeing.",
    icon: <HeartPulse className="w-8 h-8 text-pink-500" />,
  },

  {
    title: "Safe Environment",
    desc: "Provide a secure and loving home environment for your pets.",
    icon: <ShieldPlus className="w-8 h-8 text-violet-500" />,
  },
];

const PetCareTips = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#FFF1F3] via-[#FDFDFD] to-[#F3FCFF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-pink-100 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>

            <p className="text-sm font-semibold text-slate-700">Care Guide</p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight text-[#07143B]">
            Essential
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Pet Care Tips
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Keep your pets healthy, safe, and happy with proper daily care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-[30px] p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                {tip.icon}
              </div>

              <h3 className="text-2xl font-black text-[#07143B] mb-4">
                {tip.title}
              </h3>

              <p className="text-slate-600 leading-8">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;
