"use client";
import { motion } from "framer-motion";

export default function Theme() {
  const onClick = (value: string) => {
    document.body.dataset.theme = value;
  };
  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
      className={` bg-[var(--background-fon)] border-[var(--border-color)] w-[160px] h-[80px] sm:w-[200px] sm:h-[100px] absolute md:w-[220px] lg:w-[270px] md:h-[120px] lg:h-[140px] rounded-[8px]   top-[120px] right-[10px]  sm:right-[100px] lg:top-[130px] lg:right-[130px] border-[2px] flex flex-wrap justify-center items-center p-[10px] gap-[5px] sm:gap-[10px] `}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("base")}
        className={`cursor-pointer w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] bg-[#00a19a] rounded-[8px] `}
      ></motion.div>
      <motion.button
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("dark-blue")}
        className=" cursor-pointer w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] bg-[#003049] rounded-[8px] "
      ></motion.button>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("red")}
        className="cursor-pointer w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] bg-[#ffd97d] rounded-[8px] "
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("aqua")}
        className=" cursor-pointer w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] bg-[#51e490] rounded-[8px] "
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("white")}
        className=" cursor-pointer w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] bg-[#eff7f6] rounded-[8px] "
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("dark")}
        className=" cursor-pointer w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] bg-[#282b29] rounded-[8px] "
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("pink")}
        className=" cursor-pointer w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px]  bg-[#ff5943] rounded-[8px] "
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("blue")}
        className=" cursor-pointer w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px]  bg-[#f4c4c4] rounded-[8px] "
      ></motion.div>
    </motion.div>
  );
}
