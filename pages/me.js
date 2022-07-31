import Swipers from 'components/Swipers';
import { SwiperSlide } from 'swiper/react';
import MeLayout from 'components/layout/MeLayout';
import Page1 from 'components/pages/Me/Page1';
import Page2 from 'components/pages/Me/Page2';
import Page3 from 'components/pages/Me/Page3';
import Page4 from 'components/pages/Me/Page4';
import CircleFloating from 'components/Parts/CircleFloating';
import { useState } from 'react';

export default function Me() {
  return (
    <MeLayout>
      <Swipers>
        {/* <SwiperSlide>
          <Page4 />
        </SwiperSlide> */}
        <SwiperSlide>
          <Page1 />
        </SwiperSlide>
        <SwiperSlide>
          {/* {window.screen.width > 1000 ? <Page2 /> : <Page3 />} */}
          <Page2 />
        </SwiperSlide>
      </Swipers>
    </MeLayout>
  );
}
