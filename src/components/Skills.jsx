import React from "react";
import { skillsData } from "../assets/asstes";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-8 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4">
              Technical <span className="text-cyan-700">Expertise</span>
            </h2>
            <div className="w-20 h-1.5 bg-cyan-600 rounded-full mx-auto md:mx-0"></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-600 max-w-md text-center md:text-right leading-relaxed"
          >
            Specialized in building high-performance web applications using modern technologies and best practices.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-white border border-zinc-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-500"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-500">
                <skill.icon className="w-7 h-7 text-zinc-700 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-zinc-900 mb-4">{skill.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-zinc-50 px-2 py-1 rounded group-hover:text-cyan-700 group-hover:bg-cyan-50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Decorative background number */}
              <span className="absolute top-4 right-6 text-4xl font-black text-zinc-50 z-0 group-hover:text-cyan-50 transition-colors">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-cyan-600 flex items-center justify-center">
                   <div className="w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
                </div>
              ))}
            </div>
            <p className="text-zinc-400 text-sm font-medium">Always learning new technologies to stay ahead in the industry.</p>
          </div>
          <button className="px-8 py-3 bg-cyan-600 text-white rounded-xl font-bold hover:bg-cyan-500 transition-all active:scale-95 cursor-pointer whitespace-nowrap">
            View full roadmap
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
