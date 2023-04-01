import { motion } from "framer-motion";
import React from "react";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div className="backdrop z-[999]" onClick={onClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </motion.div>
  );
};

export default Backdrop;
