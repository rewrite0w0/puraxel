export default function CircleFloating(props) {
  return (
    <div
      style={{
        height: props.height,
        width: props.width,
        borderRadius: "50%",
        // backgroundColor: props.color,
        backgroundColor: `linearGradient(
          141.94deg, rgba(255, 228, 249, 0.09) 17.48%, rgba(255, 228, 243, 0.3) 84.05%
        )`,
        boxShadow: "0px 16px 40px rgba(189,46,81,0.03)",
        filter: `blur(${props.blur}px)`,
      }}
    ></div>
  );
}
