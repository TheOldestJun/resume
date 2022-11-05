import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header.component";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Curriculum vitae</title>
        <meta name='description' content='Resume of Stanislav Pukha' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
