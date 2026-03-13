import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-mesh-gradient">
      {/* Background Glow */}
      <div className="glow-background opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-cyan-700 font-medium tracking-widest uppercase mb-4 text-sm sm:text-base"
            >
              Available for new projects
            </motion.h2>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
                FullStack
              </span>
              <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-gradient-to-r from-cyan-800 to-cyan-500 bg-clip-text text-transparent"
              >
                Developer
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-zinc-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Building digital experiences that combine innovative design with 
              clean, scalable code.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
            >
              <a href="#work" className="w-full sm:w-auto">
                <button className="group relative flex items-center justify-center gap-3 px-10 py-4 bg-zinc-900 text-white rounded-full overflow-hidden transition-all duration-300 hover:pr-14 active:scale-95 cursor-pointer shadow-xl shadow-zinc-200">
                  <span>View My Work</span>
                  <FaArrowRight className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <FaArrowRight className="group-hover:opacity-0 transition-all duration-300" />
                </button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <button className="flex items-center justify-center gap-3 border-2 border-zinc-200 px-10 py-4 rounded-full text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 transition-all duration-300 active:scale-95 cursor-pointer bg-white/50 backdrop-blur-sm">
                  Contact Me
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section - POP-OUT CIRCLE EFFECT */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 sm:w-[480px] sm:h-[480px] flex items-center justify-center">
              
              {/* 1. Background Aura/Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-cyan-100/0 rounded-full blur-[80px] -z-10 animate-pulse"></div>
              
              {/* 2. Rotating Decorative Border */}
              <div className="absolute w-[82%] h-[82%] border-2 border-dashed border-cyan-500/20 rounded-full animate-spin-slow"></div>
              
              {/* 3. The Main Pop-out Container */}
              <div className="relative w-[75%] h-[75%] group">
                
                {/* 4. The Circle Background (The "Portal") */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-zinc-200 rounded-full shadow-inner border-4 border-white overflow-hidden">
                   {/* Inner glow/shadow for depth */}
                   <div className="absolute inset-0 shadow-[inset_0_10px_40px_rgba(0,0,0,0.1)] rounded-full"></div>
                </div>

                {/* 5. The Image with "Pop-out" feel */}
                {/* We use rounded-full on the image to make it a circle, 
                    but the container doesn't have overflow-hidden so we can potentially let it pop if we had a transparent PNG.
                    With a regular photo, this makes it a beautiful high-end circle. */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl floating"
                >
                  <img
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                    src={profile}
                    alt="profile"
                  />
                </motion.div>

                {/* 6. Floating Glass Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 sm:top-10 sm:-right-10 bg-white/70 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/50 z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-200">
                      <span className="text-xs font-bold">JS</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">Expertise</p>
                      <p className="text-sm font-bold text-zinc-900 leading-none">React Native</p>
                    </div>
                  </div>
                </motion.div>

                {/* 7. Bottom Floating Experience Badge */}
                <motion.div 
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 bg-zinc-900/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl z-20 border border-zinc-800"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                       <div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-cyan-500"></div>
                       <div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-700"></div>
                    </div>
                    <p className="text-sm font-bold text-white tracking-tight">10+ Projects</p>
                  </div>
                </motion.div>
              </div>

              {/* Decorative side dots */}
              <div className="absolute top-1/4 -right-4 w-2 h-10 bg-cyan-600/20 rounded-full blur-sm"></div>
              <div className="absolute bottom-1/4 -left-4 w-2 h-10 bg-zinc-900/10 rounded-full blur-sm"></div>

            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-300 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-zinc-200 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ opacity: [0, 1, 0], y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-cyan-600 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
