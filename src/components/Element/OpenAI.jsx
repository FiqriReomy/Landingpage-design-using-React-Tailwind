import React from "react";
import { motion } from "framer-motion";
import { swipe } from "../../features/Animation";

const OpenAI = ({ delay, text1, text2 }) => {
  const contentStyle = "flex flex-wrap w-full justify-between gap-2 md:gap-10 mb-10";

  return (
    <motion.div variants={swipe("left", delay)} initial={"hidden"} whileInView={"show"} className={contentStyle}>
      <div className="w-full md:w-1/3 ">
        <div className="w-[70px] h-[3px] gradient2"></div>
        <div className="text-[20px] leading-[30px]">{text1} </div>
      </div>
      <div className="md:w-1/2 leading-[30px] w-full md:text-white text-[#71E5FF]">{text2}</div>
    </motion.div>
  );
};

export default OpenAI;
