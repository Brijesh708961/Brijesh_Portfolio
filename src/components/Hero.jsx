import React from "react";
import { FaArrowRight } from "react-icons/fa";
import profile from "../assets/profile.jpg";
const Hero = () => {
  return (
    <div id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12
                items-center"
        >
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-10">
              <span className="text-zinc-700">FullStack Developer</span>
              <br />
              <span className="text-cyan-700">Programmer</span>
            </h1>
            <p className="text-xl text-zinc-900 mb-6">
              Learning, building, improving every day.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <a href="#work">
                <button className="flex items-center gap-2 px-10 py-4 bg-black rounded-full text-slate-200 hover:text-white cursor-pointer">
                  View My Work
                  <FaArrowRight />
                </button>
              </a>
              <a href="#contact">
                <button className="flex items-center gap-2 border border-slate-400 rounded-full px-10 py-4 hover:border-slate-800 transition duration-300 cursor-pointer ">
                  Contact Me
                  <FaArrowRight />
                </button>
              </a>
            </div>
          </div>

          {/* {image section right side} */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 floating">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow">
                <img
                  className="w-full h-full object-cover"
                  src={profile}
                  alt="profile"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl overflow-hidden p-3">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white"></div>
                    <div className="text-sm text-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
