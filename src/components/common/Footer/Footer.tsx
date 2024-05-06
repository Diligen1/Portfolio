"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <main className="mx-auto">
      <div className="bg-[var(--second-color)] w-full h-[250px] relative flex flex-row items-end justify-around">
        <div className=" flex flex-row justify-center items-center absolute rounded-[16px] top-[-110px] w-[80%] h-[220px] border-[20px] bg-[var(--second-color)] border-[var(--background-fon)] left-[50%] translate-x-[-50%]">
          <div className="w-[20%]">
            <p className="text-[32px] pl-[20px] text-[var(--text-color)]">
              SOCIAL <br /> NETWORK
            </p>
          </div>
          <div className="w-[80%] h-full flex  flex-wrap justify-around items-center">
            <a
              href="https://web.telegram.org/a/#-4070266759"
              className="w-[80px] h-[80px] flex justify-center text-[var(--text-color)]  items-center border-[4px] hover:text-[var(--third-color)] hover:scale-125 duration-300 hover:border-[var(--text-color)] bg-[var(--background-fon)] rounded-[8px] border-[var(--border-color)]"
            >
              <i className="fi fi-brands-telegram  text-[32px] h-[38px]"></i>
            </a>
            <a
              href="https://wa.me/996500254220"
              className="w-[80px] h-[80px] flex justify-center text-[var(--text-color)]  items-center border-[4px] hover:text-[var(--third-color)] hover:scale-125 duration-300 hover:border-[var(--text-color)] bg-[var(--background-fon)] rounded-[8px] border-[var(--border-color)]"
            >
              <i className="fi fi-brands-whatsapp text-[32px] h-[38px]"></i>
            </a>
            <a
              href="https://www.tiktok.com/@ku._.ch"
              className="w-[80px] h-[80px] flex justify-center text-[var(--text-color)]  items-center border-[4px] hover:text-[var(--third-color)] hover:scale-125 duration-300 hover:border-[var(--text-color)] bg-[var(--background-fon)] rounded-[8px] border-[var(--border-color)]"
            >
              <i className="fi fi-brands-tik-tok text-[32px] h-[38px]"></i>
            </a>
            <a
              href="https://www.instagram.com/ku._.ch/"
              className="w-[80px] h-[80px] flex justify-center text-[var(--text-color)]  items-center border-[4px] hover:text-[var(--third-color)] hover:scale-125 duration-300 hover:border-[var(--text-color)] bg-[var(--background-fon)] rounded-[8px] border-[var(--border-color)]"
            >
              <i className="fi fi-brands-instagram  text-[32px] h-[38px]"></i>
            </a>
            <a
              href="https://github.com/Diligen1"
              className="w-[80px] h-[80px] flex justify-center text-[var(--text-color)]  items-center border-[4px] hover:text-[var(--third-color)] hover:scale-125 duration-300 hover:border-[var(--text-color)] bg-[var(--background-fon)] rounded-[8px] border-[var(--border-color)]"
            >
              <i className="fi fi-brands-github text-[32px] h-[38px]"></i>
            </a>
            <a
              href="https://gitlab.com/kuba.2000.0505.kg"
              className="w-[80px] h-[80px] flex justify-center text-[var(--text-color)]  items-center border-[4px] hover:text-[var(--third-color)] hover:scale-125 duration-300 hover:border-[var(--text-color)] bg-[var(--background-fon)] rounded-[8px] border-[var(--border-color)]"
            >
              <i className="fi fi-brands-gitlab text-[32px] h-[38px]"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center pb-[40px]">
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-[var(--text-color)] rounded-[8px] text-[var(--background-fon)] text-[32px]">
            CK
          </div>
          <p className="text-[var(--text-color)] pl-[20px] tracking-[8px]">
            CREATOR <br /> KUBA
          </p>
        </div>
        <div className="w-[70%] pb-[60px] flex flex-row justify-evenly items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/#work"
              className={`  duration-300 hover:text-[var(--third-color)] text-[var(--text-color)] tracking-[2px] text-[14px] text-underline`}
            >
              WORKS
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <Link
              href="/#skill"
              className={`text-[var(--text-color)] duration-300 hover:text-[var(--third-color)] tracking-[2px] text-[14px] text-underline`}
            >
              SKILLS
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <Link
              href="/#relax"
              className={` text-[var(--text-color)] duration-300 hover:text-[var(--third-color)] tracking-[2px] text-[14px] text-underline`}
            >
              RELAX
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <Link
              href="/"
              className={`text-[var(--text-color)] duration-300 hover:text-[var(--third-color)] tracking-[2px] text-[14px] text-underline`}
            >
              CONTACT
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
