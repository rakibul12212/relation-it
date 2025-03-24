"use client";
import { motion } from "framer-motion";
const letters = "Loading...".split("");
export default function Loading() {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      {" "}
      <div className="flex space-x-1 text-2xl font-bold text-white ">
        {" "}
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            className="inline-block w-[1ch] text-center will-change-transform"
          >
            {" "}
            {letter}{" "}
          </motion.span>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
