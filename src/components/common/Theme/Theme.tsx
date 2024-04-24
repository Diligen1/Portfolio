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
      className="w-[270px] h-[140px] rounded-[8px] absolute bg-white top-[130px] right-[130px] border-white border-[2px] flex flex-wrap justify-center items-center p-[10px] gap-[10px] "
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("base")}
        className=" cursor-pointer w-[50px] h-[50px] bg-[#FF5943] rounded-[8px] border-[1px] border-[#D84332]"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("dark-blue")}
        className=" cursor-pointer w-[50px] h-[50px] bg-[#003049] rounded-[8px] border-[1px] border-[#FDF0D5]"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("red")}
        className="cursor-pointer w-[50px] h-[50px] bg-[#D62828] rounded-[8px] border-[1px] border-[#90E0EF]"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("aqua")}
        className=" cursor-pointer w-[50px] h-[50px] bg-[#60FFA6] rounded-[8px] border-[1px] border-[#FF0054]"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("white")}
        className=" cursor-pointer w-[50px] h-[50px] bg-[#EBEDED] rounded-[8px] border-[1px] border-[#E83C38]"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("dark")}
        className=" cursor-pointer w-[50px] h-[50px] bg-[#282B29] rounded-[8px] border-[1px] border-[#A6D1C9]"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("pink")}
        className=" cursor-pointer w-[50px] h-[50px] bg-[#F4C4C4] rounded-[8px] border-[1px] border-[#282B29]"
      ></motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        onClick={() => onClick("blue")}
        className=" cursor-pointer w-[50px] h-[50px] bg-[#00A19A] rounded-[8px] border-[1px] border-[#FFFFFF]"
      ></motion.div>
    </motion.div>
  );
}
