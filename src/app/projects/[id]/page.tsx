"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Github, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";
import Image from "next/image";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = parseInt(params.id as string);
  
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push("/#projects")}
            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.push("/#projects")}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Projects
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="glass-strong rounded-3xl overflow-hidden glow-blue">
              <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Action Buttons */}
              <div className="p-4 sm:p-6">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl hover:shadow-xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">View on GitHub</span>
                  <span className="sm:hidden">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Category */}
            <div className="inline-block px-4 py-2 glass rounded-full text-xs sm:text-sm text-cyan-400 border border-cyan-500/30">
              {project.category}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
              {project.title}
            </h1>

            {/* Description */}
            <div className="glass rounded-2xl p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Deskripsi Project</h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="glass rounded-2xl p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-xs sm:text-sm hover:border-blue-400 hover:bg-blue-500/30 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="glass rounded-2xl p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Fitur Utama</h2>
              <ul className="space-y-2 sm:space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-400">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Additional Info */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="glass rounded-2xl p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-gray-500 mb-2">Status</div>
                <div className="text-base sm:text-lg font-semibold text-gradient">
                  Completed
                </div>
              </div>
              <div className="glass rounded-2xl p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-gray-500 mb-2">Type</div>
                <div className="text-base sm:text-lg font-semibold">{project.category}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 sm:mt-20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
            Project Lainnya
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {projects
              .filter((p) => p.id !== projectId && p.category === project.category)
              .slice(0, 3)
              .map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => router.push(`/projects/${relatedProject.id}`)}
                  className="glass rounded-2xl overflow-hidden hover-lift cursor-pointer group"
                >
                  <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <Image 
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      width={400}
                      height={192}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="text-xs text-cyan-400 mb-1 sm:mb-2">
                      {relatedProject.category}
                    </div>
                    <h3 className="font-bold text-sm sm:text-lg group-hover:text-gradient transition-all line-clamp-2">
                      {relatedProject.title}
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
