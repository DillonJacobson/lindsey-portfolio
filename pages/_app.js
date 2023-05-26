import Header from '../src/components/Header/Header';
import '../src/styles/core.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div id="page">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
