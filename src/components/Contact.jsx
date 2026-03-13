import React from "react";
import { FaArrowRight, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-50 overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
              Let's build something <span className="text-cyan-700 italic">together</span>.
            </h2>
            <p className="text-lg text-zinc-600 mb-12 max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to new opportunities.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:example@gmail.com" className="text-lg font-bold text-zinc-900 hover:text-cyan-700 transition-colors">brijesh.dev@outlook.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-zinc-100 flex items-center justify-center text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold text-zinc-900">Gujarat, India</p>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-zinc-100 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-bold text-zinc-700 uppercase tracking-tighter">Available for freelance</span>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl shadow-zinc-200/50 border border-zinc-100"
          >
            <form
              action="https://formspree.io/f/xgolbppe"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:bg-white focus:ring-4 focus:ring-cyan-500/5 focus:border-cyan-600 focus:outline-none transition-all duration-300 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:bg-white focus:ring-4 focus:ring-cyan-500/5 focus:border-cyan-600 focus:outline-none transition-all duration-300 font-medium"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Message</label>
                <textarea
                  name="message"
                  placeholder="How can I help you?"
                  required
                  rows={4}
                  className="w-full px-6 py-4 rounded-3xl bg-zinc-50 border border-zinc-100 focus:bg-white focus:ring-4 focus:ring-cyan-500/5 focus:border-cyan-600 focus:outline-none transition-all duration-300 font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 px-10 py-5 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-cyan-700 transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl shadow-zinc-200 cursor-pointer"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
