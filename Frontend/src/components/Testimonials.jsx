import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Raamnaath Gopalakrishnan",
    text: "Site Invention has been working with us for the past four years, handling our website, landing pages, and Google campaigns. They consistently deliver...",
    avatar: "R",
    bg: "bg-pink-500",
  },
  {
    name: "Sachinam Incense Products",
    text: "I had a fantastic experience with Site Invention website Creation’s. From the initial consultation to the final website launch, they were with me offering...",
    avatar: "/images/user1.jpg",
  },
  {
    name: "savita ballal",
    text: "I recently had a collaboration with Site Invention website Creation service to build my online store. The team was incredibly professional and attentive to...",
    avatar: "/images/user2.jpg",
  },
  {
    name: "savita ballal",
    text: "I recently had a collaboration with Site Invention website Creation service to build my online store. The team was incredibly professional and attentive to...",
    avatar: "/images/user2.jpg",
  },
  {
    name: "savita ballal",
    text: "I recently had a collaboration with Site Invention website Creation service to build my online store. The team was incredibly professional and attentive to...",
    avatar: "/images/user2.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3;

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(testimonials.length - cardsToShow, prev + 1));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <section className="relative w-full bg-[#F6FBFE] py-24 px-6 overflow-hidden">

      {/* Top Curve */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white rounded-b-[100%]" />

      <div className="relative max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <span className="text-blue-600 text-sm font-semibold tracking-widest uppercase">
              TESTIMONIALS
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#1E2A4A]">
              What Clients Say About Us
            </h2>
          </div>
          
        </div>

        {/* Cards Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute -left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 transition-all ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 cursor-pointer'
              }`}
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= testimonials.length - cardsToShow}
            className={`absolute -right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full z-10 transition-all ${currentIndex >= testimonials.length - cardsToShow ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 cursor-pointer'
              }`}
          >
            <FaChevronRight />
          </button>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((item, index) => (
              <div
                key={currentIndex + index}
                className="bg-white rounded-2xl shadow-md p-8 text-center transition-all duration-300"
              >
                {/* Avatar */}
                <div className="relative -mt-14 mb-6 flex justify-center">
                  {item.avatar.length === 1 ? (
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold ${item.bg}`}>
                      {item.avatar}
                    </div>
                  ) : (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  )}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    alt="Google"
                    className="w-6 h-6 absolute bottom-0 right-[calc(50%-32px)] bg-white rounded-full"
                  />
                </div>

                {/* Name */}
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.text}
                </p>

                <button className="mt-4 text-gray-400 text-sm">
                  Read more
                </button>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / cardsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * cardsToShow)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index * cardsToShow
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}

      </div>
    </section>
  );
}
