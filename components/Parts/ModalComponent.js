import { useState } from 'react';
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
} from '@mui/material';
import style from './ModalComponent.module.css';
import modalKr from 'public/locales/kr/modal';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

const bgStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
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

  //

  const [popOverAnchor, setPopOverAnchor] = useState(undefined);
  const [popOverOpen, setPopOverOpen] = useState(false);

  const handleOpenPopOver = (evt) => {
    setPopOverAnchor(evt.currentTarget);
    setPopOverOpen(true);
  };

  const handleClosePopOver = () => {
    setPopOverAnchor(undefined);
    setPopOverOpen(false);
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
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Checkbox
                  icon={<CheckCircleOutlineIcon />}
                  checkedIcon={<CheckCircleIcon />}
                  sx={{
                    '& .MuiSvgIcon-root': { fontSize: '2.8rem' },
                    color: 'pink',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                  }}
                />
                <Typography>{modalKr.modalAgreeCheck}</Typography>
                <Typography
                  onClick={() =>
                    window.open('/agreeDetailInfomation', '_blank')
                  }
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
              <ButtonGroup style={{ display: 'flex' }}>
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

            <Box></Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
