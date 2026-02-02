import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable", "Accessible", "Innovative"];
  const variants = { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } };

  return (
    <div className="z-10 mt-20 text-center md:mt-32 md:text-left">
      {/* Desktop */}
      <div className="hidden md:flex flex-col c-space">
        <motion.h1
          className="text-4xl font-semibold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Hi, I’m Abhinav
        </motion.h1>

        {/* one-liner only (no long bio here) */}
        <motion.p
          className="mt-2 text-xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
        >
          Developer · Cybersecurity Specialist · EdTech Strategist
        </motion.p>

        <div className="flex flex-col items-start mt-6">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            I build
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            aria-label="Adjectives describing my solutions"
          >
            <FlipWords words={words} duration={2800} className="text-6xl font-black text-white" />
          </motion.div>

          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            solutions for the future.
          </motion.p>

          {/* subtle keywords row (kept short) */}
          <motion.p
            className="mt-6 text-md text-shadow-neutral-200"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.15 }}
          >
            Generative AI • Cybersecurity • Full-Stack Development • Tech Pedagogy
          </motion.p>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col space-y-3">
        <motion.h1
          className="text-3xl font-semibold text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          Hi, I’m Abhinav
        </motion.h1>

        <motion.p
          className="text-base text-neutral-400"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.45 }}
        >
          Developer · Cybersecurity · EdTech
        </motion.p>

        <motion.p
          className="text-2xl font-bold text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          I build
        </motion.p>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.75 }}
        >
          <FlipWords words={words} duration={2800} className="text-5xl font-extrabold text-white" />
        </motion.div>

        <motion.p
          className="text-2xl font-bold text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
        >
          solutions for the future.
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
