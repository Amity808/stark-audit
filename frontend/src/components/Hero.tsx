"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-purple-500 dark:text-purple-500 text-center">
          StarkAudit A Decentralized Platform To Audit Starknet Smart Contract Using AI
        </div>
        <div className="font-extralight text-base md:text-4xl text-white dark:text-white py-4">
          Audit your smart contract to improve your smart contract performance
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            <a href="/audit">Audit</a>
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
