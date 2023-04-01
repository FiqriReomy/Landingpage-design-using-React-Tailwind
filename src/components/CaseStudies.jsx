import React from "react";
import { motion } from "framer-motion";
import { swipe } from "../features/Animation";
import possibility from "../assets/possibility.png";

const CaseStudies = () => {
  return (
    <div id="Case Studies" className="py-5 md:py-10 relative">
      <div className="absolute bg-[#002853] top-[-50px] right-[400px] w-[250px] h-[250px] rounded-full blur-[150px] mix-blend-lighten"></div>
      <div className="container mx-auto ">
        <div className="mb-[150px] px-5 md:px-10">
          <div className="flex w-full h-[650px] items-end flex-wrap relative">
            <motion.div variants={swipe("up", 0)} initial={"hidden"} whileInView={"show"} className="absolute md:relative md:w-1/2">
              <div className="mix-blend-lighten opacity-20 md:opacity-100">
                <img className="" src={possibility} alt="possibilty-content-three" />
              </div>
            </motion.div>
            <div className="w-full md:w-[45%] flex flex-col gap-4 mb-[4rem]">
              <motion.div variants={swipe("right", 0.2)} initial={"hidden"} whileInView={"show"} className="text-[#71E5FF]">
                Request Early Access to Get Started
              </motion.div>
              <motion.div variants={swipe("right", 0.3)} initial={"hidden"} whileInView={"show"} className="text-gradient2 text-[40px] py-2 leading-[50px] text-left">
                The possibilities are beyond your imagination
              </motion.div>
              <motion.div variants={swipe("right", 0.4)} initial={"hidden"} whileInView={"show"} className="text-[#81AFDD] leading-[30px] text-left mb-5">
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
              </motion.div>
              <motion.div variants={swipe("right", 0.5)} initial={"hidden"} whileInView={"show"} className="text-right md:text-left">
                Request Early Access to Get Started
              </motion.div>
            </div>
          </div>
        </div>
        <div className="min-h-[150px] flex flex-wrap px-10 py-5 md:px-[4rem] items-center rounded-md gradient2">
          <motion.div variants={swipe("right", 0)} initial={"hidden"} whileInView={"show"} className="w-full md:w-[70%] mb-5 flex flex-col gap-3 justify-start ">
            <div>Request Early Access to Get Started</div>
            <div className=" text-[18px] md:text-[22px] text-black font-semibold">Register today & start exploring the endless possiblities.</div>
          </motion.div>
          <motion.div variants={swipe("left", 0.2)} initial={"hidden"} whileInView={"show"} className="flex w-full md:w-[30%] justify-end">
            <button className="py-3 px-6 rounded-full bg-black hover:bg-white hover:text-black font-bold duration-300">Get Started</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
