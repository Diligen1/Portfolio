"use client";
import style from "@/styles/Promo/Promo.module.css";
import "../../styles/globals.css";
import ButtonPromo from "../common/BTNworks/BTNworks";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect } from "react";

export default function Promo() {
  const [text] = useTypewriter({
    words: ["DEVELOPER", "DESIGNER", "RELAXING"],
    loop: 3,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 10000,
  });
  return (
    <main className="mx-auto">
      <div className="w-full h-[700px] flex flex-row ">
        <div className={` w-[50%] `}>
          <div
            className={`${style.block_text} text-right h-[80%] flex flex-col justify-center gap-[15px] pr-[20px]`}
          >
            <h3
              style={{ fontFamily: "Stark" }}
              className={`${style.developer} cursor-default text-[24px] tracking-[10px]`}
            >
              {text}
              <span>
                <Cursor cursorStyle="<" cursorColor="var(--Thrid-color)" />
              </span>
            </h3>
            <h2
              style={{ fontFamily: "Stark" }}
              className={`${style.title} cursor-default  text-[96px] tracking-[9px]`}
            >
              CREATOR
              <br />
              KUBA
            </h2>
            <p
              style={{ fontFamily: "Acline" }}
              className={`${style.text_text} cursor-default  text-[20px] tracking-[4px]`}
            >
              Опытный фронтенд-разработчик с обширным опытом работы в индустрии
              веб-технологий.
            </p>
          </div>
          <div className="flex items-end justify-end">
            <ButtonPromo />
          </div>
        </div>
        <div className={` w-[50%]`}></div>
      </div>
    </main>
  );
}
