"use client";
import style from "@/styles/Ticker/Ticker.module.css";
import "../../../styles/globals.css";

export default function Ticker() {
  return (
    <div className={`w-full ${style.container} `}>
      <div className={`${style.content} `}>
        <span
          style={{ fontFamily: "Acline" }}
          className={`text-[64px]  ${style.text}`}
        >
          WELCOME
        </span>
        <span
          style={{ fontFamily: "Acline" }}
          className={`text-[64px] ${style.text} `}
        >
          ようこそ
        </span>
        <span
          style={{ fontFamily: "Acline" }}
          className={`text-[64px] ${style.text} `}
        >
          BIENVENUE
        </span>
        <span
          style={{ fontFamily: "Acline" }}
          className={`text-[64px] ${style.text}`}
        >
          WELCOME
        </span>
        <span
          style={{ fontFamily: "Acline" }}
          className={`text-[64px] ${style.text} `}
        >
          ようこそ
        </span>
        <span
          style={{ fontFamily: "Acline" }}
          className={`text-[64px] ${style.text} `}
        >
          BIENVENUE
        </span>
      </div>
    </div>
  );
}
