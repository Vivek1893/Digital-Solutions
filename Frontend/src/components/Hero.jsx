import { Phone, Mail, ArrowRight, Star } from "lucide-react";

const HeroQuoteSection = () => {
  return (
    <section className="relative bg-hero bg-cover bg-center min-h-screen flex items-center justify-center -mt-10">
      {/* overlay */}
      <div className="absolute inset-0 bg-theme/90"></div>

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Star size={16} />
          Start Your Digital Journey
        </div>

        {/* Heading */}
        <h1 className="font-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">We Design</span>{" "}
          <span className="text-white">Digital Experiences</span>
        </h1>

        {/* Description */}
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Transforming ideas into stunning, high-performance websites that captivate audiences and drive business growth
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors">
            Start Your Project
            <ArrowRight size={18} />
          </button>
          <button className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors">
            Explore Our Services
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroQuoteSection;
