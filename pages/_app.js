import Footer from '../components/footer';
import '../styles/globals.css';
import '../utils/i18n';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
