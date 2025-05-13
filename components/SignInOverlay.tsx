"use client";

import React, { useEffect, useState } from "react";
import { FiX, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import Image from "next/image";

interface SignInOverlayProps {
  onClose: () => void;
}

const SignInOverlay: React.FC<SignInOverlayProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  // Prevent click propagation
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleMode = () => {
    setMode(mode === "signin" ? "signup" : "signin");
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-100 rounded-xl p-8 max-w-md w-full relative"
        onClick={stopPropagation}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200"
          aria-label="Close"
        >
          <FiX size={24} className="text-gray-600" />
        </button>

        <h1 className="text-xl text-gray-700 font-medium mb-6">Sign In / Up</h1>

        {/* Google Sign In Button */}
        <button className="flex items-center justify-center w-full bg-white rounded-full p-3 mb-4 shadow-sm hover:shadow-md transition-shadow">
          <Image
            src="/images/google-icon.png"
            alt="Google logo"
            width={24}
            height={24}
            className="mr-3"
          />
          <span className="text-gray-700">Sign in to Google</span>
        </button>

        {/* Apple Sign In Button */}
        <button className="flex items-center justify-center w-full bg-white rounded-full p-3 mb-6 shadow-sm hover:shadow-md transition-shadow">
          <Image
            src="/images/apple-logo.png"
            alt="Apple logo"
            width={24}
            height={24}
            className="mr-3"
          />
          <span className="text-gray-700">Sign in with Apple</span>
        </button>

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="border-b border-gray-300 flex-grow"></div>
          <span className="px-4 text-gray-500">Or</span>
          <div className="border-b border-gray-300 flex-grow"></div>
        </div>

        {/* Sign Up with Email Label */}
        <div className="text-center mb-6">
          <span className="text-gray-700">Sign up with Email</span>
        </div>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-white border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-4 bg-white border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? (
                <FiEyeOff size={20} className="text-gray-400" />
              ) : (
                <FiEye size={20} className="text-gray-400" />
              )}
            </button>
          </div>

          {/* Confirm Password - Only show for signup */}
          {mode === "signup" && (
            <div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full p-4 bg-white border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
          )}

          {/* Legal text */}
          <div className="text-center text-gray-600 text-sm">By Signing in</div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full py-4 bg-yellow-300 rounded-full text-gray-800 font-medium hover:bg-yellow-400 transition-colors"
          >
            Continue
          </button>

          {/* Privacy note */}
          <div className="flex items-center justify-center text-gray-600 text-sm">
            <FiLock size={16} className="mr-2" /> Your privacy is secured
          </div>

          {/* Toggle mode */}
          <div className="text-center text-sm">
            <button
              type="button"
              onClick={toggleMode}
              className="text-gray-600 hover:underline"
            >
              {mode === "signin"
                ? "Need an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInOverlay;
