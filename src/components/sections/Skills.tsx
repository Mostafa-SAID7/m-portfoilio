"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import skillsData from "@/data/skills.json";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // حركة Parallax للشكلين
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={ref} className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Parallax Background Shapes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-10 left-[-50px] w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-10 right-[-50px] w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {skillsData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
        >
          {skillsData.subtitle}
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsData.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable={true}
                glareColor="white"
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-2xl transition"
              >
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
