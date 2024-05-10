"use client";
import style from "@/styles/Ticker/Ticker.module.css";
import "../../../styles/globals.css";

export default function Ticker() {
  return (
    <div className={`w-[100%] ${style.container} `}>
      <div className={`${style.content} w-[250%] md:w-[200%] `}>
        <span
          style={{ fontWeight: 300 }}
          className={`text-[24px] md:text-[42px] lg:text-[64px]  ${style.text}`}
        >
          WELCOME
        </span>
        <span
          style={{ fontWeight: 300 }}
          className={`text-[24px] md:text-[42px] lg:text-[64px] ${style.text} `}
        >
          ようこそ
        </span>
        <span
          style={{ fontWeight: 300 }}
          className={`text-[24px] md:text-[42px] lg:text-[64px] ${style.text} `}
        >
          BIENVENUE
        </span>
        <span
          style={{ fontWeight: 300 }}
          className={`text-[24px] md:text-[42px] lg:text-[64px] ${style.text}`}
        >
          WELCOME
        </span>
        <span
          style={{ fontWeight: 300 }}
          className={`text-[24px] md:text-[42px] lg:text-[64px] ${style.text} `}
        >
          ようこそ
        </span>
        <span
          style={{ fontWeight: 300 }}
          className={`text-[24px] md:text-[42px] lg:text-[64px] ${style.text} `}
        >
          BIENVENUE
        </span>
      </div>
    </div>
  );
}
