"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import servicesData from "@/data/services.json";
import LordIcon from "@/components/common/LordIcon";

export default function Services() {
  return (
    <section className="relative py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {servicesData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
        >
          {servicesData.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service, index) => (
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
                glareMaxOpacity={0.15}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-2xl transition"
              >
                <LordIcon
                  src={service.icon}
                  trigger="hover"
                  colors="primary:#4f46e5,secondary:#60a5fa"
                  style={{ width: "80px", height: "80px", margin: "auto" }}
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {service.description}
                </p>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
