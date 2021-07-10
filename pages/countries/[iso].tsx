import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import DefaultLayout from "../../components/layouts/DefaultLayout";

const CountryPage = ({ iso }: any) => {
  return (
    <div>
      <Head>
        <title>{iso}</title>
      </Head>

      <DefaultLayout>{"helo"}</DefaultLayout>
    </div>
  );
};

export default CountryPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const iso = query.iso;

  return {
    props: {
      iso,
    },
  };
};
