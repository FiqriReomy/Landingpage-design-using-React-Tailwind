export const dropDown = (direction, duration, delay, type, start, end) => {
  return {
    hidden: {
      y: direction === "up" ? start : direction === "down" ? start : 0,
      x: direction === "left" ? start : direction === "right" ? start : 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transitition: {
        duration: duration,
        type: type,
        damping: 25,
        stiffness: 500,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      y: direction === "up" ? end : direction === "down" ? end : 0,
      opacity: 0,
      x: direction === "left" ? end : direction === "right" ? end : 0,
      opacity: 0,
    },
  };
};

export const fadeIn = (duration, delay, type, scale, direction) => {
  return {
    hidden: {
      y: direction === "up" ? "150px" : direction === "down" ? "-150px" : 0,
      x: direction === "left" ? "150px" : direction === "right" ? "-150px" : 0,
      opacity: 0,
      scale: scale || 0,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transitition: {
        duration: duration,
        type: type,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.85,
    },
  };
};

export const swipe = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? "10vh " : direction === "down" ? "-10vh" : 0,
      opacity: 0,
      x: direction === "left" ? "10vh" : direction === "right" ? "-10vh" : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
