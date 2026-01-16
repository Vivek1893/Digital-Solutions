import React from "react";
import {
  FaChalkboardTeacher,
  FaHeartbeat,
  FaTheaterMasks,
  FaCoins,
  FaUsers,
  FaShoppingBag,
  FaPlane,
  FaTruck,
  FaUtensils,
  FaHome,
  FaIndustry,
  FaLaptopCode,
} from "react-icons/fa";

const industries = [
  { icon: <FaChalkboardTeacher />, label: "Education" },
  { icon: <FaHeartbeat />, label: "Health Care" },
  { icon: <FaTheaterMasks />, label: "Entertainment" },
  { icon: <FaCoins />, label: "Financial Services" },
  { icon: <FaUsers />, label: "Business" },
  { icon: <FaShoppingBag />, label: "E-commerce" },
  { icon: <FaPlane />, label: "Tourism" },
  { icon: <FaTruck />, label: "Logistics" },
  { icon: <FaUtensils />, label: "Restaurants" },
  { icon: <FaHome />, label: "Real Estate" },
  { icon: <FaIndustry />, label: "Industry Oil & Gas" },
  { icon: <FaLaptopCode />, label: "IT" },
];

export default function IndustryWeServe() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-20 px-6">
      
      {/* Pattern Background */}
      {/* <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #e5e7eb 25%, transparent 25%), linear-gradient(-45deg, #e5e7eb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e7eb 75%), linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
        }}
      /> */}

      <div className="relative max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-2">
            Industry We Serve
          </h2>
          <p className="text-black font-semibold">
            We Provide Services For Following Industries
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
            >
              <div className="text-4xl text-black mb-3">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-gray-700 text-center">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
