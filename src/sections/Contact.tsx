"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";

const socialIconMap: { [key: string]: any } = {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Mail,
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
           Punya ide proyek? Mari berdiskusi dan wujudkan bersama!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">
                Let&apos;s talk about your project
              </h3>
              <p className="text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto">
                Saya selalu terbuka untuk berdiskusi mengenai proyek baru, ide-ide kreatif, atau peluang untuk menjadi bagian dari visi Anda. Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-lg hover:text-gradient transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="text-lg">{personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-6">Follow Me</h4>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => {
                  const IconComponent = socialIconMap[social.icon];
                  const isEmail = social.url.startsWith('mailto:');
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      {...(!isEmail && { target: "_blank", rel: "noopener noreferrer" })}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 glass-strong rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-cyan-500/20 transition-all"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
