import React from "react";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "/images/project.png",
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "/images/project.png",
      link: "#"
    },
    {
      id: 3,
      title: "CRM Dashboard",
      category: "Web Development",
      image: "/images/hero.png",
      link: "#"
    },
   
  ];

  return (
    <section className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#2563EB] uppercase tracking-wide font-semibold text-sm mb-4">OUR PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Our Latest Projects
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Explore our recent work and see how we've helped businesses achieve their digital goals
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-84 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-red-800 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#2563EB] transition-colors">
                  {project.title}
                </h3>

                {/* View Project Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-[#2563EB] hover:text-[#1d4ed8] font-semibold transition-colors duration-200"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
            More Projects
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}