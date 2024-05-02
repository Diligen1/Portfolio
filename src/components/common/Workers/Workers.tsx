"use client";
import style from "@/styles/Workers/Workers.module.css";
import "../../../styles/globals.css";
import Image from "next/image";
import { motion } from "framer-motion";
import image from "../../../../public/assets/image/8 Types of Graphic Design Careers to Explore (2022).gif";
import image_2 from "../../../../public/assets/image/Landscape shooting stars.gif";
import image_3 from "../../../../public/assets/image/coffee cup gif.gif";

export default function Workers() {
  return (
    <main id="work">
      <div className="w-full h-[700px] flex justify-center items-center flex-wrap gap-[100px]">
        <div
          className={`${style.contain} relative w-[350px] h-[580px] rounded-[18px] border-[2px] flex flex-col justify-evenly`}
        >
          <div className={` flex flex-row justify-around items-center `}>
            <div className="w-[65%]">
              <p
                className={` text-[30px] m-0 p-0 ${style.number}`}
                style={{ fontFamily: "Caviar" }}
              >
                01
              </p>
              <p
                className={` text-[16px] ${style.number}`}
                style={{ fontFamily: "Stark" }}
              >
                Programming courses
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`${style.block_icon} w-[60px] h-[60px] rounded-[8px] border-[3px] flex justify-center items-center`}
            >
              <i className="fi fi-ss-bulb text-[30px] h-[36px]"></i>
            </motion.div>
          </div>
          <div className="w-full overflow-hidden flex justify-center items-center">
            <div
              className={`${style.block_image} w-[90%] h-[310px] border-[10px] rounded-[8px] overflow-hidden flex justify-center items-center`}
            >
              <Image src={image} alt="Booster-school" className="scale-[1.5]" />
            </div>
          </div>
          <div className="px-[20px]">
            <p
              className={`${style.title} text-[26px] pb-[10px]`}
              style={{ fontFamily: "Stark" }}
            >
              Booster-school
            </p>
            <p
              className={`${style.title} pb-[20px]`}
              style={{ fontFamily: "Gilroy" }}
            >
              Принимал участие в разработке сайта курсов по программированию.
            </p>
          </div>
          <a
            href="https://booster-school.vercel.app/"
            className="absolute bottom-[-25px] left-[20px]"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", duration: 0.3 }}
              className={`${style.btn} w-[50px] h-[50px] rounded-[50%] flex justify-center items-center border-[2px]`}
            >
              <i className="fi fi-ss-arrow-small-right text-[28px] h-[34px]"></i>
            </motion.div>
          </a>
        </div>
        <div
          className={`${style.contain} relative w-[350px] h-[580px] rounded-[18px] border-[2px] flex flex-col justify-evenly`}
        >
          <div className={` flex flex-row justify-around items-center `}>
            <div className="w-[65%]">
              <p
                className={` text-[30px] m-0 p-0 ${style.number}`}
                style={{ fontFamily: "Caviar" }}
              >
                02
              </p>
              <p
                className={` text-[16px] ${style.number}`}
                style={{ fontFamily: "Stark" }}
              >
                Hiking in the mountains
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`${style.block_icon} w-[60px] h-[60px] rounded-[8px] border-[3px] flex justify-center items-center`}
            >
              <i className="fi fi-ss-bulb text-[30px] h-[36px]"></i>
            </motion.div>
          </div>
          <div className="w-full overflow-hidden flex justify-center items-center">
            <div
              className={`${style.block_image} w-[90%] h-[310px] border-[10px] rounded-[8px] overflow-hidden flex justify-center items-center`}
            >
              <Image
                src={image_2}
                alt="Booster-school"
                className="scale-[1.5]"
              />
            </div>
          </div>
          <div className="px-[20px]">
            <p
              className={`${style.title} text-[26px] pb-[10px]`}
              style={{ fontFamily: "Stark" }}
            >
              Horse-and-Travel
            </p>
            <p
              className={`${style.title} pb-[20px]`}
              style={{ fontFamily: "Gilroy" }}
            >
              Принимал участие в разработке сайта Похода в горы.
            </p>
          </div>
          <a
            href="https://horse-travel.com/"
            className="absolute bottom-[-25px] left-[20px]"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", duration: 0.3 }}
              className={`${style.btn} w-[50px] h-[50px] rounded-[50%] flex justify-center items-center border-[2px]`}
            >
              <i className="fi fi-ss-arrow-small-right text-[28px] h-[34px]"></i>
            </motion.div>
          </a>
        </div>
        <div
          className={`${style.contain} relative w-[350px] h-[580px] rounded-[18px] border-[2px] flex flex-col justify-evenly`}
        >
          <div className={` flex flex-row justify-around items-center `}>
            <div className="w-[65%]">
              <p
                className={` text-[30px] m-0 p-0 ${style.number}`}
                style={{ fontFamily: "Caviar" }}
              >
                03
              </p>
              <p
                className={` text-[16px] ${style.number}`}
                style={{ fontFamily: "Stark" }}
              >
                In developing
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`${style.block_icon} w-[60px] h-[60px] rounded-[8px] border-[3px] flex justify-center items-center`}
            >
              <i className="fi fi-ss-bulb text-[30px] h-[36px]"></i>
            </motion.div>
          </div>
          <div className="w-full overflow-hidden flex justify-center items-center">
            <div
              className={`${style.block_image} w-[90%] h-[310px] border-[10px] rounded-[8px] overflow-hidden flex justify-center items-center`}
            >
              <Image
                src={image_3}
                alt="Booster-school"
                className="scale-[1.5]"
              />
            </div>
          </div>
          <div className="px-[20px]">
            <p
              className={`${style.title} text-[26px] pb-[10px]`}
              style={{ fontFamily: "Stark" }}
            >
              Realm-Sayan
            </p>
            <p
              className={`${style.title} pb-[20px]`}
              style={{ fontFamily: "Gilroy" }}
            >
              На данный момент работаю над чатом.
            </p>
          </div>
          <a
            href="https://booster-school.vercel.app/"
            className="absolute bottom-[-25px] left-[20px]"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", duration: 0.3 }}
              className={`${style.btn} w-[50px] h-[50px] rounded-[50%] flex justify-center items-center border-[2px]`}
            >
              <i className="fi fi-ss-arrow-small-right text-[28px] h-[34px]"></i>
            </motion.div>
          </a>
        </div>
      </div>
    </main>
  );
}
