import {
  ArrowRight,
  Heart,
  MapPin,
  PawPrint,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div className="group relative">
      {/* CARD GLOW */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${pet.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-[32px] transition-all duration-500`}
      ></div>

      {/* CARD */}
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500">
        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
          />

          {/* TOP BADGES */}
          <div className="absolute top-5 left-5">
            <div
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${pet.color} text-white text-sm font-semibold shadow-lg`}
            >
              Available
            </div>
          </div>

          {/* HEART */}
          <button className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:scale-110 transition shadow-lg">
            <Heart className="w-5 h-5 text-pink-500" />
          </button>

          {/* FLOATING PRICE */}
          <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg">
            <p className="text-xs text-slate-500">Adoption Fee</p>

            <h4 className="text-lg font-black text-slate-900">{pet.fee}</h4>
          </div>
        </div>

        {/* CONTENT */}

        <div className="p-6 space-y-6">
          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {pet.petName}
                </h3>

                {pet.adopted ? (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-600">
                    Adopted
                  </span>
                ) : (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-600">
                    Available
                  </span>
                )}
              </div>

              <p className="text-slate-500 font-medium mt-1">
                {pet.species} • {pet.breed}
              </p>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-7 h-7 text-emerald-500" />
            </div>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 mb-1">
                <PawPrint className="w-4 h-4 text-cyan-500" />
                <p className="text-xs font-semibold text-slate-500 uppercase">
                  Age
                </p>
              </div>

              <p className="font-bold text-slate-800">{pet.age}</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="flex items-center gap-2 mb-1">
                <User className="w-4 h-4 text-pink-500" />
                <p className="text-xs font-semibold text-slate-500 uppercase">
                  Gender
                </p>
              </div>

              <p className="font-bold text-slate-800">{pet.gender}</p>
            </div>
          </div>

          {/* LOCATION + PRICE */}
          <div className="flex items-center justify-between bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-slate-700">
              <MapPin className="w-5 h-5 text-pink-500" />
              <span className="font-semibold">{pet.location}</span>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-500">Adoption Fee</p>

              <h4 className="text-2xl font-extrabold text-emerald-600">
                ${pet.adoptionFee}
              </h4>
            </div>
          </div>

          {/* BUTTON */}
          <div className="grid grid-cols-2 gap-4">
            {/* VIEW DETAILS BUTTON */}
            <Link
              href={`/pets/${pet._id}`}
              className={`group h-14 rounded-2xl bg-gradient-to-r ${pet.color} flex items-center justify-center gap-3 font-bold shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300`}
            >
              View Details
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* ADOPT NOW BUTTON */}
            <Link
              href={`/pets/${pet._id}`}
              className={`group h-14 rounded-2xl bg-gradient-to-r ${pet.color} flex items-center justify-center gap-3 font-bold shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-300`}
            >
              Adopt Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
