"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Linii() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [isAnimationNumber, setIsAnimationNumber] = useState(false);
  const [isAnimationString, setIsAnimationString] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setIsAnimationNumber(true);
    }, 1200);

    const timer3 = setTimeout(() => {
      setIsAnimationString(true);
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(false);
      setIsAnimationNumber(false);
      setIsAnimationString(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAnimationComplete, isAnimationNumber, isAnimationString]);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsAnimationComplete(false);
      setIsAnimationNumber(false);
      setIsAnimationString(false);

      setTimeout(() => {
        setIsAnimationComplete(true);
        setIsAnimationNumber(true);
        setIsAnimationString(true);
      }, 100);
    }, 2100);

    return () => clearTimeout(animationTimer);
  }, [isAnimationComplete, isAnimationNumber, isAnimationString]);

  return (
    <main className="mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-row justify-center items-center gap-[20px]"
      >
        <p
          className={` transition-all duration-500 text-[var(--text-color)] text-[20px]`}
        >
          01
        </p>
        <Link href="/" className="flex flex-col gap-[20px]">
          <div
            className={`w-[50px] h-[2px] bg-[var(--text-color)] transition-all duration-500 ${
              isAnimationComplete ? "w-[100px] transform" : "w-0"
            }`}
          ></div>
          <div
            className={`w-[50px] h-[2px] bg-[var(--text-color)] transition-all duration-500 ${
              isAnimationNumber ? "w-[100px] transform" : "w-0"
            }`}
          ></div>
          <div
            className={`w-[50px] h-[2px] bg-[var(--text-color)] transition-all duration-500 ${
              isAnimationString ? "w-[100px] transform" : "w-0"
            }`}
          ></div>
        </Link>
      </motion.div>
    </main>
  );
}
