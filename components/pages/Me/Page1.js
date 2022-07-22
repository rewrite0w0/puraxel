import CircleFloating from "../../Parts/CircleFloating";

export default function Page1(props) {
  return (
    <>
      <CircleFloating initX={1000} initY={-1000} aniX={1000} aniY={500} />
      <h1>ME!</h1>
    </>
  );
}
