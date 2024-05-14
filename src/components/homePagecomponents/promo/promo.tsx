"use client";
import style from "@/styles/headermobile/headermobile.module.css";
import Linii from "@/components/common/animation/linia";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
export default function Promo() {
  const [text] = useTypewriter({
    words: ["DEVELOPER", "DESIGNER", "RELAXING"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 10000,
  });
  return (
    <main className="mx-auto">
      <div className="w-full h-[100vh] flex justify-center items-center relative">
        <div
          className={` ${style.shadow} w-[620px] h-[620px] bg-[var(--third-color)] rounded-[50%]  absolute z-[-10] border-[2px] border-[var(--text-color)]`}
        ></div>
        <div className="flex flex-col justify-around items-center gap-[40px]">
          <p className="tracking-[15px] cursor-default text-[96px] text-[var(--text-color)]">
            CREATOR KUBA
          </p>
          <p className="text-[42px] text-[var(--text-color)] tracking-[10px]">
            {text}
            <span>
              <Cursor cursorStyle="<" cursorColor="var(--Thrid-color)" />
            </span>
          </p>
        </div>
        <div className="absolute left-[100px]">
          <Linii />
        </div>
        <motion.div className="h-[50px] overflow-hidden absolute bottom-[20px] right-[20px] flex flex-row gap-[10px] justify-center items-center">
          <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="w-[15px] h-[15px] rounded-[50%] bg-[var(--third-color)]"
          ></motion.div>
          <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="w-[15px] h-[15px] rounded-[50%] bg-[var(--third-color)]"
          ></motion.div>
          <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-[15px] h-[15px] rounded-[50%] bg-[var(--third-color)]"
          ></motion.div>
        </motion.div>
      </div>
    </main>
  );
}
