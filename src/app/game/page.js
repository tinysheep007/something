"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Game() {
  const correctAnswer = "A";
  const [answer, setAnswer] = useState(["V", "_", "N"]);
  const [choices, setChoices] = useState(["A", "B", "C", "D"]);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChoice = (choice) => {
    if (choice === correctAnswer) {
      setAnswer(["V", "A", "N"]); // Reveal the correct answer
      setIsCorrect(true); // Change title & show GIF
    } else {
      setChoices(choices.filter((c) => c !== choice)); // Remove incorrect choice
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-700 p-8 sm:p-20">
      
      {/* Dynamic Title */}
      <h1 className="text-3xl sm:text-5xl font-bold text-red-600 mb-6">
        {isCorrect ? "Muah! 😽" : "Guess Beater’s Favorite Person!"}
      </h1>

      {/* GIF Appears After Correct Answer */}
      {isCorrect && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Image
            src="/catKiss.gif" // Replace with the actual GIF file in public/ folder
            alt="Muah Kiss GIF"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      )}

      {/* Answer Display */}
      <p className="text-2xl sm:text-4xl font-mono bg-white px-4 py-2 rounded-lg shadow-lg">
        {answer.join(" ")}
      </p>

      {/* Answer Choices */}
      <div className="flex gap-4 mt-6">
        {choices.map((choice) => (
          <motion.button
            key={choice}
            onClick={() => handleChoice(choice)}
            className="text-lg sm:text-xl font-bold px-4 py-2 rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 transition-all"
            whileTap={{ scale: 0.9 }}
          >
            {choice}
          </motion.button>
        ))}
      </div>

      {/* Return Home Button */}
      <Link href="/">
        <motion.button
          className="mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-full shadow-lg hover:bg-red-600 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Back to Home ❤️
        </motion.button>
      </Link>

      <footer className="absolute bottom-5 text-sm text-gray-600">
        © 2025 Beater Wang, Inc. ❤️
      </footer>
    </div>
  );
}
