import { MapPin, ShieldCheck, Heart, PawPrint } from "lucide-react";

import AdoptionForm from "@/components/AdoptionForm";

const fetchSinglePet = async (id) => {
  const res = await fetch(`${process.env.NEXT_CLIENT_API_URL}/pets/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();

  return data || {};
};

export default async function PetDetails({ params }) {
  const { id } = await params;

  const pet = await fetchSinglePet(id);

  return (
    <section className="py-24 bg-gradient-to-r from-[#FFF1F3] via-[#FDFDFD] to-[#F3FCFF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* SECTION TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-pink-100 shadow-sm mb-6">
            <PawPrint className="w-4 h-4 text-pink-500" />

            <p className="text-sm font-semibold text-slate-700">Pet Details</p>
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight text-[#07143B]">
            Meet Your New
            <span className="bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              Best Friend
            </span>
          </h2>
        </div>

        {/* 2 COLUMN */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-[35px] overflow-hidden">
            {/* IMAGE */}
            <div className="relative">
              <img
                src={pet?.image}
                alt={pet?.petName}
                className="w-full h-[280px] sm:h-[380px] lg:h-[420px] object-cover"
              />

              {/* STATUS */}
              <div className="absolute top-5 left-5 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-sm font-semibold shadow-lg">
                {pet?.adopted ? "Already Adopted" : "Available For Adoption"}
              </div>

              {/* LOVE BTN */}
              <button className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
                <Heart className="text-pink-500 w-5 h-5" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-8">
              {/* TOP */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-[#07143B]">
                    {pet?.petName}
                  </h2>

                  <p className="mt-2 text-lg md:text-xl text-slate-500 font-medium">
                    {pet?.breed}
                  </p>
                </div>

                {/* PRICE */}
                <div className="bg-gradient-to-r from-pink-50 to-cyan-50 border border-pink-100 rounded-3xl px-6 py-4 text-center shadow-sm">
                  <p className="text-sm text-slate-500 mb-1">Adoption Fee</p>

                  <h3 className="text-3xl font-black text-[#07143B]">
                    ${pet?.adoptionFee}
                  </h3>
                </div>
              </div>

              {/* INFO GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                {/* SPECIES */}
                <div className="bg-gradient-to-br from-pink-50 to-white border border-pink-100 rounded-3xl p-5">
                  <p className="text-sm text-slate-500 mb-2">Species</p>

                  <h4 className="text-xl font-bold text-[#07143B]">
                    {pet?.species}
                  </h4>
                </div>

                {/* AGE */}
                <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-3xl p-5">
                  <p className="text-sm text-slate-500 mb-2">Age</p>

                  <h4 className="text-xl font-bold text-[#07143B]">
                    {pet?.age}
                  </h4>
                </div>

                {/* GENDER */}
                <div className="bg-gradient-to-br from-violet-50 to-white border border-violet-100 rounded-3xl p-5">
                  <p className="text-sm text-slate-500 mb-2">Gender</p>

                  <h4 className="text-xl font-bold text-[#07143B]">
                    {pet?.gender}
                  </h4>
                </div>

                {/* LOCATION */}
                <div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-3xl p-5">
                  <p className="text-sm text-slate-500 mb-2">Location</p>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />

                    <h4 className="text-xl font-bold text-[#07143B]">
                      {pet?.location}
                    </h4>
                  </div>
                </div>

                {/* HEALTH */}
                <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-5">
                  <p className="text-sm text-slate-500 mb-2">Health Status</p>

                  <h4 className="text-xl font-bold text-emerald-600">
                    {pet?.healthStatus}
                  </h4>
                </div>

                {/* VACCINATION */}
                <div className="bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-3xl p-5">
                  <p className="text-sm text-slate-500 mb-2">Vaccination</p>

                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-cyan-500" />

                    <h4 className="text-xl font-bold text-[#07143B]">
                      {pet?.vaccinationStatus}
                    </h4>
                  </div>
                </div>
              </div>

              {/* OWNER */}
              <div className="mt-6 bg-slate-50 border border-slate-200 rounded-3xl p-5">
                <p className="text-sm text-slate-500 mb-2">Owner Contact</p>

                <h4 className="text-lg font-bold text-[#07143B] break-all">
                  {pet?.ownerEmail}
                </h4>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-10">
                <h3 className="text-3xl font-black text-[#07143B] mb-5">
                  About {pet?.petName}
                </h3>

                <p className="text-slate-600 leading-8 text-lg">
                  {pet?.description}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <AdoptionForm pet={pet} />
        </div>
      </div>
    </section>
  );
}
