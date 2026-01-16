import React from "react";
import {
  CheckCircle,
  Code,
  Settings,
  PenTool,
  User
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative bg-[#e5e7eb] bg-cover bg-center pt-[20px]">



      {/* ===== Content ===== */}
      <div className="max-w-7xl mx-auto  grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div>
          <h6 className="text-5xl text-blue-950 font-semibold -mt-50 tracking-widest mb-3">
            ABOUT US
          </h6>

          <div className="w-18 h-[4px] bg-blue-950 mb-6"></div>

          <h2 className="text-3xl lg:text-4xl bg-blue-800 font-semibold text-white leading-tight rounded-2xl inline-block px-4 py-2">
            <span className="text-[#ffbd35] ml-2">Design is thinking</span>{" "}
            made visual
          </h2>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://siteinvention.com/wp-content/uploads/2022/02/web.png"
            alt="Web Development"
            className="max-w-full h-auto"
          />
        </div>

      </div>

      {/* Bottom Wave Component */}
      <div className="relative w-full -mt-40 bg-white">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
            c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
            c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            className="fill-[#e5e7eb] drop-shadow-sm"
          />
        </svg>
      </div>

      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-1 items-center">

          {/* ===== Left Image ===== */}
          <div className="flex justify-start -ml-35">
            <img
              src="/images/about1-2.jpg" // replace with your image path
              alt="About Illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* ===== Right Content ===== */}
          <div className="-ml-10  ">
            {/* Small Heading */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-600 tracking-widest font-semibold">
                ABOUT US
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-[#243B69] mb-6 leading-snug">
              We Provides Best Advice For Your Business
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-5">
              We are a web design and development company based in Mumbai,
              Maharashtra. We are a relatively young company, having been
              established in 2014. However, we have quickly made a name for
              ourselves in the website development industry.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              We have developed more than{" "}
              <span className="font-semibold text-[#243B69]">500 Websites</span>,
              including more than{" "}
              <span className="font-semibold text-[#243B69]">
                55 E-commerce Websites
              </span>
              . We have also worked with international clients, including clients
              from{" "}
              <span className="font-semibold text-[#243B69]">
                Australia, the United States, UK and Dubai
              </span>
              .
            </p>

            <p className="text-gray-600 leading-relaxed">
              We are also a team of highly skilled and experienced professionals
              who are passionate about our work. We are committed to providing
              our clients with the best possible service and helping them grow
              their businesses online.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white py-28 -mt-20 overflow-hidden">

        {/* Background Wave (Top Light Shape) */}
        <div className="absolute top-0 left-0 w-full  h-64 bg-[#F3F8FD] rounded-b-[60%] z-0 rotate-180"></div>

        <div className="relative max-w-8xl mx-auto -mt-20 px-6 z-10">

          <div className="relative flex flex-col lg:flex-row items-center">

            {/* ===== Left Blue Box ===== */}
            <div className="w-full lg:w-[50%] h-[280px] lg:h-[350px] 
                          bg-gradient-to-br from-[#0096FF] to-[#0A1FAE]
                          flex items-center justify-center
                          text-white text-2xl lg:text-3xl -ml-35 font-semibold">
              What do we do?
            </div>

            {/* ===== Right White Card ===== */}
            <div className="w-full lg:w-[85%]  bg-white shadow-2xl 
                          p-10 lg:p-12
                          lg:-ml-10 mt-10 lg:mt-30 rounded-sm">

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/images/logo.jpeg"   // replace with your logo path
                  alt="Site Invention Logo"
                  className="w-12 h-12"
                />
                <h3 className="text-3xl font-bold text-[#243B69]">
                  Teranexon is a lot more.
                </h3>
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-4">
                We offer website design and development services at affordable
                prices. We are a one-stop shop for all your website needs. We can
                help you with everything from designing and developing your
                website.
              </p>

              <p className="text-gray-600 leading-relaxed">
                In addition to website design and development, we also offer
                E-commerce Solutions, Digital Marketing and SEO. We also work on
                outsourcing projects. We have a wide range of skills and
                experienced professionals, who are always ready to help you with
                your web projects.
              </p>

            </div>

          </div>
        </div>
      </section>



      {/* ------------------- */}

      <section className="w-full bg-white ">

        {/* ================= OUR VALUES ================= */}
        <div className="max-w-9xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center mb-32">

          {/* Left Illustration */}
          <div className="flex justify-center">
            <img
              src="/images/our-values-1.png"
              alt="Our Values"
              className="max-w-full h-auto"
            />
          </div>

          {/* Right Gradient Box */}
          <div>
            <h4 className="text-[#243B69] text-3xl font-bold mb-4">
              Our VALUES
            </h4>
            <div className="w-12 h-[2px] bg-[#243B69] mb-6"></div>

            <div className="bg-gradient-to-r from-[#00A6FF] to-[#0A1FAE]
                          text-white p-8  shadow-xl rounded-l-3xl">
              <p className="leading-relaxed text-lg">
                We believe in providing Best After Sales Support & Services.
                To achieve that all our website packages has by default
                1st One year free Maintenance & Support, which makes us
                Most Preferable Choice amongst our Potential & Existing
                Client base. Site Invention offer one of the best Server &
                Cloud Hosting Services, which runs Websites on the Platform
                of WordPress, Magento, HTML, Bootstrap etc.
              </p>
            </div>
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="max-w-9xl mx-auto px-6 mb-32">
          <div className="relative flex flex-col lg:flex-row items-center">

            {/* Blue Block */}
            <div className="w-full lg:w-[50%] -ml-5 h-[400px]
                          bg-gradient-to-br from-[#0096FF] to-[#0A1FAE]
                          flex items-center justify-center
                          text-white text-2xl font-semibold">
              Why Choose Us?
            </div>

            {/* White Card */}
            <div className="w-full lg:w-[65%] h-[430px] bg-white shadow-2xl
                          p-10 lg:p-12
                          lg:-ml-24 mt-10 lg:mt-35">

              <div className="flex items-center gap-4 mb-6">
                <img src="/images/logo.jpeg" alt="logo" className="w-25 h-15" />
                <h3 className="text-3xl font-bold text-[#243B69]">
                  A choice that makes the difference
                </h3>
              </div>

              <p className="text-gray-600 text-xl font-semibold mb-4">
                There are many reasons why you should choose us as your
                website development partner.
              </p>

              <ul className="space-y-3 text-gray-600 text-lg">
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  We offer our services at very affordable prices.
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  Proven track record of successful projects.
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  Latest tools and technologies.
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="text-blue-600 w-5 h-5" />
                  Personalized attention to each client.
                </li>
              </ul>

              <p className="mt-4 text-gray-600 text-xl font-semibold">
                If you are looking for a reliable and professional website
                development company, look no further than Site Invention.
              </p>
            </div>
          </div>
        </div>

        {/* ================= PERKS ================= */}
        <div className="max-w-7xl mx-auto px-6 mb-50 text-center">

          <p className="text-2xl tracking-widest text-blue-600 mb-2">
            – SITE INVENTION –
          </p>
          <h2 className="text-3xl font-bold text-[#243B69] mb-12">
            Perks of working with Us
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-70 w-full gap-8">

            {[
              { title: "Affordable Prices", image: "/images/ser1.png" },
              { title: "High Quality Services", image: "/images/ser2.png" },
              { title: "Experienced Professionals", image: "/images/ser3.png" },
              { title: "Latest Tools & Technologies", image: "/images/ser4.png" },
              { title: "Personalized Attention", image: "/images/ser5.png" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-70 border-3 border-gray-300 rounded-lg p-8 shadow-2xl
                         hover:shadow-lg transition text-center"
              >

                <img
                  src={item.image}
                  className="w-full h-22 object-cover rounded-lg mb-12"
                />
                <p className="font-bold text-[#243B69] text-2xl">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

    </section>
  );
}