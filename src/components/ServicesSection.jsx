import React from "react";

const services = [
  { title: "Web Development", desc: "Modern, responsive websites with clean UI/UX." },
  { title: "Cloud Solutions", desc: "Scalable cloud architecture and hosting." },
  { title: "AI Integration", desc: "Smart systems powered by machine learning." },
];

export default function ServicesSection() {
  return (
    <section className="services-section py-20 px-6 bg-[#111827] text-center">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-[#1f2937] p-6 rounded-xl shadow-lg max-w-sm text-left">
            <h3 className="text-xl font-semibold text-yellow-300">{service.title}</h3>
            <p className="text-gray-300 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
