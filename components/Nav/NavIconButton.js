import { Box, Button } from '@mui/material';
import style from './Nav.module.css';

export default function NavIconButton(props) {
  return (
    <Button style={{ ...props.sx }} className={style.buttonStyle} {...props}>
      {props.title ? props.title : ''}
    </Button>
  );
}
