"use client";

import { motion } from "motion/react";
import { LampContainer } from "../components/ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 170}}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="mt-[40px]">
          <h1 className="text-white text-[2rem] font-semibold">My Experties</h1>
          <h1 className="text-white lg:text-[4rem] text-[2rem] font-semibold">
            What <span className="text-[#88ab8e]">I can do</span>
          </h1>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
