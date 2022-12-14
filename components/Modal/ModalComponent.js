import { useState, useRef, useEffect } from "react";

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

// import commonButtonStyle from "components/Footer/CommonPlainButtons.module.css";

import { AskIcon, Bitkuri, Inquiry, ShopIC } from "components/Parts/Icons";
import emailjs from "@emailjs/browser";
import formData from "form-data";
import Mailgun from "mailgun.js";

// import { DOMAIN, USERAPI } from "lib/api";
// 개발버전
const mailgun = new Mailgun(formData);
const mailID = "dev@lameditech.com";
// const mailID = "sales@lameditech.com";
// console.log(process.env.USERAPI, process.env.DOMAIN);

// console.log(USERAPI, DOMAIN);

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

export default function ModalComponent(props) {
  //  모달
  const [modalOpen, setModalOpen] = useState(false);

  const form = useRef();
  // console.log(form);
  // console.log(form.current);

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

  // 현재 값

  const [customerName, setCustomerName] = useState(undefined);
  const [customerTel, setCustomerTel] = useState(undefined);
  const [customerMail, setCustomerMail] = useState(undefined);
  const [customerCompanyName, setCustomerCompanyName] = useState(undefined);
  const [customerTitle, setCustomerTitle] = useState(undefined);
  const [customerContent, setCustomerContent] = useState(undefined);
  const [customerPrivacyAggre, setCustomerPrivacyAggre] = useState(undefined);

  const mail = [
    customerName,
    customerTel,
    customerMail,
    customerTitle,
    customerContent,
    customerPrivacyAggre,
  ];

  const privacyCollectAggre = () => {
    return setCustomerPrivacyAggre(!customerPrivacyAggre);
  };

  const resetState = () => {
    setCustomerName(undefined);
    setCustomerTel(undefined);
    setCustomerMail(undefined);
    setCustomerCompanyName(undefined);
    setCustomerTitle(undefined);
    setCustomerContent(undefined);
    setStartAvailableTime(timeZone[0]);
    setEndAvailableTime(18);
    setCustomerPrivacyAggre(false);
  };

  const AlertNeedMoreCustomerData = () => {
    return (
      <div className={style.alert__need__more__custommer__data}>
        <Bitkuri />
        입력하지 않은 필수 정보가 있습니다.
      </div>
    );
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
    resetState();
  };

  const handleCloseNoticeYesOrNo = () => {
    setCloseNoticeDialogOpen(false);
  };

  const requireInputDataChecker = () => mail.filter((x) => x).length === 6;

  // console.log(mail);
  // console.log(requireInputDataChecker());

  // useEffect(() => {
  //   requireInputDataChecker();
  //   console.log(mail);
  //   return console.log(requireInputDataChecker());
  // });

  // 전송 확인 알림

  const [sendAgreeDialogOpen, setSendAgreeDialogOpen] = useState(false);

  const handleOpenSendAgreeDialog = (e) => {
    !requireInputDataChecker()
      ? e.preventDefault()
      : setSendAgreeDialogOpen(true);
  };

  const handleCloseSendAgreeDialog = () => {
    setSendAgreeDialogOpen(false);
  };

  const handleSendAgreeYes = () => {
    // const sendMail = () => {
    //   const mg = mailgun.client({
    //     username: process.env.USERAPI,
    //     key: process.env.USERAPI,
    //     domain: process.env.DOMAIN,
    //   });

    //   mg.messages
    //     .create(process.env.DOMAIN, {
    //       // from: `${customerName} <${customerMail}>`,
    //       from: "퓨라셀문의 <dev@lameditech.com>",
    //       to: [mailID],
    //       subject: customerTitle,
    //       // text: "Testing some Mailgun awesomness!",
    //       // html: "<h1>Testing some Mailgun awesomness!</h1>",
    //       text: `
    //       성명: ${customerName}
    //       연락처: ${customerTel}]
    //       메일: ${customerMail}
    //       상호명: ${customerCompanyName}
    //       연락가능시간: ${startAvailableTime} 시 부터 ${endAvailableTime} 시 사이
    //       문의제목: ${customerTitle}
    //       문의내용: ${customerContent}
    //       `,
    //     })
    //     .then((msg) =>
    //       // console.log(msg)
    //       console.log("nice")
    //     ) // logs response data
    //     .catch((err) =>
    //       // console.error(err)
    //       console.log("oh no....")
    //     ); // logs any error
    // };

    const sendMail = () => {
      emailjs.sendForm(
        "service_9qs0j5d",
        "template_n8l1fl9",
        form.current,
        "tbbTJ2BB3TAc4sJRz"
      );
    };

    sendMail();
    setModalOpen(false);
    setSendAgreeDialogOpen(false);
    handleOpenSendedNoticeDialog();
    resetState();
  };

  // 전송 완료 알림

  const [sendedNoticeDialogOpen, setSendedNoticeDialogOpen] = useState(false);

  const handleOpenSendedNoticeDialog = () => {
    setSendedNoticeDialogOpen(true);
  };
  const handleCloseSendedNoticeDialog = () => {
    setSendedNoticeDialogOpen(false);
  };

  // 미입력 알림

  const [requiredValueEmptyDialogOpen, setRequiredValueEmptyDialogOpen] =
    useState(false);

  const handleOpenRequiredValueEmptyDialog = () => {
    setRequiredValueEmptyDialogOpen(true);
  };

  const handleCloseRequiredValueEmptyDialog = () => {
    setRequiredValueEmptyDialogOpen(false);
  };

  return (
    <Box>
      <Box
        // className={commonButtonStyle.buttonContainer}
        onClick={handleOpenModal}
        className={props.class}
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

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        component="form"
        ref={form}
      >
        <Box sx={bgStyle} className={style.modalContainer}>
          <Box className={style.left}>
            {/* 1 */}
            <Box className={style.modal_left_title_container}>
              <span className={style.modalLeftTitle}>{modalKr.modalTitle}</span>
            </Box>
            {/* 2 */}
            <div className={style.modal__input__datas}>
              <Box>
                <TextField
                  label={modalKr.modalName}
                  required
                  className={style.leftInputField}
                  margin={"dense"}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                  }}
                  placeholder="고객님의 성명을 입력해주세요"
                  inputProps={{ maxLength: 10 }}
                  name="to_customerName"
                />
              </Box>
              {/* 3 */}
              <Box>
                <TextField
                  label={modalKr.modalTel}
                  required
                  className={style.leftInputField}
                  margin={"dense"}
                  name="to_customerTel"
                  placeholder="고객님의 연락처를 번호만 입력해주세요"
                  inputProps={{ maxLength: 13 }}
                  // onKeyDownCapture={(e) => {
                  //   isNaN(Number(e.key))
                  //     ? e.key !== "Backspace"
                  //       ? e.preventDefault()
                  //       : e.key
                  //     : e.key;
                  // }}
                  // onBlur={(e) => console.log(e)}
                  // onKeyDown={(e) => {
                  //   const numberChecker = (data) => {
                  //     console.log(data);
                  //     console.log(typeof data);
                  //     data.value.length > 8
                  //       ? data.substring(0, 8)
                  //       : data.replace(/[^0-9]/gim, "");
                  //   };

                  //   numberChecker(e.target.value);
                  // }}
                  // onChangeCapture={(e) => console.log(e)}

                  onChange={(e) => {
                    setCustomerTel(e.target.value);
                  }}
                />
              </Box>
              {/* 4 */}
              <Box>
                <TextField
                  label={modalKr.modalEmail}
                  required
                  className={style.leftInputField}
                  margin={"dense"}
                  onChange={(e) => {
                    setCustomerMail(e.target.value);
                  }}
                  inputProps={{ maxLength: 50 }}
                  name="to_customerMail"
                  placeholder="고객님의 메일을 입력해주세요"
                />
              </Box>
              {/* 5 */}
              <Box>
                <TextField
                  label={modalKr.modalCompanyName}
                  className={style.leftInputField}
                  margin={"dense"}
                  inputProps={{ maxLength: 50 }}
                  onChange={(e) => {
                    setCustomerCompanyName(e.target.value);
                  }}
                  name="to_customerCompanyName"
                  placeholder="고객님의 사명을 입력해주세요"
                />
              </Box>
              {/* 6 */}

              <Box>
                <div className={style.time__reciver__container}>
                  <div className={style.time__reciver__title}>
                    {modalKr.modalAvailableTime}
                  </div>
                  {/* timer */}
                  <Box className={style.timeReciverContainer}>
                    <Box>
                      <FormControl>
                        <Select
                          value={startAvailableTime}
                          onChange={handleStartTimeChange}
                          name="to_startAvailableTime"
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
                          name="to_endAvailableTime"
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
                      onClick={privacyCollectAggre}
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
                </div>
              </Box>
            </div>
            {/*  */}
          </Box>

          {/* 그리드 우측 */}
          {/* <Box className={style.center}></Box> */}
          <Box className={style.right}>
            {/* 1 */}
            {/* 언어 버튼 선택 */}
            <div className={style.right__top__container}>
              <ButtonGroup style={{ display: "flex" }}>
                {/* <Button
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
                </Button> */}
                {/* <Button
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
                </Button> */}
              </ButtonGroup>

              <div
                className={style.right__exit__button}
                onClick={handleCloseModal}
              />
            </div>
            {/* 2 */}
            {/* 문의 제목 */}
            <Box className={style.ask_title_container}>
              <TextField
                fullWidth={true}
                label={modalKr.modalAskTitle}
                required
                onChange={(e) => setCustomerTitle(e.target.value)}
                name="to_customerTitle"
                inputProps={{ maxLength: 50 }}
                placeholder="문의 제목을 입력해주세요"
              />
            </Box>
            {/* 3 */}
            {/* 문의 내용 */}
            <Box className={style.ask_details_container}>
              <TextField
                minRows={16}
                maxRows={16}
                fullWidth={true}
                multiline={true}
                label={modalKr.modalAskContent}
                // label={<Temp />}
                className={style.ask_details}
                required
                inputProps={{ maxLength: 2000 }}
                onChange={(e) => setCustomerContent(e.target.value)}
                name="to_customerContent"
                placeholder="문의 내용을 입력해주세요"
              />
            </Box>
            {/* 4 */}
            {/* 여러가지 안내 사항 */}
            <Box className={style.information__container}>
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
                  {/* <span className={style.helpButton}>
                    <AskIcon className={style.askic} />
                    {modalKr.modalLinkToAsk}
                  </span> */}
                </div>
                {/* 문의 신청 */}
                <section className={style.send__button__container}>
                  {!requireInputDataChecker() === true ? (
                    <AlertNeedMoreCustomerData />
                  ) : undefined}
                  <div
                    className={style.sendButton}
                    onClick={handleOpenSendAgreeDialog}
                    style={{
                      background: !requireInputDataChecker()
                        ? "#D9DEE5"
                        : "#55576F",
                    }}
                  >
                    {modalKr.modalSendButton}
                  </div>
                </section>
                {/*  */}
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
            <div
              className={style.stayButton}
              onClick={handleSendAgreeYes}
              type="submit"
            >
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
        <DialogTitle sx={{ fontSize: "50px" }}>
          {modalKr.modalDetailTitle}
        </DialogTitle>
        <DialogContent
          sx={{ fontSize: "25px" }}
          // dividers="scroll"
        >
          {/* {modalKr.modalDetailContent} */}
          <p>당사는 아래와 같이 개인정보를 수집·이용하고자 합니다.</p>
          <p>
            내용을 자세히 읽으신 후 동의 여부를 결정하여 주십시오. 본 방침은
            2022년 1월 1일부터 시행됩니다.
          </p>
          <p> - 수집 항목 : 이름, 전화번호, 상호명, 이메일</p>
          <p> - 수집 목적 : 고객의 제품문의 사항 대응</p>
          <p>- 보유 기간 : 1년</p>
          <p>
            * 위의 개인정보 수집·이용에 대한 동의를 거부할 권리가 있습니다.
            그러나 동의를 거부할 경우 문의 사항에 대해 원활한 고객 대응에 제한을
            받을 수 있습니다.
          </p>
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

      {/* <Dialog
        open={requiredValueEmptyDialogOpen}
        onClose={handleCloseRequiredValueEmptyDialog}
      >
        <section className={style.dialog__require__value__dialog}>
          <DialogContent>
            <div
              className={style.dialog__require__value__inner__container}
            >



            </div>
          </DialogContent>
        </section>
      </Dialog> */}
    </Box>
  );
}

// value 넣어줘야함, useState로 관리해야하나? 상태관리 라이브러리 써야하나?
