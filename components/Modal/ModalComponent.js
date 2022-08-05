import { useState } from "react";
import buttonStyle from "components/Footer/LinkPriceButton.module.css";
import LinkButton from "components/Footer/LinkButton";
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

import commonButtonStyle from "components/Footer/CommonButtons.module.css";

// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

const bgStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  height: "40vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent(props) {
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
      {/* <ModalButton
        title={modalKr.modalButtonTitle}
        onClick={() => {
          console.log("move?");
        }}
      /> */}

      {/* 그리드 좌측 */}

      <Box
        // className={buttonStyle.priceButton}
        // className={commonButtonStyle.buttonContainer}
        style={{
          background: "rgba(255,255,255,0.6)",
          boxShadow: "0px 6px 20px rgba(127, 46, 190, 0.05)",
          border: "1px solid #FFFFFF",
          borderRadius: "4px",
          display: "flex",
          // gridTemplateRows: "1fr 1fr",
          height: "64px",
          flexDirection: "column",
          justifyContent: "center",
          ...props.style,
        }}
        onClick={handleOpenModal}
        {...props}
      >
        ~icon~
        {modalKr.modalButtonTitle}
      </Box>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={bgStyle} className={style.modalContainer}>
          <Box className={style.left}>
            {/* 1 */}
            <Box>
              <span>{modalKr.modalTitle}</span>
            </Box>
            {/* 2 */}
            <Box>
              <TextField label={modalKr.modalName} required />
            </Box>
            {/* 3 */}
            <Box>
              <TextField label={modalKr.modalTel} required />
            </Box>
            {/* 4 */}
            <Box>
              <TextField label={modalKr.modalEmail} required />
            </Box>
            {/* 5 */}
            <Box>
              <TextField label={modalKr.modalCompanyName} />
            </Box>
            {/* 6 */}
            <Box>
              <p>{modalKr.modalAvailableTime}</p>
              {/* timer */}
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
              {/* 7 */}
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
                    "& .MuiSvgIcon-root": { fontSize: "1vw" },
                    color: "pink",
                    "&.Mui-checked": {
                      color: "gray",
                    },
                  }}
                />
                <Typography sx={{ fontSize: "0.9vw", color: "gray" }}>
                  {modalKr.modalAgreeCheck}
                </Typography>
                &nbsp;
                <Typography
                  onClick={handleOpenAgreeNoticeDialog}
                  sx={{ cursor: "pointer", fontSize: "0.8vw", color: "gray" }}
                >
                  {modalKr.modalAgreeDetail}
                </Typography>
              </Box>
              {/*  */}
            </Box>
          </Box>

          {/* 그리드 우측 */}
          {/* <Box className={style.center}></Box> */}
          <Box className={style.right}>
            {/* 1 */}
            {/* 언어 버튼 선택 */}
            <Box>
              <ButtonGroup style={{ display: "flex" }}>
                <Button variant="text" className={style.buttonStyle}>
                  {modalKr.modalLangKr}
                </Button>
                <Button variant="text" className={style.buttonStyle}>
                  {modalKr.modalLangEn}
                </Button>
                <Button variant="text" className={style.buttonStyle}>
                  {modalKr.modalLangCh}
                </Button>
              </ButtonGroup>
            </Box>
            {/* 2 */}
            {/* 문의 제목 */}
            <Box>
              <TextField label={modalKr.modalAskTitle} required />
            </Box>
            {/* 3 */}
            {/* 문의 내용 */}
            <Box>
              <TextField
                label={modalKr.modalAskContent}
                // placeholder={modalKr.modalAskContentPlaceholder}
                required
              />
            </Box>
            {/* 4 */}
            {/* 여러가지 안내 사항 */}
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
        <DialogContent dividers="scroll">
          {modalKr.modalDetailContent}
        </DialogContent>
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
