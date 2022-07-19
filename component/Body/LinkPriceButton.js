import { Box, Paper } from "@mui/material";
import styles from "./LinkPriceButton.module.css";

export default function LinkPriceButton(props) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 160,
            height: 64,
          },
        }}
      >
        <Paper
          elevation={2}
          className={styles.paperButton}
          variant="outlined"
        />
        <h1>qweqweqwe</h1>
      </Box>
    </>
  );
}
