import "animate.css";
import React from "react";
import ai from "../assets/ai.png";
import { motion } from "framer-motion";
import slack from "../assets/slack.png";
import google from "../assets/google.png";
import shopify from "../assets/shopify.png";
import dropbox from "../assets/dropbox.png";
import { swipe } from "../features/Animation";
import atlassian from "../assets/atlassian.png";

const Banner = () => {
  const LogoStyling = "px-5 py-5 w-1/2 md:w-1/3 lg:w-1/5 flex justify-center";
  return (
    <div id="Home" className="pt-[5rem] relative">
      {/* lightning one*/}
      <div className="absolute bg-[#002853] top-[-400px] left-[-200px] w-[750px] h-[750px] rounded-full blur-[282px] mix-blend-lighten"></div>
      {/* lightning two */}
      <div className="absolute bg-[#2b71bd] bottom-[-100px] right-[-200px] w-[340px] h-[216px] rounded-full blur-[242px]  mix-blend-lighten"></div>
      <div className="container mx-auto">
        {/* content for the left side */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 py-5">
            <motion.h1 variants={swipe("right", 0.2)} initial={"hidden"} whileInView={"show"} className="w-full lg:text-left text-center text-[40px] lg:text-[50px] lg:leading-[55px] leading-[40px] text-gradient2 mb-7">
              Let’s Build Something amazing with GPT-3 Open AI
            </motion.h1>
            <motion.p variants={swipe("right", 0.4)} initial={"hidden"} whileInView={"show"} className="lg:text-left text-center leading-[30px] text-[#2b71bd]/80 mb-7">
              ChatGPT is a conversational artificial intelligence language model developed by OpenAI based on the GPT-3.5 architecture. It can understand natural language inputs and generate human-like responses, making it suitable for a
              wide range of conversational applications, such as chatbots, personal assistants, and customer service bots. It has been trained on a vast amount of internet data, enabling it to understand and generate responses on a variety
              of topics.
            </motion.p>
            <div className="w-full lg:w-[80%] flex h-10 rounded-sm lg:justify-start justify-center mb-7">
              <input type="text" className="py-2 px-5 text-black outline-none rounded-l-sm min-w-[60%] tracking-widest" placeholder="YOUR EMAIL ADDRESS" />
              <button className="btn-primary2 rounded-r-sm tracking-wide">GET STARTED</button>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5 md:gap-10 -space-x-2 ">
              <div className="flex items-center">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="h-10 w-10 rounded-full ring-2 ring-white bg-blue-500 flex items-center justify-center">1.6K</div>
              </div>
              <div className=" flex items-center justify-center">1,600 people requested access a visit in last 24 hours</div>
            </div>
          </div>
          <div className="hidden lg:w-1/2 lg:block">
            <div className="animate__animated animate__zoomIn">
              <img className="w-full animate-wiggle object-cover" src={ai} alt="banner-image" />
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap py-[50px] md:py-[75px] mx-auto max-w-[1000px] justify-center items-center">
          <div className={LogoStyling}>
            <img src={google} alt="google" />
          </div>
          <div className={LogoStyling}>
            <img src={slack} alt="slack" />
          </div>
          <div className={LogoStyling}>
            <img src={shopify} alt="shopify" />
          </div>
          <div className={LogoStyling}>
            <img src={atlassian} alt="atlassian" />
          </div>
          <div className={LogoStyling}>
            <img src={dropbox} alt="dropbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
