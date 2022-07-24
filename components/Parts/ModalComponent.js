import { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  FormControl,
  Select,
  MenuItem,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import style from "./ModalComponent.module.css";

// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

const bgStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

export default function ModalComponent() {
  const [modalOpen, setModalOpen] = useState(false);

  const timeZone = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [startAvailableTime, setStartAvailableTime] = useState(timeZone[0]);
  const [endAvailableTime, setEndAvailableTime] = useState(18);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleStartTimeChange = (evt) => {
    setStartAvailableTime(evt.target.value);
  };

  const handleEndTimeChange = (evt) => {
    setEndAvailableTime(evt.target.value);
  };

  return (
    <>
      <Button onClick={handleOpenModal}>문의</Button>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={bgStyle}>
          <Box className={style.left}>
            <h1>제품 문의</h1>
            <Box>
              <TextField label={"asdasd"} required />
            </Box>
            <Box>
              <TextField label={"asdasd"} required />
            </Box>
            <Box>
              <TextField label={"asdasd"} required />
            </Box>
            <Box>
              <TextField label={"asdasd"} required />
            </Box>
            <Box>
              <p>연락 가능 시간대</p>
              {/*  */}
              <Box className={style.timeReciverContainer}>
                <Box>
                  <FormControl>
                    <Select
                      value={startAvailableTime}
                      onChange={handleStartTimeChange}
                    >
                      {timeZone.map((time) => (
                        <MenuItem key={time} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                      {/* <MenuItem value={9}>09</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={11}>11</MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={13}>13</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={17}>17</MenuItem> */}
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl>
                    <Select
                      value={endAvailableTime}
                      onChange={handleEndTimeChange}
                    >
                      {timeZone
                        .filter((time) => time >= startAvailableTime)
                        .map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      {/* {startAvailableTime.forEach(x) timeZone.map(time=>{
                        <MenuItem key={time} value={time}>{time}</MenuItem>
                      })} */}
                      {/* <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={11}>11</MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={13}>13</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={17}>17</MenuItem>
                      <MenuItem value={18}>18</MenuItem> */}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              {/*  */}
            </Box>
          </Box>

          <Box className={style.center}></Box>
          <Box className={style.right}>12345</Box>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </>
  );
}
