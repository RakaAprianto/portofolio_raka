"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { stats, techStack } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Seorang pengembang yang bersemangat dan menyukai menciptakan solusi-solusi inovatif.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {isMobile ? (
              <div className="glass-strong rounded-3xl p-8 glow-blue">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Image 
                    src="/images/foto.webp" 
                    alt="Raka Aprianto" 
                    width={500}
                    height={500}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Raka Aprianto</h3>
                <p className="text-cyan-400 mb-4">Full Stack Developer</p>
                <p className="text-gray-400 leading-relaxed">
                  Saya merupakan fresh graduate yang aktif mengembangkan berbagai proyek teknologi selama masa studi, khususnya di bidang IoT, web development, dan machine learning. Saya menikmati proses mengubah ide menjadi solusi digital yang fungsional, efisien, dan berdampak.
                </p>
              </div>
            ) : (
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.02}
              >
                <div className="glass-strong rounded-3xl p-8 glow-blue">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Image 
                    src="/images/foto.webp" 
                    alt="Raka Aprianto" 
                    width={500}
                    height={500}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Raka Aprianto</h3>
                <p className="text-cyan-400 mb-4">Full Stack Developer</p>
                <p className="text-gray-400 leading-relaxed">
                  Saya merupakan fresh graduate yang aktif mengembangkan berbagai proyek teknologi selama masa studi, khususnya di bidang IoT, web development, dan machine learning. Saya menikmati proses mengubah ide menjadi solusi digital yang fungsional, efisien, dan berdampak.
                </p>
              </div>
            </Tilt>
            )}
          </motion.div>

          {/* Tech Stack */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.2, delay: 0.3 + index * 0.02 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-full text-sm hover:border-blue-400 hover:bg-blue-500/20 transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
