import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section className="w-full bg-white relative overflow-hidden" style={{ padding: '0px 0px 50px 0px' }}>
      {/* Mountain wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full  overflow-hidden leading-none" style={{ transform: 'rotate(180deg)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-20 ">
          <path fill="#6EC1E4" fillOpacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
          <path fill="#6EC1E4" fillOpacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
          <path fill="#6EC1E4" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif', color: '#243B69' }}>
                Contact Us
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
            </div>

            <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif', color: '#243B69', textAlign: 'left' }}>
              We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.
            </p>



          </div>

          {/* Right Image */}
          <div className="flex justify-end items-center lg:pr-8">
            <div className="w-full max-w-xl -mr-42">
              <img
                src="https://siteinvention.com/wp-content/uploads/2022/02/banner-img.png"
                alt="contact with us"
                className="w-full h-auto lg:h-120 object-cover rounded-lg "
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section Below Mountain Wave */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT CONTENT */}
          <div>
            <span className="text-blue-600 tracking-widest text-sm font-semibold">
              --- CONTACT US
            </span>
            <h2 className="text-4xl font-bold text-slate-800 mt-3 mb-10">
              Get In Touch
            </h2>

            {/* ADDRESS */}
            <div className="flex gap-5 mb-8">
              <div className="text-blue-500">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Main Office Address:</h4>
                <p className="text-slate-600 leading-relaxed mt-1">
                  Office No. 632, 6th Floor, EssGee Option One,<br />
                  Opp. Naman Midtown, Next to Tilak Bhavan,<br />
                  S.B. Road, Prabhadevi, Mumbai – 400028.
                </p>
              </div>
            </div>

            {/* BRANCH */}
            <div className="flex gap-5 mb-8">
              <div className="text-blue-500">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Branch Address:</h4>
                <p className="text-slate-600 leading-relaxed mt-1">
                  R.No.103, 1st Floor, Shivram Nagar, 1458/0,<br />
                  nr. Achal Guru Temple, Kamatghar,<br />
                  Bhiwandi, Maharashtra 421302.
                </p>
              </div>
            </div>

            {/* MAIL */}
            <div className="flex gap-5 mb-8">
              <div className="text-blue-500">
                <Mail size={26} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Mail Us:</h4>
                <p className="text-slate-600 mt-1">
                  info@siteinvention.com / rajesh@siteinvention.com
                </p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-5">
              <div className="text-blue-500">
                <Phone size={26} />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone:</h4>
                <p className="text-slate-600 mt-1">
                  +91-9819922521 / +91-9664511162 / +91-9819922044
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-8">
              Drop us a line!
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full bg-slate-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your E-Mail*"
                  className="w-full bg-slate-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="text"
                placeholder="Contact No."
                className="w-full bg-slate-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-slate-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Briefly tell us about your project"
                className="w-full bg-slate-100 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
              >
                SUBMIT NOW
              </button>
            </form>
          </div>
        </div>
      </section>

    </section>
  );
};

export default Contact;