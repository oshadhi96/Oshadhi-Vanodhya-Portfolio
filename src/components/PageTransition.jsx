import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocation } from "react-router-dom";

export function PageTransition({ children }) {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Simple slide/fade for mobile to avoid 3D transform scroll issues
  const mobileVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const desktopVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const variants = isMobile ? mobileVariants : desktopVariants;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        ref={containerRef}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationComplete={(definition) => {
          // Remove transform after 'animate' completes to restore sticky positioning context
          if (definition === "animate" && containerRef.current) {
            containerRef.current.style.transform = "none";
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
