import "../styles/globals.css";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  const getLayOut = Component.getLayOut || ((page) => page);

  return getLayOut(<Component {...pageProps} />);
}

export default MyApp;
