"use client";
import style from "@/styles/Workers/Workers.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import image from "../../../../public/assets/image/8 Types of Graphic Design Careers to Explore (2022).gif";
import image_2 from "../../../../public/assets/image/Landscape shooting stars.gif";
import image_3 from "../../../../public/assets/image/coffee cup gif.gif";

export default function Workers() {
  return (
    <main id="work">
      <div className="w-full h-[1200px] md:h-[900px] lg:h-[700px] flex flex-wrap justify-around items-center gap-[40px] lg:gap-0">
        <div
          className={`${style.contain} relative w-[250px] h-[360px] md:w-[300px] md:h-[460px] lg:w-[350px] lg:h-[520px] rounded-[18px] border-[2px] flex flex-col justify-evenly`}
        >
          <div className={` flex flex-row justify-around items-center `}>
            <div className="w-[65%]">
              <p
                className={`text-[16px] lg:text-[25px] m-0 p-0 ${style.number}`}
              >
                01
              </p>
              <p className={`text-[12px] lg:text-[14px] ${style.number}`}>
                Programming courses
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`${style.block_icon} w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] rounded-[8px] border-[3px] flex justify-center items-center`}
            >
              <i className="fi fi-ss-bulb text-[18px] h-[22px] lg:text-[30px] lg:h-[36px] "></i>
            </motion.div>
          </div>
          <div className="w-full overflow-hidden flex justify-center items-center">
            <div
              className={`${style.block_image} w-[85%] h-[180px] lg:h-[280px] border-[10px] rounded-[8px] overflow-hidden flex justify-center items-center`}
            >
              <Image src={image} alt="Booster-school" className="scale-[1.5]" />
            </div>
          </div>
          <div className="px-[20px]">
            <p
              className={`${style.title} text-[18px] lg:text-[26px] pb-[10px]`}
            >
              Booster-school
            </p>
            <p
              className={`${style.title} text-[12px] lg:text-[14px] pb-[20px]`}
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
          className={`${style.contain} relative w-[250px] h-[360px] md:w-[300px] md:h-[460px] lg:w-[350px] lg:h-[520px] rounded-[18px] border-[2px] flex flex-col justify-evenly`}
        >
          <div className={` flex flex-row justify-around items-center `}>
            <div className="w-[55%]">
              <p
                className={`text-[16px] lg:text-[25px] m-0 p-0 ${style.number}`}
              >
                02
              </p>
              <p className={` text-[12px] lg:text-[14px] ${style.number}`}>
                Hiking in the mountains
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`${style.block_icon} w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] rounded-[8px] border-[3px] flex justify-center items-center`}
            >
              <i className="fi fi-ss-bulb text-[18px] h-[22px] lg:text-[30px] lg:h-[36px]"></i>
            </motion.div>
          </div>
          <div className="w-full overflow-hidden flex justify-center items-center">
            <div
              className={`${style.block_image} w-[85%] h-[180px] lg:h-[280px] border-[10px] rounded-[8px] overflow-hidden flex justify-center items-center`}
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
              className={`${style.title} text-[18px] lg:text-[26px] pb-[10px]`}
            >
              Horse-and-Travel
            </p>
            <p
              className={`${style.title} text-[12px] lg:text-[14px] pb-[20px]`}
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
          className={`${style.contain} relative w-[250px] h-[360px] md:w-[300px] md:h-[460px] lg:w-[350px] lg:h-[520px] rounded-[18px] border-[2px] flex flex-col justify-evenly`}
        >
          <div className={` flex flex-row justify-around items-center `}>
            <div className="w-[55%]">
              <p className={` text-[25px] m-0 p-0 ${style.number}`}>03</p>
              <p className={` text-[12px] lg:text-[14px] ${style.number}`}>
                In developing
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`${style.block_icon} w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] rounded-[8px] border-[3px] flex justify-center items-center`}
            >
              <i className="fi fi-ss-bulb text-[18px] h-[22px] lg:text-[30px] lg:h-[36px]"></i>
            </motion.div>
          </div>
          <div className="w-full overflow-hidden flex justify-center items-center">
            <div
              className={`${style.block_image} w-[85%] h-[180px] lg:h-[280px] border-[10px] rounded-[8px] overflow-hidden flex justify-center items-center`}
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
              className={`${style.title} text-[18px] lg:text-[26px] pb-[10px]`}
            >
              Realm-Sayan
            </p>
            <p
              className={`${style.title} text-[12px] lg:text-[14px] pb-[20px]`}
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
