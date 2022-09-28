import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        {/* <link
          rel="stylesheet"
          as="style"
          crossOrigin
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css&display=swap"
        /> */}

        {/* <link
          rel="stylesheet"
          as="style"
          crossOrigin
          href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/static/pretendard.css&display=swap"
        /> */}

        <link
          rel="stylesheet"
          as="style"
          crossOrigin
          href="https://unpkg.com/pretendard@1.3.5/dist/web/static/pretendard-dynamic-subset.css&display=swap"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
