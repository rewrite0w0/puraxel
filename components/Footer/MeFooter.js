import { Box } from '@mui/material';
import MeFooterRight from './MeFooterRight';
import MeFooterLeft from './MeFooterLeft';
import style from './MeFooterLayout.module.css';

export default function MeFooter() {
  return (
    <Box sx={{ display: 'grid' }} className={style.footer}>
      <MeFooterLeft />
      <MeFooterRight />
    </Box>
  );
}
