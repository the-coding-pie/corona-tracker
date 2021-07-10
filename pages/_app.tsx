import "../styles/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Navbar";
import type { AppProps } from "next/app";
import LeftNavbar from "../components/LeftNavbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Corona Tracker</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <div className="body flex">
        <LeftNavbar />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
export default MyApp;
