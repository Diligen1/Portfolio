"use client";
import style from "@/styles/Promo/Promo.module.css";
import "../../styles/globals.css";
import image from "../../../public/assets/image/ava.jpg";
import ButtonPromo from "../common/BTNworks/BTNworks";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";

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
        <div className={` w-[50%] `}>
          <div
            className={`${style.block_text} text-right h-[80%] flex flex-col justify-center gap-[15px]  px-[20px]`}
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
              className={`${style.title} cursor-default  text-[96px] tracking-[12px]`}
            >
              CREATOR
              <br />
              <span className={`${style.text_kuba} pt-[13px] pb-[14px]`}>
                KUBA
              </span>
            </h2>
            <p
              style={{ fontFamily: "Acline" }}
              className={`${style.text_text} cursor-default  text-[20px] tracking-[4px]`}
            >
              Опытный фронтенд-разработчик с обширным опытом работы в индустрии
              веб-технологий.
            </p>
          </div>
          <div className="flex items-end justify-end pr-[20px] ">
            <ButtonPromo />
          </div>
        </div>
        <div className={`w-[50%] flex justify-center items-center`}>
          <div
            className={`${style.image} relative w-[450px] h-[450px] rounded-[50%] overflow-hidden border-[5px]`}
          >
            <Image src={image} alt="ava" priority />
          </div>
        </div>
      </div>
    </main>
  );
}
