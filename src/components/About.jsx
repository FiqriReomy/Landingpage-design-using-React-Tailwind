import React from "react";
import { motion } from "framer-motion";
import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";
import blog04 from "../assets/blog04.png";
import blog05 from "../assets/blog05.png";
import { swipe } from "../features/Animation";

const About = () => {
  const styling = "w-full md:w-1/4 lg:w-1/2 pr-0 mb-5 md:pr-5 md:pl-0 lg:pl-5 lg:mb-5";

  return (
    <div id="About" className="py-10">
      <div className="container mx-auto">
        <motion.div variants={swipe("left", 0)} initial={"hidden"} whileInView={"show"} className="text-gradient2 text-[35px] md:text-[40px] leading-[50px] py-2 mb-10">
          A lot is happening, <span>We are blogging about it.</span>
        </motion.div>
        <div className="flex flex-wrap">
          <motion.div variants={swipe("up", 0)} initial={"hidden"} whileInView={"show"} className="w-full lg:w-1/3 mb-7">
            <div className="flex lg:flex-col pr-0 lg:pr-5 w-full">
              <div className="w-full md:w-1/2 lg:w-full lg:h-full overflow-hidden">
                <img className="object-cover  h-full  w-full" src={blog01} alt="about-image" />
              </div>
              <div className=" w-full flex flex-col justify-between bg-[#042C54]  p-2 md:p-4 lg:h-[400px]">
                <div>
                  <div className="mb-5">Sep 25,2021</div>
                  <p>GPT-3 and Open AI is the future. Let us exlore how it is?</p>
                </div>
                <button className="cursor-pointer text-end text-[12px] md:text-start md:text-[14px]">Read Full Article</button>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-wrap w-full lg:w-2/3">
            <motion.div variants={swipe("left", 0.2)} initial={"hidden"} whileInView={"show"} className={styling}>
              <div>
                <img className="object-cover w-full" src={blog02} alt="about-image" />
              </div>
              <div className=" w-full flex flex-col justify-between bg-[#042C54] p-2 md:p-4">
                <div className="mb-10">
                  <div className="mb-5">Dec 27,2020</div>
                  <p>GPT-3 and Open AI is the future. Let us exlore how it is?</p>
                </div>
                <button className="cursor-pointer text-end text-[12px] md:text-start md:text-[14px]">Read Full Article</button>
              </div>
            </motion.div>

            <motion.div variants={swipe("left", 0.3)} initial={"hidden"} whileInView={"show"} className={styling}>
              <div>
                <img className="object-cover w-full" src={blog03} alt="about-image" />
              </div>
              <div className=" w-full flex flex-col justify-between bg-[#042C54] p-2 md:p-4">
                <div className="mb-10">
                  <div className="mb-5">Jan 24,2021</div>
                  <p>How fast does the GPT-3 will Solve your problem ?</p>
                </div>
                <button className="cursor-pointer text-end text-[12px] md:text-start md:text-[14px]">Read Full Article</button>
              </div>
            </motion.div>

            <motion.div variants={swipe("right", 0.4)} initial={"hidden"} whileInView={"show"} className={styling}>
              <div>
                <img className="object-cover w-full" src={blog04} alt="about-image" />
              </div>
              <div className=" w-full flex flex-col justify-between bg-[#042C54] p-2 md:p-4">
                <div className="mb-10">
                  <div className="mb-5">Aug 14,2021</div>
                  <p>The GPT-3 and its features will make your work easier</p>
                </div>
                <button className="cursor-pointer text-end text-[12px] md:text-start md:text-[14px]">Read Full Article</button>
              </div>
            </motion.div>

            <motion.div variants={swipe("right", 0.5)} initial={"hidden"} whileInView={"show"} className={styling}>
              <div>
                <img className="object-cover w-full" src={blog05} alt="about-image" />
              </div>
              <div className=" w-full flex flex-col justify-between bg-[#042C54] p-2 md:p-4">
                <div className="mb-10">
                  <div className="mb-5">Dec 03,2021</div>
                  <p>How to make your bussiness more efficient with GPT-3</p>
                </div>
                <button className="cursor-pointer text-end text-[12px] md:text-start md:text-[14px]">Read Full Article</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
