import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#F8FAFC] text-black py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white text-sm font-semibold rounded-full tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Elevate Your Business With
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#1d4ed8]"> Expert Solutions</span>
          </h2>
          <p className="text-black text-lg max-w-3xl mx-auto">
            We combine strategic thinking with proven methodologies to deliver exceptional results that drive sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE - Modern Image Section */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-full h-[500px] rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-5xl">
              <img
                src="/images/hero.png"
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />


              {/* Abstract Pattern Overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-4 border-white"></div>
                <div className="absolute bottom-16 right-12 w-24 h-24 rounded-full border-4 border-white"></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 border-4 border-white rotate-45"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="text-white">
                  <div className="text-4xl mb-2">🚀</div>
                  <h3 className="font-bold text-lg">Fast Delivery</h3>
                  <p className="text-sm opacity-90">24/7 Support</p>
                </div>
              </div>

              <div className="absolute bottom-12 right-10 bg-white rounded-2xl p-6 shadow-2xl transform rotate-3 w-64">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-2xl text-white">
                    📊
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase">Growth Rate</p>
                    <h3 className="text-xl font-bold text-gray-800">+45%</h3>
                    <p className="text-sm text-gray-600">Average Growth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Stats Bar */}

          </div>

          {/* RIGHT SIDE - Content */}
          <div className="space-y-10">
            {/* Feature 1 */}
            <div className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] rounded-2xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                  🏆
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-[#0F172A]">Premium Quality</h3>
                    <span className="text-xs font-semibold bg-[#2563EB]/10 text-[#2563EB] px-3 py-1 rounded-full">Guaranteed</span>
                  </div>
                  <p className="text-black leading-relaxed">
                    We deliver exceptional quality that exceeds industry standards, ensuring your business stands out in competitive markets.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <ul className="grid grid-cols-2 gap-2 text-sm text-gray-500">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2563EB] rounded-full mr-2"></span>
                        Industry Certified
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[#2563EB] rounded-full mr-2"></span>
                        Quality Assurance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] rounded-2xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-[#0F172A]">Rapid Execution</h3>
                    <span className="text-xs font-semibold bg-[#2563EB]/10 text-[#2563EB] px-3 py-1 rounded-full">Fast Track</span>
                  </div>
                  <p className="text-black leading-relaxed">
                    Accelerate your growth with our agile methodology and rapid deployment strategies that deliver results in record time.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm">
                      <span className="font-semibold text-gray-800 mr-4">Delivery Time:</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] h-2 rounded-full w-3/4"></div>
                      </div>
                      <span className="ml-3 font-bold text-gray-800">75% Faster</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start space-x-5">
                <div className="w-16 h-16 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] rounded-2xl flex items-center justify-center text-2xl text-white group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-[#0F172A]">Strategic Partnership</h3>
                    <span className="text-xs font-semibold bg-[#2563EB]/10 text-[#2563EB] px-3 py-1 rounded-full">Proven Success</span>
                  </div>
                  <p className="text-black leading-relaxed">
                    We don't just deliver services - we build partnerships focused on achieving your long-term business objectives.
                  </p>

                </div>
              </div>
            </div>

            {/* CTA Button */}

          </div>
        </div>
      </div>
    </section>
  );
}