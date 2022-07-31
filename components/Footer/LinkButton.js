import { Button } from '@mui/material';
import style from './LinkButton.module.css';
import StoreIcon from '@mui/icons-material/Store';

export default function LinkButton(props) {
  return (
    <>
      <Button
        variant="text"
        className={style.btn}
        startIcon={<StoreIcon />}
        onClick={() => {
          window.open(props.link ? props.link : '/', '_blank');
        }}
      >
        {props.buttonName}
      </Button>
    </>
  );
}
