import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { navMenu } from "../assets/asstes";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-zinc-100 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-50 rounded-full blur-[120px] -z-10 translate-x-1/3 translate-y-1/3 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-bold tracking-tighter text-zinc-900">THE-</span>
              <span className="text-2xl font-bold tracking-tighter text-cyan-700 font-orbitron">BRIJESH</span>
              <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
            </div>
            <p className="text-zinc-500 text-lg max-w-sm mb-8 leading-relaxed">
              Designing and developing high-quality web experiences with a focus on 
              performance, accessibility, and modern aesthetics.
            </p>
            <div className="flex gap-4">
              {[
                { icon: FaGithub, href: "https://github.com/Brijesh708961", label: "GitHub" },
                { icon: FaTwitter, href: "https://x.com/Brijesh91173661", label: "Twitter" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", label: "LinkedIn" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-600 hover:bg-cyan-600 hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navMenu.map((item, i) => (
                <li key={i}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-zinc-500 hover:text-cyan-700 transition-colors font-medium"
                  >
                    <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Snippet */}
          <div>
            <h4 className="text-sm font-black text-zinc-900 uppercase tracking-widest mb-8">Get in touch</h4>
            <p className="text-zinc-500 mb-2 font-medium">Have a question?</p>
            <a href="mailto:brijesh.dev@outlook.com" className="text-zinc-900 font-bold hover:text-cyan-700 transition-colors block mb-6">
              brijesh.dev@outlook.com
            </a>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer group"
            >
              Back to top <FaArrowUp size={10} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-sm font-medium">
            &copy; {new Date().getFullYear()} <span className="text-zinc-900">The-Brijesh</span>. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 hover:text-zinc-900 text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 text-sm font-medium transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
