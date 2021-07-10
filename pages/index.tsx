import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import DefaultLayout from "../components/layouts/DefaultLayout";
import LeftNavbar from "../components/LeftNavbar";
import { BASE_URL } from "../extras/constants";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <DefaultLayout />
    </>
  );
};

export default Home;
