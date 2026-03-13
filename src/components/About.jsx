import React from "react";
import { FaCode, FaAward, FaRocket, FaGraduationCap } from "react-icons/fa";
import { profileData, assets } from "../assets/asstes";
import { motion } from "framer-motion";

const About = () => {
  // Map icons manually to make it look better if necessary, or use from data
  const icons = [FaCode, FaGraduationCap, FaRocket];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Decorative background blocks */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-100 rounded-3xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-zinc-100 rounded-full -z-10 blur-2xl opacity-60"></div>
              
              <div className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-700">
                <img
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  src={assets.profileImg}
                  alt="profile"
                />
              </div>

              {/* Experience Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-10 -left-10 md:-left-5 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-200">
                    <FaAward size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-zinc-900 leading-none">1+</p>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 leading-tight">
                Crafting digital <span className="text-cyan-700 italic">excellence</span> through code.
              </h2>
              
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                I am a dedicated <span className="text-zinc-900 font-bold">Full Stack Developer</span> with a passion for building 
                seamless user experiences. My journey started with a curiosity for how things work on the web, 
                which evolved into a career of solving complex problems.
              </p>
              
              <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                I specialize in <span className="text-cyan-800 font-semibold underline decoration-cyan-200 decoration-4">React, Node.js, and modern CSS</span>. 
                My goal is to always deliver clean, maintainable, and highly performant code.
              </p>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {profileData.map((data, index) => {
                  const Icon = icons[index] || FaCode;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="p-5 bg-zinc-50 rounded-2xl border border-zinc-100 hover:bg-white hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300"
                    >
                      <Icon className="text-2xl text-cyan-700 mb-4" />
                      <h4 className="text-sm font-bold text-zinc-900 mb-2 uppercase tracking-tighter">{data.title}</h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {data.technologies.slice(0, 3).join(", ")}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="https://drive.google.com/file/d/1OBDRMJH8L5pEVviq96_XkNhpH4IggtTX/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto px-10 py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-cyan-700 transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer shadow-lg shadow-zinc-200">
                    Download CV
                  </button>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Available for hire</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
