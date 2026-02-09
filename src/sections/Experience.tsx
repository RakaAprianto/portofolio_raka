"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional experience and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="relative pl-8 sm:pl-16 md:pl-32 py-6 sm:py-8 group"
            >
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent" />

              {/* Timeline Dot */}
              <div className="absolute left-0 top-6 sm:top-8 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>

              {/* Year Badge */}
              <div className="absolute left-0 top-0 sm:top-auto sm:top-4 md:left-auto md:right-full md:mr-8 glass px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-cyan-400 whitespace-nowrap">
                {item.year}
              </div>

              {/* Content Card */}
              <div className="glass-strong rounded-2xl p-4 sm:p-6 hover:glow-blue transition-all duration-300 hover-lift mt-10 sm:mt-0">
                <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-cyan-400 mb-3 text-sm sm:text-base">{item.company}</p>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
