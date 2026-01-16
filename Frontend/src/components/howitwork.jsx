import React from "react";
import {
  FiSearch,
  FiEdit,
  FiCode,
  FiSettings,
} from "react-icons/fi";

export default function ProcessDesign() {
  return (
    <section className="relative w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[42px] leading-tight font-semibold text-center text-[#2B3A67] mb-12 md:mb-28">
          Our Process of Work
        </h2>

        {/* SVG Curve - Hidden on mobile and tablet */}
        <svg
          viewBox="0 0 1200 260"
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-[170px] w-full"
          fill="none"
        >
          <path
            d="M50 200 C 350 60, 850 60, 1150 200"
            stroke="#387be0ff"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>

        {/* Steps Container */}
        <div className="relative h-auto md:h-[430px]">

          {/* Mobile & Tablet Layout - Vertical Stack */}
          <div className="md:hidden flex flex-col items-center space-y-8 sm:space-y-12">
            {/* STEP 1 - Planning */}
            <div className="flex flex-col items-center text-center w-full max-w-xs">
              <span className="text-blue-600 text-lg sm:text-xl font-semibold mb-4">
                STEP 1
              </span>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-orange-50 rounded-2xl flex items-center justify-center shadow mb-4">
                <img src="/images/ser2.png" alt="Planning" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <p className="text-base sm:text-lg font-semibold text-gray-700">
                Planning
              </p>
            </div>

            {/* STEP 2 - Design */}
            <div className="flex flex-col items-center text-center w-full max-w-xs">
              <span className="text-blue-600 text-lg sm:text-xl font-semibold mb-4">
                STEP 2
              </span>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-50 rounded-2xl flex items-center justify-center shadow mb-4">
                <img src="/images/ser1.png" alt="Design" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <p className="text-base sm:text-lg font-semibold text-gray-700">
                Design
              </p>
            </div>

            {/* STEP 3 - Development */}
            <div className="flex flex-col items-center text-center w-full max-w-xs">
              <span className="text-blue-600 text-lg sm:text-xl font-semibold mb-4">
                STEP 3
              </span>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-50 rounded-2xl flex items-center justify-center shadow mb-4">
                <img src="/images/ser3.png" alt="Development" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <p className="text-base sm:text-lg font-semibold text-gray-700">
                Development
              </p>
            </div>

            {/* STEP 4 - Launch */}
            <div className="flex flex-col items-center text-center w-full max-w-xs">
              <span className="text-blue-600 text-lg sm:text-xl font-semibold mb-4">
                STEP 4
              </span>
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-cyan-50 rounded-2xl flex items-center justify-center shadow mb-4">
                <img src="/images/ser4.png" alt="Launch" className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>
              <p className="text-base sm:text-lg font-semibold text-gray-700">
                Launch
              </p>
            </div>
          </div>

          {/* Desktop & Laptop Layout - Curved Flow (unchanged) */}
          <div className="hidden md:block relative h-[430px]">
            {/* STEP 1 - Planning */}
            <div className="absolute  top-[100px] flex flex-col items-center text-center w-[200px]">
              <span className="text-blue-600 text-xl font-semibold mb-8">
                STEP 1
              </span>
              <div className="w-40 h-40 bg-orange-50 rounded-2xl flex items-center justify-center shadow">
                <img src="/images/ser2.png" alt="Planning" className="w-20 h-20" />
              </div>
              <p className="mt-6 text-2xl font-semibold text-gray-700">
                Planning
              </p>
            </div>

            {/* STEP 2 - Design */}
            <div className="absolute left-[30%]  flex flex-col items-center text-center w-[200px]">
              <span className="text-blue-600 text-xl font-semibold mb-3">
                STEP 2
              </span>
              <div className="w-40 h-40 bg-blue-50 rounded-2xl flex items-center justify-center shadow">
                <img src="/images/ser1.png" alt="Design" className="w-20 h-20" />
              </div>
              <p className="mt-6 text-2xl font-semibold text-gray-700">
                Design
              </p>
            </div>

            {/* STEP 3 - Development */}
            <div className="absolute left-[55%]  flex flex-col items-center text-center w-[200px]">
              <span className="text-blue-600 text-xl font-semibold mb-3">
                STEP 3
              </span>
              <div className="w-40 h-40 bg-emerald-50 rounded-2xl flex items-center justify-center shadow">
                <img src="/images/ser3.png" alt="Development" className="w-20 h-20" />
              </div>
              <p className="mt-6 text-2xl font-semibold text-gray-700">
                Development
              </p>
            </div>

            {/* STEP 4 - Launch */}
            <div className="absolute right-[2%] top-[120px] flex flex-col items-center text-center w-[200px]">
              <span className="text-blue-600 text-xl font-semibold mb-3">
                STEP 4
              </span>
              <div className="w-40 h-40 bg-cyan-50 ml-5 rounded-2xl flex items-center justify-center shadow">
                <img src="/images/ser4.png" alt="Launch" className="w-20 h-20" />
              </div>
              <p className="mt-6 text-2xl font-semibold text-gray-700">
                Launch
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
