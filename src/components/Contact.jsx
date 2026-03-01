import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex items-center pt-16">
      <div className="max-w-2xl mx-auto px-6 py-20 w-full">
        <h2 className="text-5xl font-bold mb-4">
          <span className="text-zinc-700">Contact </span>
          <span className="text-cyan-700">Me</span>
        </h2>
        <p className="text-zinc-600 mb-10 text-lg">
          Have something in mind? Drop a message below.
        </p>

        <form
          action="https://formspree.io/f/xgolbppe"
          method="POST"
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-5 py-3 rounded-full border border-slate-300 focus:border-zinc-800 focus:outline-none text-zinc-700 transition duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-5 py-3 rounded-full border border-slate-300 focus:border-zinc-800 focus:outline-none text-zinc-700 transition duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="w-full px-5 py-3 rounded-2xl border border-slate-300 focus:border-zinc-800 focus:outline-none text-zinc-700 transition duration-300 resize-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer w-fit"
          >
            Send Message
            <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
