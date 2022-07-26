// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export default function dashboard() {
  // const _ = new Swiper(".swiper", {
  //   pagenation: {
  //     el: { childNodes: "mmmmmmmmm" },
  //   },
  // });

  // console.log(_);
  return (
    <>
      {/* <h1>Hello dashboard</h1> */}
      {/* <CircleFloating /> */}
      {/* <h1>ddddd</h1> */}
      <Swiper
        pagination={{
          // type: "fraction",
          type: "custom",
          renderCustom: function (swiper, current, total) {
            return current + "ㅡ" + total;
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        // className={mySwiper.hey}
        style={{ height: "80vh" }}
        onClick={
          // (e) => (e.pagination.el.childNodes.item[1] = "0000000000000")
          // (e) => console.log((e.pagination.el.childNodes[1] = 1))
          (e) => console.log(e.pagination.el.childNodes[1])
        }
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
