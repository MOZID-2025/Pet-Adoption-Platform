import Link from "next/link";
import { ArrowRight, PawPrint } from "lucide-react";
import PetCard from "./PetCard";
import { fetchPets } from "@/lib/pets/data";

const FeaturedPets = async () => {
  const pets = await fetchPets();

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#FFF8F5] via-[#FDFDFD] to-[#EEF9FF]">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-pink-100 shadow-sm mb-6">
            <PawPrint className="w-4 h-4 text-pink-500" />

            <span className="text-sm font-semibold text-slate-700">
              Featured Pets
            </span>
          </div>

          <h2 className="text-5xl font-black leading-tight text-slate-900">
            Meet Your New
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Best Friend
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Browse adorable pets ready for adoption and bring unconditional love
            into your life today.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {pets?.map((pet) => (
            <PetCard key={pet._id} pet={pet}></PetCard>
          ))}
        </div>

        {/* BOTTOM BUTTON */}
        <div className="flex justify-center mt-16">
          <Link
            href="/all-pets"
            className="px-8 h-14 rounded-full border border-slate-200 bg-white text-slate-800 font-semibold flex items-center gap-3 hover:bg-slate-50 transition shadow-md"
          >
            Explore All Pets
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
