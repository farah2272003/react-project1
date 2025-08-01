import React from "react";

export default function ContactSection() {
  return (
    <section className="contact-section py-20 px-6 bg-[#1f2937] text-center">
      <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
      <form className="max-w-xl mx-auto space-y-6">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-md bg-gray-800 text-white" required />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md bg-gray-800 text-white" required/>
        <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-md bg-gray-800 text-white" required></textarea>
        <button type="submit" className="bg-yellow-300 text-purple-900 font-bold px-6 py-3 rounded-full hover:bg-yellow-400 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
