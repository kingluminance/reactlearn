import { motion } from "framer-motion";

export default function ComingFromback({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 90, translateZ: -300 }}
      animate={{ opacity: 1, rotateX: 0, translateZ: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
