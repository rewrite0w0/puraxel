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

import { Inquiry } from "components/Parts/Icons";

// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

const bgStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "60vw",
  // height: "40vw",
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
          // padding: "16px",
          paddingLeft: "8px",
          paddingRight: "8px",
          alignItems: "center",
          justifyContent: "center",
          ...props.style,
          fontWeight: "600",
          fontSize: "18px",
          letterSpacing: "-1px",
          cursor: "pointer",
        }}
        onClick={handleOpenModal}
        {...props}
      >
        {/* ~icon~ */}
        {
          <Inquiry
            style={{
              height: "50px",
              width: "25px",
              marginRight: "7.25px",
            }}
          />
        }
        {modalKr.modalButtonTitle}
      </Box>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={bgStyle} className={style.modalContainer}>
          <Box className={style.left}>
            {/* 1 */}
            <Box sx={{ marginBottom: "60px" }}>
              <span className={style.modealLeftTitle}>
                {modalKr.modalTitle}
              </span>
            </Box>
            {/* 2 */}
            <Box>
              <TextField
                label={modalKr.modalName}
                required
                className={style.leftInputField}
              />
            </Box>
            {/* 3 */}
            <Box>
              <TextField
                label={modalKr.modalTel}
                required
                className={style.leftInputField}
              />
            </Box>
            {/* 4 */}
            <Box>
              <TextField
                label={modalKr.modalEmail}
                required
                className={style.leftInputField}
              />
            </Box>
            {/* 5 */}
            <Box>
              <TextField
                label={modalKr.modalCompanyName}
                className={style.leftInputField}
              />
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
                <Box sx={{ display: "flex", alignItems: "center" }}>~</Box>
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
                  // alignItems: "center",
                }}
              >
                <Checkbox
                  icon={<CheckCircleOutlineIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  sx={{
                    "& .MuiSvgIcon-root": { background: "transparent" },
                    color: "pink",
                    "&.Mui-checked": {
                      color: "pink",
                    },
                  }}
                />
                <Typography className={style.rightPrivayCollectAgree}>
                  <span>{modalKr.modalAgreeCheck}</span>
                  &nbsp;
                  <span
                    onClick={handleOpenAgreeNoticeDialog}
                    className={style.rightPrivayCollectAgree}
                    style={{
                      cursor: "pointer",
                      color: "#A7ABB6",
                      fontSize: "12px",
                    }}
                  >
                    {modalKr.modalAgreeDetail}
                  </span>
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
                <Button
                  disableRipple
                  variant="text"
                  className={style.buttonStyle}
                >
                  {modalKr.modalLangKr}
                </Button>
                <Button
                  disableRipple
                  variant="text"
                  className={style.buttonStyle}
                >
                  {modalKr.modalLangEn}
                </Button>
                <Button
                  disableRipple
                  variant="text"
                  className={style.buttonStyle}
                >
                  {modalKr.modalLangCh}
                </Button>
              </ButtonGroup>
            </Box>
            {/* 2 */}
            {/* 문의 제목 */}
            <Box sx={{ marginTop: "20px" }}>
              <TextField
                fullWidth={true}
                label={modalKr.modalAskTitle}
                required
              />
            </Box>
            {/* 3 */}
            {/* 문의 내용 */}
            <Box sx={{ height: "1000px" }}>
              <TextField
                maxRows={25}
                fullWidth={true}
                multiline={true}
                label={modalKr.modalAskContent}
                sx={{ height: "100%", background: "pink" }}
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
