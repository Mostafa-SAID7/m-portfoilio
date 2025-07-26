"use client";
import './globals.css';
import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';
import AOS from 'aos';
 import Script from "next/script";

export default function RootLayout({ children }: { children: ReactNode }) {
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.lordicon.com/ritcuqlt.js" strategy="beforeInteractive" />
      </head>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        
      </body>
    </html>
  );
}
