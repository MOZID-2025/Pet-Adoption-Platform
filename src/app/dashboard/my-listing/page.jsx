"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

import { FaClover, FaPlus } from "react-icons/fa6";
import { MdDocumentScanner } from "react-icons/md";

const MyListing = () => {
  const { data: session, isPending } = authClient.useSession();

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedRequests, setSelectedRequests] = useState([]);

  const ownerEmail = session?.user?.email;

  const [selectedPet, setSelectedPet] = useState(null);

  const [updateForm, setUpdateForm] = useState({
    petName: "",
    adoptionFee: "",
    status: "",
  });

  // FETCH MY PETS
  useEffect(() => {
    if (!ownerEmail) return;

    const fetchMyPets = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/my-pets?email=${ownerEmail}`,
        );

        const data = await res.json();

        setPets(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyPets();
  }, [ownerEmail]);

  // LOADING
  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // UNAUTHORIZED
  if (!session?.user) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-bold">Unauthorized Access</h2>

        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    );
  }

  // DELETE PET
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this pet?");

    if (!confirmDelete) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Pet Deleted Successfully");

        const remainingPets = pets.filter((pet) => pet._id !== id);

        setPets(remainingPets);
      }
    } catch (error) {
      console.log(error);

      toast.error("Delete Failed");
    }
  };

  // APPROVE REQUEST
  const handleApprove = async (requestId) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/requests/${requestId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "approved",
          }),
        },
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Request Approved");

        const updatedRequests = selectedRequests.map((request) =>
          request._id === requestId
            ? { ...request, status: "approved" }
            : request,
        );

        setSelectedRequests(updatedRequests);
      }
    } catch (error) {
      console.log(error);

      toast.error("Approve Failed");
    }
  };

  // REJECT REQUEST
  const handleReject = async (requestId) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/requests/${requestId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "rejected",
          }),
        },
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Request Rejected");

        const updatedRequests = selectedRequests.map((request) =>
          request._id === requestId
            ? { ...request, status: "rejected" }
            : request,
        );

        setSelectedRequests(updatedRequests);
      }
    } catch (error) {
      console.log(error);

      toast.error("Reject Failed");
    }
  };

  // UPDATE PET
  const handleUpdatePet = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pets/${selectedPet._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateForm),
        },
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("Pet Updated Successfully");

        const updatedPets = pets.map((pet) =>
          pet._id === selectedPet._id ? { ...pet, ...updateForm } : pet,
        );

        setPets(updatedPets);

        document.getElementById("edit_modal").close();
      }
    } catch (error) {
      console.log(error);

      toast.error("Update Failed");
    }
  };

  // STATS
  const totalListings = pets.length;

  const availablePets = pets.filter((pet) => pet.status !== "adopted").length;

  const adoptedPets = pets.filter((pet) => pet.status === "adopted").length;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* CONTENT */}
      <div className="drawer-content">
        {/* NAVBAR */}
        <nav className="navbar w-full bg-base-200 border-b border-base-300">
          <div className="px-4 font-bold text-lg">PetNest Dashboard</div>
        </nav>

        {/* PAGE */}
        <div className="p-6">
          {/* TITLE */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <p className="text-sm text-pink-500 font-medium mb-2">
                My Dashboard
              </p>

              <h2 className="text-4xl font-bold">
                My{" "}
                <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                  Listings
                </span>
              </h2>

              <p className="text-gray-500 mt-2">
                Manage your pet listings and adoption requests.
              </p>
            </div>

            <Link
              href="/dashboard/add-pet"
              className="btn bg-gradient-to-r from-pink-500 to-cyan-400 text-white border-none rounded-full"
            >
              <FaPlus />
              Add New Pet
            </Link>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="bg-base-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Total Listings</h3>

              <p className="text-4xl font-bold mt-2">{totalListings}</p>
            </div>

            <div className="bg-base-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Available</h3>

              <p className="text-4xl font-bold mt-2">{availablePets}</p>
            </div>

            <div className="bg-base-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Adopted</h3>

              <p className="text-4xl font-bold mt-2">{adoptedPets}</p>
            </div>
          </div>

          {/* LOADING */}
          {loading ? (
            <div className="flex justify-center py-20">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <>
              {/* EMPTY STATE */}
              {pets.length === 0 ? (
                <div className="border border-base-300 rounded-3xl py-24 flex flex-col items-center justify-center text-center bg-base-100">
                  <div className="text-6xl mb-4">🐾</div>

                  <h2 className="text-3xl font-bold mb-3">No listings yet</h2>

                  <p className="text-gray-500 mb-6">
                    Start by adding a pet that needs a new home.
                  </p>

                  <Link
                    href="/dashboard/add-pet"
                    className="btn bg-gradient-to-r from-pink-500 to-cyan-400 text-white border-none rounded-full px-6"
                  >
                    <FaPlus />
                    Add Your First Pet
                  </Link>
                </div>
              ) : (
                <>
                  {/* PET CARDS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pets.map((pet) => (
                      <div
                        key={pet._id}
                        className="card bg-base-100 shadow-xl border border-base-300"
                      >
                        <figure className="relative h-60">
                          <Image
                            src={pet.image}
                            alt={pet.petName}
                            fill
                            className="object-cover"
                          />
                        </figure>

                        <div className="card-body">
                          <div className="flex items-center justify-between">
                            <h2 className="card-title">{pet.petName}</h2>

                            <div className="badge badge-success text-white">
                              {pet.status || "available"}
                            </div>
                          </div>

                          <p className="text-lg font-bold text-primary">
                            ${pet.adoptionFee}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {/* REQUESTS */}
                            <button
                              className="btn btn-sm btn-primary"
                              onClick={() => {
                                setSelectedRequests(pet.requests || []);

                                document
                                  .getElementById("request_modal")
                                  .showModal();
                              }}
                            >
                              Requests
                            </button>

                            {/* EDIT */}
                            <button
                              className="btn btn-sm btn-info text-white"
                              onClick={() => {
                                setSelectedPet(pet);

                                setUpdateForm({
                                  petName: pet.petName,
                                  adoptionFee: pet.adoptionFee,
                                  status: pet.status || "available",
                                });

                                document
                                  .getElementById("edit_modal")
                                  .showModal();
                              }}
                            >
                              Edit
                            </button>

                            {/* VIEW */}
                            <Link
                              href={`/pets/${pet._id}`}
                              className="btn btn-sm btn-success text-white"
                            >
                              View
                            </Link>

                            {/* DELETE */}
                            <button
                              onClick={() => handleDelete(pet._id)}
                              className="btn btn-sm btn-error text-white"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {/* REQUEST MODAL */}
          <dialog id="request_modal" className="modal">
            <div className="modal-box max-w-3xl">
              <h3 className="font-bold text-2xl mb-6">Adoption Requests</h3>

              {selectedRequests.length === 0 ? (
                <p>No Requests Yet</p>
              ) : (
                <div className="space-y-5">
                  {selectedRequests.map((request) => (
                    <div
                      key={request._id}
                      className="border border-base-300 p-5 rounded-2xl"
                    >
                      <h2 className="font-bold text-lg">{request.userName}</h2>

                      <p className="text-gray-500">{request.userEmail}</p>

                      <p className="mt-2">Pickup Date: {request.pickupDate}</p>

                      <p className="mt-2 font-semibold capitalize">
                        Status: {request.status || "pending"}
                      </p>

                      {/* ACTION BUTTONS */}
                      {!request.status && (
                        <div className="flex gap-3 mt-4">
                          <button
                            onClick={() => handleApprove(request._id)}
                            className="btn btn-success btn-sm text-white"
                          >
                            Approve
                          </button>

                          <button
                            onClick={() => handleReject(request._id)}
                            className="btn btn-error btn-sm text-white"
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>

          {/* EDIT MODAL */}
          <dialog id="edit_modal" className="modal">
            <div className="modal-box max-w-2xl">
              <h3 className="font-bold text-2xl mb-6">Update Pet</h3>

              <form onSubmit={handleUpdatePet} className="space-y-5">
                {/* PET NAME */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Pet Name</span>
                  </label>

                  <input
                    type="text"
                    value={updateForm.petName}
                    onChange={(e) =>
                      setUpdateForm({
                        ...updateForm,
                        petName: e.target.value,
                      })
                    }
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* ADOPTION FEE */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Adoption Fee
                    </span>
                  </label>

                  <input
                    type="number"
                    value={updateForm.adoptionFee}
                    onChange={(e) =>
                      setUpdateForm({
                        ...updateForm,
                        adoptionFee: e.target.value,
                      })
                    }
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* STATUS */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Status</span>
                  </label>

                  <select
                    value={updateForm.status}
                    onChange={(e) =>
                      setUpdateForm({
                        ...updateForm,
                        status: e.target.value,
                      })
                    }
                    className="select select-bordered w-full"
                  >
                    <option value="available">Available</option>

                    <option value="adopted">Adopted</option>
                  </select>
                </div>

                {/* BUTTONS */}
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    className="btn"
                    onClick={() =>
                      document.getElementById("edit_modal").close()
                    }
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-primary">
                    Update Pet
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="flex min-h-full flex-col bg-base-200 w-64 border-r border-base-300">
          <ul className="menu w-full p-4 gap-2">
            <li className="font-bold text-lg mb-2">Menu</li>
            <li>
              <Link href="/dashboard/my-request" className="rounded-xl">
                <MdDocumentScanner />
                My Request
              </Link>
            </li>

            <li>
              <Link href="/dashboard/add-pet" className="rounded-xl">
                <FaPlus />
                Add Pet
              </Link>
            </li>

            <li>
              <Link href="/dashboard/my-listing" className="rounded-xl active">
                <FaClover />
                My Listing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyListing;
