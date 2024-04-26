"use client";
import Link from "next/link";
import { useState } from "react";
import style from "@/styles/ButtonPromo/Button.module.css";

export default function ButtonPromo() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className="mx-auto">
      <Link href="/Works" className="w-[240px] h-[70px]">
        <div
          className={`${style.block} cursor-pointer overflow-hidden relative w-[240px] h-[60px]  rounded-[12px] flex flex-row items-center`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={` ${
              style.text_block
            } left-0 h-full border-r-[4px] transition-all duration-500 flex justify-center items-center ${
              isHovered ? "w-full" : "w-[40px]"
            }
            ${isHovered ? "border-transparent" : ""} `}
          >
            <p
              className={`${
                style.block_go
              }  transition-all duration-500 text-[20px] ${
                isHovered ? "opacity-100" : "opacity-0"
              } `}
            >
              GO
            </p>
          </div>
          <div
            className={`${
              style.block_icon
            } absolute w-[35px] h-[35px] left-[20px] rounded-[50%] transition-all duration-500 flex justify-center items-center  ${
              isHovered ? "left-[80%]" : "left-0"
            }
        ${
          isHovered
            ? "text-[var(--text-color)]"
            : "text-[var(--background-fon)]"
        }
        ${isHovered ? "bg-[var(--text-color)]" : "bg-[var(--background-fon)]"}`}
          >
            <i
              className={`${style.icon} fi fi-ts-angle-double-right h-[20px]  ${
                isHovered
                  ? "text-[var(--background-fon)]"
                  : "text-[var(--text-color)]"
              }`}
            ></i>
          </div>
          <p
            className={`${
              style.text_learn
            } absolute text-[20px] px-[20px] left-[50px] transition-all duration-500 
           ${isHovered ? "left-[200px] transform translate-x-[140px]" : ""}
           ${isHovered ? "opacity-0" : "opacity-100"}
           `}
          >
            LEARN MORE
          </p>
        </div>
      </Link>
    </main>
  );
}
