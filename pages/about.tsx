import Head from "next/head";
import DefaultLayout from "../components/layouts/DefaultLayout";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <DefaultLayout>
        About Me
      </DefaultLayout>
    </>
  );
};

export default About;
