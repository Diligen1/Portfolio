"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function ButtonRelax() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/#work" className="w-[240px] h-[70px]">
      <div
        className={` bg-[var(--text-color)] cursor-pointer overflow-hidden relative w-[240px] h-[60px]  rounded-[12px] flex flex-row items-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={` bg-[var(--third-color)] border-[var(--background-fon)] left-0 h-full border-r-[4px] transition-all duration-500 flex justify-center items-center ${
            isHovered ? "w-full" : "w-[40px]"
          }
            ${isHovered ? "border-transparent" : ""} `}
        >
          <p
            className={` text-[var(--background-fon)]  transition-all duration-500 text-[20px] ${
              isHovered ? "opacity-100" : "opacity-0"
            } `}
          >
            ВКЛЮЧИТЬ
          </p>
        </div>
        <div
          className={` bg-[var(--background-fon)] absolute w-[35px] h-[35px] left-[20px] rounded-[50%] transition-all duration-500 flex justify-center items-center  ${
            isHovered ? "left-[80%]" : "left-0"
          }
        ${
          isHovered
            ? "text-[var(--background-fon)]"
            : "text-[var(--text-color)]"
        }
        ${isHovered ? "bg-[var(--text-color)]" : "bg-[var(--background-fon)]"}`}
        >
          <i className="fi fi-ts-angle-double-right text-[16px] h-[20px]"></i>
        </div>
        <p
          className={` text-[var(--background-fon)] absolute text-[20px] px-[20px] left-[50px] transition-all duration-500 
           ${isHovered ? "left-[200px] transform translate-x-[140px]" : ""}
           ${isHovered ? "opacity-0" : "opacity-100"}
           `}
        >
          LEARN MORE
        </p>
      </div>
    </Link>
  );
}
