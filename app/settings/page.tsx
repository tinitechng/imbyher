"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  FiArrowLeft,
  FiChevronRight,
  FiClock,
  FiTrash2,
  FiUser,
  FiLogOut,
  FiShield,
} from "react-icons/fi";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen font-glacial bg-gray-50 dark:bg-dark">
      <header className="flex items-center p-6">
        <Link href="/" className="mr-auto">
          <FiArrowLeft size={24} className="text-black dark:text-white" />
        </Link>
        <h1 className="text-2xl text-black font-medium absolute left-1/2 transform -translate-x-1/2">
          Settings
        </h1>
      </header>

      <main className="max-w-md mx-auto pb-20 text-black/80 dark:text-white/80">
        {/* GENERAL SECTION */}
        <div className="mb-4">
          <div className="bg-[#c6efd3] dark:bg-[#2a614b] p-4">
            <h2 className="text-xl text-black/80  font-semibold">GENERAL</h2>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                const nextTheme =
                  theme === "light"
                    ? "dark"
                    : theme === "dark"
                    ? "auto"
                    : "light";
                setTheme(nextTheme);
              }}
              className="flex items-center justify-between w-full p-4 bg-white text-black dark:bg-dark-light dark:text-white/80"
            >
              <span>Theme</span>
              <div className="flex items-center">
                <span className="mr-2">
                  {theme === "light"
                    ? "Light"
                    : theme === "dark"
                    ? "Dark"
                    : "Auto"}
                </span>
                <FiChevronRight className="text-gray-400" />
              </div>
            </button>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700">
            <Link
              href="/history"
              className="flex items-center justify-between w-full p-4 bg-white dark:bg-dark-light"
            >
              <span>History</span>
              <FiClock className="text-gray-400" />
            </Link>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700">
            <Link
              href="/trash"
              className="flex items-center justify-between w-full p-4 bg-white dark:bg-dark-light"
            >
              <span>Recently deleted</span>
              <FiTrash2 className="text-gray-400" />
            </Link>
          </div>
        </div>

        {/* ACCOUNT SECTION */}
        <div className="mb-4 text-black/80">
          <div className="bg-[#fdedb2] dark:bg-[#6d5f16] p-4">
            <h2 className="text-xl font-semibold">ACCOUNT</h2>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700">
            <Link
              href="/account"
              className="flex items-center justify-between w-full p-4 bg-white dark:bg-dark-light"
            >
              <div className="flex items-center dark:text-white/80">
                <FiUser className="mr-3 text-gray-600 dark:text-gray-300" />
                <span>Edit account</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 text-sm mr-2 truncate max-w-[120px]">
                  tinitechⓐgmail.com
                </span>
                <FiChevronRight className="text-gray-400" />
              </div>
            </Link>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                // Handle sign out logic here
                console.log("Sign out clicked");
              }}
              className="flex items-center w-full p-4 bg-white dark:bg-dark-light dark:text-white/80"
            >
              <FiLogOut className="mr-3 text-gray-600 dark:text-gray-300" />
              <span>Sign out</span>
            </button>
          </div>
        </div>

        {/* INFO SECTION */}
        <div>
          <div className="bg-gray-200 dark:bg-gray-700 p-4">
            <h2 className="text-xl font-semibold dark:text-black/80">INFO</h2>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700 dark:text-white/80">
            <Link
              href="/about"
              className="flex items-center justify-between w-full p-4 bg-white dark:bg-dark-light"
            >
              <span>About</span>
              <FiChevronRight className="text-gray-400" />
            </Link>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700">
            <Link
              href="/privacy"
              className="flex items-center justify-between w-full p-4 bg-white dark:bg-dark-light"
            >
              <span>Privacy notice</span>
              <FiShield className="text-gray-400" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
