import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      image: "/images/ser1.png",
      title: "Web Designing",
      description: "Site Invention love designing websites with touch of creativity. We understand your needs and deliver solutions..."
    },
    {
      image: "/images/ser2.png",
      title: "Web Development",
      description: "Custom web development solutions built with modern technologies. We create fast, secure, and scalable websites."
    },
    {
      image: "/images/ser3.png",
      title: "Marketing Strategy",
      description: "Data-driven marketing strategies that deliver results. We help you reach your target audience effectively."
    },
    {
      image: "/images/ser4.png",
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic. Our SEO strategies deliver measurable results."
    },
    {
      image: "/images/ser5.png",
      title: "UI/UX Design",
      description: "User-centered design that creates delightful experiences. We craft interfaces that users love."
    },
    {
      image: "/images/ser6.png",
      title: "App Development",
      description: "Native and cross-platform mobile applications. We build apps that engage users and drive business growth."
    },
    {
      image: "/images/ser7.png",
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic. Our SEO strategies deliver measurable results."
    },
    {
      image: "/images/ser1.png",
      title: "UI/UX Design",
      description: "User-centered design that creates delightful experiences. We craft interfaces that users love."
    },
    {
      image: "/images/ser2.png",
      title: "App Development",
      description: "Native and cross-platform mobile applications. We build apps that engage users and drive business growth."
    }

  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#2563EB] uppercase tracking-wide font-semibold text-sm mb-4">WHAT WE DO</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end digital solutions crafted to elevate your brand and accelerate your business growth
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 border-shadow shadow-gray-400  transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Image Icon */}
              <div className="mb-6 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Read More Link */}
              <div className="text-center">
                <a
                  href="#"
                  className="inline-flex items-center text-[#2563EB] hover:text-[#1d4ed8] font-semibold transition-colors duration-200"
                >
                  Read More
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
      </div>
    </section>
  );
};

export default ServicesSection;
