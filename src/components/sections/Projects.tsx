"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import projectsData from "@/data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          {projectsData.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project, index) => (
            <Tilt key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
