"use client";
import style from "@/styles/Promo/Promo.module.css";
import "../../styles/globals.css";
import image from "../../../public/assets/image/ava.jpg";
import ButtonPromo from "../common/BTNworks/BTNworks";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
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
      <div className="w-full h-[700px] flex flex-row ">
        <div className={`w-[50%]`}>
          <div
            className={` border-r-[2px] border-[var(--border-color)] text-right h-[80%] flex flex-col justify-center gap-[15px]  px-[20px]`}
          >
            <motion.h3
              initial={{ x: -700 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.4 }}
              style={{ fontFamily: "Stark" }}
              className={` text-[var(--third-color)] cursor-default text-[24px] tracking-[10px]`}
            >
              {text}
              <span>
                <Cursor cursorStyle="<" cursorColor="var(--Thrid-color)" />
              </span>
            </motion.h3>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ fontFamily: "Stark" }}
              className={` text-[var(--text-color)] cursor-default  text-[96px] tracking-[12px]`}
            >
              CREATOR
              <br />
              <span
                className={` bg-[var(--third-color)] text-[var(--background-fon)] pt-[13px] pb-[14px]`}
              >
                KUBA
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              style={{ fontFamily: "Acline" }}
              className={` text-[var(--text-color)] cursor-default  text-[20px] tracking-[4px]`}
            >
              Опытный фронтенд-разработчик с обширным опытом работы в индустрии
              веб-технологий.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex items-end justify-end pr-[20px] "
          >
            <ButtonPromo />
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          className={`w-[50%] flex justify-center items-center`}
        >
          <div
            className={` ${style.image} hover:border-[var(--text-color)] duration-300  relative w-[450px] h-[450px] rounded-[50%] overflow-hidden border-[5px]`}
          >
            <Image src={image} alt="ava" priority property="null" />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
