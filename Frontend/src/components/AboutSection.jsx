import React from "react";
import { FiChevronRight, FiPhoneCall, FiAward } from "react-icons/fi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-[#F8FAFC]">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <p className="text-[#2563EB] uppercase font-semibold mb-2">Who we are</p>
          <h2 className="text-4xl font-bold text-[#0F172A] mb-6 leading-tight">
            Web & Software Development <br /> Company in Mumbai
          </h2>
          <p className="text-black mb-6 leading-relaxed">
            Glideinfotech is Sterling web & software development company in Mumbai.
            We provide high quality and robust website development Services at best
            price. Our outstanding web designing and web developments are just
            unparallel. We research the latest technologies and trends and – share our
            insights. our team have excellency in all the aspect of Software development
            and tech Services.
          </p>
          <a href="#" className="text-[#2563EB] font-semibold hover:underline">
            Read More...
          </a>

          <div className="flex mt-8 border-t border-b border-gray-200 py-4">
            <div className="w-1/2 border-r border-gray-200 pr-4">
              <p className="text-[#2563EB] text-3xl font-bold">4.7+</p>
              <div className="flex text-yellow-400 mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-black">Customer Review</p>
            </div>
            <div className="w-1/2 pl-4">
              <p className="text-[#2563EB] text-3xl font-bold">A+</p>
              <div className="flex text-yellow-400 mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-black">Business Class</p>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="relative">
          <img
            src="/images/aboutus.png"
            alt="About Us"
            className="w-full max-w-xl mx-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
