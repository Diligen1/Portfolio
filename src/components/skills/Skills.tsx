"use client";
import Image from "next/image";
import "../../styles/globals.css";
import { icon } from "@/utils/icon";
import style from "@/styles/Skills/Skills.module.css";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <main className="mx-auto">
      <div className="w-full h-[300px] flex flex-col gap-[40px] items-center">
        <div
          className={`${style.text} text-[48px] flex justify-center `}
          style={{ fontFamily: "Acline" }}
        >
          SKILLS
        </div>
        <div className="w-[80%] h-[400px] flex flex-wrap gap-[40px] justify-center">
          {icon.map((e, index) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.4 }}
              key={index}
              className={`${style.block_icon} border-[2px] w-[100px] h-[100px] rounded-[50%] bg-slate-400 flex justify-center items-center `}
            >
              <Image
                src={e.image}
                alt={e.text}
                property=""
                className="w-[60px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
