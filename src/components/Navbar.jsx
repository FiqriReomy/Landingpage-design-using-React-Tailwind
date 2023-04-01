import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { swipe } from "../features/Animation";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menu = ["Home", "What is GPT", "Open AI", "Case Studies", "About"];

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const setSticky = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setSticky);
    return () => {
      window.removeEventListener("scroll", setSticky);
    };
  }, []);

  return (
    <nav className={`${isSticky ? "bg-black/40 backdrop-blur-[3px] py-3 " : ""} nav fixed top-0 right-0 left-0  py-2 duration-300 z-[999]`}>
      <div className="container mx-auto">
        <div className="menu flex justify-between items-center ">
          {/* logo area */}
          <motion.div variants={swipe("left", 0)} initial={"hidden"} whileInView={"show"} className=" text-[15px] md:text-[24px] w-full lg:w-auto font-bold lg:text-left text-center">
            OPEN.AI
          </motion.div>
          {/* menubar area */}
          <div className="hidden lg:flex">
            {menu.map((text, index) => (
              <Link to={text} key={index} activeClass="active2" smooth={true} spy={true} className="cursor-pointer px-5">
                <motion.div variants={swipe("left", 0.2)} initial={"hidden"} whileInView={"show"}>
                  {text}
                </motion.div>
              </Link>
            ))}
          </div>
          {/* signin and signup area */}
          <div className="hidden lg:flex gap-5">
            <motion.button variants={swipe("left", 0.2)} initial={"hidden"} whileInView={"show"} className="cursor-pointer">
              Sign In
            </motion.button>
            <motion.button variants={swipe("left", 0.2)} initial={"hidden"} whileInView={"show"} className="bg-red-500 rounded py-2 px-8 cursor-pointer">
              Sign Up
            </motion.button>
          </div>
          <div className="flex md:hidden">
            <RiMenu3Line className="cursor-pointer " size={27} onClick={() => openModal()} />
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "fixed" : "hidden"} container mx-auto md:hidden top-0 right-0 left-0 bg-[#06101e]`}>
        <div className="py-4 md:py-2 flex items-center justify-end">
          <RiCloseLine className="cursor-pointer" size={27} onClick={() => openModal()} />
        </div>
        <div className="flex flex-col items-center duration-300 animate-overlay h-screen ">
          {menu.map((text, index) => (
            <Link to={text} key={index} activeClass="active2" smooth={true} spy={true} onClick={() => openModal()} className="cursor-pointer px-5 py-5 ">
              <motion.div variants={swipe("left", 0.2)} initial={"hidden"} whileInView={"show"}>
                {text}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
