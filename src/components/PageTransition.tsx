import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  // Skip the entry animation on the very first mount to avoid forced reflows
  // during initial hydration (large subtrees + framer-motion layout reads).
  // Subsequent route changes still animate normally.
  const isFirstMount = useRef(typeof window !== "undefined" && !window.history.state?.idx);
  const skip = isFirstMount.current;

  return (
    <motion.div
      initial={skip ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
