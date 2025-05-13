"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { FiSettings } from "react-icons/fi";

interface NavbarProps {
  onSignInClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignInClick }) => {
  const [activeTab, setActiveTab] = useState<"personal" | "professional">(
    "personal"
  );

  return (
    <nav className="container mx-auto px-6 flex justify-between items-center mb-8">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <div
            className="bg-[#c6cb9d] py-3 px-6 relative"
            style={{
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              minWidth: "180px",
            }}
          >
            <span className="text-xl font-medium text-white">I.M by her</span>
          </div>
        </Link>
      </div>

      {/* Middle tabs */}
      <div className="flex items-center space-x-8">
        <button
          onClick={() => setActiveTab("personal")}
          className={`text-lg ${
            activeTab === "personal"
              ? "text-black dark:text-white font-medium"
              : "text-gray-500 dark:text-gray-300"
          }`}
        >
          Personal
        </button>
        <button
          onClick={() => setActiveTab("professional")}
          className={`text-lg ${
            activeTab === "professional"
              ? "text-black dark:text-white font-medium"
              : "text-gray-500 dark:text-gray-300"
          }`}
        >
          Professional
        </button>
      </div>

      {/* Right side controls */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onSignInClick}
          className="py-2 px-6 bg-[#fdeda8] rounded-full text-black hover:bg-[#F8E36F] transition-colors"
        >
          Sign-in
        </button>
        <Link href="/settings">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiSettings
              size={20}
              className="text-gray-600 dark:text-gray-300"
            />
          </button>
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
