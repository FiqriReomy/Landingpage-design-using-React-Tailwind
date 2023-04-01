import React from "react";
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";

const Modalbox = ({ handleClose, variants }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div drag onClick={(e) => e.stopPropagation()} className="border-white/40 border bg-white/20 backdrop-blur-xl p-5  max-w-[350px] rounded-xl" variants={variants} initial="hidden" animate="visible" exit="exit">
        <button className="border-white rounded py-2 px-5" onClick={handleClose}>
          close
        </button>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum culpa quibusdam tempore quod optio. Incidunt quas possimus dolore laudantium quae officia rem dolorum porro, dolor doloribus eius voluptatum ducimus totam
          reprehenderit suscipit quod libero architecto, aliquid nulla veniam? Nostrum aut sequi nemo tempore ad praesentium optio, labore similique quod ab!
        </p>
      </motion.div>
    </Backdrop>
  );
};

export default Modalbox;
