import React from "react";
import { motion } from "framer-motion";
import OpenAiElement from "./Element/OpenAI";
import { swipe } from "../features/Animation";

const OpenAI = () => {
  const contentFill = [
    [0.1, "Improving end distrusts instantly", "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."],
    [0.2, "Become the tended active", "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."],
    [0.3, "Message or am nothing", "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."],
    [0.4, "Really boy law county", "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."],
  ];
  return (
    <div id="Open AI" className="py-5 md:py-10">
      <div className="container mx-auto px-10 md:px-0">
        <div className="flex flex-wrap">
          <motion.div variants={swipe("right", 0)} initial={"hidden"} whileInView={"show"} className="w-full lg:w-1/2 mb-10">
            <div className="pr-0 md:pr-[50px] text-gradient2 text-[40px] leading-[50px] mb-5">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</div>
            <div>Request Early Access to Get Started</div>
          </motion.div>
          <div className="w-full lg:w-1/2 bg flex flex-wrap py-5">
            {contentFill.map((item, index) => (
              <OpenAiElement key={index} delay={item[0]} text1={item[1]} text2={item[2]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenAI;
