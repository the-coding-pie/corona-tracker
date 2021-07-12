import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <div className=" flex items-center justify-center w-screen h-screen">
        <p className="bg-gray rounded text-center max-w-4xl p-4 transform -translate-y-28">
          Hey there, Thank you for visiting my side project ❤️. <br /> If you
          are eager to know more about this project, then you can visit my
          beautiful <a href="https://github.com/the-coding-pie/corona-tracker" target="_blank" rel="noreferrer" className="text-green">Github Repo.</a>
        </p>
      </div>
    </>
  );
};

export default About;
