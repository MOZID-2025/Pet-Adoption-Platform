"use client";

import { Star } from "lucide-react";

const stories = [
  {
    name: "Sarah Ahmed",
    pet: "Bella",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    story:
      "Bella brought joy and positivity into our family. She became our best companion within days.",
  },

  {
    name: "Tanvir Hasan",
    pet: "Max",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    story:
      "The adoption process was smooth and professional. Max completely changed my daily life.",
  },

  {
    name: "Nusrat Jahan",
    pet: "Luna",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    story:
      "Luna gave our home warmth and happiness. I can't imagine life without her anymore.",
  },
];

const SuccessStories = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#FFF1F3] via-[#FDFDFD] to-[#F3FCFF]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-pink-100 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-pink-500"></span>

            <p className="text-sm font-semibold text-slate-700">
              Happy Families
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight text-[#07143B]">
            Real Adoption
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Success Stories
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Hear from loving families who found their perfect companions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-[30px] p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="text-xl font-black text-[#07143B]">
                    {story.name}
                  </h3>

                  <p className="text-slate-500">Adopted {story.pet}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-8">“{story.story}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
