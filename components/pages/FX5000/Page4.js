import _ from "./page4.module.css";

export default function Page4() {
  return (
    <article className={_.container}>
      <section className={_.title__container}>
        <article>
          <div className={_.sub_title}>
            이제 병원에서만 가능하던 프락셔널 레이저 시술을 에스테틱샵에서도
            제공하실 수 있습니다.
          </div>

          <div className={_.main_title}>
            바로 일상생활이 가능한 소형 프락셔널 레이저, 직접 경험해보세요.
          </div>
        </article>
      </section>

      <section className={_.movie__container}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/X6oDTHJnxq4?controls=1&rel=0&disablekb=1&autoplay=1&loop=0&mute=0&modestbranding=1`}
          title="How to use PURAXEL"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </article>
  );
}
