import React, { useState, useEffect } from "react";
import { navMenu } from "../assets/asstes";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full transition-all duration-500 z-50 ${
        scrolled ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            <a href="#hero" className="flex items-center gap-1 group">
              <span className="text-zinc-900">THE-</span>
              <span className="text-cyan-700 font-orbitron group-hover:text-cyan-500 transition-colors">BRIJESH</span>
              <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full animate-pulse"></span>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center bg-zinc-50/50 border border-zinc-200/50 backdrop-blur-md rounded-full px-2 py-1.5"
          >
            {navMenu.map((item, index) => (
              <a 
                key={index} 
                href={`#${item.toLowerCase()}`}
                className="px-6 py-2 text-sm font-medium text-zinc-600 hover:text-cyan-700 transition-all relative group"
              >
                {item}
                <span className="absolute bottom-1.5 left-6 right-6 h-0.5 bg-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
              </a>
            ))}
          </motion.div>

          {/* Action Button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <a
              href="https://drive.google.com/file/d/1OBDRMJH8L5pEVviq96_XkNhpH4IggtTX/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group relative flex items-center gap-2 px-8 py-3 bg-zinc-900 text-white rounded-full overflow-hidden transition-all hover:bg-zinc-800 active:scale-95 cursor-pointer">
                <span className="relative z-10 text-sm font-bold">Resume</span>
                <FaDownload className="relative z-10 text-xs group-hover:translate-y-0.5 transition-transform" />
              </button>
            </a>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-900"
            >
              <div className="w-6 h-0.5 bg-current mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-current mb-1.5"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navMenu.map((item, index) => (
                <a 
                  key={index} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold text-zinc-800 hover:text-cyan-700 transition-colors"
                >
                  {item}
                </a>
              ))}
              <a href="#" className="mt-4 px-8 py-4 bg-zinc-900 text-white rounded-2xl text-center font-bold">
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
