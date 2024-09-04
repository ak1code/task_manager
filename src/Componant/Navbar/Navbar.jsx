import React from "react";
import { Link } from "react-router-dom";

const items = [
  { label: "Task List", to: "/taskList", key: "/taskList" },
  { label: "Login", to: "/login", key: "/login" },
  {
    label: "User",
    to: "/user",
    key: "/user",
    children: [
      { label: "Setting", key: "/setting", to: "/setting" },
      {
        label: "Logout",
        key: "/logout",
        to: "#",
      },
    ],
  },
];

const Navbar = () => {
  const handleLogout = () => {
    localStorage.setItem("token", "");
  };
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {items.map((el) => (
                <div key={el.key} className="relative group">
                  <Link
                    to={el.to}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {el.label}
                  </Link>
                  {el.children && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {el.children.map((child) => (
                          <Link
                            key={child.key}
                            to={child.to}
                            onClick={
                              child?.label === "Logout" ? handleLogout : ""
                            }
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
