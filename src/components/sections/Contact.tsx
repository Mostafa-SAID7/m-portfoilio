"use client";

import React from "react";
import LordIcon from "../common/LordIcon";
import contactData from "@/data/contact.json";

const Contact: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{contactData.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{contactData.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col space-y-6">
          {contactData.info.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
              <LordIcon
                src={item.icon}
                trigger="hover"
                // colors="primary:#4f46e5,secondary:#a78bfa"
                // style={{ width: "60px", height: "60px" }}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.type}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <form className="space-y-4">
            <input
              type="text"
              placeholder={contactData.form.placeholders.name}
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="email"
              placeholder={contactData.form.placeholders.email}
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="text"
              placeholder={contactData.form.placeholders.subject}
              className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <textarea
              placeholder={contactData.form.placeholders.message}
              className="w-full p-3 h-32 rounded border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            ></textarea>
            <button className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
              {contactData.form.button}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
