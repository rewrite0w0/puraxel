import { Stack } from "@mui/material";
import layoutHeader from "../src/lang/kr/layoutHeader.json";

const Item = () => {};

export default function header() {
  return (
    <Stack direction="row">
      <Stack direction="row">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </Stack>
      <Stack direction="row">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </Stack>
    </Stack>
  );
}
