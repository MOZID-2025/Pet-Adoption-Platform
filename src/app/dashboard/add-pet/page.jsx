"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MdDocumentScanner } from "react-icons/md";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaClover } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";

const AddPet = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // If user not logged in
  if (!session?.user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-bold">Unauthorized Access</h2>
        <p>Please login first.</p>
        <Link href="/login" className="btn btn-primary">
          Go To Login
        </Link>
      </div>
    );
  }

  const ownerEmail = session?.user?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const petData = {
      petName: form.petName.value,
      species: form.species.value,
      breed: form.breed.value,
      age: form.age.value,
      gender: form.gender.value,
      image: form.image.value,
      healthStatus: form.healthStatus.value,
      vaccinationStatus: form.vaccinationStatus.value,
      location: form.location.value,
      adoptionFee: form.adoptionFee.value,
      description: form.description.value,
      ownerEmail,
      createdAt: new Date(),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(petData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success("Pet Added Successfully!");
        form.reset();
        router.push("/dashboard/my-listing");
      } else {
        toast.error("Failed to Add Pet");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* CONTENT */}
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="size-5"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>

          <div className="px-4 font-bold">PetNest Dashboard</div>
        </nav>

        {/* FORM */}
        <div className="p-6">
          <div className="max-w-4xl mx-auto bg-base-200 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Add Pet</h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {/* Pet Name */}
              <div>
                <label className="label">Pet Name</label>

                <input
                  type="text"
                  name="petName"
                  required
                  className="input input-bordered w-full"
                  placeholder="Pet Name"
                />
              </div>

              {/* Species */}
              <div>
                <label className="label">Species</label>

                <select
                  name="species"
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Select Species</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                  <option>Rabbit</option>
                </select>
              </div>

              {/* Breed */}
              <div>
                <label className="label">Breed</label>

                <input
                  type="text"
                  name="breed"
                  required
                  className="input input-bordered w-full"
                  placeholder="Breed"
                />
              </div>

              {/* Age */}
              <div>
                <label className="label">Age</label>

                <input
                  type="number"
                  name="age"
                  required
                  className="input input-bordered w-full"
                  placeholder="Age"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="label">Gender</label>

                <select
                  name="gender"
                  required
                  className="select select-bordered w-full"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              {/* Image URL */}
              <div>
                <label className="label">Image URL</label>

                <input
                  type="url"
                  name="image"
                  required
                  className="input input-bordered w-full"
                  placeholder="Image URL"
                />
              </div>

              {/* Health */}
              <div>
                <label className="label">Health Status</label>

                <input
                  type="text"
                  name="healthStatus"
                  required
                  className="input input-bordered w-full"
                  placeholder="Healthy"
                />
              </div>

              {/* Vaccination */}
              <div>
                <label className="label">Vaccination Status</label>

                <input
                  type="text"
                  name="vaccinationStatus"
                  required
                  className="input input-bordered w-full"
                  placeholder="Vaccinated"
                />
              </div>

              {/* Location */}
              <div>
                <label className="label">Location</label>

                <input
                  type="text"
                  name="location"
                  required
                  className="input input-bordered w-full"
                  placeholder="Dhaka"
                />
              </div>

              {/* Fee */}
              <div>
                <label className="label">Adoption Fee</label>

                <input
                  type="number"
                  name="adoptionFee"
                  required
                  className="input input-bordered w-full"
                  placeholder="100"
                />
              </div>

              {/* Owner Email */}
              <div className="md:col-span-2">
                <label className="label">Owner Email</label>

                <input
                  type="email"
                  value={ownerEmail}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="label">Description</label>

                <textarea
                  name="description"
                  required
                  className="textarea textarea-bordered w-full h-32"
                  placeholder="Pet Description"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button disabled={loading} className="btn btn-primary w-full">
                  {loading ? "Adding..." : "Add Pet"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="flex min-h-full flex-col bg-base-200 w-64">
          <ul className="menu w-full">
            <li className="font-bold text-lg mb-2">Menu</li>

            <li>
              <Link href="/dashboard/my-request">
                <MdDocumentScanner />

                <span>My Request</span>
              </Link>
            </li>

            <li>
              <Link href="/dashboard/add-pet">
                <FaPlus />

                <span>Add Pet</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/my-listing">
                <FaClover />

                <span>My Listing</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
