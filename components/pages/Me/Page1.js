import CircleFloating from "../../Parts/CircleFloating";

export default function Page1(props) {
  return (
    <>
      <CircleFloating initX={0} initY={0} aniX={100} aniY={1000} />
      <h1>ME!</h1>
    </>
  );
}
