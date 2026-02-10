import React from "react";

export default function OurWorks() {
  return (
    <section className="w-full bg-white">

      {/* HERO SECTION */}

      <section
        className="relative w-full bg-cover bg-center overflow-hidden"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F172A]/10"></div>

        {/* Content */}
        <div className="relative max-w-9xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white animate-fadeInUp ml-30">
              <h1 className="text-[42px] lg:text-[52px] -mt-35 font-bold text-black leading-tight">
                Our Featured <br />
                Projects
              </h1>

              <div className="w-16 h-[3px] bg-blue-500 my-6"></div>

              <p className="text-lg text-blue-900 max-w-xl">
                Explore our portfolio of innovative digital solutions that showcase
                our expertise in web development, design, and technology.
              </p>

              <div className="mt-8 border-l-4 border-blue-500 pl-6 italic text-blue-900">
                Every project tells a story of innovation and excellence.
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="overflow-hidden bg-transparent">
              <img
                src="/servicesimg/web.png"
                alt="our clients"
                className="w-400 h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM WAVE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-[80px] rotate-180"
          >
            <path
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7
              c75.8,32.2,133.7,44.5,192.6,49.7
              c23.6,2.1,48.7,3.5,103.4-2.5
              c54.7-6,106.2-25.6,106.2-25.6V0H0v207.3z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>




      {/* PROJECT 1 */}
      <section className="bg-[#B88954] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/project.jpeg"
            alt="Prestige Jasdan Classic"
            className="rounded-xl shadow-2xl"
          />

          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Prestige Jasdan Classic
            </h3>
            <p className="text-black/80 mb-6 leading-relaxed">
              A premium real estate project offering a luxury digital experience
              with strong focus on SEO, performance, and lead generation.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Tool label="WordPress" />
              <Tool label="Responsive" />
              <Tool label="SEO" />
            </div>

            <div className="flex flex-wrap gap-4">
              <OutlineBtn>View Website</OutlineBtn>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 2 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Evergreen Power
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A renewable energy brand delivering high-impact digital presence
              through modern design, performance optimization, and SEO
              strategies.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Tool label="WordPress" />
              <Tool label="Responsive" />
              <Tool label="SEO" />
            </div>

            <div className="flex flex-wrap gap-4">
              <OutlineBtn>View Website</OutlineBtn>
              <OutlineBtn>See Details</OutlineBtn>
              <PrimaryBtn>Request a Free Quote</PrimaryBtn>
            </div>
          </div>

          <img
            src="/images/hero.png"
            alt="Evergreen Power"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* PROJECT 3 */}
      <section className="bg-[#B88954] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/hero1.png"
            alt="TechStart Solutions"
            className="rounded-xl shadow-2xl"
          />

          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              TechStart Solutions
            </h3>
            <p className="text-black/80 mb-6 leading-relaxed">
              A cutting-edge SaaS platform with advanced functionality,
              seamless user experience, and scalable architecture built
              for enterprise clients.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Tool label="React" />
              <Tool label="Node.js" />
              <Tool label="Cloud" />
            </div>

            <div className="flex flex-wrap gap-4">
              <OutlineBtn>View Website</OutlineBtn>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 4 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              Luxury Homes Realty
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Premium real estate portal featuring immersive property tours,
              advanced search functionality, and integrated CRM for
              high-end property transactions.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Tool label="Vue.js" />
              <Tool label="MySQL" />
              <Tool label="API" />
            </div>

            <div className="flex flex-wrap gap-4">
              <OutlineBtn>View Website</OutlineBtn>
              <OutlineBtn>See Details</OutlineBtn>
              <PrimaryBtn>Request a Free Quote</PrimaryBtn>
            </div>
          </div>

          <img
            src="/images/aboutus.png"
            alt="Luxury Homes Realty"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* PROJECT 5 */}
      <section className="bg-[#B88954] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/our-values-1.png"
            alt="FoodieExpress"
            className="rounded-xl shadow-2xl"
          />

          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              FoodieExpress
            </h3>
            <p className="text-black/80 mb-6 leading-relaxed">
              Complete food delivery platform with real-time tracking,
              payment integration, and restaurant management system
              serving thousands of daily orders.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Tool label="Mobile" />
              <Tool label="Payment" />
              <Tool label="GPS" />
            </div>

            <div className="flex flex-wrap gap-4">
              <OutlineBtn>View Website</OutlineBtn>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 6 */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">
              HealthPlus Medical
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comprehensive healthcare management system with patient portals,
              appointment scheduling, and telemedicine capabilities for
              modern medical practices.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Tool label="HIPAA" />
              <Tool label="Secure" />
              <Tool label="Cloud" />
            </div>

            <div className="flex flex-wrap gap-4">
              <OutlineBtn>View Website</OutlineBtn>
              <OutlineBtn>See Details</OutlineBtn>
              <PrimaryBtn>Request a Free Quote</PrimaryBtn>
            </div>
          </div>

          <img
            src="/images/about1-2.jpg"
            alt="HealthPlus Medical"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join our 3500+ happy clients and let's create something amazing together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PrimaryBtn>Get Started Today</PrimaryBtn>
            <OutlineBtn className="border-white text-white hover:bg-white hover:text-black">
              View More Projects
            </OutlineBtn>
          </div>
        </div>
      </section>
    </section>
  );
}

/* UI COMPONENTS */

function Tool({ label }) {
  const getTechIcon = (tech) => {
    const icons = {
      "React": "⚛️",
      "Node.js": "🟢",
      "Cloud": "☁️",
      "Vue.js": "💚",
      "MySQL": "🐬",
      "API": "🔌",
      "Mobile": "📱",
      "Payment": "💳",
      "GPS": "📍",
      "HIPAA": "🛡️",
      "Secure": "🔒",
      "WordPress": "📝",
      "Responsive": "📱",
      "SEO": "🔍"
    };
    return icons[tech] || "🔧";
  };

  return (
    <div className="w-16 h-16 rounded-full border border-black/30 flex flex-col items-center justify-center text-xs font-medium text-black bg-white">
      <span className="text-lg mb-1">{getTechIcon(label)}</span>
      <span className="text-[10px] leading-tight">{label}</span>
    </div>
  );
}

function OutlineBtn({ children, className }) {
  return (
    <button className={`px-6 py-2 rounded-full border border-black text-black text-sm font-semibold hover:bg-black hover:text-white transition ${className || ''}`}>
      {children}
    </button>
  );
}

function PrimaryBtn({ children }) {
  return (
    <button className="px-6 py-2 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition">
      {children}
    </button>
  );
}
