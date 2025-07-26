"use client";

import React from "react";
import LordIcon from "@/components/common/LordIcon";
import footerData from "@/data/footer.json";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Copyright */}
        <div>
          <h2 className="text-2xl font-bold">M.Said</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          {footerData.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          {footerData.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <LordIcon
                src={social.icon}
                trigger="hover"
                colors={{ primary: "#fff", secondary: social.color }}
                size={40}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
