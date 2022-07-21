import { motion } from "framer-motion";

export default function CircleFloating(props) {
  return (
    // <div
    //   style={{
    //     height: !props.height ? 1600 : props.height + 400,
    //     width: !props.width ? 1600 : props.width + 400,
    //     padding: 10,
    //     margin: 10,
    //   }}
    // >
    <div style={{ width: 2000, height: 2000, padding: 10, margin: 10 }}>
      <motion.div
        // className={style.box}
        animate={{ y: 500, x: 0 }}
        transition={{
          duration: 2,
          delay: 0.25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "rgba(245, 40, 145, 0.06)",
          filter: `blur(6px)`,
        }}
        // style={{
        //   height: !props.height ? 120 : props.height,
        //   width: !props.width ? 120 : props.width,
        //   borderRadius: "50%",
        //   backgroundColor: !props.color ? "blue" : props.color,
        //   background: "green",
        // backgroundColor: `linearGradient(
        //   141.94deg, rgba(255, 228, 249, 0.09) 17.48%, rgba(255, 228, 243, 0.3) 84.05%
        // )`,
        // boxShadow: "0px 16px 40px rgba(189,46,81,0.03)",
        // filter: `blur(${!props.blur ? "6" : props.blur}px)`,
        // }}
      />
    </div>
  );
}

// backdrop-filter

// 투명투명
