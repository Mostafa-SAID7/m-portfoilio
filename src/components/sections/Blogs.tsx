"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import blogsData from "@/data/blogs.json";
import Image from "next/image";

export default function Blogs() {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {blogsData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
        >
          {blogsData.subtitle}
        </motion.p>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.blogs.map((blog, index) => (
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
                glareMaxOpacity={0.1}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{blog.date}</p>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <a
                    href={blog.link}
                    className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
