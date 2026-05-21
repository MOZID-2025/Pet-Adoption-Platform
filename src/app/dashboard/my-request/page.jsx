"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa";
import { FaClover } from "react-icons/fa6";
import { MdDocumentScanner } from "react-icons/md";

import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

const MyRequest = () => {
  const { data: session, isPending } = authClient.useSession();

  const [requests, setRequests] = useState([]);

  const [loading, setLoading] = useState(true);

  const userEmail = session?.user?.email;

  // FETCH REQUESTS
  useEffect(() => {
    if (!userEmail) return;

    const fetchRequests = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/my-requests?email=${userEmail}`,
        );

        const data = await res.json();

        setRequests(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [userEmail]);

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
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold">Unauthorized</h2>
      </div>
    );
  }

  // CANCEL REQUEST
  const handleCancel = async (id) => {
    const confirmDelete = confirm("Cancel this request?");

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/requests/${id}`,
        {
          method: "DELETE",
        },
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success("Request Cancelled");

        const remaining = requests.filter((request) => request._id !== id);

        setRequests(remaining);
      }
    } catch (error) {
      console.log(error);

      toast.error("Cancel Failed");
    }
  };

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
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>

              <path d="M9 4v16"></path>

              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>

          <div className="px-4 font-bold">PetNest Dashboard</div>
        </nav>

        {/* PAGE CONTENT */}
        <div className="p-6">
          {/* TITLE */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold">My Requests</h2>

            <p className="text-gray-500 mt-2">Track your adoption requests</p>
          </div>

          {/* LOADING */}
          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <>
              {requests.length === 0 ? (
                <div className="text-center mt-20">
                  <h2 className="text-3xl font-bold">No Requests Found</h2>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Pet Name</th>

                        <th>Request Date</th>

                        <th>Pickup Date</th>

                        <th>Status</th>

                        <th>Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {requests.map((request) => (
                        <tr key={request._id}>
                          <td>{request.petName}</td>

                          <td>
                            {new Date(request.requestDate).toLocaleDateString()}
                          </td>

                          <td>{request.pickupDate}</td>

                          <td>
                            <span
                              className={`badge ${
                                request.status === "approved"
                                  ? "badge-success"
                                  : request.status === "rejected"
                                    ? "badge-error"
                                    : "badge-warning"
                              }`}
                            >
                              {request.status}
                            </span>
                          </td>

                          <td className="flex gap-2">
                            {/* VIEW */}
                            <Link
                              href={`/pets/${request.petId}`}
                              className="btn btn-sm btn-info"
                            >
                              View
                            </Link>

                            {/* CANCEL */}
                            <button
                              onClick={() => handleCancel(request._id)}
                              className="btn btn-sm btn-error"
                            >
                              Cancel
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
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

            {/* MY REQUEST */}
            <li>
              <Link
                href="/dashboard/my-request"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="my-request"
              >
                <MdDocumentScanner />

                <span className="is-drawer-close:hidden">My Request</span>
              </Link>
            </li>

            {/* ADD PET */}
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

            {/* MY LISTING */}
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

export default MyRequest;
