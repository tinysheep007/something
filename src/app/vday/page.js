"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function VDay() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-red-700 p-8 sm:p-20">
      
      {/* Title (Changes on Button Click) */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-red-600 mb-6"
        animate={{ scale: accepted ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {accepted ? "Yippeee! 🎉" : "Would you be my Valentine?"}
      </motion.h1>

      {/* Image (Changes on Button Click) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        key={accepted ? "after" : "before"} // Ensures animation when changing
      >
        <Image
          src={accepted ? "/after.png" : "/before.png"} // Change image on button click
          alt="Valentine Image"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Yes Button (Appears only if not accepted) */}
      {!accepted && (
        <motion.button
          className="mt-6 px-6 py-3 bg-green-500 text-white font-medium rounded-full shadow-lg hover:bg-green-600 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setAccepted(true)}
        >
          Yes 💚
        </motion.button>
      )}

      {/* Back to Home Button (Appears only after acceptance) */}
      {accepted && (
        <Link href="/">
          <motion.button
            className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-full shadow-lg hover:bg-red-600 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Back to Home ❤️
          </motion.button>
        </Link>
      )}
    </div>
  );
}
