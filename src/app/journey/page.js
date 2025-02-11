"use client";
import photoData from "./photo";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Journey() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevPhoto = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextPhoto = () => {
    if (currentIndex < photoData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-red-700 p-8 sm:p-20">
      
      {/* Photo Title */}
      <h1 className="text-3xl sm:text-5xl font-bold text-red-600 mb-4">
        {photoData[currentIndex].title}
      </h1>

      {/* Photo Gallery */}
      <div className="relative w-full max-w-md sm:max-w-lg">
        
        {/* BACKWARD BUTTON - Hidden on first image */}
        {currentIndex > 0 && (
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition-all z-10"
            onClick={prevPhoto}
            whileTap={{ scale: 0.9 }}
          >
            ⬅️
          </motion.button>
        )}

        {/* Image Animation */}
        <div className="w-full overflow-hidden rounded-lg shadow-lg relative h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={photoData[currentIndex].src}
              className="absolute w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <Image
                src={photoData[currentIndex].src}
                alt={photoData[currentIndex].title}
                width={400}
                height={400}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FORWARD BUTTON - Hidden on last image */}
        {currentIndex < photoData.length - 1 && (
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition-all z-10"
            onClick={nextPhoto}
            whileTap={{ scale: 0.9 }}
          >
            ➡️
          </motion.button>
        )}
      </div>

      {/* Date & Time */}
      <p className="mt-4 text-lg text-gray-700 italic">
        {photoData[currentIndex].date}
      </p>

      {/* Unique Comment */}
      <p className="mt-2 text-center text-gray-600 text-sm sm:text-base max-w-md">
        "{photoData[currentIndex].comment}"
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        
        {/* Back to Home Button */}
        <Link href="/">
          <motion.button
            className="px-6 py-3 bg-red-500 text-white font-medium rounded-full shadow-lg hover:bg-red-600 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/">Back to Home ❤️</Link>
            
          </motion.button>
        </Link>

        {/* NEXT Button - Only Appears on Last Image */}
        {currentIndex === photoData.length - 1 && (
          <motion.button
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-full shadow-lg hover:bg-green-600 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="/vday">Next 💘</Link>
            
          </motion.button>
        )}
      </div>
      <footer className="absolute bottom-5 text-sm text-gray-600">
        © 2025 Beater Wang, Inc. ❤️
      </footer>
    </div>
  );
}
