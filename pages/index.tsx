import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cabinet 🗄</title>
      </Head>

      <main className="absolute inset-0 p-4 text-center bg-neutral-50 flex flex-col items-center justify-center">
        <h1 className="text-7xl md:text-8xl font-semibold">Hey there!</h1>
        <h2 className="text-3xl md:text-4xl mt-6">More coming soon 🚧👷🏻‍♂️</h2>
      </main>
    </>
  );
};

export default Home;
