import React from "react";

const realClients = [
  {
    name: "ABC Healthcare",
    industry: "Healthcare Technology",
    engagementType: "Web Application Development",
    description: "Healthcare management system for streamlined patient workflows"
  },
  {
    name: "EduNext Solutions",
    industry: "EdTech Platform",
    engagementType: "Full-Stack Development & UI/UX Design",
    description: "Learning platform with role-based access for students and administrators"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and technical requirements through in-depth consultations."
  },
  {
    step: "02",
    title: "Planning & Design",
    description: "Creating detailed project roadmaps, wireframes, and designs that align with your vision and business objectives."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Building robust, scalable solutions with comprehensive testing to ensure quality and performance."
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "Deploying your solution and providing ongoing support to ensure continued success and growth."
  },
  {
    step: "05",
    title: "Optimization & Growth",
    description: "Continuously monitoring and optimizing performance to help your business scale and evolve."
  }
];

const industries = [
  {
    title: "Startups",
    description: "Early-stage companies building their digital foundation",
    icon: "🚀"
  },
  {
    title: "Small Businesses",
    description: "Growing businesses needing scalable digital solutions",
    icon: "📈"
  },
  {
    title: "Early-Stage Products",
    description: "MVPs and prototypes ready for market validation",
    icon: "💡"
  }
];

export default function Clients() {
  return (
    <section className="w-full bg-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Building Lasting
              <span className="text-blue-600"> Partnerships</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We believe in collaborative relationships that drive real business results.
              Our clients are our partners, and their success is our success.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Currently accepting new client partnerships
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS WE'VE WORKED WITH */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Clients We've Worked With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proud to have partnered with innovative companies across different industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {realClients.map((client, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {client.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    {client.industry}
                  </p>
                  <p className="text-sm text-gray-500">
                    {client.engagementType}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {client.description}
                </p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Successfully delivered
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-5xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-lg font-semibold text-gray-900">Happy Clients</div>
              <div className="text-sm text-gray-500 mt-2">Long-term partnerships</div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-5xl font-bold text-green-600 mb-2">4</div>
              <div className="text-lg font-semibold text-gray-900">Projects Delivered</div>
              <div className="text-sm text-gray-500 mt-2">On time and on budget</div>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 border border-gray-200">
              <div className="text-5xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-lg font-semibold text-gray-900">On-time Delivery</div>
              <div className="text-sm text-gray-500 mt-2">Every single project</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK WITH CLIENTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Work With Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven process ensures successful collaboration and exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 mt-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
            <div className="text-4xl mb-6">"</div>
            <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              Working with this team has been transformative for our business.
              They don't just build websites—they build solutions that actually work
              and deliver real results. The attention to detail and commitment to
              our success has been outstanding.
            </p>
            <div className="font-semibold text-gray-900">
              Sarah Johnson, CEO at ABC Healthcare
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES / IDEAL CLIENTS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in helping ambitious businesses build their digital foundation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="text-center bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're launching a new product or scaling an existing business,
              we have the expertise to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Join our growing family of satisfied clients. Let's discuss how we can
            help bring your vision to life and build something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
            >
              Start Your Project
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              Schedule a Consultation
            </a>
          </div>

          <div className="mt-8 text-blue-100 text-sm">
            No pressure, no obligations—just a conversation about your goals
          </div>
        </div>
      </section>

    </section>
  );
}
 