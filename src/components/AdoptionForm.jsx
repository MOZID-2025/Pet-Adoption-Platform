"use client";

import { useState } from "react";
import { CalendarDays, PawPrint, CheckCircle2 } from "lucide-react";
import { toast } from "react-hot-toast";

const AdoptionForm = ({ pet }) => {
  const [pickupDate, setPickupDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const adoptionData = {
      petId: pet?._id,
      petName: pet?.petName,
      userName: "John Doe",
      userEmail: "john@example.com",
      pickupDate,
      message,
      status: "pending",
    };

    console.log(adoptionData);

    toast.success("Adoption Request Submitted");

    // HIDE FORM
    setSubmitted(true);
  };

  // SUCCESS UI
  if (submitted) {
    return (
      <div className="bg-[#07132F] text-white rounded-[35px] p-10 shadow-2xl flex flex-col items-center justify-center text-center min-h-[550px]">
        {/* ICON */}
        <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-400/20">
          <CheckCircle2 className="w-14 h-14 text-emerald-400" />
        </div>

        {/* TITLE */}
        <h2 className="text-4xl font-black mb-5">Request Submitted!</h2>

        {/* TEXT */}
        <p className="text-slate-300 leading-8 max-w-md text-lg">
          Your adoption request for
          <span className="text-cyan-400 font-bold"> {pet?.petName}</span> has
          been sent successfully. You can track the request status in your
          dashboard.
        </p>

        {/* BUTTON */}
        <button className="mt-10 px-8 h-14 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 text-white font-bold shadow-lg hover:scale-105 transition-all duration-300">
          View My Requests
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl rounded-[35px] p-8 sticky top-28">
      {/* HEADER */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-pink-100 shadow-sm mb-5">
          <PawPrint className="w-4 h-4 text-pink-500" />

          <p className="text-sm font-semibold text-slate-700">Adoption Form</p>
        </div>

        <h2 className="text-4xl font-black text-[#07143B]">
          Adopt {pet?.petName}
        </h2>

        <p className="mt-4 text-slate-600 leading-7">
          Fill out the form below to send your adoption request.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* PET NAME */}
        <div>
          <label className="block mb-3 font-semibold text-slate-700">
            Pet Name
          </label>

          <input
            type="text"
            value={pet?.petName}
            readOnly
            className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-100 px-5 outline-none"
          />
        </div>

        {/* USER NAME */}
        <div>
          <label className="block mb-3 font-semibold text-slate-700">
            User Name
          </label>

          <input
            type="text"
            value="John Doe"
            readOnly
            className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-100 px-5 outline-none"
          />
        </div>

        {/* USER EMAIL */}
        <div>
          <label className="block mb-3 font-semibold text-slate-700">
            User Email
          </label>

          <input
            type="email"
            value="john@example.com"
            readOnly
            className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-100 px-5 outline-none"
          />
        </div>

        {/* PICKUP DATE */}
        <div>
          <label className="block mb-3 font-semibold text-slate-700">
            Pickup Date
          </label>

          <div className="relative">
            <CalendarDays className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

            <input
              type="date"
              required
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full h-14 rounded-2xl border border-slate-200 bg-white pl-14 pr-5 outline-none focus:border-pink-400"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block mb-3 font-semibold text-slate-700">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="Why do you want to adopt this pet?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-white p-5 outline-none resize-none focus:border-pink-400"
          ></textarea>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full h-16 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 text-white font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          Send Adoption Request
        </button>

        {/* STATUS */}
        <div className="bg-slate-50 rounded-2xl p-5 text-center">
          <p className="text-slate-500 mb-2">Default Status</p>

          <span className="px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
            Pending
          </span>
        </div>
      </form>
    </div>
  );
};

export default AdoptionForm;
