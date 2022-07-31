import { Box } from '@mui/material';
import style from './LinkPriceButton.module.css';

export default function LinkPriceButton(props) {
  return (
    <>
      <Box
        className={style.priceButton}
        sx={{
          display: 'flex',
          gridTemplateColumns: 'repeat(2, 1fr)',
          ...props.sx,
        }}
        href={props.link ? props.link : '/'}
        onClick={() => {
          window.open(props.link ? props.link : '/', '_blank');
        }}
      >
        <div className={style.priceButton1}>{props.title}</div>

        <div className={style.priceButton2}>
          <span style={{ color: 'gray' }}>
            {props.originalPrice ? props.originalPrice : ' '} &nbsp;
            {props.arrow ? props.arrow : false}
          </span>
          &nbsp;
          <span style={{ color: 'red' }}>{props.price}</span>
        </div>

        <div
          className={style.priceButton3}
          style={{ marginLeft: '1vw', color: 'red' }}
        >
          {props.offRate ? props.offRate : ''}
        </div>

        <div className={style.priceButton4}>
          <span style={{ color: 'gray' }}>{props.installment}</span>
          &nbsp;
          <span>{props.installmentPrice}</span>
        </div>
      </Box>
    </>
  );
}
