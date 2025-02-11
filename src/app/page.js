"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-pink-100 text-red-700 p-8 sm:p-20">
      
      {/* Floating Hearts Animation */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <div className="absolute top-10 left-10 text-3xl">Wot</div>
        <div className="absolute top-20 right-10 text-2xl">😼</div>
        <div className="absolute top-40 left-20 text-xl">🎞</div>
      </motion.div>

      <main className="flex flex-col gap-8 items-center sm:items-start text-center sm:text-left">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-bold text-red-600">
          Happy Pookie Day to Average Nap Enjoyer! ❤️
            <p className="text-sm sm:text-base italic text-gray-500 mt-2">
              this mf def gon be revisiting this site
            </p>
        </h1>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <motion.a
            className="rounded-full border-2 border-red-400 bg-red-500 text-white px-6 py-3 text-lg font-medium hover:bg-red-600 transition-all shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/journey">Review  Our Journey 📸</Link>
            
          </motion.a>

          <motion.a
            className="rounded-full border-2 border-pink-400 bg-pink-500 text-white px-6 py-3 text-lg font-medium hover:bg-pink-600 transition-all shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/game">Play Game 🎮</Link>
          </motion.a>
          
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-5 text-sm text-gray-600">
        © 2025 Beater Wang, Inc. ❤️
      </footer>
    </div>
  );
}
