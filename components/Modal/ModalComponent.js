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
  ButtonGroup,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import style from "./ModalComponent.module.css";
import modalKr from "public/locales/kr/modal";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import commonButtonStyle from "components/Footer/CommonPlainButtons.module.css";

import { AskIcon, Inquiry, ShopIC } from "components/Parts/Icons";

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

  const handleCloseNoticeYesOrNo = () => {
    setCloseNoticeDialogOpen(false);
  };

  // 전송 확인 알림

  const [sendAgreeDialogOpen, setSendAgreeDialogOpen] = useState(false);

  const handleOpenSendAgreeDialog = () => {
    setSendAgreeDialogOpen(true);
  };

  const handleCloseSendAgreeDialog = () => {
    setSendAgreeDialogOpen(false);
  };

  const handleSendAgreeYes = () => {
    setModalOpen(false);
    setSendAgreeDialogOpen(false);
    handleOpenSendedNoticeDialog();
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
        className={commonButtonStyle.buttonContainer}
        // className={commonButtonStyle.buttonContainer}
        // sx={{
        //   background: "rgba(255,255,255,0.6)",
        //   boxShadow: "0px 6px 20px rgba(127, 46, 190, 0.05)",
        //   border: "1px solid #FFFFFF",
        //   borderRadius: "4px",
        //   display: "flex",
        //   // gridTemplateRows: "1fr 1fr",
        //   height: "64px",
        //   // padding: "16px",
        //   paddingLeft: "8px",
        //   paddingRight: "8px",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   ...props.style,
        //   fontWeight: "600",
        //   fontSize: "18px",
        //   letterSpacing: "-0.01em",
        //   cursor: "pointer",
        // }}
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#7e818d",
                    fontSize: "14px",
                  }}
                >
                  ~
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
                  // alignItems: "center",
                  marginTop: "160px",
                }}
              >
                <Checkbox
                  icon={<CheckCircleOutlineIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  sx={{
                    "& .MuiSvgIcon-root": { background: "transparent" },
                    color: "#A7ABB6",
                    "&.Mui-checked": {
                      color: "#4d5058",
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
                // onFocus={true}
                // onClick={(e) => e.currentTarget.onfocus}
                sx={{ height: "100%" }}
                // placeholder={modalKr.modalAskContentPlaceholder}

                required
              />
            </Box>
            {/* 4 */}
            {/* 여러가지 안내 사항 */}
            <Box>
              <Box style={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    letterSpacing: "-0.01em",
                    color: "#7e818d",
                  }}
                >
                  {modalKr.modalExplainBar}
                  {modalKr.modalExplain1}
                </Typography>
              </Box>

              <Box style={{ display: "flex" }}>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "14px",
                    letterSpacing: "-0.01em",
                    color: "#7e818d",
                  }}
                >
                  {modalKr.modalExplainBar}
                  {modalKr.modalExplain2A}
                  <span style={{ fontWeight: 700, color: "#b298ad" }}>
                    {modalKr.modalExplain2B}
                  </span>
                  {modalKr.modalExplain2C}
                </Typography>
              </Box>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", marginTop: "16px" }}>
                  <span className={style.shopButton}>
                    <ShopIC
                      sx={{
                        height: "50px",
                        width: "25px",
                        color: "#fff",
                        marginRight: "7.25px",
                      }}
                    />
                    {modalKr.modalLinkToShoppingMall}
                  </span>
                  <span className={style.helpButton}>
                    <AskIcon />
                    {modalKr.modalLinkToAsk}
                  </span>
                </div>
                {/* 전송 */}
                <div
                  className={style.sendButton}
                  onClick={handleOpenSendAgreeDialog}
                  style={
                    {
                      // background
                    }
                  }
                >
                  {modalKr.modalSendButton}
                </div>
              </div>
            </Box>
            {/*  */}
          </Box>
        </Box>
      </Modal>

      <Dialog
        open={closeNoticeDialogOpen}
        onClose={handleCloseNoticeDialog}
        onClick={(e) => e.preventDefault}
      >
        <section
          style={{
            // width: "296px",
            // height: "150px",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span className={style.dialogTopPara}>
              {modalKr.modalExitModalPara2}
            </span>
            <span className={style.dialogBotPara}>
              {modalKr.modalExitModalPara1}
            </span>
          </DialogTitle>
          <DialogActions>
            <div className={style.exitButton} onClick={handleCloseNoticeDialog}>
              {modalKr.modalExitModalYes}
            </div>
            <div
              className={style.stayButton}
              onClick={handleCloseNoticeYesOrNo}
            >
              {modalKr.modalExitModalNo}
            </div>
          </DialogActions>
        </section>
      </Dialog>

      {/*  */}

      <Dialog
        open={sendAgreeDialogOpen}
        onClose={handleCloseSendAgreeDialog}
        onClick={(e) => e.preventDefault}
      >
        <section
          style={{
            // width: "296px",
            // height: "150px",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DialogTitle
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span className={style.dialogTopPara}>
              {/* {modalKr.modalExitModalPara2} */}
              문의 내용을 전달하시겠습니까?
            </span>
            <span className={style.dialogBotPara}>
              {/* {modalKr.modalExitModalPara1} */}한 번 전달한 문의는 수정할 수
              없습니다.
            </span>
          </DialogTitle>
          <DialogActions>
            <div
              className={style.exitButton}
              onClick={handleCloseSendAgreeDialog}
            >
              {/* {modalKr.modalExitModalYes} */}
              아니오
            </div>
            <div className={style.stayButton} onClick={handleSendAgreeYes}>
              {/* {modalKr.modalExitModalNo} */}네
            </div>
          </DialogActions>
        </section>
      </Dialog>

      {/*  */}

      <Dialog
        open={agreeNoticeDialogOpen}
        onClose={handleCloseAgreeNoticeDialog}

        // sx={{ display: "flex" }}
      >
        <DialogTitle>{modalKr.modalDetailTitle}</DialogTitle>
        <DialogContent
        // dividers="scroll"
        >
          {modalKr.modalDetailContent}
        </DialogContent>
      </Dialog>

      <Dialog
        open={sendedNoticeDialogOpen}
        onClose={handleCloseSendedNoticeDialog}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // height: "225px",
            // width: "381px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          {/* <DialogTitle></DialogTitle> */}
          <DialogContent>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CheckCircleIcon
                style={{
                  color: "pink",
                  height: "56px",
                  width: "56px",
                  marginBottom: "16px",
                }}
              />
              <span className={style.sendASKPara}>
                {modalKr.modalSendPara1}
              </span>
              <br />
              <span className={style.sendASKPara}>
                {modalKr.modalSendPara2}
              </span>
              <br />
              <span className={style.sendASKSubPara}>
                {modalKr.modalSendPara3}
              </span>
            </span>
          </DialogContent>
        </section>
      </Dialog>
    </>
  );
}

// value 넣어줘야함, useState로 관리해야하나? 상태관리 라이브러리 써야하나?
