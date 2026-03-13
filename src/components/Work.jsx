import React from "react";
import { projectData } from "../assets/asstes.js";
import { FaArrowRight, FaCode, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  return (
    <section id="work" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                Featured <span className="text-cyan-700 italic">Work</span>
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
                A collection of projects where I've combined design thinking with 
                technical expertise to create digital experiences.
              </p>
            </div>
            <motion.div 
              whileHover={{ x: 5 }}
              className="hidden md:block"
            >
              <a href="#contact" className="flex items-center gap-2 text-zinc-900 font-bold hover:text-cyan-700 transition-colors">
                Have a project in mind? <FaArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100 hover:border-cyan-200 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/5"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-zinc-200">
                <img
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 z-0"
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop";
                    e.target.onerror = null;
                  }}
                />
                <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/40 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
                   <div className="flex gap-4">
                      <button className="p-3 bg-white rounded-full text-zinc-900 hover:bg-cyan-600 hover:text-white transition-all transform hover:scale-110 shadow-lg cursor-pointer">
                        <FaGithub size={20} />
                      </button>
                      <button className="p-3 bg-white rounded-full text-zinc-900 hover:bg-cyan-600 hover:text-white transition-all transform hover:scale-110 shadow-lg cursor-pointer">
                        <FaExternalLinkAlt size={18} />
                      </button>
                   </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-cyan-800 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full uppercase tracking-widest">
                    Web App
                  </span>
                </div>
                
                <p className="text-zinc-600 mb-8 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                  {project.description}
                </p>

                {/* Tech Stack Interaction Zone */}
                <div className="relative min-h-[44px] flex items-center overflow-hidden">
                  {/* Default State: View Tools (Visible when NOT hovered) */}
                  <div className="group-hover:hidden flex items-center gap-2 text-zinc-400 font-medium text-sm transition-all duration-300">
                    <FaCode className="text-cyan-500/50" />
                    <span className="tracking-wide">View the tools used</span>
                    <motion.div 
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <FaArrowRight size={10} className="ml-1" />
                    </motion.div>
                  </div>

                  {/* Hover State: Skills Fade In (Visible when hovered) */}
                  <div className="hidden group-hover:flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1, 
                          y: 0,
                          transition: { delay: i * 0.05, duration: 0.3 } 
                        }}
                        className="px-3 py-1.5 bg-zinc-900 text-zinc-100 text-xs font-bold rounded-lg border border-zinc-800"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-20 bg-cyan-600 transition-all duration-500"></div>
              <div className="absolute top-0 left-0 h-2 w-0 group-hover:w-20 bg-cyan-600 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action at Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <button className="px-10 py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-cyan-800 transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer shadow-xl shadow-zinc-200">
            Explore All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
