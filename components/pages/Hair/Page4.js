import { Modal } from "@mui/material";
import { useState } from "react";
import _ from "./page4.module.css";

const YoutubeThumnail = () => {
  return (
    <iframe
      className={_.youtube__thumnail}
      width="100%"
      height="100%"
      src={`https://www.youtube-nocookie.com/embed/sNwV5GaGODY?controls=1&rel=0&disablekb=1&autoplay=0&loop=0&mute=0&modestbranding=1`}
      title="How to use PURAXEL"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default function Page4() {
  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false);

  const handleYoutubeModalOpen = () => {
    return setYoutubeModalOpen(true);
  };

  const handleYoutubeModalClose = () => {
    return setYoutubeModalOpen(false);
  };

  const YoutubeModal = () => {
    return (
      <Modal
        onClickCapture={(e) => console.log(e)}
        onClose={handleYoutubeModalClose}
        open={youtubeModalOpen}
      >
        <iframe
          className={_.youtube__modal}
          width="70%"
          height="70%"
          src={`https://www.youtube-nocookie.com/embed/sNwV5GaGODY?controls=1&rel=0&disablekb=1&autoplay=1&loop=1&playlist=X6oDTHJnxq4&mute=0&modestbranding=1`}
          title="How to use PURAXEL"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
    );
  };

  return (
    <article className={_.container}>
      <section className={_.title__container}>
        <article>
          <div className={_.sub_title}>
            PURAXEL Hair와 함께 하는 탈모 클리닉
          </div>

          <div className={_.main_title}>
            PURAXEL Hair가
            <br /> 자신 있는 일상을 찾아 드립니다.
          </div>
        </article>
      </section>

      <section
        className={_.movie__container}
        onClick={
          youtubeModalOpen ? handleYoutubeModalClose : handleYoutubeModalOpen
        }
      >
        <YoutubeThumnail />
        <YoutubeModal />
      </section>
    </article>
  );
}
