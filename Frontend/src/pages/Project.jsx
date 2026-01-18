import React from "react";

export default function OurWorks() {
  return (
    <section className="w-full bg-white">

      {/* HERO SECTION */}


      <section
        className="w-full h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url('/images/project.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-6 text-center">Our Projects</h1>
          <p className="text-white text-lg text-center max-w-3xl">
            We have worked with companies across multiple industries and
            delivered impactful digital solutions that drive real results.
          </p>
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
              <OutlineBtn>See Details</OutlineBtn>
              <OutlineBtn>View Website</OutlineBtn>
              <PrimaryBtn>Request a Free Quote</PrimaryBtn>
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
              <OutlineBtn>See Details</OutlineBtn>
              <OutlineBtn>View Website</OutlineBtn>
              <PrimaryBtn>Request a Free Quote</PrimaryBtn>
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
              <OutlineBtn>See Details</OutlineBtn>
              <OutlineBtn>View Website</OutlineBtn>
              <PrimaryBtn>Request a Free Quote</PrimaryBtn>
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
