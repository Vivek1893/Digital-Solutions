const items = [
  "24/7 Customer Support",
  "Mobile Friendly Websites",
  "Free Domain & Hosting",
  "No Hidden Charges",
  "Free Maintenance",
  "Fast Loading Websites",
  "SEO Optimized",
];

export default function Marquee() {
  return (
    <section className="w-full overflow-hidden bg-theme py-6">
      <div className="flex whitespace-nowrap">
        {/* First Row */}
        <div className="flex animate-marquee">
          {items.map((text, i) => (
            <div
              key={i}
              className="mx-6 flex items-center text-white text-2xl font-medium"
            >
              <span className="mr-3 text-yellow-400">✦</span>
              {text}
            </div>
          ))}
        </div>

        {/* Duplicate Row for seamless loop */}
        <div className="flex animate-marquee">
          {items.map((text, i) => (
            <div
              key={`dup-${i}`}
              className="mx-6 flex items-center text-white text-2xl font-medium"
            >
              <span className="mr-3 text-yellow-400">✦</span>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
