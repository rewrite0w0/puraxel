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

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Temp = () => {
  return (
    <span style={{ color: "blue" }}>
      ssssssssssssshe<span style={{ color: "pink" }}>yyyyyyyyyyyy</span>
    </span>
  );
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
      <Box
        className={commonButtonStyle.buttonContainer}
        onClick={handleOpenModal}
        {...props}
      >
        {/* ~icon~ */}
        {
          <Inquiry
            style={{
              height: "5rem",
              width: "2.5rem",
              marginRight: "0.725rem",
            }}
          />
        }
        {modalKr.modalButtonTitle}
      </Box>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={bgStyle} className={style.modalContainer}>
          <Box className={style.left}>
            {/* 1 */}
            <Box className={style.modal_left_title_container}>
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
                margin={"dense"}
              />
            </Box>
            {/* 3 */}
            <Box>
              <TextField
                label={modalKr.modalTel}
                required
                className={style.leftInputField}
                margin={"dense"}
              />
            </Box>
            {/* 4 */}
            <Box>
              <TextField
                label={modalKr.modalEmail}
                required
                className={style.leftInputField}
                margin={"dense"}
              />
            </Box>
            {/* 5 */}
            <Box>
              <TextField
                label={modalKr.modalCompanyName}
                className={style.leftInputField}
                margin={"dense"}
              />
            </Box>
            {/* 6 */}
            <Box>
              <span className={style.time__reciver__title}>
                {modalKr.modalAvailableTime}
              </span>
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
                          {time < 10 ? `0${time} 시` : time + " 시"}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
                <Box className={style.time_reciver_mid}>~</Box>
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
                            {time < 10 ? `0${time} 시` : time + " 시"}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              {/*  */}
              {/* 7 */}
              <Box className={style.agree_box_container}>
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
                <div className={style.rightPrivayCollectAgree}>
                  <span className={style.privacy__collect__agree}>
                    {modalKr.modalAgreeCheck}
                  </span>
                  &nbsp; &nbsp;
                  <span
                    onClick={handleOpenAgreeNoticeDialog}
                    className={`${style.rightPrivacyCollectAgree} ${style.right_privacy_cursor}`}
                  >
                    {modalKr.modalAgreeDetail}
                  </span>
                </div>
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
                  sx={{
                    color: "#7E818D",
                    textDecoration: "underline",
                    textDecorationColor: "#7E818D",
                    textUnderlineOffset: "0.5rem",
                    textDecorationThickness: "0.2rem",
                  }}
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
            <Box className={style.ask_title_container}>
              <TextField
                fullWidth={true}
                label={modalKr.modalAskTitle}
                required
              />
            </Box>
            {/* 3 */}
            {/* 문의 내용 */}
            <Box className={style.ask_details_container}>
              <TextField
                minRows={20}
                maxRows={20}
                fullWidth={true}
                multiline={true}
                label={modalKr.modalAskContent}
                // label={<Temp />}
                className={style.ask_details}
                required
                inputProps={{ maxLength: 300 }}
              />
            </Box>
            {/* 4 */}
            {/* 여러가지 안내 사항 */}
            <Box>
              <Box style={{ display: "flex" }}>
                <Typography className={style.information__para}>
                  {modalKr.modalExplainBar}
                  {modalKr.modalExplain1}
                </Typography>
              </Box>

              <Box style={{ display: "flex" }}>
                <Typography className={style.information__para}>
                  {modalKr.modalExplainBar}
                  {modalKr.modalExplain2A}
                  <span style={{ fontWeight: 700, color: "#b298ad" }}>
                    {modalKr.modalExplain2B}
                  </span>
                  {modalKr.modalExplain2C}
                </Typography>
              </Box>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", marginTop: "1.6rem" }}>
                  <span
                    className={style.shopButton}
                    onClick={() => {
                      window.open("https://lmdt.cafe24.com", "_blank");
                    }}
                  >
                    <ShopIC className={style.shopic} />
                    {modalKr.modalLinkToShoppingMall}
                  </span>
                  <span className={style.helpButton}>
                    <AskIcon className={style.askic} />
                    {modalKr.modalLinkToAsk}
                  </span>
                </div>
                {/* 전송 */}
                <div
                  className={style.sendButton}
                  onClick={handleOpenSendAgreeDialog}
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
        <section className={style.dialog__exit__contaier}>
          <DialogTitle className={style.dialog__exit__contaier}>
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
        <section className={style.dialog__exit__contaier}>
          <DialogTitle className={style.dialog__exit__contaier}>
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
        <section className={style.dialog__send__container}>
          {/* <DialogTitle></DialogTitle> */}
          <DialogContent>
            <div className={style.dialog__send__inner_container}>
              <CheckCircleIcon className={style.dialog__send__checked__ic} />
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
            </div>
          </DialogContent>
        </section>
      </Dialog>
    </>
  );
}

// value 넣어줘야함, useState로 관리해야하나? 상태관리 라이브러리 써야하나?
