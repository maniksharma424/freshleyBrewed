import Head from "next/head";
import SideNavbar from "./components/SideNavbar";
import Courses from "./components/Courses";
import News from "./components/News";
import Progress from "./components/Progress";
import { GiHamburgerMenu } from "react-icons/gi";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>

      </Head>
      <main className="flex w-full h-screen font-monstreat">
        <SideNavbar />

        <div
          id="container"
          className="w-full h-screen lg:p-8 sm:p-5 p-3 overflow-scroll lg:pr-36 sm:pr-10 pr-4"
        >
          <button className="w-full flex justify-end lg:hidden sm:hidden absolute  top-5 right-6 text-[20px]">
            <GiHamburgerMenu />
          </button>

          <Courses />
          <News />
          <Progress />
        </div>
      </main>
    </>
  );
};
export default Home;
