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
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  Popper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import style from "./ModalComponent.module.css";
import modalKr from "public/locales/kr/modal";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
  //  모달
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    // setModalOpen(false);
    setCloseNoticeDialogOpen(true);
  };

  // 시간대
  const timeZone = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [startAvailableTime, setStartAvailableTime] = useState(timeZone[0]);
  const [endAvailableTime, setEndAvailableTime] = useState(18);

  const handleStartTimeChange = (evt) => {
    setStartAvailableTime(evt.target.value);
  };

  const handleEndTimeChange = (evt) => {
    setEndAvailableTime(evt.target.value);
  };

  // 자세히보기

  const [agreeNoticeDialogOpen, setAgreeNoticeDialogOpen] = useState(false);

  const handleOpenAgreeNoticeDialog = () => {
    setAgreeNoticeDialogOpen(true);
  };
  const handleCloseAgreeNoticeDialog = () => {
    setAgreeNoticeDialogOpen(false);
  };

  // 저장 안 되게 닫힘 알림

  const [closeNoticeDialogOpen, setCloseNoticeDialogOpen] = useState(false);

  const handleOpenNoticeDialog = () => {
    setCloseNoticeDialogOpen(true);
  };
  const handleCloseNoticeDialog = () => {
    setCloseNoticeDialogOpen(false);
    setModalOpen(false);
  };

  // 전송 완료 알림

  const [sendedNoticeDialogOpen, setSendedNoticeDialogOpen] = useState(false);

  const handleOpenSendedNoticeDialog = () => {
    setSendedNoticeDialogOpen(true);
  };
  const handleCloseSendedNoticeDialog = () => {
    setSendedNoticeDialogOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenModal}>{modalKr.modalButtonTitle}</Button>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={bgStyle}>
          <Box className={style.left}>
            <h1>{modalKr.modalTitle}</h1>
            <Box>
              <TextField label={modalKr.modalName} required />
            </Box>
            <Box>
              <TextField label={modalKr.modalTel} required />
            </Box>
            <Box>
              <TextField label={modalKr.modalEmail} required />
            </Box>
            <Box>
              <TextField label={modalKr.modalCompanyName} />
            </Box>
            <Box>
              <p>{modalKr.modalAvailableTime}</p>
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
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              {/*  */}

              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  icon={<CheckCircleOutlineIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: "2.8rem" },
                    color: "pink",
                    "&.Mui-checked": {
                      color: "red",
                    },
                  }}
                />
                <Typography>{modalKr.modalAgreeCheck}</Typography>
                <Typography
                  // onClick={() =>
                  //   window.open("/agreeDetailInfomation", "_blank")
                  // }
                  onClick={handleOpenAgreeNoticeDialog}
                >
                  {modalKr.modalAgreeDetail}
                </Typography>
              </Box>
              {/*  */}
            </Box>
          </Box>

          <Box className={style.center}></Box>
          <Box className={style.right}>
            {/*  */}
            <Box>
              <ButtonGroup style={{ display: "flex" }}>
                <Button>{modalKr.modalLangKr}</Button>
                <Button>{modalKr.modalLangEn}</Button>
                <Button>{modalKr.modalLangCh}</Button>
              </ButtonGroup>
            </Box>
            {/*  */}
            <Box>
              <TextField label={modalKr.modalAskTitle} required />
            </Box>

            <Box>
              <TextField
                placeholder={modalKr.modalAskContentPlaceholder}
                required
              />
            </Box>
            {/*  */}
            <Box>
              <Box style={{ display: "flex" }}>
                <Typography>
                  {modalKr.modalExplainBar}
                  {modalKr.modalExplain1}
                </Typography>
              </Box>

              <Box style={{ display: "flex" }}>
                <Typography>
                  {modalKr.modalExplainBar}
                  {modalKr.modalExplain2A}
                  {modalKr.modalExplain2B}
                  {modalKr.modalExplain2C}
                </Typography>
              </Box>

              <Button>{modalKr.modalLinkToShoppingMall}</Button>
              <Button>{modalKr.modalLinkToAsk}</Button>
              <Button>{modalKr.modalSendButton}</Button>
            </Box>
            {/*  */}
          </Box>
        </Box>
      </Modal>

      <Dialog open={closeNoticeDialogOpen} onClose={handleCloseNoticeDialog}>
        <DialogTitle>
          {modalKr.modalExitModalPara1}
          {modalKr.modalExitModalPara2}
        </DialogTitle>
        <DialogActions>
          <Button>{modalKr.modalExitModalYes}</Button>
          <Button>{modalKr.modalExitModalNo}</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={agreeNoticeDialogOpen}
        onClose={handleCloseAgreeNoticeDialog}
      >
        <DialogTitle>{modalKr.modalDetailTitle}</DialogTitle>
        <DialogContent>{modalKr.modalDetailContent}</DialogContent>
      </Dialog>

      <Dialog
        open={sendedNoticeDialogOpen}
        onClose={handleCloseSendedNoticeDialog}
      >
        <DialogTitle>
          <CheckCircleIcon style={{ color: "pink" }} />
        </DialogTitle>
        <DialogContent>
          {modalKr.modalSendPara1}
          {modalKr.modalSendPara2}
          {modalKr.modalSendPara3}
        </DialogContent>
      </Dialog>
    </>
  );
}

// value 넣어줘야함, useState로 관리해야하나? 상태관리 라이브러리 써야하나?
