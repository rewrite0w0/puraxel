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
          sx={{
            gridTemplateColumns: "repeat(2, 1fr)",
            display: "grid",
          }}
        >
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </Paper>
      </Box>
    </>
  );
}
