import React from "react";
import wave from "../assets/wave.svg";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { swipe } from "../features/Animation";
import WhatIsGptElement from "./Element/WhatIsGpt";

const WhatIsGpt = () => {
  const contentFill = [
    [0, "Chatbots", "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "],
    [0.2, "Knowledgebase", "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"],
    [0.4, "Education", "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"],
  ];
  contentFill.map((item) => console.log(item[0]));
  return (
    <div id="What is GPT" className=" mb-[100px]">
      <div className="container overflow-hidden mx-auto bg-[#042C54] shadow-2xl min-h-[20vh] p-7 md:p-12 relative">
        {/* background wallpaper styling */}
        <div className="absolute bg-[#1B78DE] top-[100px] left-10 w-[150px] h-[150px] rounded-full blur-[100px] mix-blend-lighten border-2 border-red-500 ring-1"></div>
        <div className="absolute bg-[#1B78DE] bottom-[50px] right-[50px] w-[150px] h-[150px] rounded-full blur-[100px] mix-blend-lighten border-2 border-red-500 ring-1"></div>

        <div className="absolute bottom-0 right-0 left-0  overflow-hidden ">
          <img className="opacity-10 bg-blur-lg mix-blend-lighten bg-cover w-full" src={wave} alt="wave" />
        </div>
        <div></div>
        {/* section top */}
        <div className="flex flex-wrap justify-between mb-10">
          <div className="title w-full md:w-[25%]">
            <div className="w-[70px] h-[3px] gradient2"></div>
            <motion.div variants={swipe("up", 0)} initial={"hidden"} whileInView={"show"} className=" py-4 text-[20px]">
              What is GPT ?
            </motion.div>
          </div>
          <motion.div variants={swipe("up", 0.2)} initial={"hidden"} whileInView={"show"} className="w-full md:w-[75%] py-2 md:py-5 text-justify">
            <p className="leading-[30px]">
              Chat GPT is an AI-powered language model that can understand and respond to human language in a conversational way. It can be used in chatbots, virtual assistants, and other applications that require natural language
              processing.
            </p>
          </motion.div>
        </div>
        {/* section middle */}
        <motion.div variants={swipe("right", 0.2)} initial={"hidden"} whileInView={"show"} className="flex flex-wrap justify-between mb-10">
          <div className="w-full text-center md:text-left py-2 md:w-1/2 text-gradient2 text-[40px] leading-[40px] mb-5">The possibilities are beyond your imagination</div>
          <button className="w-full py-2 md:w-1/2 flex justify-end items-end text-[#FF8A71] cursor pointer">
            <div className="flex py-2 items-center gap-5 border-b-2 border-transparent hover:border-[#FF8A71] hover:border-b-2">
              Explore the library
              <BsArrowRight />
            </div>
          </button>
        </motion.div>
        {/* section bottom */}
        <div className="flex flex-wrap justify-between relative overflow-hidden">
          {contentFill.map((item, index) => (
            <WhatIsGptElement key={index} delay={item[0]} text1={item[1]} text2={item[2]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIsGpt;
