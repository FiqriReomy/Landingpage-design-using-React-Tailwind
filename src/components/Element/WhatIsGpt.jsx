import React from "react";
import { motion } from "framer-motion";
import { swipe } from "../../features/Animation";

const WhatIsGpt = ({ key, delay, text1, text2 }) => {
  return (
    <motion.div variants={swipe("left", delay)} initial={"hidden"} whileInView={"show"} className="w-full md:w-1/3 p-5">
      <div className="mb-2 md:mb-5">
        <div className="w-[70px] h-[3px] gradient2"></div>
        <div className="py-4 text-[20px]">{text1}</div>
      </div>
      <div className="leading-[30px]">{text2}</div>
    </motion.div>
  );
};

export default WhatIsGpt;
