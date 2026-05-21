"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

import { FaClover } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { MdDocumentScanner } from "react-icons/md";

const MyListing = () => {
  const { data: session, isPending } = authClient.useSession();

  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedRequests, setSelectedRequests] = useState([]);

  const ownerEmail = session?.user?.email;

  // Fetch My Pets
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

  // Loading State
  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // Unauthorized
  if (!session?.user) {
    return (
      <div className="min-h-screen flex justify-center items-center flex-col gap-4">
        <h2 className="text-3xl font-bold">Unauthorized Access</h2>

        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    );
  }

  // Delete Pet
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete?");

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

  // Approve Request
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
      }
    } catch (error) {
      console.log(error);
      toast.error("Approve Failed");
    }
  };

  // Reject Request
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
      }
    } catch (error) {
      console.log(error);
      toast.error("Reject Failed");
    }
  };

  // Stats
  const totalListings = pets.length;

  const availablePets = pets.filter((pet) => pet.status !== "adopted").length;

  const adoptedPets = pets.filter((pet) => pet.status === "adopted").length;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* CONTENT */}
      <div className="drawer-content">
        {/* NAVBAR */}
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

        {/* PAGE */}
        <div className="p-6">
          {/* TITLE */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold">My Listings</h2>

            <p className="text-gray-500 mt-2">Manage your listed pets</p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="bg-base-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold">Total Listings</h3>

              <p className="text-4xl font-bold mt-2">{totalListings}</p>
            </div>

            <div className="bg-base-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold">Available</h3>

              <p className="text-4xl font-bold mt-2">{availablePets}</p>
            </div>

            <div className="bg-base-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold">Adopted</h3>

              <p className="text-4xl font-bold mt-2">{adoptedPets}</p>
            </div>
          </div>

          {/* LOADING */}
          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <>
              {/* PET CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pets.map((pet) => (
                  <div key={pet._id} className="card bg-base-200 shadow-xl">
                    <figure className="h-60 relative">
                      <Image
                        src={pet.image}
                        alt={pet.petName}
                        fill
                        className="object-cover"
                      />
                    </figure>

                    <div className="card-body">
                      <h2 className="card-title">{pet.petName}</h2>

                      <p className="font-semibold">${pet.adoptionFee}</p>

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
                        <Link
                          href={`/dashboard/update-pet/${pet._id}`}
                          className="btn btn-sm btn-info"
                        >
                          Edit
                        </Link>

                        {/* VIEW */}
                        <Link
                          href={`/pets/${pet._id}`}
                          className="btn btn-sm btn-success"
                        >
                          View
                        </Link>

                        {/* DELETE */}
                        <button
                          onClick={() => handleDelete(pet._id)}
                          className="btn btn-sm btn-error"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* EMPTY */}
              {pets.length === 0 && (
                <div className="text-center mt-16">
                  <h2 className="text-3xl font-bold">No Pets Found</h2>
                </div>
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
                    <div key={request._id} className="border p-4 rounded-xl">
                      <h2 className="font-bold text-lg">{request.userName}</h2>

                      <p>{request.userEmail}</p>

                      <p className="mt-2">Pickup Date: {request.pickupDate}</p>

                      <p className="mt-2 font-semibold capitalize">
                        Status: {request.status || "pending"}
                      </p>

                      {/* ACTIONS */}
                      {!request.status && (
                        <div className="flex gap-3 mt-4">
                          <button
                            onClick={() => handleApprove(request._id)}
                            className="btn btn-success btn-sm"
                          >
                            Approve
                          </button>

                          <button
                            onClick={() => handleReject(request._id)}
                            className="btn btn-error btn-sm"
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
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          <ul className="menu w-full grow">
            <li>Menu</li>

            <li>
              <Link
                href="/dashboard/my-request"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="add-pet"
              >
                <MdDocumentScanner />
                <span className="is-drawer-close:hidden">My Request</span>
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/add-pet"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="add-pet"
              >
                <FaPlus />

                <span className="is-drawer-close:hidden">Add Pet</span>
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/my-listing"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="my-listing"
              >
                <FaClover />

                <span className="is-drawer-close:hidden">My Listing</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyListing;
