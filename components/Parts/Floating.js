import styles from "./styles.module.css";
import { motion } from "framer-motion";

export default function Floating() {
  return (
    <motion.circle
      className={styles.box}
      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      animate={{ y: -100, x: 0 }}
      transition={{
        duration: 2,
        delay: 0.25,
        repeat: 1000,
        repeatType: "reverse",

        // ease: [0, 0.71, 0.2, 1.01],
        // times:"loop"
      }}
    />
  );
}
