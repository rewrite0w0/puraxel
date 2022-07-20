import { motion } from "framer-motion";

export default function Hair() {
  return (
    <>
      <h1>hair</h1>
      <motion.div
        className="box"
        style={{
          width: 200,
          height: 200,
          borderRadius: 50,
          background: "blue",
        }}
        animate={{ y: -100, x: 0 }}
        transition={{
          duration: 2,
          bounce: 1,
          delay: 0.25,
          repeat: 1000,
          repeatType: "mirror",
        }}
      />
    </>
  );
}
