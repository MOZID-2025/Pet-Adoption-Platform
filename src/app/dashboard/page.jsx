import { PawPrint } from "lucide-react";
import Link from "next/link";

import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaClover } from "react-icons/fa6";
import { MdDocumentScanner } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
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
        {/* Page content here */}
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>Menu</li>
            <li>
              <Link
                href="/dashboard/my-request"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="my-request"
              >
                {/* Home icon */}
                <MdDocumentScanner />

                <span className="is-drawer-close:hidden">My Request</span>
              </Link>
            </li>

            {/* List item */}
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
            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="my-listing"
              >
                {/* Settings icon */}
                <FaClover />

                <span className="is-drawer-close:hidden">My Listing</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
