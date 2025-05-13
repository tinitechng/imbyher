"use client";

import React from "react";
import Image from "next/image";
// import Link from "next/link";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import SignInOverlay from "@/components/SignInOverlay";
// import ThemeToggle from "@/components/ThemeToggle";
import {
  FiMic,
  FiSun,
  FiChevronDown,
  FiMoreVertical,
  // FiSettings,
} from "react-icons/fi";
import { useState } from "react";

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(false);

  const toggleSignIn = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <main className="flex min-h-screen flex-col py-5 font-glacial relative dark:bg-dark">
      <Navbar onSignInClick={toggleSignIn} />

      <div className="flex flex-col md:flex-row items-start px-6 max-w-7xl mx-auto w-full">
        <div className="w-full md:w-1/2 lg:w-10/12">
          <Heading
            title="Schedule"
            subtitle="With Ease"
            description="Enter your message, choose a time, and let your AI assistant do the rest."
          />

          <div className="px-12 space-y-6">
            {/* Input field */}
            <div className="p-4 bg-white rounded-full shadow-md flex items-center">
              <input
                type="text"
                placeholder="Enter your message"
                className="flex-1 bg-transparent outline-none px-3"
              />
              <button className="ml-2 p-2 rounded-full hover:bg-gray-100">
                <FiMic size={20} className="text-gray-400" />
              </button>
              <button className="ml-2 p-2 rounded-full hover:bg-gray-100">
                <FiSun size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Schedule time picker */}
            <div className="p-4 bg-white rounded-full shadow-md flex items-center">
              <div className="flex-1 px-3 text-gray-400">
                Schedule for 04/30/2025, 10:00 AM
              </div>
              <button className="ml-2 p-2 rounded-full hover:bg-gray-100">
                <FiChevronDown size={20} className="text-gray-400" />
              </button>
              <button className="ml-2 p-2 rounded-full hover:bg-gray-100">
                <FiMoreVertical size={20} className="text-gray-400" />
              </button>
            </div>

            {/* Schedule button */}
            <div className="flex justify-center mt-8">
              <button className="py-3 px-8 bg-[#fdeda8] rounded-full text-lg text-black font-medium shadow-md hover:bg-[#F8E36F] transition-colors">
                Schedule
              </button>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-full md:w-1/2 lg:w-5/12 flex justify-center pt-12">
          <div className="bg-[#f3f7fd] p-12 rounded-xl shadow-sm">
            <div className="p-4 rounded-lg">
              <div className="w-48 h-48 relative">
                {/* This is where you would add your lemon image */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                  <Image
                    src="/images/lemon-logo.png"
                    alt="Lemon image"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="px-6 mt-24 max-w-7xl mx-auto w-full">
        <AboutUs />
      </div>

      {/* Features Section */}
      <div className="px-6 mt-24 max-w-7xl mx-auto w-full">
        <Features />
      </div>

      {/* Integrations Section */}
      <div className="px-6 mt-24 max-w-7xl mx-auto w-full">
        <Integrations />
      </div>

      {/* Call to Action Section */}
      <div className="px-6 py-20 mt-24 bg-[#f7fafd] w-full dark:bg-dark-light">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-600 dark:text-gray-200 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Join I.M by her today and discover a new way to stay connected with
            the people who matter most.
          </p>
          <button
            onClick={toggleSignIn}
            className="py-4 px-12 bg-[#c6cb9d] rounded-full text-lg text-white font-medium shadow-md hover:bg-opacity-90 transition-colors"
          >
            Sign In / Sign Up
          </button>
        </div>
      </div>

      {/* Sign In Overlay */}
      {showSignIn && <SignInOverlay onClose={toggleSignIn} />}
    </main>
  );
}
