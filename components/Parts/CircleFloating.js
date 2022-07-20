import { motion } from "framer-motion";

export default function CircleFloating(props) {
  return (
    <div
      style={{
        height: !props.height ? 1600 : props.height + 400,
        width: !props.width ? 1600 : props.width + 400,
        padding: 10,
        margin: 10,
      }}
    >
      <motion.div
        animate={{ y: -100, x: 0 }}
        transition={{
          duration: 2,
          delay: 0.25,
          repeat: 1000,
          repeatType: "reverse",
        }}
        style={{
          height: !props.height ? 120 : props.height,
          width: !props.width ? 120 : props.width,
          borderRadius: "50%",
          backgroundColor: !props.color ? "blue" : props.color,
          background: "green",
          // backgroundColor: `linearGradient(
          //   141.94deg, rgba(255, 228, 249, 0.09) 17.48%, rgba(255, 228, 243, 0.3) 84.05%
          // )`,
          // boxShadow: "0px 16px 40px rgba(189,46,81,0.03)",
          filter: `blur(${!props.blur ? "6" : props.blur}px)`,
        }}
      />
    </div>
  );
}
