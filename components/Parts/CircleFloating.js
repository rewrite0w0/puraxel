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
    <div
      style={{
        height: "100vh",
        width: "100%",
        padding: 60,
        margin: 10,
        zIndex: 9999,
      }}
    >
      <motion.div
        // className={style.box}

        animate={{ y: 100 }}
        transition={{
          duration: 0.75,
          delay: 0.25,
          repeat: 256,
          repeatType: "reverse",
        }}
        style={{
          width: 180,
          height: 180,
          borderRadius: "90%",
          background: "rgba(245, 40, 145, 0.06)",
          // filter: `blur(6px)`,
          // backdropFilter: `blur(6px)`,
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
